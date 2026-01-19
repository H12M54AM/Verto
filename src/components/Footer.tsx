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
                        Company
                    </a>
                    <a href="https://mutabie.ca/contact" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
