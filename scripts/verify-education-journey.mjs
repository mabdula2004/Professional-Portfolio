import assert from "node:assert/strict";
import { journeyDuration, journeyFrame, journeyStops } from "../lib/education-journey.ts";

// Each arrival must land precisely on its destination and reveal that stage.
for (let index = 0; index < 4; index++) {
  const frame = journeyFrame(index / journeyDuration);
  assert.equal(frame.active, index);
  assert.deepEqual(frame.point, journeyStops[index]);
}
assert.deepEqual(journeyFrame(-1).point, journeyStops[0]);
assert.deepEqual(journeyFrame(2).point, journeyStops[3]);
assert.deepEqual(journeyFrame(Number.NaN).point, journeyStops[0]);
assert.deepEqual(journeyFrame(.07).point, journeyStops[0], "Initial details need a reading pause");
assert.equal(journeyFrame(.95).active, 3, "Final details must appear before the sticky section ends");

let previousX = 0;
for (let step = 0; step <= 1000; step++) {
  const frame = journeyFrame(step / 1000);
  assert.ok(frame.point.x >= previousX, "The traveller must never jump backwards during forward scrolling");
  assert.ok(frame.point.y >= 64 && frame.point.y <= 174, "The traveller must stay on the visible path");
  previousX = frame.point.x;
}

// A destination cannot reveal its information while its preceding icon is travelling.
for (let index = 0; index < 3; index++) {
  const before = journeyFrame((index + .99) / journeyDuration);
  const after = journeyFrame((index + 1.01) / journeyDuration);
  assert.equal(before.active, index);
  assert.equal(after.active, index + 1);
  assert.ok(Math.hypot(before.point.x - after.point.x, before.point.y - after.point.y) < 5, "Arrival should be continuous");
}
assert.equal(journeyFrame(2 / journeyDuration).active, 2);
assert.equal(journeyFrame(1 / journeyDuration).active, 1, "Reverse scrolling must restore the preceding stage");
console.log("Education journey: all arrivals, pauses, path bounds, continuity and reverse-scroll states passed.");
