import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
    return (
        <section id="faq" className="py-10 lg:py-14 min-h-screen scroll-mt-20 lg:scroll-mt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl md:text-4xl text-center text-text-main dark:text-white mb-16 mt-8 ">
                    Preguntas Frecuentes
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="glass-card rounded-2xl border border-white/60 dark:border-gray-700 transition-all duration-300 px-6 sm:px-8 py-0 bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden">
                        <AccordionTrigger className="text-base sm:text-lg font-medium text-text-main dark:text-white hover:text-primary hover:no-underline text-left py-4">
                            ¿Cómo funcionan los pagos desde el exterior?
                        </AccordionTrigger>
                        <AccordionContent className="text-text-main/70 dark:text-gray-400 leading-relaxed text-sm pt-0 pb-6">
                            <p>La flexibilidad es clave para quienes vivimos afuera. Podés abonar mediante:</p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-primary">
                                <li><strong>Transferencia bancaria europea (IBAN):</strong> Ideal si estás en zona SEPA.</li>
                                <li><strong>PayPal:</strong> Para pagos internacionales desde cualquier parte del mundo.</li>
                                <li><strong>Transferencia en pesos argentinos:</strong> Si mantenés cuenta bancaria en Argentina.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="glass-card rounded-2xl border border-white/60 dark:border-gray-700 transition-all duration-300 px-6 sm:px-8 py-0 bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden">
                        <AccordionTrigger className="text-base sm:text-lg font-medium text-text-main dark:text-white hover:text-primary hover:no-underline text-left py-4">
                            ¿Atendés en diferentes zonas horarias?
                        </AccordionTrigger>
                        <AccordionContent className="text-text-main/70 dark:text-gray-400 leading-relaxed text-sm pt-0 pb-6">
                            Sí, absolutamente. Entiendo la complejidad de coordinar horarios con diferencia horaria. Mi agenda online muestra automáticamente la disponibilidad convertida a <strong>tu hora local</strong>. Actualmente atiendo pacientes en Europa (CET), Reino Unido, Australia y toda América.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="glass-card rounded-2xl border border-white/60 dark:border-gray-700 transition-all duration-300 px-6 sm:px-8 py-0 bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden">
                        <AccordionTrigger className="text-base sm:text-lg font-medium text-text-main dark:text-white hover:text-primary hover:no-underline text-left py-4">
                            ¿Qué necesito para la sesión online?
                        </AccordionTrigger>
                        <AccordionContent className="text-text-main/70 dark:text-gray-400 leading-relaxed text-sm pt-0 pb-6">
                            La terapia online es tan efectiva como la presencial si se dan las condiciones adecuadas. Necesitás:
                            <ul className="mt-2 space-y-1 list-disc pl-5 marker:text-primary">
                                <li>Una conexión a internet estable.</li>
                                <li>Un dispositivo con cámara y micrófono (preferiblemente computadora o tablet).</li>
                                <li><strong>Lo más importante:</strong> Un lugar privado y tranquilo donde te sientas cómodo/a para hablar libremente sin interrupciones.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="glass-card rounded-2xl border border-white/60 dark:border-gray-700 transition-all duration-300 px-6 sm:px-8 py-0 bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden">
                        <AccordionTrigger className="text-base sm:text-lg font-medium text-text-main dark:text-white hover:text-primary hover:no-underline text-left py-4">
                            ¿Cuánto dura cada sesión y cuál es la frecuencia?
                        </AccordionTrigger>
                        <AccordionContent className="text-text-main/70 dark:text-gray-400 leading-relaxed text-sm pt-0 pb-6">
                            Las sesiones individuales tienen una duración de <strong>50 minutos</strong>. La frecuencia suele ser semanal al inicio del tratamiento para establecer un buen vínculo terapéutico y trabajar sobre los motivos de consulta más urgentes. Luego, según la evolución, podemos espaciar los encuentros a quincenales.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="mt-8 text-center text-sm">
                    <p className="text-text-main/60 dark:text-gray-400 mb-2">¿Tenés otra duda?</p>
                    <Link href="mailto:hola@josefinapsi.com" className="text-primary font-medium hover:underline decoration-2 underline-offset-4">
                        Escribime directamente
                    </Link>
                </div>
            </div>
        </section>
    );
}
