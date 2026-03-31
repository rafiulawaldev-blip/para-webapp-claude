import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Paperclip, CheckSquare, MessageSquare, AlignLeft,
  MoreVertical, CalendarDays, ChevronDown, ChevronUp,
  Send, Trash2,
} from 'lucide-react'
import { Header } from '../components/layout/Header'
import { StatusBadge, PriorityBadge } from '../components/ui/Badge'
import { Avatar, AvatarStack } from '../components/ui/AvatarStack'
import { DonutChart } from '../components/ui/DonutChart'
import { TASKS } from '../data/mockData'
import type { Task } from '../data/mockData'

type TabId = 'description' | 'attachment' | 'subtask' | 'checklist' | 'comments'

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'description', label: 'Description',    icon: <AlignLeft className="w-3.5 h-3.5" /> },
  { id: 'attachment',  label: 'Attachment (2)',  icon: <Paperclip className="w-3.5 h-3.5" /> },
  { id: 'subtask',     label: 'Sub-Task',        icon: <AlignLeft className="w-3.5 h-3.5" /> },
  { id: 'checklist',   label: 'Checklist',       icon: <CheckSquare className="w-3.5 h-3.5" /> },
  { id: 'comments',    label: 'Comments (12)',   icon: <MessageSquare className="w-3.5 h-3.5" /> },
]

const DONUT_SEGMENTS = [
  { value: 21, color: '#3b82f6', label: 'To-Do' },
  { value: 12, color: '#06b6d4', label: 'Complete' },
  { value: 3,  color: '#ef4444', label: 'Not Started' },
  { value: 3,  color: '#f59e0b', label: 'Review' },
  { value: 12, color: '#8b5cf6', label: 'In Progress' },
]

export function TaskDescription() {
  const { id } = useParams()
  const navigate = useNavigate()
  const task = TASKS.find((t) => t.id === id) ?? TASKS[0]
  const [activeTab, setActiveTab] = useState<TabId>('description')
  const [aboutOpen, setAboutOpen] = useState(true)
  const [descOpen, setDescOpen] = useState(true)
  const [comment, setComment] = useState('')

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[
          { label: 'Jessore Feed Ltd.' },
          { label: 'Task' },
          { label: task.name },
        ]}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left — tabbed content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white border-r border-gray-100">
          {/* Task title */}
          <div className="px-6 pt-5 pb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-sm">⊞</span>
              <h2 className="text-base font-semibold text-gray-900">{task.name}</h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-5">
            {activeTab === 'description' && (
              <div className="space-y-5">
                {/* About Project */}
                <div>
                  <button
                    onClick={() => setAboutOpen((o) => !o)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3"
                  >
                    {aboutOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    About Project
                  </button>
                  {aboutOpen && (
                    <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <p>
                        Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed
                        products that support farm growth and performance. Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                      <p>
                        Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed
                        products that support farm growth and performance.Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <button
                    onClick={() => setDescOpen((o) => !o)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3"
                  >
                    {descOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Description
                  </button>
                  {descOpen && (
                    <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <p>
                        Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed
                        products that support farm growth and performance. Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                      <p>
                        Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed
                        products that support farm growth and performance.Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'attachment' && (
              <div className="space-y-3">
                {task.attachments?.map((att) => (
                  <div key={att.id} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Paperclip className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{att.name}</p>
                      <p className="text-xs text-gray-400">{att.size} · {att.uploadedAt}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'subtask' && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Task Name', 'Priority', 'Due Date', 'Actions'].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-xs font-medium text-gray-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {task.subTasks?.map((sub) => (
                      <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-3 py-2.5 text-gray-700 truncate max-w-[250px]">{sub.name}</td>
                        <td className="px-3 py-2.5">
                          <PriorityBadge priority={sub.priority as any} />
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {sub.dueDate}
                          </div>
                        </td>
                        <td className="px-3 py-2.5">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'checklist' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-700">
                    {task.checklist?.filter((c) => c.checked).length} / {task.checklist?.length} completed
                  </p>
                  <div className="flex-1 mx-3 h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-1.5 bg-blue-500 rounded-full"
                      style={{
                        width: `${
                          task.checklist && task.checklist.length > 0
                            ? (task.checklist.filter((c) => c.checked).length / task.checklist.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
                {task.checklist?.map((item) => (
                  <label key={item.id} className="flex items-center gap-3 py-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={`text-sm ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-4">
                {task.comments?.map((c) => (
                  <div key={c.id} className="flex gap-3">
                    <Avatar assignee={c.author} size="md" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">{c.author.name}</span>
                        <span className="text-xs text-gray-400">{c.createdAt}</span>
                      </div>
                      <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 leading-relaxed">
                        {c.content}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Comment input */}
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">MD</span>
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full pr-10 pl-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                    />
                    <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right — Details panel */}
        <div className="w-[320px] flex-shrink-0 overflow-y-auto scrollbar-thin p-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-800">
              <span className="text-gray-400">→|</span> Details
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
          </div>

          <div className="space-y-3 text-xs">
            <DetailRow label="Status"><StatusBadge status={task.status} /></DetailRow>
            <DetailRow label="Company Name"><span className="text-gray-700">{task.companyName}</span></DetailRow>
            <DetailRow label="Branch Name"><span className="text-gray-700">{task.branchName}</span></DetailRow>
            <DetailRow label="Department Name"><span className="text-gray-700">{task.departmentName}</span></DetailRow>
            <DetailRow label="Project Name"><span className="text-gray-700">{task.project}</span></DetailRow>
            <DetailRow label="Sub-Project Name"><span className="text-gray-700">{task.subProjectName}</span></DetailRow>
            <DetailRow label="Assignee">
              <div className="flex flex-col gap-1.5">
                {task.assignees.slice(0, 3).map((a) => (
                  <div key={a.id} className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-medium" style={{ backgroundColor: a.color }}>
                      {a.initials}
                    </div>
                    <span className="text-gray-700">{a.name}</span>
                  </div>
                ))}
                {task.assignees.length > 3 && (
                  <span className="text-blue-500 font-medium">+{task.assignees.length - 3}</span>
                )}
              </div>
            </DetailRow>
            <DetailRow label="Priority"><PriorityBadge priority={task.priority} /></DetailRow>
            <DetailRow label="Created Date"><span className="text-gray-700">{task.createdDate}</span></DetailRow>
            <DetailRow label="Due Date"><span className="text-gray-700">{task.dueDate}</span></DetailRow>
          </div>

          {/* Donut chart */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <DonutChart
                segments={DONUT_SEGMENTS}
                centerLabel="67%"
                centerSub="Task Completed"
                size={100}
                thickness={9}
              />
              <div className="flex-1 space-y-1.5 pt-1">
                {[
                  { label: 'To-Do', value: 21, color: '#3b82f6' },
                  { label: 'Complete', value: 12, color: '#06b6d4' },
                  { label: 'Not Started', value: 3, color: '#ef4444' },
                  { label: 'Review', value: 3, color: '#f59e0b' },
                  { label: 'In Progress', value: 12, color: '#8b5cf6' },
                  { label: 'Total task', value: 48, color: '#9ca3af' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: item.color }} />
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="text-gray-800 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-28 flex-shrink-0 text-gray-400">{label}</span>
      <div>{children}</div>
    </div>
  )
}
