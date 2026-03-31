import React from 'react'
import {
  X, Maximize2, Share2, MoreHorizontal,
  Activity, Building2, GitBranch, Building,
  FolderKanban, Link2, Users, AlertCircle,
  CalendarDays, ClipboardList,
} from 'lucide-react'
import type { Task, SubTask } from '../../data/mockData'
import { StatusBadge, PriorityBadge } from '../ui/Badge'
import { DonutChart } from '../ui/DonutChart'

interface TaskDetailPanelProps {
  task: Task
  onClose: () => void
  subTask?: SubTask
}

const DONUT_SEGMENTS = [
  { value: 21, color: '#3b82f6', label: 'To-Do' },
  { value: 12, color: '#06b6d4', label: 'Complete' },
  { value: 3,  color: '#ef4444', label: 'Not Started' },
  { value: 3,  color: '#f59e0b', label: 'Review' },
  { value: 12, color: '#8b5cf6', label: 'In Progress' },
]

export function TaskDetailPanel({ task, onClose, subTask }: TaskDetailPanelProps) {
  const isSubTask = !!subTask

  const status   = isSubTask ? subTask.status   : task.status
  const priority = isSubTask ? subTask.priority : task.priority
  const assignees = isSubTask
    ? (subTask.assignees ?? task.assignees)
    : task.assignees
  const createdDate = isSubTask ? (subTask.createdDate ?? task.createdDate) : task.createdDate
  const dueDate     = isSubTask ? subTask.dueDate : task.dueDate
  const companyName    = isSubTask ? (subTask.companyName    ?? task.companyName)    : task.companyName
  const branchName     = isSubTask ? (subTask.branchName     ?? task.branchName)     : task.branchName
  const departmentName = isSubTask ? (subTask.departmentName ?? task.departmentName) : task.departmentName
  const subProjectName = isSubTask ? (subTask.subProjectName ?? task.subProjectName) : task.subProjectName

  return (
    <div className="w-[380px] flex-shrink-0 bg-white border-l border-gray-100 flex flex-col overflow-hidden">
      {/* Panel header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600"><Maximize2 className="w-4 h-4" /></button>
          <button className="text-gray-400 hover:text-gray-600"><Share2 className="w-4 h-4" /></button>
          <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin p-4">
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 mb-1">
          {isSubTask ? subTask.name : task.name}
        </h2>
        {!isSubTask && task.description && (
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">{task.description}</p>
        )}

        {/* Details section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-1.5">
            <span className="text-gray-400">→|</span> Details
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
          </h3>

          <div className="space-y-3">
            <DetailRow icon={<Activity className="w-3.5 h-3.5" />} label="Status">
              <StatusBadge status={status} />
            </DetailRow>
            <DetailRow icon={<Building2 className="w-3.5 h-3.5" />} label="Company Name">
              <span className="text-xs text-gray-700">{companyName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow icon={<GitBranch className="w-3.5 h-3.5" />} label="Branch Name">
              <span className="text-xs text-gray-700">{branchName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow icon={<Building className="w-3.5 h-3.5" />} label="Department Name">
              <span className="text-xs text-gray-700">{departmentName ?? 'N/A'}</span>
            </DetailRow>

            {isSubTask ? (
              <DetailRow icon={<ClipboardList className="w-3.5 h-3.5" />} label="Task Name">
                <span className="text-xs text-gray-700">{task.name}</span>
              </DetailRow>
            ) : (
              <DetailRow icon={<FolderKanban className="w-3.5 h-3.5" />} label="Project Name">
                <span className="text-xs text-gray-700">{task.project}</span>
              </DetailRow>
            )}

            <DetailRow icon={<Link2 className="w-3.5 h-3.5" />} label="Sub-Project Name">
              <span className="text-xs text-gray-700">{subProjectName ?? 'N/A'}</span>
            </DetailRow>
            <DetailRow icon={<Users className="w-3.5 h-3.5" />} label="Assignee">
              <div className="flex flex-col gap-1.5">
                {assignees.slice(0, 3).map((a) => (
                  <div key={a.id} className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-medium"
                      style={{ backgroundColor: a.color }}
                    >
                      {a.initials}
                    </div>
                    <span className="text-xs text-gray-700">{a.name}</span>
                  </div>
                ))}
                {assignees.length > 3 && (
                  <span className="text-xs text-blue-500 font-medium">+{assignees.length - 3}</span>
                )}
              </div>
            </DetailRow>
            <DetailRow icon={<AlertCircle className="w-3.5 h-3.5" />} label="Priority">
              <PriorityBadge priority={priority} />
            </DetailRow>
            <DetailRow icon={<CalendarDays className="w-3.5 h-3.5" />} label="Created Date">
              <span className="text-xs text-gray-700">{createdDate}</span>
            </DetailRow>
            <DetailRow icon={<CalendarDays className="w-3.5 h-3.5" />} label="Due Date">
              <span className="text-xs text-gray-700">{dueDate}</span>
            </DetailRow>
          </div>
        </div>

        {/* Donut chart */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-start gap-4">
            <DonutChart
              segments={DONUT_SEGMENTS}
              centerLabel="67%"
              centerSub="Task Completed"
              size={110}
              thickness={10}
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
  )
}

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center gap-1.5 w-32 flex-shrink-0 text-gray-400 mt-0.5">
        {icon}
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
