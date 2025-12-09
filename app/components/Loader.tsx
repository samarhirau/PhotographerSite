"use client";

import React, { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 border-[3px] border-white/20 border-t-white rounded-full animate-spin"></div>
        <p className="text-white text-lg tracking-[0.3em] uppercase animate-fade">
          Loading
        </p>
      </div>
    </div>
  );
}
