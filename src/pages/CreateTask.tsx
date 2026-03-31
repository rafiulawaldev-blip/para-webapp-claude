import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, ChevronDown } from 'lucide-react'
import { Header } from '../components/layout/Header'

export function CreateTask() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    taskName: '',
    project: '',
    priority: '',
    assignee: '',
    file: '',
    deadline: '',
    aboutTask: '',
    description: '',
  })

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }))

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Task' }, { label: 'New Task' }]}
      />

      <div className="flex-1 overflow-y-auto scrollbar-thin p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Task</h2>

          <div className="grid grid-cols-2 gap-5">
            {/* Task Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Task Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter department name"
                value={form.taskName}
                onChange={(e) => set('taskName', e.target.value)}
                className="w-full px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] placeholder:text-[rgba(0,0,0,0.4)] text-[#242529]"
              />
            </div>

            {/* Select Project */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Select Project/Sub-Project
              </label>
              <div className="relative">
                <select
                  value={form.project}
                  onChange={(e) => set('project', e.target.value)}
                  className="w-full appearance-none px-4 h-12 text-base border border-[rgba(0,0,0,0.05)] rounded-[8px] bg-white focus:outline-none focus:border-[rgba(0,0,0,0.4)] text-[rgba(0,0,0,0.4)]"
                >
                  <option value="">Search or select an existing list</option>
                  <option>NovaCart Online Store</option>
                  <option>ShopSphere E-commerce</option>
                  <option>MarketWave Digital</option>
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
                  <option>Urgent</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
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
                  <option>Salman Omayer</option>
                  <option>Hanna</option>
                  <option>Lydia</option>
                  <option>Cooper</option>
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
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* About Task */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">About Task</label>
              <textarea
                placeholder="Add details..."
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
            <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              New Task
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
