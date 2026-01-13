import React from "react";
import Navbar from "./components/traya-journey/Navbar.jsx";
import TrayaJourney from "./components/traya-journey/TrayaJourney.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f0f2f5] flex flex-col">
      {/* Navbar - full width */}
      <Navbar />

      {/* Main content - centered */}
      <main className="flex-1 w-full flex justify-center">
        <TrayaJourney />
      </main>
    </div>
  );
}

export default App;
