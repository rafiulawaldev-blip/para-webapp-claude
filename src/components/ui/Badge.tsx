import React from 'react'
import type { Priority, TaskStatus } from '../../data/mockData'

interface StatusBadgeProps {
  status: TaskStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<TaskStatus, string> = {
    'In Progress': 'bg-gray-100 text-gray-600',
    'To-Do':       'bg-green-50 text-green-600 border border-green-200',
    'Complete':    'bg-blue-50 text-blue-600 border border-blue-200',
    'Review':      'bg-yellow-50 text-yellow-600 border border-yellow-200',
    'Not Started': 'bg-red-50 text-red-500 border border-red-200',
  }
  const dots: Record<TaskStatus, string> = {
    'In Progress': 'bg-gray-400',
    'To-Do':       'bg-green-500',
    'Complete':    'bg-blue-500',
    'Review':      'bg-yellow-500',
    'Not Started': 'bg-red-400',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status]}`} />
      {status}
    </span>
  )
}

interface PriorityBadgeProps {
  priority: Priority | 'Complete'
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const map: Record<string, { cls: string; label: string }> = {
    Urgent:   { cls: 'bg-red-50 text-red-600 border border-red-200',    label: 'Urgent 🔥🔥' },
    High:     { cls: 'bg-orange-50 text-orange-600 border border-orange-200', label: 'High 🔥' },
    Medium:   { cls: 'bg-orange-50 text-orange-500 border border-orange-200', label: 'Medium' },
    Low:      { cls: 'bg-green-50 text-green-600 border border-green-200',   label: 'Low' },
    Complete: { cls: 'bg-blue-50 text-blue-600 border border-blue-200',      label: '● Complete' },
  }
  const { cls, label } = map[priority] ?? map['Medium']
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}`}>
      {label}
    </span>
  )
}

interface WorkloadBadgeProps {
  workload: 'Over load' | 'High' | 'Medium' | 'Normal'
}

export function WorkloadBadge({ workload }: WorkloadBadgeProps) {
  const map: Record<string, string> = {
    'Over load': 'bg-orange-100 text-orange-700',
    'High':      'bg-red-100 text-red-700',
    'Medium':    'bg-yellow-100 text-yellow-700',
    'Normal':    'bg-green-100 text-green-700',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${map[workload]}`}>
      {workload}
    </span>
  )
}
