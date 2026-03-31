import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Dashboard } from './pages/Dashboard'
import { TaskListing } from './pages/TaskListing'
import { TaskDescription } from './pages/TaskDescription'
import { SubTaskDescription } from './pages/SubTaskDescription'
import { SubTaskKanban } from './pages/SubTaskKanban'
import { CreateTask } from './pages/CreateTask'
import { Placeholder } from './pages/Placeholder'

// Auth pages
import { Login } from './pages/auth/Login'
import { LoginSuccess } from './pages/auth/LoginSuccess'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { CheckInbox } from './pages/auth/CheckInbox'
import { CreateNewPassword } from './pages/auth/CreateNewPassword'
import { PasswordChanged } from './pages/auth/PasswordChanged'
import { DefaultWorkspace } from './pages/auth/DefaultWorkspace'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Auth routes (no AppShell) ── */}
        <Route path="/auth/login"            element={<Login />} />
        <Route path="/auth/login-success"    element={<LoginSuccess />} />
        <Route path="/auth/forgot-password"  element={<ForgotPassword />} />
        <Route path="/auth/check-inbox"      element={<CheckInbox />} />
        <Route path="/auth/new-password"     element={<CreateNewPassword />} />
        <Route path="/auth/password-changed" element={<PasswordChanged />} />
        <Route path="/auth/workspace"        element={<DefaultWorkspace />} />

        {/* ── App routes (inside AppShell) ── */}
        <Route path="/*" element={
          <AppShell>
            <Routes>
              <Route path="/"       element={<Dashboard />} />

              {/* ── Task routes ── */}
              {/* More specific routes must come before /tasks/:id */}
              <Route path="/tasks/create"           element={<CreateTask />} />
              <Route path="/tasks/subtask/create"   element={<CreateTask />} />
              <Route path="/tasks/:id/edit"         element={<CreateTask />} />
              <Route path="/tasks/:id/subtasks"     element={<SubTaskKanban />} />
              <Route path="/tasks/:taskId/subtask/:subId" element={<SubTaskDescription />} />
              <Route path="/tasks/:id"              element={<TaskDescription />} />
              <Route path="/tasks"                  element={<TaskListing />} />
              <Route path="/tasks/support"          element={<Placeholder title="Support Tasks"   breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Support Task' }]} />} />

              {/* ── Other routes ── */}
              <Route path="/my-todo"    element={<Placeholder title="My To-Do"        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'My To-Do' }]} />} />
              <Route path="/projects"   element={<Placeholder title="Projects"        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Projects' }]} />} />
              <Route path="/projects/:id" element={<SubTaskKanban />} />
              <Route path="/tickets"    element={<Placeholder title="Support Tickets" breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Support Tickets' }]} />} />
              <Route path="/reports"    element={<Placeholder title="Reports"         breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Reports' }]} />} />
              <Route path="/settings"   element={<Placeholder title="Settings"        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Settings' }]} />} />
              <Route path="*"           element={<Navigate to="/" replace />} />
            </Routes>
          </AppShell>
        } />
      </Routes>
    </BrowserRouter>
  )
}
