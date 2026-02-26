import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import StatsCards from './components/StatsCards';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

export default function App() {
  const { todos, addTodo, deleteTodo, updateStatus, stats } = useTodos();
  const [showForm, setShowForm] = useState(false);

  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">할 일 대시보드</h1>
            <p className="text-sm text-gray-400 mt-0.5">{today}</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            + 추가
          </button>
        </div>

        {/* 통계 카드 */}
        <div className="mb-6">
          <StatsCards stats={stats} />
        </div>

        {/* 할 일 목록 */}
        <TodoList
          todos={todos}
          onStatusChange={updateStatus}
          onDelete={deleteTodo}
        />
      </div>

      {/* 추가 폼 모달 */}
      {showForm && (
        <AddTodoForm onAdd={addTodo} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
