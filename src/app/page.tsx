/**
 * Verto - Daily Logic Puzzle
 * Copyright (C) 2026 Mutabie Canada Inc.
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

import VertoGame from "@/components/VertoGame";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50 flex flex-col items-center py-12 px-4 md:px-8 font-sans text-slate-900">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <header className="mb-8 text-center space-y-2">
          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            Verto
          </h1>
          <h1 className="text-2xl font-black tracking-tight text-slate-600">
            One Path. Every Node. No Mistakes.
          </h1>

          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-4"></div>

          <p className="text-slate-500 font-medium text-lg">
            The Daily Logic Path
          </p>
        </header>

        <VertoGame />
      </div>
    </main>
  );
}
