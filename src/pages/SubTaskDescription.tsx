import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Paperclip, CheckSquare, MessageSquare, AlignLeft,
  MoreVertical, ChevronDown, ChevronUp,
  Send, X, Plus, ExternalLink,
} from 'lucide-react'
import { Header } from '../components/layout/Header'
import { StatusBadge, PriorityBadge } from '../components/ui/Badge'
import { Avatar } from '../components/ui/AvatarStack'
import { DonutChart } from '../components/ui/DonutChart'
import { TASKS, SUBTASKS } from '../data/mockData'

type TabId = 'description' | 'attachment' | 'checklist' | 'comments'

const DONUT_SEGMENTS = [
  { value: 21, color: '#3b82f6', label: 'To-Do' },
  { value: 12, color: '#06b6d4', label: 'Complete' },
  { value: 3,  color: '#ef4444', label: 'Not Started' },
  { value: 3,  color: '#f59e0b', label: 'Review' },
  { value: 12, color: '#8b5cf6', label: 'In Progress' },
]

const ATTACHMENT_COLORS = ['#e8f4fd', '#fef3e2', '#f0fdf4', '#fdf2f8']

export function SubTaskDescription() {
  const { taskId, subId } = useParams()
  const parentTask = TASKS.find((t) => t.id === taskId) ?? TASKS[0]
  const subTask =
    parentTask.subTasks?.find((s) => s.id === subId) ??
    SUBTASKS.find((s) => s.id === subId) ??
    SUBTASKS[0]

  const [activeTab, setActiveTab] = useState<TabId>('description')
  const [aboutOpen, setAboutOpen] = useState(true)
  const [descOpen, setDescOpen] = useState(true)
  const [comment, setComment] = useState('')

  const attachmentCount = subTask.attachments?.length ?? 0
  const commentCount    = subTask.comments?.length ?? 0
  const checkedCount    = subTask.checklist?.filter((c) => c.checked).length ?? 0
  const totalChecklist  = subTask.checklist?.length ?? 0
  const checklistPct    = totalChecklist > 0 ? Math.round((checkedCount / totalChecklist) * 100) : 0

  const assignees = subTask.assignees ?? parentTask.assignees

  const TABS: { id: TabId; label: string }[] = [
    { id: 'description', label: 'Description' },
    { id: 'attachment',  label: `Attachment (${attachmentCount})` },
    { id: 'checklist',   label: 'Checklist' },
    { id: 'comments',    label: `Comments (${commentCount})` },
  ]

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[
          { label: 'Jessore Feed Ltd.' },
          { label: 'Task' },
          { label: subTask.name },
        ]}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left — tabbed content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white border-r border-gray-100">
          {/* Sub-task title */}
          <div className="px-6 pt-5 pb-0">
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="w-4 h-4 text-blue-500" />
              <h2 className="text-base font-semibold text-gray-900">{subTask.name}</h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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

            {/* ── DESCRIPTION ── */}
            {activeTab === 'description' && (
              <div className="space-y-5">
                <div>
                  <button
                    onClick={() => setAboutOpen((o) => !o)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3"
                  >
                    {aboutOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    About Task
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
                        products that support farm growth and performance. Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                    </div>
                  )}
                </div>

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
                        {subTask.description ??
                          'Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed products that support farm growth and performance.'}
                      </p>
                      <p>
                        Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed
                        products that support farm growth and performance. Jessore Feed Ltd is a key Paragon
                        Group company, providing reliable, high quality feed products that support farm growth
                        and performance.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── ATTACHMENT ── */}
            {activeTab === 'attachment' && (
              <div>
                {attachmentCount === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">No attachments yet.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {subTask.attachments?.map((att, idx) => (
                      <div
                        key={att.id}
                        className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all group"
                      >
                        <div
                          className="h-32 relative flex items-center justify-center"
                          style={{ backgroundColor: ATTACHMENT_COLORS[idx % ATTACHMENT_COLORS.length] }}
                        >
                          <Paperclip className="w-10 h-10 text-gray-300" />
                          <button className="absolute top-2 right-2 bg-white rounded-full p-0.5 shadow text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="p-2.5">
                          <p className="text-xs font-medium text-gray-800 truncate">{att.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-gray-400">{att.size}</span>
                            {att.uploadedAt && (
                              <>
                                <span className="text-[10px] text-gray-300">·</span>
                                <span className="text-[10px] text-gray-400">{att.uploadedAt}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── CHECKLIST ── */}
            {activeTab === 'checklist' && (
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {checklistPct}% Done
                  </span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-blue-500 rounded-full transition-all"
                      style={{ width: `${checklistPct}%` }}
                    />
                  </div>
                  <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap border border-blue-200 rounded-lg px-2.5 py-1 hover:bg-blue-50 transition-colors">
                    <Plus className="w-3 h-3" />
                    Add Item
                  </button>
                </div>

                {subTask.checklist?.map((item) => (
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

                {(!subTask.checklist || subTask.checklist.length === 0) && (
                  <p className="text-sm text-gray-400 text-center py-8">No checklist items yet.</p>
                )}

                <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 mt-2 px-1 py-1">
                  <Plus className="w-3.5 h-3.5" />
                  Add item
                </button>
              </div>
            )}

            {/* ── COMMENTS ── */}
            {activeTab === 'comments' && (
              <div className="space-y-5">
                {subTask.comments?.map((c) => (
                  <div key={c.id} className="flex gap-3">
                    <Avatar assignee={c.author} size="md" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-gray-800">{c.author.name}</span>
                        <span className="text-xs text-gray-400">{c.createdAt}</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl px-3.5 py-3 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">{c.content}</p>
                        {c.url && (
                          <a
                            href="#"
                            className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 hover:underline"
                            onClick={(e) => e.preventDefault()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            {c.url}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {(!subTask.comments || subTask.comments.length === 0) && (
                  <p className="text-sm text-gray-400 text-center py-8">No comments yet.</p>
                )}

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
            <DetailRow label="Status"><StatusBadge status={subTask.status} /></DetailRow>
            <DetailRow label="Company Name">
              <span className="text-gray-700">{subTask.companyName ?? parentTask.companyName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow label="Branch Name">
              <span className="text-gray-700">{subTask.branchName ?? parentTask.branchName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow label="Department Name">
              <span className="text-gray-700">{subTask.departmentName ?? parentTask.departmentName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow label="Task Name">
              <span className="text-gray-700">{parentTask.name}</span>
            </DetailRow>
            <DetailRow label="Sub-Project Name">
              <span className="text-gray-700">{subTask.subProjectName ?? parentTask.subProjectName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow label="Assignee">
              <div className="flex flex-col gap-1.5">
                {assignees.slice(0, 3).map((a) => (
                  <div key={a.id} className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-medium"
                      style={{ backgroundColor: a.color }}
                    >
                      {a.initials}
                    </div>
                    <span className="text-gray-700">{a.name}</span>
                  </div>
                ))}
                {assignees.length > 3 && (
                  <span className="text-blue-500 font-medium">+{assignees.length - 3}</span>
                )}
              </div>
            </DetailRow>
            <DetailRow label="Priority"><PriorityBadge priority={subTask.priority} /></DetailRow>
            <DetailRow label="Created Date">
              <span className="text-gray-700">{subTask.createdDate ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow label="Due Date">
              <span className="text-gray-700">{subTask.dueDate}</span>
            </DetailRow>
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
                  { label: 'To-Do',       value: 21, color: '#3b82f6' },
                  { label: 'Complete',    value: 12, color: '#06b6d4' },
                  { label: 'Not Started', value: 3,  color: '#ef4444' },
                  { label: 'Review',      value: 3,  color: '#f59e0b' },
                  { label: 'In Progress', value: 12, color: '#8b5cf6' },
                  { label: 'Total task',  value: 48, color: '#9ca3af' },
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
