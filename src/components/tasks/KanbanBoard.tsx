import React from 'react'
import { CalendarDays, MoreVertical, Link2 } from 'lucide-react'
import type { Task } from '../../data/mockData'
import { PriorityBadge } from '../ui/Badge'
import { AvatarStack } from '../ui/AvatarStack'

interface KanbanBoardProps {
  tasks: Task[]
  onSelectTask: (task: Task) => void
}

const COLUMNS: { id: string; label: string; color: string; dot: string }[] = [
  { id: 'To-Do',       label: 'To-Do',       color: 'text-green-600 bg-green-50',  dot: 'bg-green-500' },
  { id: 'In Progress', label: 'In Progress', color: 'text-gray-600 bg-gray-100',   dot: 'bg-gray-400' },
  { id: 'Review',      label: 'Review',      color: 'text-yellow-600 bg-yellow-50', dot: 'bg-yellow-500' },
  { id: 'Complete',    label: 'Complete',    color: 'text-blue-600 bg-blue-50',    dot: 'bg-blue-500' },
  { id: 'Not Started', label: 'Not Started', color: 'text-red-500 bg-red-50',      dot: 'bg-red-400' },
]

export function KanbanBoard({ tasks, onSelectTask }: KanbanBoardProps) {
  const byStatus = (status: string) => tasks.filter((t) => t.status === status)

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
      {COLUMNS.map((col) => {
        const colTasks = byStatus(col.id)
        return (
          <div key={col.id} className="flex-shrink-0 w-72">
            {/* Column header */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${col.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                {col.label}
              </span>
              <span className="text-xs text-gray-400 font-medium">({colTasks.length})</span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {colTasks.map((task) => (
                <KanbanCard key={task.id} task={task} onClick={() => onSelectTask(task)} />
              ))}
              {colTasks.length === 0 && (
                <div className="border-2 border-dashed border-gray-100 rounded-xl p-6 text-center">
                  <p className="text-xs text-gray-400">No tasks</p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function KanbanCard({ task, onClick }: { task: Task; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-100 rounded-xl p-3.5 cursor-pointer hover:shadow-sm hover:border-gray-200 transition-all"
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <Link2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-relaxed">{task.name}</p>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="text-gray-300 hover:text-gray-500 flex-shrink-0 ml-1"
        >
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      <PriorityBadge priority={task.priority} />

      <p className="text-[10px] text-gray-400 mt-2 mb-3">
        Project/Sub-Project: {task.project}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <CalendarDays className="w-3 h-3" />
          <span>{task.dueDate}</span>
        </div>
        <AvatarStack assignees={task.assignees} max={3} size="sm" />
      </div>
    </div>
  )
}
