export type Priority = 'Urgent' | 'High' | 'Medium' | 'Low'
export type TaskStatus = 'In Progress' | 'To-Do' | 'Complete' | 'Review' | 'Not Started'

export interface Assignee {
  id: string
  name: string
  avatar: string
  initials: string
  color: string
}

export interface Attachment {
  id: string
  name: string
  size: string
  type: string
  uploadedAt: string
  thumbnail?: string
}

export interface Comment {
  id: string
  author: Assignee
  content: string
  createdAt: string
  url?: string
}

export interface ChecklistItem {
  id: string
  label: string
  checked: boolean
}

export interface SubTask {
  id: string
  name: string
  priority: Priority
  dueDate: string
  status: TaskStatus
  createdDate?: string
  progress?: number
  assignees?: Assignee[]
  attachments?: Attachment[]
  checklist?: ChecklistItem[]
  comments?: Comment[]
  description?: string
  companyName?: string
  branchName?: string
  departmentName?: string
  subProjectName?: string
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

export interface TeamRow {
  name: string
  totalTasks: number
  completed: number
  workload: 'Over' | 'High' | 'Medium' | 'Low'
}

export interface PriorityRow {
  employee: Assignee
  role: string
  teamName: string
  priority: Priority
}

export const AVATARS: Assignee[] = [
  { id: '1', name: 'Salman Omayer',  initials: 'SO', avatar: '', color: '#f97316' },
  { id: '2', name: 'Eleanor Pena',   initials: 'EP', avatar: '', color: '#8b5cf6' },
  { id: '3', name: 'Brooklyn Simmons', initials: 'BS', avatar: '', color: '#ec4899' },
  { id: '4', name: 'Jane Cooper',    initials: 'JC', avatar: '', color: '#06b6d4' },
  { id: '5', name: 'Theresa Webb',   initials: 'TW', avatar: '', color: '#10b981' },
  { id: '6', name: 'Wade Warren',    initials: 'WW', avatar: '', color: '#3b82f6' },
  { id: '7', name: 'Ronald Richards', initials: 'RR', avatar: '', color: '#f59e0b' },
  { id: '8', name: 'Jerome Bell',    initials: 'JB', avatar: '', color: '#6366f1' },
]

const CHECKLIST: ChecklistItem[] = [
  { id: 'cl1', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'cl2', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'cl3', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'cl4', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'cl5', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'cl6', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'cl7', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'cl8', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'cl9', label: 'E-commerce Platform E-commerce', checked: false },
]

const COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: AVATARS[0],
    content: 'The development should not be paused ASAP, we\'d be launching...',
    url: 'https://www.figma.com/proto/someproject/Homepage-link',
    createdAt: 'Nov 10, 2025 at 3:04 PM',
  },
  {
    id: 'c2',
    author: AVATARS[0],
    content: 'Experience the perfect online shopping hub, where convenience meets style. Immerse yourself in our Digital Marketplace, where convenience meets...',
    url: 'https://www.figma.com/proto/someproject/Homepage-link',
    createdAt: 'Nov 10, 2025 at 3:04 PM',
  },
  {
    id: 'c3',
    author: AVATARS[0],
    content: 'The development should not be paused ASAP, we\'d be launching...',
    url: 'https://www.figma.com/proto/someproject/Homepage-link',
    createdAt: 'Nov 10, 2025 at 3:04 PM',
  },
]

const SUB_ATTACHMENTS: Attachment[] = [
  { id: 'sa1', name: 'E-communities: P File.txt', size: '1.4 kb', type: 'image', uploadedAt: 'Nov 05, 2025' },
  { id: 'sa2', name: '%Attac...', size: '2.1 kb', type: 'image', uploadedAt: 'Nov 06, 2025' },
  { id: 'sa3', name: 'E-communities: plat...', size: '0 comments · 74x74', type: 'image', uploadedAt: 'Nov 07, 2025' },
  { id: 'sa4', name: 'E-communities', size: '4 comments · Pls ok', type: 'image', uploadedAt: 'Nov 08, 2025' },
]

const SUB_CHECKLIST: ChecklistItem[] = [
  { id: 'scl1', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'scl2', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'scl3', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'scl4', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'scl5', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'scl6', label: 'E-commerce Platform E-commerce', checked: true },
  { id: 'scl7', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'scl8', label: 'E-commerce Platform E-commerce', checked: false },
  { id: 'scl9', label: 'E-commerce Platform E-commerce', checked: false },
]

export const SUBTASKS: SubTask[] = [
  {
    id: 'st1',
    name: 'Create hero section layout',
    priority: 'High',
    dueDate: 'Nov 27, 2025',
    status: 'Review',
    createdDate: '11/10/2025',
    progress: 45,
    assignees: [AVATARS[0], AVATARS[1], AVATARS[2]],
    attachments: SUB_ATTACHMENTS,
    checklist: SUB_CHECKLIST,
    comments: COMMENTS,
    description: 'Jessore Feed Ltd is a key Paragon Group company, providing reliable, high quality feed products that support farm growth and performance.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st2',
    name: 'Create a User Interface for the homepage',
    priority: 'High',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[0], AVATARS[1]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(0, 4),
    comments: COMMENTS.slice(0, 1),
    description: 'Create an intuitive user interface for the homepage with modern design patterns.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st3',
    name: 'Create hero section layout',
    priority: 'Low',
    dueDate: 'Nov 27, 2025',
    status: 'In Progress',
    createdDate: '11/10/2025',
    progress: 30,
    assignees: [AVATARS[2], AVATARS[3]],
    attachments: SUB_ATTACHMENTS.slice(0, 2),
    checklist: SUB_CHECKLIST.slice(0, 3),
    comments: COMMENTS,
    description: 'Build an intuitive homepage user interface focused on engagement.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st4',
    name: 'Developing the Homepage user interface',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[0]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(2, 6),
    comments: [],
    description: 'Design a sleek and modern homepage with responsive layout.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st5',
    name: 'Build an intuitive homepage user interface',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[1], AVATARS[4]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(0, 2),
    comments: COMMENTS.slice(1, 2),
    description: 'Build an intuitive user interface for the homepage.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st6',
    name: 'Craft an engaging homepage design',
    priority: 'High',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[0], AVATARS[2], AVATARS[3]],
    attachments: SUB_ATTACHMENTS.slice(0, 1),
    checklist: SUB_CHECKLIST.slice(3, 7),
    comments: COMMENTS,
    description: 'Craft an engaging and visually appealing homepage design.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st7',
    name: 'Craft an engaging homepage design',
    priority: 'High',
    dueDate: 'Nov 27, 2025',
    status: 'Complete',
    createdDate: '11/10/2025',
    progress: 100,
    assignees: [AVATARS[3], AVATARS[4]],
    attachments: SUB_ATTACHMENTS.slice(0, 2),
    checklist: SUB_CHECKLIST,
    comments: COMMENTS.slice(0, 2),
    description: 'Completed engaging homepage design.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st8',
    name: 'Craft an engaging homepage design',
    priority: 'Low',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[0]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(0, 3),
    comments: [],
    description: 'Low priority homepage design task.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st9',
    name: 'Build an intuitive homepage user interface',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'In Progress',
    createdDate: '11/10/2025',
    progress: 60,
    assignees: [AVATARS[1], AVATARS[2]],
    attachments: SUB_ATTACHMENTS.slice(1, 3),
    checklist: SUB_CHECKLIST.slice(1, 5),
    comments: COMMENTS,
    description: 'Build an intuitive homepage user interface.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st10',
    name: 'Design a sleek and modern homepage',
    priority: 'Low',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[4]],
    attachments: [],
    checklist: [],
    comments: [],
    description: 'Design a sleek and modern homepage layout.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st11',
    name: 'Develop a visually appealing homepage',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[0], AVATARS[5]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(0, 4),
    comments: COMMENTS.slice(0, 1),
    description: 'Develop a visually appealing homepage design.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st12',
    name: 'Design a sleek and modern homepage',
    priority: 'High',
    dueDate: 'Nov 27, 2025',
    status: 'To-Do',
    createdDate: '11/10/2025',
    progress: 0,
    assignees: [AVATARS[2], AVATARS[6]],
    attachments: [],
    checklist: SUB_CHECKLIST.slice(2, 5),
    comments: [],
    description: 'Design a sleek modern homepage.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st13',
    name: 'Develop a visually appealing homepage',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'In Progress',
    createdDate: '11/10/2025',
    progress: 40,
    assignees: [AVATARS[0], AVATARS[1], AVATARS[3]],
    attachments: SUB_ATTACHMENTS.slice(0, 2),
    checklist: SUB_CHECKLIST.slice(0, 6),
    comments: COMMENTS,
    description: 'Develop visually appealing homepage.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
  {
    id: 'st14',
    name: 'Devise a creative homepage design',
    priority: 'Medium',
    dueDate: 'Nov 27, 2025',
    status: 'Complete',
    createdDate: '11/10/2025',
    progress: 100,
    assignees: [AVATARS[1]],
    attachments: [],
    checklist: SUB_CHECKLIST,
    comments: COMMENTS.slice(1),
    description: 'Devise a creative homepage design.',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'Marketing Automation',
  },
]

const TASK_ATTACHMENTS: Attachment[] = [
  { id: 'a1', name: 'E-communities: P File.txt', size: '1.4 kb', type: 'image', uploadedAt: 'Nov 05, 2025' },
  { id: 'a2', name: '%Attac...', size: '2.1 kb', type: 'image', uploadedAt: 'Nov 06, 2025' },
  { id: 'a3', name: 'E-communities: plat...', size: '0 comments · 74x74', type: 'image', uploadedAt: 'Nov 07, 2025' },
  { id: 'a4', name: 'E-communities', size: '4 comments · Pls ok', type: 'image', uploadedAt: 'Nov 08, 2025' },
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
    subTasks: SUBTASKS.slice(0, 8),
    checklist: CHECKLIST,
    comments: COMMENTS,
    attachments: TASK_ATTACHMENTS,
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Food Inspection',
    subProjectName: 'E-commerce Platform',
    subTasks: SUBTASKS.slice(0, 4),
    checklist: CHECKLIST.slice(0, 5),
    comments: COMMENTS.slice(0, 1),
    attachments: TASK_ATTACHMENTS.slice(0, 2),
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 2',
    departmentName: 'Marketing',
    subProjectName: 'Digital Marketing',
    subTasks: SUBTASKS.slice(1, 5),
    checklist: CHECKLIST,
    comments: COMMENTS,
    attachments: TASK_ATTACHMENTS.slice(0, 3),
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'IT Department',
    subProjectName: 'Commerce Cloud',
    subTasks: SUBTASKS.slice(2, 6),
    checklist: CHECKLIST.slice(2, 7),
    comments: [],
    attachments: [],
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 3',
    departmentName: 'Operations',
    subProjectName: 'Retail Platform',
    subTasks: [],
    checklist: CHECKLIST.slice(0, 4),
    comments: COMMENTS.slice(1, 2),
    attachments: TASK_ATTACHMENTS.slice(1, 3),
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Design',
    subProjectName: 'Trade Platform',
    subTasks: SUBTASKS.slice(3, 7),
    checklist: [],
    comments: [],
    attachments: [],
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 2',
    departmentName: 'Development',
    subProjectName: 'Smart Commerce',
    subTasks: SUBTASKS.slice(0, 3),
    checklist: CHECKLIST,
    comments: COMMENTS,
    attachments: TASK_ATTACHMENTS,
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Design',
    subProjectName: 'ShopLink Platform',
    subTasks: [],
    checklist: [],
    comments: [],
    attachments: [],
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Product',
    subProjectName: 'Fusion Platform',
    subTasks: SUBTASKS.slice(1, 4),
    checklist: CHECKLIST.slice(1, 5),
    comments: COMMENTS.slice(0, 2),
    attachments: TASK_ATTACHMENTS.slice(0, 2),
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 2',
    departmentName: 'Development',
    subProjectName: 'Rocket Platform',
    subTasks: SUBTASKS.slice(2, 7),
    checklist: CHECKLIST.slice(0, 6),
    comments: COMMENTS,
    attachments: TASK_ATTACHMENTS,
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
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Design',
    subProjectName: 'Wave Platform',
    subTasks: SUBTASKS.slice(0, 5),
    checklist: CHECKLIST,
    comments: COMMENTS.slice(1, 3),
    attachments: TASK_ATTACHMENTS.slice(0, 3),
  },
  {
    id: 't12',
    name: 'Build the user interface for the...',
    project: 'Project X E-commerce Pl...',
    assignees: [AVATARS[0], AVATARS[1], AVATARS[3], AVATARS[4]],
    progress: 65,
    priority: 'High',
    status: 'To-Do',
    dueDate: '12/10/2025',
    createdDate: '11/09/2025',
    companyName: 'Jessore Feed Ltd.',
    branchName: 'Branch name 1',
    departmentName: 'Engineering',
    subProjectName: 'Project X',
    subTasks: SUBTASKS.slice(3, 8),
    checklist: CHECKLIST.slice(2, 7),
    comments: [],
    attachments: TASK_ATTACHMENTS.slice(0, 2),
  },
]

export const TEAM_ROWS: TeamRow[] = [
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'Over' },
  { name: 'Team 2', totalTasks: 7,  completed: 5, workload: 'Medium' },
  { name: 'Team 3', totalTasks: 9,  completed: 5, workload: 'Low' },
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'High' },
  { name: 'Team 2', totalTasks: 7,  completed: 5, workload: 'Medium' },
  { name: 'Team 1', totalTasks: 12, completed: 4, workload: 'Over' },
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
