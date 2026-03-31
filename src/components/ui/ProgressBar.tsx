import React from 'react'

interface ProgressBarProps {
  value: number
  showLabel?: boolean
}

export function ProgressBar({ value, showLabel = true }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2 min-w-[100px]">
      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-gray-500 w-7 text-right">{value}%</span>
      )}
    </div>
  )
}
