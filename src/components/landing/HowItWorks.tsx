import { MessageSquare, Calendar, Heart } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Primer Contacto",
            description: "Escríbeme por WhatsApp para despejar tus dudas iniciales y coordinar nuestro primer encuentro.",
            color: "bg-primary-light/10 text-primary-light dark:bg-primary-light/20 dark:text-primary-light"
        },
        {
            icon: Calendar,
            title: "Consulta de Orientación",
            description: "Tendremos una charla gratuita de 15 minutos para conocernos, evaluar tu motivo de consulta y ver cómo puedo acompañarte.",
            color: "bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary"
        },
        {
            icon: Heart,
            title: "Inicio del Proceso",
            description: "Comenzamos las sesiones regulares semanales en un espacio seguro y confidencial, diseñado a tu medida.",
            color: "bg-primary-dark/30 text-primary-dark dark:bg-primary-dark/40 dark:text-primary-dark"
        }
    ];

    return (
        <section id="proceso" className="py-20 lg:py-24 bg-white/30 dark:bg-black/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-text-main dark:text-white mb-4">
                        ¿Cómo empezamos?
                    </h2>
                    <p className="text-text-main/70 dark:text-gray-400 max-w-2xl mx-auto font-light">
                        El proceso de iniciar terapia es un paso importante. Aquí te cuento cómo es el camino desde el primer mensaje hasta nuestra primera sesión.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Decorative line for desktop */}
                    <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent -z-10"></div>
                    
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative`}>
                                <step.icon className="w-8 h-8" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border border-gray-100 dark:border-gray-700">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="font-serif text-xl font-medium mb-3 text-text-main dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-sm text-text-main/70 dark:text-gray-400 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
