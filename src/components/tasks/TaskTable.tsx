import React, { useState } from 'react'
import { ChevronDown, ChevronRight, ArrowUpDown, MoreVertical, CheckSquare } from 'lucide-react'
import type { Task, SubTask } from '../../data/mockData'
import { StatusBadge, PriorityBadge } from '../ui/Badge'
import { AvatarStack } from '../ui/AvatarStack'
import { ProgressBar } from '../ui/ProgressBar'

interface TaskTableProps {
  tasks: Task[]
  onSelectTask: (task: Task) => void
  onSelectSubTask?: (sub: SubTask, parent: Task) => void
  selectedTaskId?: string
  selectedSubTaskId?: string
  showSubTasks?: boolean
}

export function TaskTable({
  tasks,
  onSelectTask,
  onSelectSubTask,
  selectedTaskId,
  selectedSubTaskId,
  showSubTasks = false,
}: TaskTableProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [contextMenu, setContextMenu] = useState<{ taskId: string; subTaskId: string } | null>(null)

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {['Task Name', 'Project/Sub-Project', 'Assignee', 'Progress', 'Priority', 'Status', 'Action'].map(
              (col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    {col}
                    {!['Assignee', 'Action'].includes(col) && (
                      <ArrowUpDown className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              {/* Main task row */}
              <tr
                className={`border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedTaskId === task.id && !selectedSubTaskId ? 'bg-blue-50/50' : ''
                }`}
                onClick={() => onSelectTask(task)}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {showSubTasks && task.subTasks && task.subTasks.length > 0 ? (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggle(task.id) }}
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        {expanded[task.id]
                          ? <ChevronDown className="w-3.5 h-3.5" />
                          : <ChevronRight className="w-3.5 h-3.5" />}
                      </button>
                    ) : (
                      <span className="w-3.5" />
                    )}
                    <span className="text-gray-800 font-medium truncate max-w-[200px]">{task.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-500 truncate max-w-[160px]">{task.project}</td>
                <td className="px-4 py-3">
                  <AvatarStack assignees={task.assignees} />
                </td>
                <td className="px-4 py-3">
                  <ProgressBar value={task.progress} />
                </td>
                <td className="px-4 py-3">
                  <PriorityBadge priority={task.priority} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={task.status} />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>

              {/* Sub-task rows */}
              {showSubTasks && expanded[task.id] && task.subTasks?.map((sub) => (
                <tr
                  key={sub.id}
                  className={`border-b border-gray-50 hover:bg-blue-50/30 cursor-pointer transition-colors ${
                    selectedSubTaskId === sub.id ? 'bg-blue-50/50' : 'bg-gray-50/30'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectSubTask?.(sub, task)
                  }}
                >
                  <td className="px-4 py-2.5 pl-10">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckSquare className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="text-xs truncate max-w-[180px]">{sub.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-500 truncate max-w-[160px]">{task.project}</td>
                  <td className="px-4 py-2.5">
                    <AvatarStack assignees={sub.assignees ?? task.assignees.slice(0, 2)} />
                  </td>
                  <td className="px-4 py-2.5">
                    {sub.progress !== undefined && sub.progress > 0
                      ? <ProgressBar value={sub.progress} />
                      : <span />}
                  </td>
                  <td className="px-4 py-2.5">
                    <PriorityBadge priority={sub.priority as any} />
                  </td>
                  <td className="px-4 py-2.5">
                    <StatusBadge status={sub.status} />
                  </td>
                  <td className="px-4 py-2.5 relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setContextMenu(
                          contextMenu?.subTaskId === sub.id ? null : { taskId: task.id, subTaskId: sub.id }
                        )
                      }}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    {contextMenu?.subTaskId === sub.id && (
                      <div className="absolute right-8 top-0 z-10 bg-white border border-gray-100 rounded-lg shadow-lg py-1 min-w-[100px]">
                        {['Create', 'Edit', 'Comment', 'Delete'].map((action) => (
                          <button
                            key={action}
                            onClick={(e) => { e.stopPropagation(); setContextMenu(null) }}
                            className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-50 ${
                              action === 'Delete' ? 'text-red-500' : 'text-gray-700'
                            }`}
                          >
                            {action}
                            {action === 'Delete' && <span className="ml-2 text-gray-400">⌘@</span>}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
