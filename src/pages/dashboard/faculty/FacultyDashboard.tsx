import {
  LayoutDashboard, User, Users, BookOpen, CalendarCheck, ClipboardList, BarChart3, FileText,
  HelpCircle, StickyNote, CalendarDays, FlaskConical, Award, UserCog, Briefcase, Bell, Download, Settings,
} from 'lucide-react'
import { DashboardLayout, type NavSection } from '@/components/dashboard/DashboardLayout'

const sections: NavSection[] = [
  { title: 'Overview', items: [
    { label: 'Dashboard', path: '/dashboard/faculty', icon: LayoutDashboard },
    { label: 'Profile', path: '/dashboard/faculty/profile', icon: User },
  ]},
  { title: 'Teaching', items: [
    { label: 'Classes', path: '/dashboard/faculty/classes', icon: Users },
    { label: 'Subjects', path: '/dashboard/faculty/subjects', icon: BookOpen },
    { label: 'Attendance', path: '/dashboard/faculty/attendance', icon: CalendarCheck },
    { label: 'Assignments', path: '/dashboard/faculty/assignments', icon: ClipboardList },
    { label: 'Student Performance', path: '/dashboard/faculty/performance', icon: BarChart3 },
    { label: 'Internal Marks', path: '/dashboard/faculty/marks', icon: FileText },
    { label: 'Question Bank', path: '/dashboard/faculty/question-bank', icon: HelpCircle },
    { label: 'Lecture Notes', path: '/dashboard/faculty/notes', icon: StickyNote },
    { label: 'Leave Management', path: '/dashboard/faculty/leave', icon: CalendarDays },
  ]},
  { title: 'Research', items: [
    { label: 'Research Projects', path: '/dashboard/faculty/research', icon: FlaskConical },
    { label: 'Publications', path: '/dashboard/faculty/publications', icon: Award },
    { label: 'Student Mentoring', path: '/dashboard/faculty/mentoring', icon: UserCog },
    { label: 'Placement Recommendations', path: '/dashboard/faculty/recommendations', icon: Briefcase },
  ]},
  { title: 'System', items: [
    { label: 'Notifications', path: '/dashboard/faculty/notifications', icon: Bell },
    { label: 'Downloads', path: '/dashboard/faculty/downloads', icon: Download },
    { label: 'Settings', path: '/dashboard/faculty/settings', icon: Settings },
  ]},
]

export default function FacultyDashboard() {
  return <DashboardLayout sections={sections} />
}
