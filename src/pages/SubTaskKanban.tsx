import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Plus, Search, ChevronDown, ArrowUpDown, SlidersHorizontal,
  LayoutGrid, CalendarDays, MoreVertical, Link2,
} from 'lucide-react'
import { Header } from '../components/layout/Header'
import { TaskDetailPanel } from '../components/tasks/TaskDetailPanel'
import { PriorityBadge } from '../components/ui/Badge'
import { AvatarStack } from '../components/ui/AvatarStack'
import { TASKS } from '../data/mockData'
import type { SubTask, Task } from '../data/mockData'

const COLUMNS: { id: string; label: string; color: string; dot: string }[] = [
  { id: 'To-Do',       label: 'To-Do',       color: 'text-[#2a533c] bg-[#e4efe9] border border-[rgba(42,83,60,0.1)]', dot: 'bg-[#c4e4d3]' },
  { id: 'In Progress', label: 'In Progress', color: 'text-[#2c2c2b] bg-[#e3e3e3]',                                   dot: 'bg-[#9ca3af]' },
  { id: 'Review',      label: 'Review',      color: 'text-[#655121] bg-[#f5f0e5]',                                   dot: 'bg-[#e8a838]' },
  { id: 'Complete',    label: 'Complete',    color: 'text-[#1d67b0] bg-[#e2ebf4]',                                   dot: 'bg-[#2783de]' },
  { id: 'Not Started', label: 'Not Started', color: 'text-[#6d3531] bg-[#e9e4e3] border border-[rgba(109,53,49,0.05)]', dot: 'bg-[#e74c3c]' },
]

export function SubTaskKanban() {
  const { id } = useParams()
  const navigate = useNavigate()
  const parentTask = TASKS.find((t) => t.id === id) ?? TASKS[0]
  const subTasks = parentTask.subTasks ?? []

  const [selectedSubTask, setSelectedSubTask] = useState<SubTask | null>(null)
  const [search, setSearch] = useState('')

  const filtered = subTasks.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelectSubTask = (sub: SubTask) => {
    setSelectedSubTask((prev) => (prev?.id === sub.id ? null : sub))
  }

  const byStatus = (status: string) => filtered.filter((s) => s.status === status)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[
          { label: 'Jessore Feed Ltd.' },
          { label: 'Projects' },
          { label: parentTask.name },
        ]}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Page header */}
          <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-gray-100 bg-white">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Projects Management</h2>
              <p className="text-xs text-gray-500 mt-0.5">Manage subtasks, sub-projects, and teams</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 w-48"
                />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                June 01, 2025
              </button>
              <button
                onClick={() => navigate('/tasks/subtask/create')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-2.5 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2">
              {/* Breadcrumb task filter */}
              <span className="text-xs font-medium text-gray-700 bg-gray-100 rounded-lg px-2.5 py-1">
                {parentTask.name} ({subTasks.length})
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600" title="Kanban view">
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 px-2 py-1.5 rounded-lg hover:bg-gray-50 ml-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                Sort
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 px-2 py-1.5 rounded-lg hover:bg-gray-50">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                View
              </button>
            </div>
          </div>

          {/* Kanban */}
          <div className="flex-1 overflow-auto scrollbar-thin bg-white p-6">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
              {COLUMNS.map((col) => {
                const colTasks = byStatus(col.id)
                return (
                  <div key={col.id} className="flex-shrink-0 w-72">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${col.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                        {col.label}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">({colTasks.length})</span>
                    </div>

                    <div className="space-y-3">
                      {colTasks.map((sub) => (
                        <SubTaskKanbanCard
                          key={sub.id}
                          sub={sub}
                          parentTask={parentTask}
                          isSelected={selectedSubTask?.id === sub.id}
                          onClick={() => handleSelectSubTask(sub)}
                        />
                      ))}
                      {colTasks.length === 0 && (
                        <div className="border-2 border-dashed border-gray-100 rounded-xl p-6 text-center">
                          <p className="text-xs text-gray-400">No sub-tasks</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        {selectedSubTask && (
          <TaskDetailPanel
            task={parentTask}
            subTask={selectedSubTask}
            onClose={() => setSelectedSubTask(null)}
          />
        )}
      </div>
    </div>
  )
}

function SubTaskKanbanCard({
  sub,
  parentTask,
  isSelected,
  onClick,
}: {
  sub: SubTask
  parentTask: Task
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border rounded-xl p-3.5 cursor-pointer hover:shadow-sm transition-all ${
        isSelected ? 'border-blue-300 bg-blue-50/30' : 'border-gray-100 hover:border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <Link2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-relaxed">{sub.name}</p>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="text-gray-300 hover:text-gray-500 flex-shrink-0 ml-1"
        >
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      <PriorityBadge priority={sub.priority} />

      <p className="text-[10px] text-gray-400 mt-2 mb-3">
        Project/Sub-Project: {parentTask.project}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <CalendarDays className="w-3 h-3" />
          <span>{sub.dueDate}</span>
        </div>
        <AvatarStack
          assignees={sub.assignees ?? parentTask.assignees}
          max={3}
          size="sm"
        />
      </div>
    </div>
  )
}
