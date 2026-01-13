import React, { useState } from "react";

function BeforeAfter({ selectedMonth }) {
  const [activeTab, setActiveTab] = useState("before");

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
          Before / After
        </h2>
        <div className="inline-flex items-center border border-slate-300 rounded overflow-hidden text-sm">
          <button
            onClick={() => setActiveTab("before")}
            className={[
              "px-4 py-2 font-medium transition-all border-r border-slate-300",
              activeTab === "before"
                ? "bg-white text-slate-900"
                : "bg-slate-100 text-slate-500",
            ].join(" ")}
          >
            Before
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={[
              "px-4 py-2 font-medium transition-all",
              activeTab === "after"
                ? "bg-white text-slate-900"
                : "bg-slate-100 text-slate-500",
            ].join(" ")}
          >
            After
          </button>
        </div>
      </div>
      <div className="w-full py-8 text-center text-sm text-slate-500">
        {activeTab === "before" ? "Before" : "After"} image for Month{" "}
        {selectedMonth}
      </div>
    </div>
  );
}

export default BeforeAfter;
