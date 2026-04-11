"use client";

import { Video, Lock, CreditCard } from "lucide-react";

export default function Booking() {

    return (
        <section id="reservar" className="py-16 lg:py-24 relative overflow-hidden scroll-mt-20 lg:scroll-mt-16">
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
                        {"Escribime para coordinar el día y horario que mejor te convenga."} <br />
                        <span className="font-medium text-primary">
                            La primera consulta de orientación es gratuita (15 min).
                        </span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10" id="booking-buttons-container">
                    {/* Botón 1: Consulta Inicial (15 min) */}
                    <a
                        href="https://wa.me/393792954744?text=Hola%20Josefina%2C%20vi%20tu%20web%20y%20me%20gustar%C3%ADa%20coordinar%20la%20consulta%20inicial%20gratuita%20de%2015%20min.%20Mi%20zona%20horaria%20es..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-8 py-4 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95 active:duration-75 w-full md:w-auto text-center"
                    >
                        Consulta Inicial (Gratis)
                    </a>

                    {/* Botón 2: Sesión Regular (45 min) */}
                    <a
                        href="https://wa.me/393792954744?text=Hola%20Josefina%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20regular%20contigo.%20%C2%BFPodr%C3%ADas%20decirme%20qu%C3%A9%20horarios%20tienes%20disponibles%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary border-2 border-primary px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 transform active:scale-95 active:duration-75 w-full md:w-auto text-center"
                    >
                        Sesión Regular
                    </a>
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
