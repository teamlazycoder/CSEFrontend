export const DEPT = {
  name: 'Computer Science & Engineering',
  institute: 'Shri Guru Gobind Singhji Institute of Engineering & Technology',
  short: 'SGGS Nanded',
  motto: 'Compute. Create. Contribute.',
  founded: 1981,
}

export const stats = [
  { label: 'Years of Excellence', value: 44, suffix: '+' },
  { label: 'Faculty Members', value: 32, suffix: '' },
  { label: 'Students Enrolled', value: 1180, suffix: '+' },
  { label: 'Research Papers', value: 640, suffix: '+' },
  { label: 'Patents Filed', value: 28, suffix: '' },
  { label: 'Placement Rate', value: 96, suffix: '%' },
]

export const programs = [
  {
    id: 'btech',
    level: 'Undergraduate',
    title: 'B.Tech in Computer Science & Engineering',
    duration: '4 Years',
    intake: 120,
    desc: 'A rigorous, project-driven foundation spanning algorithms, systems, AI, and software engineering, built for students who want to build things that matter.',
  },
  {
    id: 'mtech',
    level: 'Postgraduate',
    title: 'M.Tech in Computer Science & Engineering',
    duration: '2 Years',
    intake: 24,
    desc: 'Advanced specialization tracks in AI/ML, Data Science, and Cybersecurity with a thesis-driven research component supervised by active faculty.',
  },
  {
    id: 'phd',
    level: 'Doctoral',
    title: 'Ph.D. in Computer Science & Engineering',
    duration: '3–5 Years',
    intake: 10,
    desc: 'Full-time and part-time doctoral research across ten active research groups, with institute fellowships and industry-sponsored projects.',
  },
]

export const researchDomains = [
  { id: 'ai', name: 'Artificial Intelligence', papers: 84, faculty: 6, icon: 'BrainCircuit' },
  { id: 'ml', name: 'Machine Learning', papers: 96, faculty: 7, icon: 'Sparkles' },
  { id: 'security', name: 'Cyber Security', papers: 52, faculty: 4, icon: 'ShieldCheck' },
  { id: 'cloud', name: 'Cloud Computing', papers: 38, faculty: 3, icon: 'Cloud' },
  { id: 'blockchain', name: 'Blockchain', papers: 21, faculty: 2, icon: 'Link2' },
  { id: 'iot', name: 'Internet of Things', papers: 44, faculty: 4, icon: 'Cpu' },
  { id: 'data', name: 'Data Science', papers: 61, faculty: 5, icon: 'Database' },
  { id: 'vision', name: 'Computer Vision', papers: 47, faculty: 4, icon: 'ScanEye' },
  { id: 'robotics', name: 'Robotics', papers: 19, faculty: 2, icon: 'Bot' },
  { id: 'hpc', name: 'High Performance Computing', papers: 27, faculty: 3, icon: 'Gauge' },
]

export const faculty = [
  {
    id: 'f1', name: 'Dr. Ramesh Patwardhan', designation: 'Professor & Head of Department',
    qualification: 'Ph.D. (IIT Bombay)', experience: '24 Years', areas: ['Distributed Systems', 'Cloud Computing'],
    publications: 78, projects: 9, patents: 4, email: 'hod.cse@sggs.ac.in',
  },
  {
    id: 'f2', name: 'Dr. Snehal Kulkarni', designation: 'Professor', qualification: 'Ph.D. (IIT Delhi)',
    experience: '19 Years', areas: ['Machine Learning', 'Computer Vision'], publications: 63, projects: 7, patents: 3,
    email: 'snehal.kulkarni@sggs.ac.in',
  },
  {
    id: 'f3', name: 'Dr. Abhijit Rao', designation: 'Associate Professor', qualification: 'Ph.D. (IIT Kharagpur)',
    experience: '15 Years', areas: ['Cyber Security', 'Cryptography'], publications: 41, projects: 5, patents: 2,
    email: 'abhijit.rao@sggs.ac.in',
  },
  {
    id: 'f4', name: 'Dr. Meera Joshi', designation: 'Associate Professor', qualification: 'Ph.D. (IIT Madras)',
    experience: '13 Years', areas: ['Natural Language Processing', 'AI'], publications: 37, projects: 4, patents: 1,
    email: 'meera.joshi@sggs.ac.in',
  },
  {
    id: 'f5', name: 'Dr. Nikhil Bansode', designation: 'Assistant Professor', qualification: 'Ph.D. (VNIT Nagpur)',
    experience: '9 Years', areas: ['IoT', 'Embedded Systems'], publications: 22, projects: 3, patents: 1,
    email: 'nikhil.bansode@sggs.ac.in',
  },
  {
    id: 'f6', name: 'Dr. Priya Deshpande', designation: 'Assistant Professor', qualification: 'Ph.D. (COEP Pune)',
    experience: '7 Years', areas: ['Data Science', 'Big Data'], publications: 18, projects: 3, patents: 0,
    email: 'priya.deshpande@sggs.ac.in',
  },
  {
    id: 'f7', name: 'Dr. Sameer Kale', designation: 'Assistant Professor', qualification: 'Ph.D. (IIT Bombay)',
    experience: '6 Years', areas: ['Blockchain', 'Distributed Ledgers'], publications: 14, projects: 2, patents: 1,
    email: 'sameer.kale@sggs.ac.in',
  },
  {
    id: 'f8', name: 'Dr. Ananya Ghosh', designation: 'Assistant Professor', qualification: 'Ph.D. (IIIT Hyderabad)',
    experience: '5 Years', areas: ['Robotics', 'Computer Vision'], publications: 11, projects: 2, patents: 0,
    email: 'ananya.ghosh@sggs.ac.in',
  },
]

export const labs = [
  { id: 'prog', name: 'Programming Lab', capacity: 60, incharge: 'Dr. Priya Deshpande', software: ['GCC', 'VS Code', 'Python 3.12'], equipment: '60 workstations, i7, 16GB RAM' },
  { id: 'net', name: 'Networks Lab', capacity: 40, incharge: 'Dr. Nikhil Bansode', software: ['Cisco Packet Tracer', 'Wireshark'], equipment: 'Cisco routers & switches, structured cabling rig' },
  { id: 'os', name: 'Operating Systems Lab', capacity: 60, incharge: 'Dr. Abhijit Rao', software: ['Linux (Ubuntu)', 'QEMU', 'VirtualBox'], equipment: '60 workstations with dual-boot environments' },
  { id: 'db', name: 'Database Lab', capacity: 60, incharge: 'Dr. Priya Deshpande', software: ['PostgreSQL', 'MongoDB', 'Oracle'], equipment: '60 workstations, dedicated DB server' },
  { id: 'se', name: 'Software Engineering Lab', capacity: 50, incharge: 'Dr. Meera Joshi', software: ['Jira', 'Git', 'Figma'], equipment: '50 workstations, agile studio wall' },
  { id: 'ai', name: 'AI Lab', capacity: 40, incharge: 'Dr. Snehal Kulkarni', software: ['PyTorch', 'TensorFlow', 'CUDA 12'], equipment: '4x NVIDIA A100 GPU workstations' },
  { id: 'ml', name: 'ML Lab', capacity: 40, incharge: 'Dr. Meera Joshi', software: ['scikit-learn', 'Jupyter', 'MATLAB'], equipment: '40 workstations, GPU cluster access' },
  { id: 'cloud', name: 'Cloud Lab', capacity: 30, incharge: 'Dr. Ramesh Patwardhan', software: ['AWS Academy', 'Docker', 'Kubernetes'], equipment: 'On-prem OpenStack cluster' },
  { id: 'cyber', name: 'Cyber Security Lab', capacity: 30, incharge: 'Dr. Abhijit Rao', software: ['Kali Linux', 'Metasploit', 'Burp Suite'], equipment: 'Isolated pen-testing network range' },
  { id: 'iot', name: 'IoT Lab', capacity: 30, incharge: 'Dr. Nikhil Bansode', software: ['Arduino IDE', 'Node-RED'], equipment: 'ESP32 kits, sensor arrays, 3D printer' },
]

export const recruiters = ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Adobe', 'Atlassian', 'Barclays', 'TCS', 'Infosys', 'Cisco', 'Qualcomm', 'Deloitte']

export const placementStats = {
  highest: 62, average: 14.2, median: 11.8, offers: 214, internships: 168, eligiblePool: 224,
}

export const placementTrend = [
  { year: '2020', average: 8.4, highest: 32 },
  { year: '2021', average: 9.6, highest: 41 },
  { year: '2022', average: 11.1, highest: 48 },
  { year: '2023', average: 12.5, highest: 55 },
  { year: '2024', average: 13.4, highest: 58 },
  { year: '2025', average: 14.2, highest: 62 },
]

export const events = [
  { id: 'e1', title: 'HackNanded 6.0', type: 'Hackathon', date: '2026-09-12', desc: '36-hour national-level hackathon with tracks in AI, Fintech, and Climate Tech.' },
  { id: 'e2', title: 'Systems & Security Seminar', type: 'Seminar', date: '2026-08-22', desc: 'Guest lecture by a Principal Engineer from Cloudflare on DDoS mitigation at scale.' },
  { id: 'e3', title: 'Workshop: LLM Fine-Tuning', type: 'Workshop', date: '2026-08-30', desc: 'Hands-on workshop covering parameter-efficient fine-tuning techniques.' },
  { id: 'e4', title: 'CSI Annual Conference', type: 'Conference', date: '2026-10-05', desc: 'Department chapter of the Computer Society of India hosts its annual research symposium.' },
]

export const news = [
  { id: 'n1', title: 'Department secures NBA accreditation for the third consecutive cycle', date: '2026-07-18', category: 'Accreditation' },
  { id: 'n2', title: 'Merit scholarships announced for AY 2026-27', date: '2026-07-10', category: 'Scholarship' },
  { id: 'n3', title: 'Final-year student team wins Smart India Hackathon', date: '2026-06-28', category: 'Achievement' },
  { id: 'n4', title: 'Recruitment drive: Two faculty positions open in AI/ML', date: '2026-06-15', category: 'Recruitment' },
  { id: 'n5', title: 'End-semester examination schedule released', date: '2026-06-02', category: 'Exam Notice' },
]

export const testimonials = [
  { name: 'Rhea Kulkarni', role: 'SDE II, Google · Batch of 2022', quote: 'The systems-first curriculum here meant I walked into Google interviews already thinking the way the interviewers wanted me to.' },
  { name: 'Vivaan Shah', role: 'Founder, Loopstack · Batch of 2019', quote: 'The Tech Hub gave me my first real users. I built and shipped three projects before I ever wrote a résumé.' },
  { name: 'Sanika Patil', role: 'ML Researcher, Adobe · Batch of 2021', quote: 'Faculty treated undergrad research seriously. My first paper was published in my third year.' },
]

export const alumni = [
  { id: 'a1', name: 'Rhea Kulkarni', batch: 2022, company: 'Google', role: 'SDE II', package: '₹62 LPA' },
  { id: 'a2', name: 'Vivaan Shah', batch: 2019, company: 'Loopstack (Founder)', role: 'CEO', package: '—' },
  { id: 'a3', name: 'Sanika Patil', batch: 2021, company: 'Adobe', role: 'ML Researcher', package: '₹41 LPA' },
  { id: 'a4', name: 'Aditya Menon', batch: 2020, company: 'Stanford University', role: 'Ph.D. Candidate', package: 'Higher Studies' },
  { id: 'a5', name: 'Ishaan Verma', batch: 2018, company: 'Microsoft', role: 'Senior SDE', package: '₹55 LPA' },
  { id: 'a6', name: 'Neha Kale', batch: 2023, company: 'Goldman Sachs', role: 'Technology Analyst', package: '₹38 LPA' },
]

export const chapters = [
  { id: 'csi', name: 'CSI Student Chapter', members: 210, desc: 'The largest technical body on campus, running weekly workshops and the annual conference.' },
  { id: 'acm', name: 'ACM Student Chapter', members: 140, desc: 'Competitive programming, research reading groups, and the ACM-ICPC prep track.' },
  { id: 'ieee', name: 'IEEE Student Branch', members: 165, desc: 'Hardware-adjacent projects, IEEEXtreme, and paper-writing mentorship.' },
  { id: 'gdg', name: 'Google Developer Group', members: 190, desc: 'Study jams, Solution Challenge teams, and cloud certification bootcamps.' },
  { id: 'coding', name: 'Coding Club', members: 260, desc: 'Weekly contests mirroring Codeforces and LeetCode formats, open to all years.' },
]

export const techHubProjects = [
  { id: 'p1', title: 'CampusPulse', team: ['Aarav Deshmukh', 'Isha Nair'], mentor: 'Dr. Priya Deshpande', stack: ['React', 'FastAPI', 'PostgreSQL'], category: 'Web App', status: 'Live', likes: 128, github: '#', demo: '#' },
  { id: 'p2', title: 'PathFinder AR', team: ['Rohan Iyer'], mentor: 'Dr. Ananya Ghosh', stack: ['Unity', 'ARCore'], category: 'AR/Robotics', status: 'In Progress', likes: 76, github: '#', demo: '#' },
  { id: 'p3', title: 'SecureVote', team: ['Kavya Reddy', 'Dev Patel', 'Om Sable'], mentor: 'Dr. Abhijit Rao', stack: ['Solidity', 'Next.js'], category: 'Blockchain', status: 'Live', likes: 94, github: '#', demo: '#' },
  { id: 'p4', title: 'CropSense IoT', team: ['Ananya Bhosale'], mentor: 'Dr. Nikhil Bansode', stack: ['ESP32', 'Node-RED', 'Flutter'], category: 'IoT', status: 'Live', likes: 61, github: '#', demo: '#' },
  { id: 'p5', title: 'LectureLens', team: ['Sahil Wagh', 'Prisha Kadam'], mentor: 'Dr. Meera Joshi', stack: ['Whisper', 'React'], category: 'AI', status: 'In Progress', likes: 103, github: '#', demo: '#' },
  { id: 'p6', title: 'MediQueue', team: ['Yash Chavan'], mentor: 'Dr. Snehal Kulkarni', stack: ['React Native', 'Firebase'], category: 'Mobile', status: 'Live', likes: 58, github: '#', demo: '#' },
]

export const studentAttendance = [
  { subject: 'Advanced Algorithms', attended: 34, total: 38 },
  { subject: 'Operating Systems', attended: 30, total: 36 },
  { subject: 'Computer Networks', attended: 33, total: 35 },
  { subject: 'Machine Learning', attended: 28, total: 34 },
  { subject: 'Software Engineering', attended: 32, total: 33 },
]

export const studentResults = [
  { sem: 1, sgpa: 8.4 }, { sem: 2, sgpa: 8.6 }, { sem: 3, sgpa: 8.9 },
  { sem: 4, sgpa: 8.7 }, { sem: 5, sgpa: 9.1 }, { sem: 6, sgpa: 9.0 },
]

export const studentAssignments = [
  { id: 'as1', subject: 'Machine Learning', title: 'Assignment 4 — Gradient Boosting', due: '2026-08-10', status: 'Pending' },
  { id: 'as2', subject: 'Operating Systems', title: 'Lab Report 6 — Scheduling Algorithms', due: '2026-08-06', status: 'Submitted' },
  { id: 'as3', subject: 'Computer Networks', title: 'Assignment 3 — Routing Protocols', due: '2026-08-14', status: 'Pending' },
  { id: 'as4', subject: 'Advanced Algorithms', title: 'Problem Set 5 — Dynamic Programming', due: '2026-07-30', status: 'Graded' },
]

export const departmentOverview = {
  students: 1180, faculty: 32, staff: 14, avgAttendance: 87, placementRate: 96, budgetUtilized: 78,
}

export const hodApprovals = [
  { id: 'ap1', type: 'Faculty Leave', name: 'Dr. Nikhil Bansode', detail: 'Conference travel — 3 days', status: 'Pending' },
  { id: 'ap2', type: 'Student Leave', name: 'Aarav Deshmukh', detail: 'Medical leave — 2 days', status: 'Pending' },
  { id: 'ap3', type: 'Result Approval', name: 'Sem 5 — ML', detail: 'Internal marks finalization', status: 'Pending' },
  { id: 'ap4', type: 'Timetable', name: 'Sem 3 — Odd 2026', detail: 'Revised lab slot allocation', status: 'Pending' },
]
