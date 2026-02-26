export type Priority = 'low' | 'medium' | 'high';
export type Category = 'work' | 'personal' | 'health' | 'study';
export type Status = 'todo' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  title: string;
  category: Category;
  priority: Priority;
  status: Status;
  createdAt: Date;
  dueDate?: string;
}
