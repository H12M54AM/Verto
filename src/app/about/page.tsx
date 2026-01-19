import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Verto | History & Credits',
    description: 'Learn about the history of the Hamiltonian Path puzzle and the team at Mutabie Canada Inc. behind Verto.',
};

export default function AboutPage() {
    return (
        <main className="flex-1 w-full bg-slate-50 py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header */}
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Behind the Grid
                    </h1>
                    <p className="text-xl text-slate-500 font-medium">
                        The mathematics and minds behind Verto.
                    </p>
                </header>

                {/* History Section */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-50 text-verto-primary rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5 12 12l3.5-3.5" /><path d="M12 12l3.5 3.5" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">The History of the Puzzle</h2>
                    </div>

                    <div className="prose prose-slate leading-relaxed text-slate-600">
                        <p>
                            The core mechanic of Verto is based on the <strong>Hamiltonian path problem</strong>, a classic concept in graph theory named after Irish mathematician William Rowan Hamilton.
                        </p>
                        <p>
                            In 1857, Hamilton invented the <em>Icosian Game</em>, a puzzle that required finding a path along the edges of a dodecahedron that visits every vertex exactly once and returns to the start. While Verto takes place on a 2D grid rather than a 3D solid, the challenge remains the same:
                            <span className="block my-4 pl-4 border-l-4 border-verto-primary font-medium italic text-slate-700 bg-slate-50 py-2">
                                "Visit every node exactly once, without crossing your path."
                            </span>
                        </p>
                        <p>
                            Unlike the "Travelling Salesman Problem," which involves finding the <em>shortest</em> path with weighted edges, the Hamiltonian Path is purely about existence and topology. In Verto, we add the constraint of sequential order numbers, transforming a complex mathematical problem into an engaging daily logic exercise.
                        </p>
                    </div>
                </section>

                {/* Credits Section */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Credits</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-lg font-bold text-slate-800">Production</h3>
                            <p className="text-slate-600">
                                Verto was architected and developed by <strong>Mutabie Canada Inc.</strong>, leveraging advanced AI-assisted coding workflows to create a seamless, high-performance web experience.
                            </p>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="text-lg font-bold text-slate-800">Technology</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Next.js 16 (App Router)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Tailwind CSS 4
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Vercel Edge Network
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                        <a
                            href="https://mutabie.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-verto-primary font-bold hover:underline"
                        >
                            Visit Mutabie Canada Inc.
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}
