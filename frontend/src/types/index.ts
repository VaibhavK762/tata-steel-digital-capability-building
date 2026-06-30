export interface User {
  user_id: number;
  employee_id?: string;
  name: string;
  email: string;
  department: string | null;
  current_role: string | null;
  user_type: 'New Joiner' | 'Employee' | 'Manager' | 'Executive' | 'L&D Team';
  experience_years: number;
  nsqf_level: number;
  target_role: string | null;
  manager_id: number | null;
}

export interface Course {
  course_id: string;
  course_name: string;
  skills_taught: string;
  target_role: string;
  duration: string;
  level: string;
  provider: string;
}

export interface Progress {
  progress_id: number;
  user_id: number;
  course_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  start_date: string | null;
  end_date: string | null;
  course_name?: string;
}

export interface Announcement {
  announcement_id: number;
  title: string;
  message: string;
  target_audience: string;
  priority: 'Low' | 'Medium' | 'High';
  created_by: string;
  created_at: string;
}

export interface Document {
  document_id: number;
  document_name: string;
  category: string;
  upload_date: string;
  file_path: string;
  status: string;
  uploaded_by: string;
  indexed: number;
}

export interface OnboardingTask {
  task_id: number;
  user_id: number;
  task_name: string;
  status: string;
  due_date: string;
  completed_date: string | null;
}

export interface CompletionRequest {
  request_id: number;
  name: string;      // User's name
  course_name: string;
  submitted_at: string;
  status?: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
