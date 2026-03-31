import React from 'react'
import type { Assignee } from '../../data/mockData'

interface AvatarProps {
  assignee: Assignee
  size?: 'sm' | 'md'
}

export function Avatar({ assignee, size = 'sm' }: AvatarProps) {
  const sz = size === 'sm' ? 'w-6 h-6 text-[10px]' : 'w-8 h-8 text-xs'
  return (
    <div
      className={`${sz} rounded-full flex items-center justify-center text-white font-medium ring-2 ring-white flex-shrink-0`}
      style={{ backgroundColor: assignee.color }}
      title={assignee.name}
    >
      {assignee.initials}
    </div>
  )
}

interface AvatarStackProps {
  assignees: Assignee[]
  max?: number
  size?: 'sm' | 'md'
}

export function AvatarStack({ assignees, max = 4, size = 'sm' }: AvatarStackProps) {
  const visible = assignees.slice(0, max)
  const extra = assignees.length - max

  return (
    <div className="flex items-center -space-x-1.5">
      {visible.map((a) => (
        <Avatar key={a.id} assignee={a} size={size} />
      ))}
      {extra > 0 && (
        <div
          className={`${size === 'sm' ? 'w-6 h-6 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium ring-2 ring-white`}
        >
          +{extra}
        </div>
      )}
    </div>
  )
}
