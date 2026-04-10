"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-white/50 dark:border-white/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            href="/#inicio"
                            onClick={isOpen ? toggleMenu : undefined}
                            className="font-serif text-3xl text-primary dark:text-white tracking-tight font-medium hover:opacity-80 transition-opacity"
                        >
                            Josefina.
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-10 items-center">
                        <Link
                            href="/#sobre-mi"
                            className="text-text-main/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-base font-medium"
                        >
                            Sobre mí
                        </Link>
                        <Link
                            href="/#servicios"
                            className="text-text-main/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-base font-medium"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/#faq"
                            className="text-text-main/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-base font-medium"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link
                            href="/#reservar"
                            className="bg-gradient-to-br from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide"
                        >
                            Reservar Sesión
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-text-main dark:text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-white/20">
                    <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                        <Link
                            href="/#sobre-mi"
                            onClick={toggleMenu}
                            className="text-text-main/90 dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
                        >
                            Sobre mí
                        </Link>
                        <Link
                            href="/#servicios"
                            onClick={toggleMenu}
                            className="text-text-main/90 dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/#faq"
                            onClick={toggleMenu}
                            className="text-text-main/90 dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link
                            href="/#reservar"
                            onClick={toggleMenu}
                            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium w-full text-center shadow-md"
                        >
                            Reservar Sesión
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
