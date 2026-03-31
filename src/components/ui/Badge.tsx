import React from 'react'
import type { Priority, TaskStatus } from '../../data/mockData'

// ── Status Badge ──────────────────────────────────────────────────────────────
// Supports all statuses from Figma: Active, Complete, Inactive, To-Do,
// In Progress, Review, Not Started, Open, Resolved, New, Self Resolved, Re-open
// (TaskStatus covers the subset used in mock data)

type AllStatus = TaskStatus | 'Active' | 'Inactive' | 'Open' | 'Resolved' | 'New' | 'Self Resolved' | 'Re-open'

interface StatusBadgeProps {
  status: AllStatus
}

const STATUS_STYLES: Record<AllStatus, { bg: string; text: string; dot: string }> = {
  'Active':       { bg: 'bg-[#e4efe9] border border-[rgba(42,83,60,0.05)]',  text: 'text-[#2a533c]', dot: 'bg-[#3ba66d]' },
  'Complete':     { bg: 'bg-[#e2ebf4]',                                       text: 'text-[#1d67b0]', dot: 'bg-[#2783de]' },
  'Inactive':     { bg: 'bg-[#e3e3e3]',                                       text: 'text-[#2c2c2b]', dot: 'bg-[#9ca3af]' },
  'To-Do':        { bg: 'bg-[#e4efe9] border border-[rgba(42,83,60,0.1)]',   text: 'text-[#2a533c]', dot: 'bg-[#c4e4d3]' },
  'In Progress':  { bg: 'bg-[#e3e3e3]',                                       text: 'text-[#2c2c2b]', dot: 'bg-[#9ca3af]' },
  'Review':       { bg: 'bg-[#f5f0e5]',                                       text: 'text-[#655121]', dot: 'bg-[#e8a838]' },
  'Not Started':  { bg: 'bg-[#e9e4e3] border border-[rgba(109,53,49,0.05)]', text: 'text-[#6d3531]', dot: 'bg-[#e74c3c]' },
  'Open':         { bg: 'bg-[#e4efe9] border border-[rgba(42,83,60,0.1)]',   text: 'text-[#2a533c]', dot: 'bg-[#3ba66d]' },
  'Resolved':     { bg: 'bg-[#e2ebf4]',                                       text: 'text-[#1d67b0]', dot: 'bg-[#2783de]' },
  'New':          { bg: 'bg-[#f5f0e5]',                                       text: 'text-[#655121]', dot: 'bg-[#e8a838]' },
  'Self Resolved':{ bg: 'bg-[#e9e4e3]',                                       text: 'text-[#6d3531]', dot: 'bg-[#e74c3c]' },
  'Re-open':      { bg: 'bg-[#e4efe9] border border-[rgba(42,83,60,0.1)]',   text: 'text-[#2a533c]', dot: 'bg-[#3ba66d]' },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES['Inactive']
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-px rounded-[3px] text-sm font-medium ${s.bg} ${s.text}`}>
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
      {status}
    </span>
  )
}

// ── Priority Badge ────────────────────────────────────────────────────────────
interface PriorityBadgeProps {
  priority: Priority | 'Complete'
  size?: 'default' | 'small'
}

const PRIORITY_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  Urgent:   { bg: 'bg-[#f9dcd9]', text: 'text-[#6d3531]', label: 'Urgent 🔥🔥' },
  High:     { bg: 'bg-[#f9dcd9]', text: 'text-[#6d3531]', label: 'High 🔥' },
  Medium:   { bg: 'bg-[#f2e3c2]', text: 'text-[#655121]', label: 'Medium' },
  Low:      { bg: 'bg-[#c4e4d3]', text: 'text-[#2a533c]', label: 'Low' },
  Complete: { bg: 'bg-[#e2ebf4]', text: 'text-[#1d67b0]', label: 'Complete' },
}

export function PriorityBadge({ priority, size = 'default' }: PriorityBadgeProps) {
  const s = PRIORITY_STYLES[priority] ?? PRIORITY_STYLES['Medium']
  const textSize = size === 'small' ? 'text-[12px] leading-[14px]' : 'text-sm leading-5'
  const padding = size === 'small' ? 'px-1 py-px' : 'px-1.5 py-px'
  return (
    <span className={`inline-flex items-center justify-center rounded-[3px] font-medium ${s.bg} ${s.text} ${textSize} ${padding}`}>
      {s.label}
    </span>
  )
}

// ── Workload Badge ────────────────────────────────────────────────────────────
type WorkloadLevel = 'Over' | 'High' | 'Medium' | 'Low'

interface WorkloadBadgeProps {
  workload: WorkloadLevel
}

const WORKLOAD_STYLES: Record<WorkloadLevel, { bg: string; text: string }> = {
  Over:   { bg: 'bg-[#f9dcd9]', text: 'text-[#6d3531]' },
  High:   { bg: 'bg-[#f9dcd9]', text: 'text-[#6d3531]' },
  Medium: { bg: 'bg-[#f2e3c2]', text: 'text-[#655121]' },
  Low:    { bg: 'bg-[#c4e4d3]', text: 'text-[#2a533c]' },
}

export function WorkloadBadge({ workload }: WorkloadBadgeProps) {
  const s = WORKLOAD_STYLES[workload] ?? WORKLOAD_STYLES['Medium']
  return (
    <span className={`inline-flex items-center justify-center px-1.5 py-px rounded-[3px] text-sm font-medium ${s.bg} ${s.text}`}>
      {workload}
    </span>
  )
}

// ── Role Badge ────────────────────────────────────────────────────────────────
type RoleType = 'Admin' | 'Administrator' | 'Head of Department' | 'Staff' | 'Viewer' | 'HR' | 'Senior Developer'

interface RoleBadgeProps {
  role: RoleType
}

const ROLE_STYLES: Record<RoleType, { bg: string; text: string }> = {
  'Admin':              { bg: 'bg-[#f2dae9]', text: 'text-[#7a2756]' },
  'Administrator':      { bg: 'bg-[#d4eff2]', text: 'text-[#186f72]' },
  'Head of Department': { bg: 'bg-[#d9def5]', text: 'text-[#3e4eaa]' },
  'Staff':              { bg: 'bg-[#f5c9ca]', text: 'text-[#532a2b]' },
  'Viewer':             { bg: 'bg-[#f2eebf]', text: 'text-[#8c8215]' },
  'HR':                 { bg: 'bg-[#c4e4d3]', text: 'text-[#2a533c]' },
  'Senior Developer':   { bg: 'bg-[#f7d8bf]', text: 'text-[#824815]' },
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const s = ROLE_STYLES[role]
  return (
    <span className={`inline-flex items-center justify-center px-1.5 py-px rounded-[3px] text-sm font-medium truncate max-w-[120px] ${s.bg} ${s.text}`}>
      {role}
    </span>
  )
}

// ── Request Type Badge ────────────────────────────────────────────────────────
type RequestType = 'Issue' | 'Question' | 'Request'

interface RequestTypeBadgeProps {
  type: RequestType
}

const REQUEST_STYLES: Record<RequestType, { bg: string; text: string }> = {
  Issue:    { bg: 'bg-[#f5c9ca]', text: 'text-[#532a2b]' },
  Question: { bg: 'bg-[#d9def5]', text: 'text-[#3e4eaa]' },
  Request:  { bg: 'bg-[#d4eff2]', text: 'text-[#186f72]' },
}

export function RequestTypeBadge({ type }: RequestTypeBadgeProps) {
  const s = REQUEST_STYLES[type]
  return (
    <span className={`inline-flex items-center justify-center px-1.5 py-px rounded-[3px] text-sm font-medium ${s.bg} ${s.text}`}>
      {type}
    </span>
  )
}
