"use client";

import { Video, Lock, CreditCard } from "lucide-react";
import { InlineWidget } from "react-calendly";

export default function Booking() {
    return (
        <section id="reservar" className="py-10 lg:py-14 relative overflow-hidden scroll-mt-20 lg:scroll-mt-16">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
                <div className="absolute -left-32 top-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-background-sage/60 dark:bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-text-main dark:text-white mb-6">
                        Agenda tu sesión
                    </h2>
                    <p className="text-lg text-text-main/70 dark:text-gray-300 max-w-2xl mx-auto font-light">
                        {"Seleccioná el día y horario que mejor te convenga."} <br />
                        <span className="font-medium text-primary">
                            La primera consulta de orientación es gratuita (15 min).
                        </span>
                    </p>
                </div>

                <div className="glass-card rounded-2xl shadow-2xl p-1 border border-white/60 dark:border-white/10 backdrop-blur-xl bg-white/40 dark:bg-white/5 overflow-hidden">
                    {/* 
                        height="700px" is standard for InlineWidget. 
                    */}
                    <div className="w-full h-[500px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden relative">
                        <InlineWidget
                            url="https://calendly.com/sebastiantaboada-bm/30min"
                            styles={{ height: "100%", width: "100%" }}
                            pageSettings={{
                                backgroundColor: "ffffff",
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: "5F7161", // Josefina Primary Green
                                textColor: "2C3333",
                            }}
                        />
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-xs text-text-main/60 dark:text-gray-400">
                    <div className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full shadow-sm hover:shadow-md transition-all bg-white/50 dark:bg-white/5">
                        <Video className="w-5 h-5 text-primary" />
                        <span>Google Meet / Zoom</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full shadow-sm hover:shadow-md transition-all bg-white/50 dark:bg-white/5">
                        <Lock className="w-5 h-5 text-primary" />
                        <span>100% Confidencial</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full shadow-sm hover:shadow-md transition-all bg-white/50 dark:bg-white/5">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span>Pagos Internacionales</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
