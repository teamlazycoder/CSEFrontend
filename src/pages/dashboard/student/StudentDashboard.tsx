import {
  LayoutDashboard, User, CalendarCheck, BookOpen, ClipboardList, StickyNote, CalendarDays,
  GraduationCap, FileText, Wallet, Briefcase, Trophy, Code2, Award, FileEdit, LayoutGrid,
  Rocket, FolderKanban, Download, MessageSquare, AlertCircle, Medal, FlaskConical, Settings,
} from 'lucide-react'
import { DashboardLayout, type NavSection } from '@/components/dashboard/DashboardLayout'

const sections: NavSection[] = [
  { title: 'Overview', items: [
    { label: 'Dashboard', path: '/dashboard/student', icon: LayoutDashboard },
    { label: 'Profile', path: '/dashboard/student/profile', icon: User },
  ]},
  { title: 'Academics', items: [
    { label: 'Attendance', path: '/dashboard/student/attendance', icon: CalendarCheck },
    { label: 'Subjects', path: '/dashboard/student/subjects', icon: BookOpen },
    { label: 'Assignments', path: '/dashboard/student/assignments', icon: ClipboardList },
    { label: 'Notes', path: '/dashboard/student/notes', icon: StickyNote },
    { label: 'Timetable', path: '/dashboard/student/timetable', icon: CalendarDays },
    { label: 'Results & CGPA', path: '/dashboard/student/results', icon: GraduationCap },
    { label: 'Transcript', path: '/dashboard/student/transcript', icon: FileText },
    { label: 'Leave Application', path: '/dashboard/student/leave', icon: CalendarDays },
    { label: 'Fee Status', path: '/dashboard/student/fees', icon: Wallet },
  ]},
  { title: 'Career', items: [
    { label: 'Placement Portal', path: '/dashboard/student/placement', icon: Briefcase },
    { label: 'Hackathons', path: '/dashboard/student/hackathons', icon: Trophy },
    { label: 'Coding Profiles', path: '/dashboard/student/coding-profiles', icon: Code2 },
    { label: 'Certificates', path: '/dashboard/student/certificates', icon: Award },
    { label: 'Resume Builder', path: '/dashboard/student/resume', icon: FileEdit },
    { label: 'Portfolio', path: '/dashboard/student/portfolio', icon: LayoutGrid },
  ]},
  { title: 'Innovation', items: [
    { label: 'Tech Hub', path: '/dashboard/student/tech-hub', icon: Rocket },
    { label: 'My Projects', path: '/dashboard/student/projects', icon: FolderKanban },
    { label: 'Downloads', path: '/dashboard/student/downloads', icon: Download },
  ]},
  { title: 'Community', items: [
    { label: 'Discussion Forum', path: '/dashboard/student/forum', icon: MessageSquare },
    { label: 'Complaint Box', path: '/dashboard/student/complaints', icon: AlertCircle },
    { label: 'Achievements', path: '/dashboard/student/achievements', icon: Medal },
    { label: 'Research Participation', path: '/dashboard/student/research', icon: FlaskConical },
  ]},
  { title: 'System', items: [
    { label: 'Settings', path: '/dashboard/student/settings', icon: Settings },
  ]},
]

export default function StudentDashboard() {
  return <DashboardLayout sections={sections} />
}
