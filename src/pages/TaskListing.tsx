import React, { useState } from 'react'
import { Plus, Search, ArrowUpDown, LayoutGrid, List, ChevronDown, SlidersHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { TaskTable } from '../components/tasks/TaskTable'
import { KanbanBoard } from '../components/tasks/KanbanBoard'
import { TaskDetailPanel } from '../components/tasks/TaskDetailPanel'
import { TASKS } from '../data/mockData'
import type { Task, SubTask } from '../data/mockData'

type ViewMode = 'list' | 'kanban'

export function TaskListing() {
  const navigate = useNavigate()
  const [view, setView] = useState<ViewMode>('list')
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [selectedSubTask, setSelectedSubTask] = useState<SubTask | null>(null)
  const [selectedParentTask, setSelectedParentTask] = useState<Task | null>(null)
  const [search, setSearch] = useState('')

  const filtered = TASKS.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.project.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelectTask = (task: Task) => {
    if (selectedTask?.id === task.id && !selectedSubTask) {
      setSelectedTask(null)
      setSelectedSubTask(null)
      setSelectedParentTask(null)
    } else {
      setSelectedTask(task)
      setSelectedSubTask(null)
      setSelectedParentTask(null)
    }
  }

  const handleSelectSubTask = (sub: SubTask, parent: Task) => {
    if (selectedSubTask?.id === sub.id) {
      setSelectedSubTask(null)
      setSelectedParentTask(null)
      setSelectedTask(parent)
    } else {
      setSelectedSubTask(sub)
      setSelectedParentTask(parent)
      setSelectedTask(parent)
    }
  }

  const handleClosePanel = () => {
    setSelectedTask(null)
    setSelectedSubTask(null)
    setSelectedParentTask(null)
  }

  const showPanel = selectedTask !== null

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Task' }]}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Page header */}
          <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-gray-100 bg-white">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Task Management</h2>
              <p className="text-xs text-gray-500 mt-0.5">Manage task, subtask, and teams</p>
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
                onClick={() => navigate('/tasks/create')}
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
            <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5">
              <Plus className="w-3.5 h-3.5" />
              Filter
            </button>
            <div className="flex items-center gap-1">
              {/* View toggle icons */}
              <button
                onClick={() => setView('kanban')}
                className={`p-1.5 rounded-lg transition-colors ${
                  view === 'kanban'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                title="Kanban view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  view === 'list'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                title="List view"
              >
                <List className="w-4 h-4" />
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

          {/* Table / Kanban */}
          <div className="flex-1 overflow-auto scrollbar-thin bg-white p-6">
            {view === 'list' ? (
              <TaskTable
                tasks={filtered}
                onSelectTask={handleSelectTask}
                onSelectSubTask={handleSelectSubTask}
                selectedTaskId={selectedTask?.id}
                selectedSubTaskId={selectedSubTask?.id}
                showSubTasks={true}
              />
            ) : (
              <KanbanBoard tasks={filtered} onSelectTask={handleSelectTask} />
            )}
          </div>
        </div>

        {/* Detail panel */}
        {showPanel && (
          <TaskDetailPanel
            task={selectedParentTask ?? selectedTask!}
            subTask={selectedSubTask ?? undefined}
            onClose={handleClosePanel}
          />
        )}
      </div>
    </div>
  )
}
