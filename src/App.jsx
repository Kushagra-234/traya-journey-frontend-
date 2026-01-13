import React from "react";
import Navbar from "./components/traya-journey/Navbar.jsx";
import TrayaJourney from "./components/traya-journey/TrayaJourney.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f0f2f5] flex flex-col">
      {/* Navbar - full width */}
      <Navbar />

      {/* Main content - centered */}
      <main className="flex-1 w-full flex justify-center px-4 sm:px-6 py-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-sm">
          <TrayaJourney />
        </div>
      </main>
    </div>
  );
}

export default App;
