import React from 'react'
import { TrendingUp, TrendingDown, Users, ClipboardList, Building2 } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { SimpleDonut } from '../components/ui/DonutChart'
import { WorkloadBadge, PriorityBadge } from '../components/ui/Badge'
import { Avatar } from '../components/ui/AvatarStack'
import { TEAM_ROWS, PRIORITY_ROWS } from '../data/mockData'

function StatCard({
  title,
  value,
  trend,
  trendUp,
  trendLabel,
  icon,
  iconBg,
}: {
  title: string
  value: string
  trend: string
  trendUp: boolean
  trendLabel: string
  icon: React.ReactNode
  iconBg: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex-1">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        {trendUp ? (
          <TrendingUp className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-red-400" />
        )}
        <span className={trendUp ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>{trend}</span>
        <span className="text-gray-400">{trendLabel}</span>
      </div>
    </div>
  )
}

function DonutCard({
  title,
  value,
  total,
  color,
  trend,
  trendLabel,
}: {
  title: string
  value: number
  total: number
  color: string
  trend: string
  trendLabel: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex-1">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <button className="text-xs text-blue-500 font-medium hover:underline">See all</button>
      </div>
      <div className="flex justify-center mb-4">
        <SimpleDonut value={value} total={total} color={color} label={title.split(' ')[0] + ' Task'} size={120} />
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
        <span className="text-green-600 font-medium">{trend}</span>
        <span className="text-gray-400">{trendLabel}</span>
      </div>
    </div>
  )
}

export function Dashboard() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        title="Task & Ticket Management"
        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Dashboard' }]}
      />

      <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
        {/* Stat cards */}
        <div className="flex gap-4">
          <StatCard
            title="Total User"
            value="3,066"
            trend="8.5%"
            trendUp={true}
            trendLabel="Up from last month"
            icon={<Users className="w-6 h-6 text-blue-400" />}
            iconBg="bg-blue-50"
          />
          <StatCard
            title="Total task"
            value="82"
            trend="1.3%"
            trendUp={true}
            trendLabel="Up from past week progress"
            icon={<ClipboardList className="w-6 h-6 text-green-400" />}
            iconBg="bg-green-50"
          />
          <StatCard
            title="Total Department"
            value="07"
            trend="4.3%"
            trendUp={false}
            trendLabel="Down from last year"
            icon={<Building2 className="w-6 h-6 text-red-400" />}
            iconBg="bg-red-50"
          />
        </div>

        {/* Donut charts */}
        <div className="flex gap-4">
          <DonutCard title="Active Tasks"    value={67} total={100} color="#22c55e" trend="8.2%" trendLabel="Up from last month" />
          <DonutCard title="Pending Tasks"   value={52} total={100} color="#f59e0b" trend="5.7%" trendLabel="Up from last month" />
          <DonutCard title="Completed Tasks" value={92} total={100} color="#3b82f6" trend="5.7%" trendLabel="Up from last month" />
        </div>

        {/* Bottom tables */}
        <div className="flex gap-4">
          {/* Number of Team */}
          <div className="bg-white rounded-xl border border-gray-100 flex-1 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
              <div>
                <p className="text-sm font-semibold text-gray-800">Number of Team</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-2xl font-bold text-gray-900">12</span>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>4.3% Up work load</span>
                  </div>
                </div>
              </div>
              <button className="text-xs text-blue-500 font-medium hover:underline">See all</button>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-50">
                  {['Team name', 'Total task', 'Completed', 'Work load statues'].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-gray-500 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEAM_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-700 font-medium">{row.name}</td>
                    <td className="px-4 py-2.5 text-gray-500">{row.totalTasks}</td>
                    <td className="px-4 py-2.5 text-gray-500">{row.completed}</td>
                    <td className="px-4 py-2.5"><WorkloadBadge workload={row.workload} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Priority Distribution */}
          <div className="bg-white rounded-xl border border-gray-100 flex-1 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
              <div>
                <p className="text-sm font-semibold text-gray-800">Priority Distribution</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-2xl font-bold text-gray-900">55</span>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>Total member</span>
                  </div>
                </div>
              </div>
              <button className="text-xs text-blue-500 font-medium hover:underline">See all</button>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-50">
                  {['Employee name', 'Role', 'Team name', 'Priority', 'Action'].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-gray-500 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRIORITY_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <Avatar assignee={row.employee} size="sm" />
                        <span className="text-gray-700 font-medium">{row.employee.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-gray-500">{row.role}</td>
                    <td className="px-4 py-2.5 text-gray-500">{row.teamName}</td>
                    <td className="px-4 py-2.5"><PriorityBadge priority={row.priority} /></td>
                    <td className="px-4 py-2.5">
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
