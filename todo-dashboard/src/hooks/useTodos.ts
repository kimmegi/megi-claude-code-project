import { useState } from 'react';
import type { Todo, Status } from '../types/todo';

const initialTodos: Todo[] = [
  { id: '1', title: '프로젝트 기획서 작성', category: 'work', priority: 'high', status: 'in-progress', createdAt: new Date(), dueDate: '2026-03-01' },
  { id: '2', title: '운동하기 (30분)', category: 'health', priority: 'medium', status: 'done', createdAt: new Date(), dueDate: '2026-02-26' },
  { id: '3', title: 'React 강의 수강', category: 'study', priority: 'high', status: 'todo', createdAt: new Date(), dueDate: '2026-02-28' },
  { id: '4', title: '장보기', category: 'personal', priority: 'low', status: 'todo', createdAt: new Date() },
  { id: '5', title: '팀 미팅 준비', category: 'work', priority: 'high', status: 'done', createdAt: new Date(), dueDate: '2026-02-25' },
  { id: '6', title: 'TypeScript 공부', category: 'study', priority: 'medium', status: 'in-progress', createdAt: new Date(), dueDate: '2026-03-05' },
];

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (data: Omit<Todo, 'id' | 'createdAt'>) => {
    const newTodo: Todo = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const updateStatus = (id: string, status: Status) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, status } : t));
  };

  const stats = {
    total: todos.length,
    done: todos.filter(t => t.status === 'done').length,
    inProgress: todos.filter(t => t.status === 'in-progress').length,
    todo: todos.filter(t => t.status === 'todo').length,
  };

  return { todos, addTodo, deleteTodo, updateStatus, stats };
}
