import React from 'react'
import type { Assignee } from '../../data/mockData'

interface AvatarProps {
  assignee: Assignee
  size?: 'sm' | 'md'
}

export function Avatar({ assignee, size = 'sm' }: AvatarProps) {
  const sz = size === 'sm' ? 'w-5 h-5 text-[8.75px]' : 'w-7 h-7 text-[10px]'
  return (
    <div
      className={`${sz} rounded-full flex items-center justify-center text-white font-medium border-[0.75px] border-white flex-shrink-0`}
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
  const overlapClass = size === 'sm' ? '-mr-[7.5px]' : '-mr-[9px]'
  const szOverflow = size === 'sm' ? 'w-5 h-5 text-[8.75px]' : 'w-7 h-7 text-[10px]'

  return (
    <div className="flex items-center">
      {visible.map((a) => (
        <div key={a.id} className={`${overlapClass} last:mr-0`}>
          <Avatar assignee={a} size={size} />
        </div>
      ))}
      {extra > 0 && (
        <div
          className={`${szOverflow} rounded-full bg-[#46474a] text-white flex items-center justify-center font-medium border-[0.75px] border-white`}
        >
          +{extra}
        </div>
      )}
    </div>
  )
}
