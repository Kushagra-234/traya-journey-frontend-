import React from "react";

function TrayaJourney() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl space-y-8">
        {/* Header */}
        <header className="space-y-2 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Traya Journey
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Visual timeline of your 5-month hair regrowth plan
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            This is a skeleton UI for the Traya Journey component. We will
            gradually add month-wise logic, phases, before/after photos, and
            reviews on top of this layout.
          </p>
        </header>

        {/* Main grid */}
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] items-start">
          {/* Left column: Timeline + Phase details */}
          <div className="space-y-4">
            {/* Timeline placeholder */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-slate-200">
                  Journey timeline
                </h2>
                <p className="text-xs text-slate-400">Month 1 – Month 5</p>
              </div>

              {/* Month buttons placeholder */}
              <div className="grid grid-cols-5 gap-2 text-xs">
                {["M1", "M2", "M3", "M4", "M5"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="h-9 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Progress bar placeholder */}
              <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
              </div>
            </section>

            {/* Phase details placeholder */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 shadow-sm space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                Phase 1 • Internal Balance
              </p>
              <h3 className="text-base md:text-lg font-semibold text-slate-50">
                Skeleton phase details
              </h3>
              <p className="text-sm text-slate-300">
                Here we will show month-specific explanations like digestion,
                sleep, scalp health, and visible regrowth as we wire real data
                and state later.
              </p>
              <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-300 list-disc list-inside">
                <li>Bullet point placeholder one</li>
                <li>Bullet point placeholder two</li>
                <li>Bullet point placeholder three</li>
              </ul>
            </section>
          </div>

          {/* Right column: Before/After + Trust widget placeholders */}
          <div className="space-y-4">
            {/* Before / After placeholder */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-200">
                  Before / After
                </h2>
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 p-0.5 text-xs">
                  <button className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-100">
                    Before
                  </button>
                  <button className="px-2.5 py-1 rounded-full text-slate-400">
                    After
                  </button>
                </div>
              </div>
              <div className="aspect-video rounded-xl border border-dashed border-slate-700 bg-slate-900/60 flex items-center justify-center text-xs text-slate-500">
                Image placeholder
              </div>
            </section>

            {/* Trust widget placeholder */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 shadow-sm space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                Verified reviews
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-semibold">4.8</p>
                <p className="text-xs text-slate-400">
                  / 5.0 • placeholder rating
                </p>
              </div>
              <div
                className="flex gap-1 text-amber-400 text-sm"
                aria-hidden="true"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
              <p className="text-xs text-slate-300">
                We will later plug in real JSON-backed mock review data and star
                ratings to make this section dynamic.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrayaJourney;
