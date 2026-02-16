import Link from "next/link";
import { ArrowRight, Brain, Fingerprint, Sparkles } from "lucide-react";

export default function Services() {
    return (
        <section id="servicios" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                            Mis Servicios
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-text-main dark:text-white mb-6">
                            Áreas de Trabajo
                        </h2>
                        <p className="text-text-main/70 dark:text-gray-400 text-lg font-light">
                            Un abordaje integral adaptado a tus necesidades y momentos
                            vitales, diseñado específicamente para quienes viven lejos de
                            casa.
                        </p>
                    </div>
                    <Link
                        href="#reservar"
                        className="text-primary hover:text-primary-light font-medium flex items-center gap-2 group whitespace-nowrap"
                    >
                        Ver disponibilidad
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {/* Service 1 */}
                    <div className="glass-card p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full relative z-10 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md">
                        <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/50 shadow-inner group-hover:scale-110 transition-all duration-500 text-primary">
                            <Brain className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-2xl font-medium mb-4 text-text-main dark:text-white">
                            Terapia Individual
                        </h3>
                        <p className="text-text-main/70 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                            Espacio confidencial para explorar tus emociones, patrones de
                            conducta y desafíos personales. Un encuentro semanal para
                            detenerte y escucharte sin juicios.
                        </p>
                        <div className="border-t border-primary/10 dark:border-gray-700 pt-6 mt-auto">
                            <ul className="text-sm text-text-main/60 dark:text-gray-500 space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Autoestima y valoración
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Vínculos a distancia
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Gestión emocional
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 2 (Featured) */}
                    <div className="glass-card p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full transform md:-translate-y-4 ring-1 ring-primary/20 hover:ring-primary/40 bg-white/60 dark:bg-white/10 backdrop-blur-xl">
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary to-primary-light text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-xl tracking-wide shadow-md">
                            MÁS CONSULTADO
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/10 shadow-inner group-hover:scale-110 transition-all duration-500 text-primary">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-2xl font-medium mb-4 text-text-main dark:text-white">
                            Crisis de Identidad
                        </h3>
                        <p className="text-text-main/70 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                            Cuando el entorno cambia, nosotros también. Trabajamos en
                            redefinir quién sos en este nuevo contexto, integrando tu historia
                            con tu presente.
                        </p>
                        <div className="border-t border-primary/10 dark:border-gray-700 pt-6 mt-auto">
                            <ul className="text-sm text-text-main/60 dark:text-gray-500 space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Choque cultural
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Sentido de pertenencia
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Proyecto de vida
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="glass-card p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full relative z-10 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md">
                        <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/50 shadow-inner group-hover:scale-110 transition-all duration-500 text-primary">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-2xl font-medium mb-4 text-text-main dark:text-white">
                            Ansiedad y Adaptación
                        </h3>
                        <p className="text-text-main/70 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                            Herramientas concretas para gestionar la incertidumbre del
                            migrante, el estrés por los trámites y la presión de &quot;tener éxito&quot;
                            en el exterior.
                        </p>
                        <div className="border-t border-primary/10 dark:border-gray-700 pt-6 mt-auto">
                            <ul className="text-sm text-text-main/60 dark:text-gray-500 space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Ataques de pánico
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Estrés post-migratorio
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                                    Insomnio
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
