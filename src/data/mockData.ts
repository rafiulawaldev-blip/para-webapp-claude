export type Priority = 'Urgent' | 'High' | 'Medium' | 'Low'
export type TaskStatus = 'In Progress' | 'To-Do' | 'Complete' | 'Review' | 'Not Started'

export interface Assignee {
  id: string
  name: string
  avatar: string
  initials: string
  color: string
}

export interface Task {
  id: string
  name: string
  project: string
  assignees: Assignee[]
  progress: number
  priority: Priority
  status: TaskStatus
  dueDate: string
  createdDate: string
  description?: string
  subTasks?: SubTask[]
  attachments?: Attachment[]
  comments?: Comment[]
  checklist?: ChecklistItem[]
  companyName?: string
  branchName?: string
  departmentName?: string
  subProjectName?: string
}

export interface SubTask {
  id: string
  name: string
  priority: Priority
  dueDate: string
  status: TaskStatus
}

export interface Attachment {
  id: string
  name: string
  size: string
  type: string
  uploadedAt: string
}

export interface Comment {
  id: string
  author: Assignee
  content: string
  createdAt: string
}

export interface ChecklistItem {
  id: string
  label: string
  checked: boolean
}

export interface TeamRow {
  name: string
  totalTasks: number
  completed: number
  workload: 'Over load' | 'High' | 'Medium' | 'Normal'
}

export interface PriorityRow {
  employee: Assignee
  role: string
  teamName: string
  priority: Priority
}

const AVATARS: Assignee[] = [
  { id: '1', name: 'Salman Omayer', initials: 'SO', avatar: '', color: '#f97316' },
  { id: '2', name: 'Hanna',         initials: 'HA', avatar: '', color: '#8b5cf6' },
  { id: '3', name: 'Lydia',         initials: 'LY', avatar: '', color: '#ec4899' },
  { id: '4', name: 'Cooper',        initials: 'CO', avatar: '', color: '#06b6d4' },
  { id: '5', name: 'Alex',          initials: 'AL', avatar: '', color: '#10b981' },
]

const SUBTASKS: SubTask[] = [
  { id: 'st1', name: 'Create a user-friendly homepage interf...', priority: 'High',   dueDate: 'Nov 27, 2025', status: 'To-Do' },
  { id: 'st2', name: 'Construct a homepage that enhances u...', priority: 'Low',    dueDate: 'Nov 27, 2025', status: 'To-Do' },
  { id: 'st3', name: 'Build an intuitive homepage user interfa...', priority: 'Medium', dueDate: 'Nov 27, 2025', status: 'In Progress' },
  { id: 'st4', name: 'Design a sleek and modern homepage.',  priority: 'High',   dueDate: 'Nov 27, 2025', status: 'To-Do' },
  { id: 'st5', name: 'Build an intuitive homepage user interfa...', priority: 'Medium', dueDate: 'Nov 27, 2025', status: 'To-Do' },
  { id: 'st6', name: 'Craft an engaging homepage design.',   priority: 'High',   dueDate: 'Nov 27, 2025', status: 'To-Do' },
  { id: 'st7', name: 'Craft an engaging homepage design.',   priority: 'Complete' as any, dueDate: 'Nov 27, 2025', status: 'Complete' },
  { id: 'st8', name: 'Craft an engaging homepage design.',   priority: 'Low',    dueDate: 'Nov 27, 2025', status: 'To-Do' },
]

const CHECKLIST: ChecklistItem[] = [
  { id: 'cl1', label: 'Research competitor homepages for inspiration', checked: true },
  { id: 'cl2', label: 'Create wireframe sketches for homepage layout', checked: true },
  { id: 'cl3', label: 'Design high-fidelity mockups in Figma', checked: false },
  { id: 'cl4', label: 'Get stakeholder approval on design', checked: false },
  { id: 'cl5', label: 'Implement responsive HTML/CSS', checked: false },
  { id: 'cl6', label: 'Conduct usability testing', checked: false },
]

const COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: AVATARS[0],
    content: 'I have completed the wireframe. Moving to high-fidelity design next.',
    createdAt: 'Nov 10, 2025',
  },
  {
    id: 'c2',
    author: AVATARS[1],
    content: 'Looks great! Please make sure to follow the brand guidelines for colors.',
    createdAt: 'Nov 11, 2025',
  },
  {
    id: 'c3',
    author: AVATARS[2],
    content: 'The stakeholder review is scheduled for Nov 15. Can we have something ready by then?',
    createdAt: 'Nov 12, 2025',
  },
]

export const TASKS: Task[] = [
  {
    id: 't1',
    name: 'Design Homepage UI',
    project: 'NovaCart Online Store',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[2], AVATARS[3]],
    progress: 65,
    priority: 'Medium',
    status: 'In Progress',
    dueDate: '11/11/2025',
    createdDate: '11/11/2025',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
    description: 'Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed products that support farm growth and performance.',
    subTasks: SUBTASKS,
    checklist: CHECKLIST,
    comments: COMMENTS,
    attachments: [
      { id: 'a1', name: 'wireframe_v1.fig', size: '2.4 MB', type: 'figma', uploadedAt: 'Nov 05, 2025' },
      { id: 'a2', name: 'brand_guidelines.pdf', size: '1.1 MB', type: 'pdf', uploadedAt: 'Nov 06, 2025' },
    ],
  },
  {
    id: 't2',
    name: 'Create a User Interface for the...',
    project: 'ShopSphere E-commerce...',
    assignees: [AVATARS[1], AVATARS[2], AVATARS[3], AVATARS[4]],
    progress: 65,
    priority: 'High',
    status: 'To-Do',
    dueDate: '11/20/2025',
    createdDate: '11/10/2025',
    subTasks: SUBTASKS.slice(0, 4),
    checklist: CHECKLIST.slice(0, 3),
    comments: COMMENTS.slice(0, 1),
  },
  {
    id: 't3',
    name: 'Develop the Homepage UI desi...',
    project: 'MarketWave Digital Ma...',
    assignees: [AVATARS[0], AVATARS[2], AVATARS[4]],
    progress: 65,
    priority: 'Medium',
    status: 'Complete',
    dueDate: '11/15/2025',
    createdDate: '11/01/2025',
    subTasks: SUBTASKS.slice(1, 5),
    checklist: CHECKLIST,
    comments: COMMENTS,
  },
  {
    id: 't4',
    name: 'Craft the UI layout for the Hom...',
    project: 'CommerceCloud Shop...',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[3]],
    progress: 65,
    priority: 'Low',
    status: 'Review',
    dueDate: '11/25/2025',
    createdDate: '11/05/2025',
    subTasks: SUBTASKS.slice(2, 6),
    checklist: CHECKLIST.slice(2, 5),
    comments: [],
  },
  {
    id: 't5',
    name: 'Build the Homepage user inter...',
    project: 'RetailNest E-commerce...',
    assignees: [AVATARS[2], AVATARS[3], AVATARS[4]],
    progress: 65,
    priority: 'Medium',
    status: 'To-Do',
    dueDate: '12/01/2025',
    createdDate: '11/10/2025',
    subTasks: [],
    checklist: CHECKLIST.slice(0, 2),
    comments: COMMENTS.slice(1, 2),
  },
  {
    id: 't6',
    name: 'Design the UI for the Homepag...',
    project: 'TradeLink Online Retail',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[2], AVATARS[3]],
    progress: 65,
    priority: 'Urgent',
    status: 'Not Started',
    dueDate: '11/10/2025',
    createdDate: '11/01/2025',
    subTasks: SUBTASKS.slice(3, 7),
    checklist: [],
    comments: [],
  },
  {
    id: 't7',
    name: 'Construct the Homepage inter...',
    project: 'BuySmart E-commerce...',
    assignees: [AVATARS[1], AVATARS[4]],
    progress: 65,
    priority: 'Medium',
    status: 'Complete',
    dueDate: '11/18/2025',
    createdDate: '11/02/2025',
    subTasks: SUBTASKS.slice(0, 3),
    checklist: CHECKLIST,
    comments: COMMENTS,
  },
  {
    id: 't8',
    name: 'Design the user interface for t...',
    project: 'ShopLink Digital Storefr...',
    assignees: [AVATARS[0], AVATARS[2], AVATARS[3], AVATARS[4]],
    progress: 65,
    priority: 'Low',
    status: 'Not Started',
    dueDate: '12/05/2025',
    createdDate: '11/08/2025',
    subTasks: [],
    checklist: [],
    comments: [],
  },
  {
    id: 't9',
    name: "Create the Homepage's UI lay...",
    project: 'EcomFusion Marketplace',
    assignees: [AVATARS[1], AVATARS[2], AVATARS[3]],
    progress: 65,
    priority: 'Medium',
    status: 'To-Do',
    dueDate: '11/28/2025',
    createdDate: '11/06/2025',
    subTasks: SUBTASKS.slice(1, 4),
    checklist: CHECKLIST.slice(1, 4),
    comments: COMMENTS.slice(0, 2),
  },
  {
    id: 't10',
    name: 'Develop the user interface for...',
    project: 'RetailRocket Online Shop',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[4]],
    progress: 65,
    priority: 'High',
    status: 'In Progress',
    dueDate: '11/22/2025',
    createdDate: '11/04/2025',
    subTasks: SUBTASKS.slice(2, 7),
    checklist: CHECKLIST.slice(0, 4),
    comments: COMMENTS,
  },
  {
    id: 't11',
    name: "Craft the Homepage's UI.",
    project: 'ShopWave E-commerce...',
    assignees: [AVATARS[2], AVATARS[3]],
    progress: 65,
    priority: 'Medium',
    status: 'Complete',
    dueDate: '11/14/2025',
    createdDate: '11/01/2025',
    subTasks: SUBTASKS.slice(0, 5),
    checklist: CHECKLIST,
    comments: COMMENTS.slice(1, 3),
  },
  {
    id: 't12',
    name: 'Build the user interface for the...',
    project: 'Project X E-commerce...',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[3], AVATARS[4]],
    progress: 65,
    priority: 'High',
    status: 'To-Do',
    dueDate: '12/10/2025',
    createdDate: '11/09/2025',
    subTasks: SUBTASKS.slice(3, 8),
    checklist: CHECKLIST.slice(2, 6),
    comments: [],
  },
]

export const TEAM_ROWS: TeamRow[] = [
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'Over load' },
  { name: 'Team 2', totalTasks: 7,  completed: 5, workload: 'Medium' },
  { name: 'Team 3', totalTasks: 9,  completed: 5, workload: 'Normal' },
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'High' },
  { name: 'Team 2', totalTasks: 7,  completed: 5, workload: 'Medium' },
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'Over load' },
  { name: 'Team 2', totalTasks: 7,  completed: 5, workload: 'Medium' },
]

export const PRIORITY_ROWS: PriorityRow[] = [
  { employee: AVATARS[1], role: 'Project lead', teamName: 'Team name 1', priority: 'High' },
  { employee: AVATARS[2], role: 'Developer',    teamName: 'Team name 2', priority: 'Medium' },
  { employee: AVATARS[3], role: 'Supervisor',   teamName: 'Team name 3', priority: 'Medium' },
  { employee: AVATARS[3], role: 'Supervisor',   teamName: 'Team name 4', priority: 'Medium' },
  { employee: AVATARS[1], role: 'Project lead', teamName: 'Team name 1', priority: 'High' },
  { employee: AVATARS[2], role: 'Developer',    teamName: 'Team name 2', priority: 'Medium' },
  { employee: AVATARS[3], role: 'Supervisor',   teamName: 'Team name 3', priority: 'Medium' },
]
