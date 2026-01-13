import React from "react";

function Timeline({
  selectedMonth,
  onMonthChange,
  months,
  progressPercentage,
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
          Journey Timeline
        </h2>
        <p className="text-sm text-slate-500">
          Month {selectedMonth} of {months.length}
        </p>
      </div>

      {/* Month buttons */}
      <div className="grid grid-cols-5 gap-0 mb-2">
        {months.map((month) => {
          const isActive = month === selectedMonth;
          const isPast = month < selectedMonth;
          return (
            <button
              key={month}
              type="button"
              onClick={() => onMonthChange(month)}
              className={[
                "py-3 text-sm font-medium transition-all border border-slate-300",
                month === 1 ? "rounded-l-lg" : "",
                month === months.length ? "rounded-r-lg" : "",
                isActive
                  ? "bg-[#8fb339] text-white border-[#8fb339]"
                  : isPast
                  ? "bg-[#d4e4b5] text-slate-700 border-[#d4e4b5]"
                  : "bg-white text-slate-600 hover:bg-slate-50",
              ].join(" ")}
            >
              Month {month}
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-slate-300 overflow-hidden mt-4">
        <div
          className="h-full bg-[#8fb339] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-slate-500 text-center">
        {progressPercentage.toFixed(0)}% through your Traya plan
      </p>
    </div>
  );
}

export default Timeline;
