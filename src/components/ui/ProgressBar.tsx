import React from 'react'

interface ProgressBarProps {
  value: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function ProgressBar({ value, showLabel = true, size = 'md' }: ProgressBarProps) {
  const heights: Record<string, string> = {
    sm: 'h-[4px]',
    md: 'h-[6px]',
    lg: 'h-[8px]',
  }
  const h = heights[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`flex-1 bg-[#eeeff1] rounded-[2px] ${h} min-w-[60px]`}>
        <div
          className={`bg-[#2783de] ${h} rounded-[2px] transition-all`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[12px] leading-4 text-[#46474a] font-normal flex-shrink-0">
          {value}%
        </span>
      )}
    </div>
  )
}
