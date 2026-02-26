interface Stats {
  total: number;
  done: number;
  inProgress: number;
  todo: number;
}

interface StatsCardsProps {
  stats: Stats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const completionRate = stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0;

  const cards = [
    { label: '전체 할 일', value: stats.total, color: 'bg-blue-500', icon: '📋' },
    { label: '완료', value: stats.done, color: 'bg-green-500', icon: '✅' },
    { label: '진행 중', value: stats.inProgress, color: 'bg-yellow-500', icon: '⚡' },
    { label: '예정', value: stats.todo, color: 'bg-gray-400', icon: '🕐' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map(card => (
          <div key={card.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{card.icon}</span>
              <span className={`${card.color} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                {card.value}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">전체 완료율</span>
          <span className="text-sm font-bold text-blue-600">{completionRate}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}
