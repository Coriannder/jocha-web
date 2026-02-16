import { Calendar, Video, Lock, CreditCard } from "lucide-react";

export default function Booking() {
    return (
        <section id="reservar" className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
                <div className="absolute -left-32 top-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-background-sage/60 dark:bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main dark:text-white mb-6">
                        Agenda tu sesión
                    </h2>
                    <p className="text-xl text-text-main/70 dark:text-gray-300 max-w-2xl mx-auto font-light">
                        {"Seleccioná el día y horario que mejor te convenga."} <br />
                        <span className="font-medium text-primary">
                            La primera consulta de orientación es gratuita (15 min).
                        </span>
                    </p>
                </div>

                <div className="glass-card rounded-2xl shadow-2xl p-3 border border-white/60 dark:border-white/10 backdrop-blur-xl bg-white/40 dark:bg-white/5">
                    <div className="w-full h-[700px] bg-white/50 dark:bg-gray-800/50 rounded-xl flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-primary/20 dark:border-gray-600 relative overflow-hidden group">
                        {/* Calendar Placeholder */}
                        <div className="z-10 text-center p-8 glass-card rounded-2xl shadow-lg max-w-sm bg-white/80 dark:bg-gray-900/80">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/10">
                                <Calendar className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-serif text-xl font-medium text-text-main dark:text-white mb-2">
                                Calendly Widget
                            </h3>
                            <p className="text-sm text-text-main/60 dark:text-gray-400 mb-6">
                                El sistema de reservas interactivo se cargará en este espacio.
                            </p>
                            <button
                                disabled
                                className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-medium opacity-50 cursor-not-allowed shadow-md"
                            >
                                Cargando horarios...
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-text-main/60 dark:text-gray-400">
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
