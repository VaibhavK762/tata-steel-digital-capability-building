import axios from 'axios';
import { User, Course, Progress, Announcement, Document, OnboardingTask, CompletionRequest } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  // Authentication
  login: async (email: string, password: string) => {
    const response = await client.post('/auth/login', { email, password });
    return response.data; // returns { message, user }
  },
  
  getUser: async (userId: number) => {
    const response = await client.get(`/auth/user/${userId}`);
    return response.data as User;
  },

  // Dashboards
  getEmployeeDashboard: async (userId: number) => {
    const response = await client.get(`/dashboard/employee/${userId}`);
    return response.data;
  },

  getManagerDashboard: async (managerId: number) => {
    const response = await client.get(`/dashboard/manager/${managerId}`);
    return response.data;
  },

  getExecutiveDashboard: async (executiveId: number) => {
    const response = await client.get(`/dashboard/executive/${executiveId}`);
    return response.data;
  },

  getLdDashboard: async () => {
    const response = await client.get('/dashboard/ld');
    return response.data;
  },

  getSystemStats: async () => {
    const response = await client.get('/dashboard/stats');
    return response.data;
  },

  // Onboarding
  getOnboarding: async (userId: number) => {
    const response = await client.get(`/onboarding/${userId}`);
    return response.data; // { onboarding_progress: number, tasks: OnboardingTask[] }
  },

  getMemberOnboarding: async (userId: number) => {
    const response = await client.get(`/onboarding/${userId}`);
    return response.data;
  },

  completeOnboardingTask: async (taskId: number, userId: number) => {
    const response = await client.post(`/onboarding/task/${taskId}/complete`, { user_id: userId });
    return response.data;
  },

  approveOnboardingTask: async (taskId: number, managerId: number) => {
    const response = await client.post(`/onboarding/approve/${taskId}/${managerId}`);
    return response.data;
  },

  rejectOnboardingTask: async (taskId: number, managerId: number) => {
    const response = await client.post(`/onboarding/reject/${taskId}/${managerId}`);
    return response.data;
  },

  // Course Enrollments and completions
  startCourse: async (userId: number, courseId: string) => {
    const response = await client.post('/courses/start', { user_id: userId, course_id: courseId });
    return response.data;
  },

  submitCompletionRequest: async (userId: number, courseId: string) => {
    const response = await client.post(`/approvals/submit/${userId}/${courseId}`);
    return response.data;
  },

  // Approvals
  getPendingApprovals: async () => {
    const response = await client.get('/approvals/pending');
    return response.data as CompletionRequest[];
  },

  approveRequest: async (requestId: number, managerId: number) => {
    const response = await client.post(`/approvals/approve/${requestId}/${managerId}`);
    return response.data;
  },

  rejectRequest: async (requestId: number, managerId: number) => {
    const response = await client.post(`/approvals/reject/${requestId}/${managerId}`);
    return response.data;
  },

  // Documents
  getDocuments: async () => {
    const response = await client.get('/documents');
    return response.data as Document[];
  },

  getRecentDocuments: async () => {
    const response = await client.get('/documents/recent');
    return response.data as Document[];
  },

  getDocumentsByCategory: async (category: string) => {
    const response = await client.get(`/documents/category/${category}`);
    return response.data as Document[];
  },

  uploadDocument: async (file: File, category: string, uploadedBy: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    formData.append('uploaded_by', uploadedBy);
    const response = await client.post('/lnd/upload-document', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Announcements
  getAnnouncements: async () => {
    const response = await client.get('/announcements');
    return response.data as Announcement[];
  },

  getAnnouncementsByAudience: async (audience: string) => {
    const response = await client.get(`/announcements/${audience}`);
    return response.data as Announcement[];
  },

  createAnnouncement: async (title: string, message: string, targetAudience: string, priority: string, createdBy: string) => {
    const response = await client.post('/lnd/announcement', null, {
      params: {
        title,
        message,
        target_audience: targetAudience,
        priority,
        created_by: createdBy
      }
    });
    return response.data;
  },

  createCourse: async (course: Course) => {
    const response = await client.post('/lnd/course', course);
    return response.data;
  },

  // Chat Copilot
  sendMessage: async (message: string, userId: number, userType: string) => {
    const response = await client.post('/chat/', {
      message,
      user_id: userId,
      user_type: userType
    });
    return response.data; // returns response from orchestrator
  }
};
export default api;
