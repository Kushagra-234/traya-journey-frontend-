import { useMemo, useState } from "react";
import Timeline from "./Timeline";
import PhaseDetails from "./PhaseDetails";
import BeforeAfter from "./BeforeAfter";
import TrustWidget from "./TrustWidget";
import Footer from "../common/Footer";
import journeyData from "../../data/journeyData.json";

type Month = 1 | 2 | 3 | 4 | 5;

const MONTHS: Month[] = [1, 2, 3, 4, 5];

type Phase = {
  key: string;
  label: string;
  title: string;
  months: number[];
  points: string[];
};

function getPhaseForMonth(month: Month): Phase {
  const phase = journeyData.phases.find((p: Phase) => p.months.includes(month));
  return phase || journeyData.phases[0];
}

function TrayaJourney() {
  const [selectedMonth, setSelectedMonth] = useState<Month>(1);

  const phase = useMemo(() => getPhaseForMonth(selectedMonth), [selectedMonth]);

  const progressPercentage = (selectedMonth / MONTHS.length) * 100;

  return (
    <div className="w-full bg-white text-slate-800">
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
          onMonthChange={(month) => setSelectedMonth(month as Month)}
          months={MONTHS}
          progressPercentage={progressPercentage}
        />
      </section>

      {/* Phase Details section */}
      <section className="w-full bg-[#eaeaea] py-6 px-6">
        <PhaseDetails
          phase={phase}
          selectedMonth={selectedMonth}
          monthImages={journeyData.monthImages}
        />
      </section>

      {/* Before / After section */}
      <section className="w-full bg-[#f5f5f5] py-6 px-6">
        <BeforeAfter monthImages={journeyData.monthImages} />
      </section>

      {/* Trust Widget section */}
      <section className="w-full bg-white py-6 px-6">
        <TrustWidget />
      </section>

      <Footer />
    </div>
  );
}

export default TrayaJourney;
