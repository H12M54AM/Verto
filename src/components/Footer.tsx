/**
 * Verto - Daily Logic Puzzle
 * Copyright (C) 2026 Mutabie Canada Inc.
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
export default function Footer() {
    return (
        <footer className="w-full bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm text-slate-500 font-medium">
                        &copy; {new Date().getFullYear()} <a href="https://mutabie.ca" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-verto-primary transition-colors hover:underline">Mutabie Canada Inc.</a> All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://mutabie.ca" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors">
                    </a>
                        Company
                    <a href="https://mutabie.ca/contact" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
