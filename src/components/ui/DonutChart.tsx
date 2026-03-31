import React from 'react'

interface Segment {
  value: number
  color: string
  label: string
}

interface DonutChartProps {
  segments: Segment[]
  centerLabel: string
  centerSub?: string
  size?: number
  thickness?: number
}

export function DonutChart({
  segments,
  centerLabel,
  centerSub,
  size = 120,
  thickness = 12,
}: DonutChartProps) {
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  const r = (size - thickness) / 2
  const cx = size / 2
  const cy = size / 2
  const circumference = 2 * Math.PI * r

  let offset = 0
  const arcs = segments.map((seg) => {
    const pct = total === 0 ? 0 : seg.value / total
    const dash = pct * circumference
    const arc = { ...seg, dash, offset }
    offset += dash
    return arc
  })

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={thickness}
        />
        {arcs.map((arc, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={arc.color}
            strokeWidth={thickness}
            strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
            strokeDashoffset={-arc.offset}
            strokeLinecap="round"
          />
        ))}
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold text-gray-800 leading-tight">{centerLabel}</span>
        {centerSub && <span className="text-[10px] text-gray-500 mt-0.5 text-center">{centerSub}</span>}
      </div>
    </div>
  )
}

interface SimpleDonutProps {
  value: number
  total: number
  color: string
  label: string
  size?: number
}

export function SimpleDonut({ value, total, color, label, size = 120 }: SimpleDonutProps) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100)
  return (
    <DonutChart
      size={size}
      thickness={10}
      segments={[
        { value, color, label },
        { value: total - value, color: '#e5e7eb', label: '' },
      ]}
      centerLabel={String(value)}
      centerSub={label}
    />
  )
}
