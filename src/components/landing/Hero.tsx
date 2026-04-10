import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <header id="inicio" className="relative pt-28 pb-8 lg:pt-36 lg:pb-12 overflow-hidden min-h-[100vh] flex items-center scroll-mt-20 lg:scroll-mt-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        <div className="hidden lg:inline-block px-5 py-2 mb-8 rounded-full bg-primary/5 border border-primary/20 text-primary dark:text-green-100 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                            Psicóloga Clínica en Florencia, Italia
                        </div>

                        <h1 className="hidden lg:block font-serif text-2xl lg:text-4xl text-text-main dark:text-white leading-tight mb-4 drop-shadow-sm">
                            Psicología Online para{" "}
                            <span className="italic text-primary relative inline-block">
                                Argentinos
                                <svg
                                    className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 5 Q 50 10 100 5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                            </span>{" "}
                            en Europa y cualquier parte del mundo
                        </h1>

                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light mt-4 lg:mt-0">
                            Un espacio seguro en tu propio idioma para transitar los desafíos de vivir
                            lejos de casa, a través de una escucha profesional y singular sobre los
                            obstáculos que te atraviesan para encontrar un nuevo modo de habitar tu realidad.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

                            <Link
                                href="#reservar"
                                className="bg-gradient-to-br from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white text-base px-10 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-3 group border border-white/20"
                            >
                                Reservar Sesión
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="#sobre-mi"
                                className="bg-white/40 backdrop-blur-sm border-2 border-white/60 hover:border-primary text-text-main dark:text-white dark:border-white/20 dark:hover:border-white hover:text-primary px-10 py-4 rounded-full font-medium transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                Conocer más
                            </Link>

                        </div>

                        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-[10px] text-text-main/70 dark:text-gray-500">

                            <div className="flex -space-x-3">

                                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-background-dark overflow-hidden shadow-sm relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFb_A6ZL8BIl-yeBLkM_-gQOfVGoCPQ8uhr9T29o0E2xbJBNYtbOz374gsh8EK60iYkZTf7AL_uCZ2Hjv8dWg-9l4yIaO1c03lblrCoxdcbgokD8TePYblxRwtw-BHCTMtVfA7et_0M-JsHRhZgwHySlId935REfXZ9uT8q5Lx7MCpLpFuWQ5QK1cBaZmtN4DmQR4nwGIhs-purig_Tgc9n_kp0Ffn7pj0oMwW1eOeF1c1kF3OSTXd51sfIx99hogBvqrS8jQeBC8"
                                        alt="Client portrait"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-background-dark overflow-hidden shadow-sm relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaGJxJ6q-Ldb6OslQ5kxHNLXuYskm0PGu7MiHZ8fYnDHgnJ9_SxkArBxtGbBaSqemtpd4q6UehFvcRE5CuMXzMj4Cg8Ar3I8tAGR53BmLa7wruCfxa5-jq4PWGyxN7ZhErlMWXnyQXlAIy3d8nRRG4torIe5kGVswj2iXL0p_gzgYnPAXo1nl_rWtHrxc1ixeYMIdAn_ee_qfSDTOszZlYzRB8og3MAU3HvnOcbzEHO7fd7OzIMbTUKd3YWJkyF27h2VG0SUWPCPA"
                                        alt="Client portrait"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border-2 border-white dark:border-background-dark overflow-hidden flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">
                                    +50
                                </div>

                            </div>

                            <div className="flex flex-col text-left">

                                <span className="font-bold text-text-main dark:text-gray-300">
                                    Pacientes acompañados
                                </span>
                                <span className="text-[10px]">
                                    en procesos de migración este año
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">

                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl mx-auto max-w-md lg:max-w-[380px] ring-8 ring-white/30 backdrop-blur-sm transform lg:-translate-y-6">
                            <Image
                                src="/images/jocha-web.png"
                                alt="Josefina - Psicóloga Clínica"
                                fill
                                className="object-cover object-top transform scale-125 hover:scale-[1.30] transition-transform duration-1000"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay"></div>

                            {/* Mobile Overlay Title */}
                            <div className="absolute bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-background dark:via-background/90 lg:hidden flex flex-col items-center text-center z-20">
                                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-green-100 text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm">
                                    Psicóloga Clínica
                                </div>
                                <h1 className="font-serif text-2xl text-text-main dark:text-white leading-tight drop-shadow-sm">
                                    Psicología Online para{" "}
                                    <span className="italic text-primary relative inline-block">
                                        Argentinos
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 lg:bottom-0 -left-4 lg:-left-6 glass-card p-4 rounded-xl shadow-xl lg:max-w-[280px] hidden md:block border border-white/80 bg-white/70 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <span className="text-2xl font-serif">{""}</span>
                                </div>
                                <div>
                                    <p className="font-serif italic text-sm text-text-main/90 dark:text-gray-300 mb-2">
                                        {"Encontrar a Josefina fue como encontrar un pedacito de casa en Europa."}
                                    </p>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[45rem] h-[45rem] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[35rem] h-[35rem] bg-gradient-to-tr from-background-sage to-transparent dark:bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </header>
    );
}
