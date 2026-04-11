"use client";

import Link from "next/link";
import { ArrowRight, Brain, Fingerprint, Sparkles } from "lucide-react";
import ServiceCard from "@/components/landing/ServiceCard";

export default function Services() {
    const services = [
        {
            icon: Brain,
            title: "Terapia Individual",
            description: "Un espacio para ponerle palabras al malestar y reencontrarse con el propio deseo.Es un encuadre confidencial para trabajar sobre aquello que nos detiene o nos abruma, buscando aliviar el peso de los síntomas que afectan el día a día.",
            items: [
                "Tratamiento de síntomas y angustias.",
                "Análisis de inhibiciones que limitan el accionar.",
                "Reconstrucción de lazos vinculares y afectivos."
            ]
        },
        {
            icon: Fingerprint,
            title: "Desafíos del Proceso Migratorio",
            description: "Repensarse en un nuevo contexto: cuando los puntos de referencia habituales cambian. La migración pone en jaque quiénes creemos ser. Trabajamos en la integración de tu historia personal con el presente, alojando la extrañeza que aparece al habitar una cultura diferente.",
            items: [
                "Elaboración del duelo migratorio.",
                "Búsqueda de un nuevo sentido de pertenencia.",
                "Construcción de soportes en la nueva trama social."
            ],
            isFeatured: true
        },
        {
            icon: Sparkles,
            title: "Ansiedad y Contingencias",
            description: "Herramientas para transitar la incertidumbre y el desgaste emocional. Vivir lejos de casa suele traer aparejada la sensación de falta de control. Trabajamos para transformar la parálisis frente a lo desconocido en puntos de apoyo que permitan lidiar con la realidad de forma más cuidada.",
            items: [
                "Abordaje de crisis de angustia y pánico.",
                "Tratamiento de miedos y fobias.",
                "Gestión del cansancio subjetivo ante lo nuevo."
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
                            Propongo un abordaje integral que prioriza la escucha singular frente al sufrimiento.
                            El proceso terapéutico permite desarmar la lógica de lo &quot;predestinado&quot; para empezar
                            a entender lo que nos ocurre desde un lugar nuevo, permitiéndonos ser protagonistas de
                            nuestra propia historia.
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
