import Link from "next/link";
import { ArrowRight, Brain, Fingerprint, Sparkles } from "lucide-react";
import ServiceCard from "@/components/landing/ServiceCard";

export default function Services() {
    const services = [
        {
            icon: Brain,
            title: "Terapia Individual",
            description: "Espacio confidencial para explorar tus emociones, patrones de conducta y desafíos personales. Un encuentro semanal para detenerte y escucharte sin juicios.",
            items: [
                "Autoestima y valoración",
                "Vínculos a distancia",
                "Gestión emocional"
            ]
        },
        {
            icon: Fingerprint,
            title: "Crisis de Identidad",
            description: "Cuando el entorno cambia, nosotros también. Trabajamos en redefinir quién sos en este nuevo contexto, integrando tu historia con tu presente.",
            items: [
                "Choque cultural",
                "Sentido de pertenencia",
                "Proyecto de vida"
            ],
            isFeatured: true
        },
        {
            icon: Sparkles,
            title: "Ansiedad y Adaptación",
            description: "Herramientas concretas para gestionar la incertidumbre del migrante, el estrés por los trámites y la presión de 'tener éxito' en el exterior.",
            items: [
                "Ataques de pánico",
                "Estrés post-migratorio",
                "Insomnio"
            ]
        }
    ];

    return (
        <section id="servicios" className="py-12 lg:py-16 scroll-mt-20 lg:scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                            Mis Servicios
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-text-main dark:text-white mb-6">
                            Áreas de Trabajo
                        </h2>
                        <p className="text-text-main/70 dark:text-gray-400 text-base font-light">
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
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
