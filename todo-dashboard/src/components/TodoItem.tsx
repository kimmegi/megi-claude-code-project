import type { Todo, Status } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onStatusChange: (id: string, status: Status) => void;
  onDelete: (id: string) => void;
}

const categoryConfig = {
  work: { label: '업무', color: 'bg-blue-100 text-blue-700' },
  personal: { label: '개인', color: 'bg-purple-100 text-purple-700' },
  health: { label: '건강', color: 'bg-green-100 text-green-700' },
  study: { label: '공부', color: 'bg-orange-100 text-orange-700' },
};

const priorityConfig = {
  high: { label: '높음', dot: 'bg-red-400' },
  medium: { label: '보통', dot: 'bg-yellow-400' },
  low: { label: '낮음', dot: 'bg-green-400' },
};

export default function TodoItem({ todo, onStatusChange, onDelete }: TodoItemProps) {
  const cat = categoryConfig[todo.category];
  const pri = priorityConfig[todo.priority];
  const isDone = todo.status === 'done';

  const cycleStatus = () => {
    const order: Status[] = ['todo', 'in-progress', 'done'];
    const idx = order.indexOf(todo.status);
    onStatusChange(todo.id, order[(idx + 1) % order.length]);
  };

  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${isDone ? 'opacity-60 border-gray-100' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={cycleStatus}
          className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
            isDone
              ? 'bg-green-400 border-green-400'
              : todo.status === 'in-progress'
              ? 'bg-yellow-400 border-yellow-400'
              : 'border-gray-300 hover:border-blue-400'
          }`}
        >
          {isDone && <span className="text-white text-xs flex items-center justify-center w-full h-full">✓</span>}
          {todo.status === 'in-progress' && <span className="text-white text-xs flex items-center justify-center w-full h-full">▶</span>}
        </button>

        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${isDone ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {todo.title}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.color}`}>{cat.label}</span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <span className={`w-1.5 h-1.5 rounded-full ${pri.dot}`} />
              {pri.label}
            </span>
            {todo.dueDate && (
              <span className="text-xs text-gray-400">📅 {todo.dueDate}</span>
            )}
          </div>
        </div>

        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-300 hover:text-red-400 transition-colors text-sm flex-shrink-0"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
