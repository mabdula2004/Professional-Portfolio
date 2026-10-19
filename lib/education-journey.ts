export const journeyStops = [
  { x: 80, y: 166 }, { x: 360, y: 64 }, { x: 640, y: 174 }, { x: 920, y: 70 },
];

const controls = [
  [{ x: 175, y: 166 }, { x: 255, y: 64 }],
  [{ x: 460, y: 64 }, { x: 535, y: 174 }],
  [{ x: 740, y: 174 }, { x: 825, y: 70 }],
];

export const journeyPaths = controls.map(([a, b], index) => {
  const start = journeyStops[index];
  const end = journeyStops[index + 1];
  return `M ${start.x} ${start.y} C ${a.x} ${a.y}, ${b.x} ${b.y}, ${end.x} ${end.y}`;
});

export const journeyDuration = 3.6;

export function journeyFrame(progress: number) {
  const time = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0)) * journeyDuration;
  const active = Math.min(3, Math.floor(time + 1e-8));
  // Pause at each qualification before travelling; hold the final destination too.
  const travel = active === 3 ? 0 : Math.max(0, Math.min(1, (time - active - .28) / .72));
  if (active === 3) return { active, travel, point: journeyStops[3] };
  const start = journeyStops[active];
  const end = journeyStops[active + 1];
  const [a, b] = controls[active];
  const u = 1 - travel;
  const coordinate = (key: "x" | "y") => u ** 3 * start[key] + 3 * u ** 2 * travel * a[key] + 3 * u * travel ** 2 * b[key] + travel ** 3 * end[key];
  return { active, travel, point: { x: coordinate("x"), y: coordinate("y") } };
}
