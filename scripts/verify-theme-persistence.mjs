import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const require = createRequire(import.meta.url);
function loadTsx(file, aliases = {}) {
  const module = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  new Function("require", "module", "exports", output)(name => name.endsWith(".css") ? {} : aliases[name] ?? require(name), module, module.exports);
  return module.exports;
}

const controls = loadTsx("components/theme-controls.tsx");
const shell = loadTsx("components/site-shell.tsx", { "@/components/theme-controls": controls });
const { default: Layout } = loadTsx("app/layout.tsx", { "@/components/site-shell": shell, "@/components/theme-controls": controls });
const routes = ["/", "/about", "/projects", "/resume", "/projects/medora-healthcare", "/projects/fyp-intelligence-portal"];
const storage = new Map();

for (const preference of [undefined, "light", "dark"]) {
  if (preference) storage.set("portfolio-theme", preference);
  else storage.delete("portfolio-theme");
  for (const route of routes) {
    const html = renderToStaticMarkup(createElement(Layout, { children: createElement("main", null, route) }));
    const script = html.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1];
    assert.ok(script, "Every route needs the theme bootstrap before its content");
    assert.ok(html.indexOf("<script") < html.indexOf('class="site-frame"'));
    const attributes = new Map([["data-theme", "dark"]]);
    const element = { setAttribute: (key, value) => attributes.set(key, value), style: {} };
    vm.runInNewContext(script, {
      document: { documentElement: element },
      localStorage: { getItem: key => storage.get(key) ?? null },
      window: { matchMedia: () => { throw new Error("An explicit preference must not depend on the system theme"); } },
    });
    assert.equal(attributes.get("data-theme"), preference ?? "dark", route);
    assert.equal(element.style.colorScheme, preference ?? "dark", route);
    assert.ok(html.includes('type="button"') && html.includes('class="icon-button theme-toggle"'));
  }
}
assert.ok(!fs.readFileSync("app/globals.css", "utf8").includes(".theme-toggle input:checked"));
console.log("Theme persistence passed: default dark, saved light and saved dark restore on all six fresh page documents before content renders.");
