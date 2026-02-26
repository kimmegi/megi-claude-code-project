import { useState } from 'react';
import type { Todo, Status, Category } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onStatusChange: (id: string, status: Status) => void;
  onDelete: (id: string) => void;
}

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'work', label: '💼 업무' },
  { value: 'personal', label: '🏠 개인' },
  { value: 'health', label: '💪 건강' },
  { value: 'study', label: '📚 공부' },
];

const statuses: { value: Status | 'all'; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'todo', label: '예정' },
  { value: 'in-progress', label: '진행 중' },
  { value: 'done', label: '완료' },
];

export default function TodoList({ todos, onStatusChange, onDelete }: TodoListProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeStatus, setActiveStatus] = useState<Status | 'all'>('all');

  const filtered = todos.filter(t => {
    const catMatch = activeCategory === 'all' || t.category === activeCategory;
    const statusMatch = activeStatus === 'all' || t.status === activeStatus;
    return catMatch && statusMatch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-base font-bold text-gray-800 mb-4">할 일 목록</h2>

      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map(c => (
          <button
            key={c.value}
            onClick={() => setActiveCategory(c.value)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
              activeCategory === c.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {statuses.map(s => (
          <button
            key={s.value}
            onClick={() => setActiveStatus(s.value)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
              activeStatus === s.value
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">해당하는 할 일이 없습니다.</p>
        ) : (
          filtered.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))
        )}
      </div>

      <p className="text-xs text-gray-400 mt-3">{filtered.length}개 표시 중</p>
    </div>
  );
}
