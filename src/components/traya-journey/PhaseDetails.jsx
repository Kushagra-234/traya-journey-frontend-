import React from "react";

function PhaseDetails({ phase }) {
  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb339] mb-2 text-center">
        {phase.label}
      </p>
      <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
        {phase.title}
      </h3>
      <ul className="space-y-3">
        {phase.points.map((point) => (
          <li key={point} className="flex items-start gap-6 text-slate-700">
            <span className="text-[#8fb339] text-lg">✓</span>
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhaseDetails;
