import React from "react";

function TrustWidget() {
  return (
    <div className="w-full text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb339] mb-3">
        Verified Reviews
      </p>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-lg font-bold text-slate-900">4.8/ 5.0</span>
        <div className="flex gap-0.5 text-amber-400 text-lg">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Based on 1,200+ verified customer reviews
      </p>
    </div>
  );
}

export default TrustWidget;
