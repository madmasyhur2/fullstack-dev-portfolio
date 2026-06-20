/*
 * Hero signature — the one animated moment on the page.
 *
 * Not a random scatter: this is a literal left→right agent pipeline that
 * mirrors the featured project — ingest → parallel Flash classifiers →
 * aggregate → Pro decision (with a human-in-the-loop branch) → output.
 * Edges are dashed paths whose stroke-dashoffset animates to read as data
 * flowing through the graph; nodes pulse slowly. Pure CSS animation, ambient
 * opacity, hidden on mobile, frozen under prefers-reduced-motion (globals.css).
 */

type Node = {
  id: string
  x: number
  y: number
  /** decision/output hubs render slightly larger + emerald */
  hub?: boolean
}

const NODES: Node[] = [
  { id: 'ingest', x: 110, y: 280 },
  { id: 'flash-a', x: 360, y: 130 },
  { id: 'flash-b', x: 360, y: 280 },
  { id: 'flash-c', x: 360, y: 430 },
  { id: 'aggregate', x: 600, y: 280 },
  { id: 'decision', x: 770, y: 190, hub: true },
  { id: 'human', x: 770, y: 390 },
  { id: 'output', x: 940, y: 280, hub: true },
]

const EDGES: Array<[string, string]> = [
  ['ingest', 'flash-a'],
  ['ingest', 'flash-b'],
  ['ingest', 'flash-c'],
  ['flash-a', 'aggregate'],
  ['flash-b', 'aggregate'],
  ['flash-c', 'aggregate'],
  ['aggregate', 'decision'],
  ['aggregate', 'human'],
  ['decision', 'output'],
  ['human', 'output'],
]

const byId = (id: string) => NODES.find((n) => n.id === id)!

/** Smooth horizontal-biased bezier so edges read as flow lines, not wires. */
function edgePath(a: Node, b: Node) {
  const dx = (b.x - a.x) * 0.45
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`
}

export default function NodeGraph() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden select-none md:block"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1050 560"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* whole graph kept at ambient opacity (spec: 0.12–0.15) */}
        <g className="opacity-[0.14]" stroke="#6366F1">
          {EDGES.map(([from, to], i) => (
            <path
              key={`${from}-${to}`}
              d={edgePath(byId(from), byId(to))}
              strokeWidth={1.5}
              strokeDasharray="6 6"
              className="animate-edge-flow"
              style={{ animationDelay: `${(i % 4) * -0.8}s` }}
            />
          ))}

          {NODES.map((n, i) => (
            <g key={n.id}>
              {/* static halo ring */}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.hub ? 16 : 12}
                strokeWidth={1}
                opacity={0.5}
              />
              {/* pulsing core */}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.hub ? 6 : 4.5}
                fill={n.hub ? '#10B981' : '#6366F1'}
                stroke="none"
                className="animate-node-pulse"
                style={{ animationDelay: `${i * -0.45}s` }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
