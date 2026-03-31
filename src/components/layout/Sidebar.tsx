import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  ListTodo,
  Ticket,
  BarChart2,
  Settings,
  ChevronDown,
  ChevronRight,
  Zap,
  Search,
  Command,
} from 'lucide-react'

const NAV_ITEMS = [
  { path: '/',          label: 'Dashboard',       icon: LayoutDashboard },
  { path: '/my-todo',   label: 'My To-Do',        icon: CheckSquare },
  { path: '/projects',  label: 'Projects',        icon: FolderKanban },
  {
    label: 'Task',
    icon: ListTodo,
    children: [
      { path: '/tasks',         label: 'Tasks' },
      { path: '/tasks/support', label: 'Support Task' },
    ],
  },
  { path: '/tickets',   label: 'Support Tickets', icon: Ticket },
  { path: '/reports',   label: 'Reports',         icon: BarChart2 },
  { path: '/settings',  label: 'Settings',        icon: Settings },
]

export function Sidebar() {
  const [taskOpen, setTaskOpen] = useState(true)

  return (
    <aside className="w-[286px] h-screen bg-white border-r border-gray-100 flex flex-col flex-shrink-0 overflow-y-auto scrollbar-thin">
      {/* Branding */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm">Paragon Group</span>
          <button className="ml-auto text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Company switcher */}
        <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 text-left group">
          <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">J</span>
          </div>
          <span className="text-sm text-gray-700 font-medium flex-1 truncate">Jessore Feed Ltd.</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>

        <div className="mt-2 border-t border-gray-100 pt-2" />
      </div>

      {/* Quick actions */}
      <div className="px-4 mb-3">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1 px-1">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-medium">Quick actions</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="bg-gray-100 text-gray-500 px-1 rounded text-[10px]">⌘K</kbd>
            <Search className="w-3 h-3" />
            <span className="text-gray-400">/</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          if (item.children) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setTaskOpen((o) => !o)}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium"
                >
                  <item.icon className="w-4 h-4 text-gray-400" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {taskOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  )}
                </button>
                {taskOpen && (
                  <div className="ml-6 mt-0.5 space-y-0.5">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-2 py-1.5 rounded-lg text-sm ${
                            isActive
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          const Icon = item.icon!
          return (
            <NavLink
              key={item.path}
              to={item.path!}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">Paragon v1.0</p>
      </div>
    </aside>
  )
}
