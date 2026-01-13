import React, { useMemo, useState } from "react";
import Timeline from "./Timeline";
import PhaseDetails from "./PhaseDetails";
import BeforeAfter from "./BeforeAfter";
import TrustWidget from "./TrustWidget";

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
    <div className="w-[80%] bg-white text-slate-800">
      {/* Page title section */}
      <section className="w-full bg-white py-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          Your Hair Regrowth Timeline
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Track your 5-month journey with Ayurveda, Dermatology & Nutrition
        </p>
      </section>

      {/* Timeline section */}
      <section className="w-full bg-[#f5f5f5] py-6 px-6">
        <Timeline
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
          months={MONTHS}
          progressPercentage={progressPercentage}
        />
      </section>

      {/* Phase Details section */}
      <section className="w-full bg-[#eaeaea] py-6 px-6">
        <PhaseDetails phase={phase} />
      </section>

      {/* Before / After section */}
      <section className="w-full bg-[#f5f5f5] py-6 px-6">
        <BeforeAfter selectedMonth={selectedMonth} />
      </section>

      {/* Trust Widget section */}
      <section className="w-full bg-white py-6 px-6">
        <TrustWidget />
      </section>
    </div>
  );
}

export default TrayaJourney;
