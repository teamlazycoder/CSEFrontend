import {
  LayoutDashboard, User, CheckSquare, Users, GraduationCap, CalendarDays, FileCheck, Megaphone,
  FlaskConical, Star, TrendingUp, FileBarChart, Download, Settings, BarChart3,
} from 'lucide-react'
import { DashboardLayout, type NavSection } from '@/components/dashboard/DashboardLayout'

const sections: NavSection[] = [
  { title: 'Overview', items: [
    { label: 'Dashboard', path: '/dashboard/hod', icon: LayoutDashboard },
    { label: 'Profile', path: '/dashboard/hod/profile', icon: User },
    { label: 'Analytics', path: '/dashboard/hod/analytics', icon: BarChart3 },
  ]},
  { title: 'Approvals', items: [
    { label: 'Pending Approvals', path: '/dashboard/hod/approvals', icon: CheckSquare },
    { label: 'Faculty Management', path: '/dashboard/hod/faculty', icon: Users },
    { label: 'Student Management', path: '/dashboard/hod/students', icon: GraduationCap },
    { label: 'Timetable Approval', path: '/dashboard/hod/timetable', icon: CalendarDays },
    { label: 'Result Approval', path: '/dashboard/hod/results', icon: FileCheck },
  ]},
  { title: 'Department', items: [
    { label: 'Notices & Circulars', path: '/dashboard/hod/notices', icon: Megaphone },
    { label: 'Research Funding', path: '/dashboard/hod/funding', icon: FlaskConical },
    { label: 'Faculty Performance', path: '/dashboard/hod/faculty-performance', icon: Star },
    { label: 'Alumni Analytics', path: '/dashboard/hod/alumni-analytics', icon: TrendingUp },
    { label: 'Reports', path: '/dashboard/hod/reports', icon: FileBarChart },
  ]},
  { title: 'System', items: [
    { label: 'Downloads', path: '/dashboard/hod/downloads', icon: Download },
    { label: 'Settings', path: '/dashboard/hod/settings', icon: Settings },
  ]},
]

export default function HodDashboard() {
  return <DashboardLayout sections={sections} />
}
