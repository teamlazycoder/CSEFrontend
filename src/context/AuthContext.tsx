import { createContext, useContext, useState, type ReactNode } from 'react'

export type Role = 'student' | 'faculty' | 'hod'

export interface SessionUser {
  name: string
  email: string
  role: Role
  avatarInitials: string
}

interface AuthCtx {
  user: SessionUser | null
  login: (role: Role) => void
  logout: () => void
}

const AuthContext = createContext<AuthCtx | null>(null)

const DEMO_USERS: Record<Role, SessionUser> = {
  student: { name: 'Aarav Deshmukh', email: 'aarav.deshmukh@sggs.ac.in', role: 'student', avatarInitials: 'AD' },
  faculty: { name: 'Dr. Snehal Kulkarni', email: 'snehal.kulkarni@sggs.ac.in', role: 'faculty', avatarInitials: 'SK' },
  hod: { name: 'Dr. Ramesh Patwardhan', email: 'hod.cse@sggs.ac.in', role: 'hod', avatarInitials: 'RP' },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        login: (role) => setUser(DEMO_USERS[role]),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
