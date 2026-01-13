type TimelineProps = {
  selectedMonth: number;
  onMonthChange: (month: number) => void;
  months: number[];
  progressPercentage: number;
};

function Timeline({
  selectedMonth,
  onMonthChange,
  months,
  progressPercentage,
}: TimelineProps) {
  return (
    <div className="w-full py-4">
      {/* Month buttons - Traya style connected tabs */}
      <div className="flex w-full border border-slate-300 rounded-lg overflow-hidden">
        {months.map((month) => {
          const isActive = month === selectedMonth;
          const isPast = month < selectedMonth;
          const isLast = month === months.length;
          return (
            <button
              key={month}
              type="button"
              onClick={() => onMonthChange(month)}
              className={[
                "flex-1 py-2.5 sm:py-4 text-xs sm:text-base font-medium transition-all whitespace-nowrap",
                !isLast ? "border-r border-slate-300" : "",
                isActive
                  ? "bg-[#8fb339] text-white"
                  : isPast
                  ? "bg-[#d4e4b5] text-slate-700"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              ].join(" ")}
            >
              <span className="sm:hidden">M{month}</span>
              <span className="hidden sm:inline">Month {month}</span>
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-4 sm:mt-6 mb-2">
        <div className="h-1.5 bg-slate-200 overflow-hidden">
          <div
            className="h-full bg-[#8fb339] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <p className="text-xs sm:text-base text-slate-600 text-center">
        {progressPercentage.toFixed(0)}% through your Traya plan
      </p>
    </div>
  );
}

export default Timeline;
