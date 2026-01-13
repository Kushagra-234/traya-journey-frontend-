import React, { useMemo, useState } from "react";

const MONTHS = [1, 2, 3, 4, 5];

function getPhaseForMonth(month) {
  if (month === 1) {
    return {
      key: "phase-1",
      label: "Phase 1 · Internal Balance",
      title: "Internal balance and system reset",
      points: [
        "Digestion and sleep quality start to improve",
        "Energy levels feel more stable through the day",
        "You may not see visible hair changes yet — this is expected",
      ],
    };
  }

  if (month === 2 || month === 3) {
    return {
      key: "phase-2",
      label: "Phase 2 · Scalp Health",
      title: "Scalp health and follicle activation",
      points: [
        "Dandruff and itchiness begin to settle down",
        "Hair fall stabilises as follicles are activated",
        "Scalp feels cleaner and less greasy between washes",
      ],
    };
  }

  return {
    key: "phase-3",
    label: "Phase 3 · Regrowth",
    title: "Visible baby hair and density",
    points: [
      "Soft baby hair becomes visible along the hairline",
      "Density gradually improves in thinner areas",
      "Consistency now matters more than ever for long-term gains",
    ],
  };
}

function TrayaJourney() {
  const [selectedMonth, setSelectedMonth] = useState(1);

  const phase = useMemo(() => getPhaseForMonth(selectedMonth), [selectedMonth]);

  const progressPercentage = (selectedMonth / MONTHS.length) * 100;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top header bar */}
      <header className="bg-[#3d424f] px-4 py-3 md:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-white font-semibold text-lg tracking-wide">
            Traya.
          </span>
          <span className="text-xs text-slate-300 hidden sm:inline">
            Your personalised 5-month hair regrowth journey
          </span>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:px-6 md:py-10">
        {/* Page title */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7fb446] mb-2">
            Traya Journey
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Understand your hair regrowth timeline
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Move across the 5-month journey to see how Ayurveda, Dermatology,
            and Nutrition work together to restore your hair.
          </p>
        </div>

        {/* Timeline section */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-800">
              Journey Timeline
            </h2>
            <p className="text-xs text-slate-500">
              Month {selectedMonth} of {MONTHS.length}
            </p>
          </div>

          {/* Month buttons */}
          <div className="grid grid-cols-5 gap-2 text-xs">
            {MONTHS.map((month) => {
              const isActive = month === selectedMonth;
              return (
                <button
                  key={month}
                  type="button"
                  onClick={() => setSelectedMonth(month)}
                  className={[
                    "h-10 rounded-lg border text-center font-medium transition-all",
                    isActive
                      ? "border-[#7fb446] bg-[#7fb446] text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:border-[#7fb446] hover:bg-[#f0f7e6]",
                  ].join(" ")}
                >
                  Month {month}
                </button>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="h-2 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[#7fb446] transition-[width] duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {progressPercentage.toFixed(0)}% through your Traya plan
            </p>
          </div>
        </section>

        {/* Two column grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Phase details */}
          <section className="rounded-xl border border-slate-200 bg-white p-4 md:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7fb446] mb-2">
              {phase.label}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              {phase.title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {phase.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-[#7fb446] mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Before / After */}
          <section className="rounded-xl border border-slate-200 bg-white p-4 md:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-slate-800">
                Before / After
              </h2>
              <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs">
                <button className="px-3 py-1.5 rounded-md bg-white text-slate-900 shadow-sm font-medium">
                  Before
                </button>
                <button className="px-3 py-1.5 rounded-md text-slate-500">
                  After
                </button>
              </div>
            </div>
            <div className="aspect-video rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-400">
              Image for Month {selectedMonth}
            </div>
          </section>
        </div>

        {/* Trust widget */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7fb446] mb-1">
                Verified Reviews
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">4.8</span>
                <span className="text-sm text-slate-500">/ 5.0</span>
              </div>
              <div className="flex gap-0.5 text-amber-400 text-lg mt-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-slate-300">★</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Based on 1,200+ verified customer reviews. Real results from real
              people on their hair regrowth journey.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TrayaJourney;
