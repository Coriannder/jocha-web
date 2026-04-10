import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function AvisoLegal() {
    return (
        <main className="min-h-screen relative bg-soft-gradient text-text-main dark:text-gray-200 font-display transition-colors duration-300">
            <Navbar />
            <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold mb-10 text-text-main dark:text-white">Aviso Legal</h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-text-main/80 dark:text-gray-300 space-y-6">
                    <p>
                        En cumplimiento con el deber de información y transparencia, a continuación se detallan los datos legales del titular de la presente página web.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">1. Datos Identificativos</h2>
                    <ul className="list-disc pl-5">
                        <li><strong>Titular de la actividad:</strong> Josefina Dominguez Lovaglio</li>
                        <li><strong>Título Profesional:</strong> Psicóloga, egresada de la Universidad Nacional de Tucumán (UNT)</li>
                        <li><strong>Matrícula Profesional:</strong> M.P. 3947</li>
                        <li><strong>Correo electrónico de contacto:</strong> josefinadl07@gmail.com</li>
                        <li><strong>País de residencia actual:</strong> Italia</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">2. Objeto del Sitio Web</h2>
                    <p>
                        El propósito de esta web es únicamente de carácter informativo sobre los servicios profesionales de psicoterapia y acompañamiento clínico online de su titular. 
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">3. Ejercicio Profesional</h2>
                    <p>
                        El ejercicio de la psicología provisto a través de las sesiones online cumple con la regulación y código ético determinado por su colegio profesional, asegurando en todo momento el respeto a la integridad del paciente, el rigor técnico y la confidencialidad. 
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">4. Propiedad Intelectual</h2>
                    <p>
                        Todos los contenidos elaborados que conforman este sitio web, diseño, código fuente, y fotografías (excepto aquellas libres de licencia provistas por terceros), son propiedad de su creador y se encuentran protegidas por la normativa en materia de propiedad intelectual.
                    </p>
                    
                    <p className="mt-12 text-sm text-text-main/60 dark:text-gray-400">
                        Última actualización: Abril 2026
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
