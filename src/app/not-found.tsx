import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen relative bg-background-light dark:bg-background-dark text-text-main dark:text-gray-200 font-display flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center px-4 py-32">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="font-serif text-8xl md:text-9xl text-primary/20 dark:text-primary/10 mb-[-2rem] animate-pulse">
                        404
                    </h1>
                    <h2 className="font-serif text-3xl md:text-4xl text-text-main dark:text-white mb-6 relative z-10">
                        Parece que te has perdido en el camino
                    </h2>
                    <p className="text-text-main/70 dark:text-gray-400 mb-10 text-lg font-light leading-relaxed">
                        No te preocupes, a veces perderse es parte del proceso. 
                        La página que buscas no existe o ha sido movida, pero siempre puedes volver al inicio.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
