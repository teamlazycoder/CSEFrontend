import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import {
  BookOpen, StickyNote, CalendarDays, FileText, Wallet, Briefcase, Trophy, Code2, Award,
  FileEdit, LayoutGrid, Rocket, FolderKanban, Download, MessageSquare, AlertCircle, Medal,
  FlaskConical, Users, BarChart3, HelpCircle, UserCog, Bell, Megaphone, GraduationCap,
  FileCheck, Star, TrendingUp, FileBarChart, User,
} from 'lucide-react'

import { PublicLayout } from '@/components/layout/PublicLayout'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { ProtectedRoute } from '@/components/dashboard/ProtectedRoute'

import Home from '@/pages/Home'
const About = lazy(() => import('@/pages/About'))
const Academics = lazy(() => import('@/pages/Academics'))
const Faculty = lazy(() => import('@/pages/Faculty'))
const FacultyProfile = lazy(() => import('@/pages/FacultyProfile'))
const Research = lazy(() => import('@/pages/Research'))
const Laboratories = lazy(() => import('@/pages/Laboratories'))
const Placements = lazy(() => import('@/pages/Placements'))
const StudentLife = lazy(() => import('@/pages/StudentLife'))
const TechHub = lazy(() => import('@/pages/TechHub'))
const Alumni = lazy(() => import('@/pages/Alumni'))
const Events = lazy(() => import('@/pages/Events'))
const News = lazy(() => import('@/pages/News'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))

const StudentDashboard = lazy(() => import('@/pages/dashboard/student/StudentDashboard'))
const StudentOverview = lazy(() => import('@/pages/dashboard/student/Overview'))
const StudentAttendance = lazy(() => import('@/pages/dashboard/student/Attendance'))
const StudentResults = lazy(() => import('@/pages/dashboard/student/Results'))
const StudentAssignments = lazy(() => import('@/pages/dashboard/student/Assignments'))
const StudentProfile = lazy(() => import('@/pages/dashboard/student/Profile'))

const FacultyDashboard = lazy(() => import('@/pages/dashboard/faculty/FacultyDashboard'))
const FacultyOverview = lazy(() => import('@/pages/dashboard/faculty/Overview'))
const FacultyAttendance = lazy(() => import('@/pages/dashboard/faculty/Attendance'))
const FacultyLeave = lazy(() => import('@/pages/dashboard/faculty/Leave'))

const HodDashboard = lazy(() => import('@/pages/dashboard/hod/HodDashboard'))
const HodOverview = lazy(() => import('@/pages/dashboard/hod/Overview'))
const HodApprovals = lazy(() => import('@/pages/dashboard/hod/Approvals'))
const HodAnalytics = lazy(() => import('@/pages/dashboard/hod/Analytics'))

const DashboardSettings = lazy(() => import('@/pages/dashboard/Settings'))
const Placeholder = lazy(() => import('@/pages/dashboard/Placeholder'))

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { fontSize: '13px', borderRadius: '12px' } }} />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/faculty/:id" element={<FacultyProfile />} />
            <Route path="/research" element={<Research />} />
            <Route path="/laboratories" element={<Laboratories />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/tech-hub" element={<TechHub />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Student Dashboard */}
          <Route path="/dashboard/student" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>}>
            <Route index element={<StudentOverview />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="attendance" element={<StudentAttendance />} />
            <Route path="subjects" element={<Placeholder icon={BookOpen} title="Subjects" description="Enrolled subjects, credit structure, and course instructors for this semester." />} />
            <Route path="assignments" element={<StudentAssignments />} />
            <Route path="notes" element={<Placeholder icon={StickyNote} title="Notes" description="Lecture notes and study material shared by faculty across your subjects." />} />
            <Route path="timetable" element={<Placeholder icon={CalendarDays} title="Timetable" description="Your weekly lecture and lab schedule." />} />
            <Route path="results" element={<StudentResults />} />
            <Route path="transcript" element={<Placeholder icon={FileText} title="Transcript" description="Consolidated academic transcript across all completed semesters." />} />
            <Route path="leave" element={<Placeholder icon={CalendarDays} title="Leave Application" description="Submit and track leave requests, and view faculty approval status." />} />
            <Route path="fees" element={<Placeholder icon={Wallet} title="Fee Status" description="Semester fee breakdown, payment history, and dues." />} />
            <Route path="placement" element={<Placeholder icon={Briefcase} title="Placement Portal" description="Eligibility status, interview schedules, and company registrations." />} />
            <Route path="hackathons" element={<Placeholder icon={Trophy} title="Hackathons" description="Registered hackathons and your team submissions." />} />
            <Route path="coding-profiles" element={<Placeholder icon={Code2} title="Coding Profiles" description="Linked LeetCode, Codeforces, and GitHub profiles with contest history." />} />
            <Route path="certificates" element={<Placeholder icon={Award} title="Certificates" description="Upload and manage course and competition certificates." />} />
            <Route path="resume" element={<Placeholder icon={FileEdit} title="Resume Builder" description="Build and export a placement-ready resume from your profile data." />} />
            <Route path="portfolio" element={<Placeholder icon={LayoutGrid} title="Portfolio" description="Your public-facing portfolio page, built from Tech Hub projects." />} />
            <Route path="tech-hub" element={<Placeholder icon={Rocket} title="Tech Hub" description="Manage your submitted Tech Hub projects from here, or visit the public Tech Hub." />} />
            <Route path="projects" element={<Placeholder icon={FolderKanban} title="My Projects" description="All course and personal projects tied to your student record." />} />
            <Route path="downloads" element={<Placeholder icon={Download} title="Downloads" description="Downloadable resources: syllabi, formats, and department circulars." />} />
            <Route path="forum" element={<Placeholder icon={MessageSquare} title="Discussion Forum" description="Ask questions and discuss coursework with peers and faculty." />} />
            <Route path="complaints" element={<Placeholder icon={AlertCircle} title="Complaint Box" description="Submit grievances directly to department administration, confidentially." />} />
            <Route path="achievements" element={<Placeholder icon={Medal} title="Achievements" description="A running record of your academic and extracurricular achievements." />} />
            <Route path="research" element={<Placeholder icon={FlaskConical} title="Research Participation" description="Track your involvement in faculty-led research projects and papers." />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Faculty Dashboard */}
          <Route path="/dashboard/faculty" element={<ProtectedRoute role="faculty"><FacultyDashboard /></ProtectedRoute>}>
            <Route index element={<FacultyOverview />} />
            <Route path="profile" element={<Placeholder icon={User} title="Faculty Profile" description="Your public faculty profile, editable from here." />} />
            <Route path="classes" element={<Placeholder icon={Users} title="Classes" description="All classes assigned to you this semester." />} />
            <Route path="subjects" element={<Placeholder icon={BookOpen} title="Subjects" description="Subjects you're teaching, with syllabus and course outcomes." />} />
            <Route path="attendance" element={<FacultyAttendance />} />
            <Route path="assignments" element={<Placeholder icon={Award} title="Assignment Management" description="Create, distribute, and grade assignments across your classes." />} />
            <Route path="performance" element={<Placeholder icon={BarChart3} title="Student Performance" description="Class-wide performance analytics and grade distributions." />} />
            <Route path="marks" element={<Placeholder icon={FileText} title="Internal Marks" description="Enter and finalize internal assessment marks." />} />
            <Route path="question-bank" element={<Placeholder icon={HelpCircle} title="Question Bank" description="A shared repository of exam and assignment questions." />} />
            <Route path="notes" element={<Placeholder icon={StickyNote} title="Lecture Notes" description="Upload and manage lecture notes for your subjects." />} />
            <Route path="leave" element={<FacultyLeave />} />
            <Route path="research" element={<Placeholder icon={FlaskConical} title="Research Projects" description="Your active and past funded research projects." />} />
            <Route path="publications" element={<Placeholder icon={Award} title="Publications" description="A complete list of your published papers and citations." />} />
            <Route path="mentoring" element={<Placeholder icon={UserCog} title="Student Mentoring" description="Students currently under your academic and project mentorship." />} />
            <Route path="recommendations" element={<Placeholder icon={Briefcase} title="Placement Recommendations" description="Recommend students for specific placement opportunities." />} />
            <Route path="notifications" element={<Placeholder icon={Bell} title="Notifications" description="All department and student-related notifications." />} />
            <Route path="downloads" element={<Placeholder icon={Download} title="Downloads" description="Departmental templates, forms, and resources." />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* HOD Dashboard */}
          <Route path="/dashboard/hod" element={<ProtectedRoute role="hod"><HodDashboard /></ProtectedRoute>}>
            <Route index element={<HodOverview />} />
            <Route path="profile" element={<Placeholder icon={User} title="HOD Profile" description="Your executive profile and departmental role details." />} />
            <Route path="analytics" element={<HodAnalytics />} />
            <Route path="approvals" element={<HodApprovals />} />
            <Route path="faculty" element={<Placeholder icon={Users} title="Faculty Management" description="Manage faculty records, assignments, and recruitment." />} />
            <Route path="students" element={<Placeholder icon={GraduationCap} title="Student Management" description="Department-wide student records and academic standing." />} />
            <Route path="timetable" element={<Placeholder icon={CalendarDays} title="Timetable Approval" description="Review and approve semester timetables submitted by coordinators." />} />
            <Route path="results" element={<Placeholder icon={FileCheck} title="Result Approval" description="Final sign-off on semester results before publication." />} />
            <Route path="notices" element={<Placeholder icon={Megaphone} title="Notices & Circulars" description="Publish and manage department-wide notices." />} />
            <Route path="funding" element={<Placeholder icon={FlaskConical} title="Research Funding" description="Track grant applications and funding utilization." />} />
            <Route path="faculty-performance" element={<Placeholder icon={Star} title="Faculty Performance" description="Performance review data across all faculty members." />} />
            <Route path="alumni-analytics" element={<Placeholder icon={TrendingUp} title="Alumni Analytics" description="Career trajectory analytics across graduating batches." />} />
            <Route path="reports" element={<Placeholder icon={FileBarChart} title="Reports" description="Generate and export department reports for accreditation bodies." />} />
            <Route path="downloads" element={<Placeholder icon={Download} title="Downloads" description="Administrative documents and report exports." />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
