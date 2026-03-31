import React, { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Upload, ChevronDown } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { TASKS, AVATARS } from '../data/mockData'

type Mode = 'create' | 'subtask' | 'edit'

export function CreateTask() {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()

  // Detect mode from path
  const mode: Mode = location.pathname.includes('/subtask/create')
    ? 'subtask'
    : id && location.pathname.includes('/edit')
    ? 'edit'
    : 'create'

  const editTask = mode === 'edit' ? (TASKS.find((t) => t.id === id) ?? null) : null

  const [form, setForm] = useState({
    taskName:    editTask?.name    ?? '',
    project:     editTask?.project ?? '',
    priority:    editTask?.priority ?? '',
    assignee:    editTask?.assignees?.[0]?.name ?? '',
    file:        '',
    deadline:    editTask?.dueDate ?? '',
    aboutTask:   '',
    description: editTask?.description ?? '',
  })

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  // Labels & headings per mode
  const heading = mode === 'edit'
    ? 'Edit Task'
    : mode === 'subtask'
    ? 'Create Sub-Task'
    : 'Create Task'

  const projectLabel = mode === 'subtask' ? 'Select Task' : 'Select Project/Sub-Project'
  const projectPlaceholder = mode === 'subtask'
    ? 'Search or select an existing task'
    : 'Search or select an existing list'

  const submitLabel = mode === 'edit'
    ? 'Save'
    : mode === 'subtask'
    ? 'New Sub-Task'
    : 'New Task'

  const breadcrumbs = mode === 'edit' && editTask
    ? [{ label: 'Jessore Feed Ltd.' }, { label: 'Task' }, { label: editTask.name }, { label: 'Edit' }]
    : mode === 'subtask'
    ? [{ label: 'Jessore Feed Ltd.' }, { label: 'Task' }, { label: 'New Sub-Task' }]
    : [{ label: 'Jessore Feed Ltd.' }, { label: 'Task' }, { label: 'New Task' }]

  const handleSubmit = () => {
    navigate(-1)
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={breadcrumbs}
      />

      <div className="flex-1 overflow-y-auto scrollbar-thin p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{heading}</h2>

          <div className="grid grid-cols-2 gap-5">
            {/* Task Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Task Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter or select insert name"
                value={form.taskName}
                onChange={(e) => set('taskName', e.target.value)}
                className="w-full px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] placeholder:text-[rgba(0,0,0,0.4)] text-[#242529]"
              />
            </div>

            {/* Project/Task Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {projectLabel}
              </label>
              <div className="relative">
                <select
                  value={form.project}
                  onChange={(e) => set('project', e.target.value)}
                  className="w-full appearance-none px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[rgba(0,0,0,0.4)]"
                >
                  <option value="">{projectPlaceholder}</option>
                  {mode === 'subtask'
                    ? TASKS.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)
                    : (
                      <>
                        <option>NovaCart Online Store</option>
                        <option>ShopSphere E-commerce</option>
                        <option>MarketWave Digital</option>
                        <option>Project Phoenix</option>
                      </>
                    )}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
              <div className="relative">
                <select
                  value={form.priority}
                  onChange={(e) => set('priority', e.target.value)}
                  className="w-full appearance-none px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[rgba(0,0,0,0.4)]"
                >
                  <option value="">Search or select an existing list</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High A</option>
                  <option value="Urgent">Urgent A/A</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Assignee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Assignee</label>
              <div className="relative">
                <select
                  value={form.assignee}
                  onChange={(e) => set('assignee', e.target.value)}
                  className="w-full appearance-none px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[rgba(0,0,0,0.4)]"
                >
                  <option value="">Search or select an existing user</option>
                  {AVATARS.map((a) => (
                    <option key={a.id} value={a.name}>{a.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Attach File */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Attach File</label>
              <div className="relative border border-[rgba(0,0,0,0.05)] rounded-[8px] h-12 px-4 flex items-center gap-2 bg-white hover:border-[rgba(0,0,0,0.4)] cursor-pointer">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400 flex-1">Choose file</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>

            {/* Select Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Deadline</label>
              {mode === 'edit' ? (
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => set('deadline', e.target.value)}
                  className="w-full px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[#242529]"
                />
              ) : (
                <div className="relative">
                  <select
                    value={form.deadline}
                    onChange={(e) => set('deadline', e.target.value)}
                    className="w-full appearance-none px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[rgba(0,0,0,0.4)]"
                  >
                    <option value="">Search or select an existing user</option>
                    <option>Nov 27, 2025</option>
                    <option>Dec 01, 2025</option>
                    <option>Dec 15, 2025</option>
                    <option>December 29, 2025</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              )}
            </div>

            {/* About Task */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">About Task</label>
              <textarea
                placeholder={mode === 'edit'
                  ? 'Review the corporate task clearly, detailing the goals, necessary steps, and any important deadlines or resources required for successful completion.'
                  : 'Add details...'}
                rows={4}
                value={form.aboutTask}
                onChange={(e) => set('aboutTask', e.target.value)}
                className="w-full px-4 py-3 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] placeholder:text-[rgba(0,0,0,0.4)] text-[#242529] resize-none"
              />
            </div>

            {/* Task Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Task Description</label>
              <textarea
                placeholder="Add details..."
                rows={4}
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                className="w-full px-4 py-3 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] placeholder:text-[rgba(0,0,0,0.4)] text-[#242529] resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {submitLabel}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
