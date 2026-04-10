import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Privacidad() {
    return (
        <main className="min-h-screen relative bg-soft-gradient text-text-main dark:text-gray-200 font-display transition-colors duration-300">
            <Navbar />
            <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold mb-10 text-text-main dark:text-white">Política de Privacidad</h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-text-main/80 dark:text-gray-300 space-y-6">
                    <p>
                        Esta Política de Privacidad describe cómo Josefina Dominguez Lovaglio ("yo", "mi", "mí") recopila, utiliza y protege la información personal que me proporcionas a través del uso de mis servicios de psicoterapia online y mi sitio web.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">1. Responsable del Tratamiento de Datos</h2>
                    <p>
                        La responsable del tratamiento de los datos aportados por los usuarios en este sitio es Josefina Dominguez Lovaglio (Psicóloga Matrícula M.P. 3947), con domicilio a efectos de notificaciones en Florencia, Italia. Correo electrónico de contacto: josefinadl07@gmail.com
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">2. Qué información recopilo</h2>
                    <p>
                        Para el correcto desarrollo de los procesos terapéuticos, puedo recopilar:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Datos de identificación básica: nombre completo, edad, país de residencia.</li>
                        <li>Datos de contacto: número de teléfono (vía WhatsApp) y correo electrónico.</li>
                        <li>Información clínica y de salud: antecedentes psicológicos, notas de las sesiones y cualquier otra información que desidas compartir durante la terapia.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">3. Uso de los Datos</h2>
                    <p>
                        Los datos se utilizan exclusivamente con los siguientes fines:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Llevar a cabo las sesiones de psicoterapia solicitadas.</li>
                        <li>Gestión administrativa, contable y de seguimiento del proceso.</li>
                        <li>Comunicación directa contigo para confirmación, reagendamiento o cancelación de citas (principalmente vía WhatsApp).</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">4. Confidencialidad y Secreto Profesional</h2>
                    <p>
                        Como profesional de la salud mental, estoy sujeta al estricto secreto profesional. La información compartida en sesión es completamente confidencial y no será revelada a terceros sin tu consentimiento expreso, excepto en los casos excepcionales obligados por ley (ejemplo: riesgo inminente para la propia vida o de terceros).
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">5. Uso de Herramientas de Terceros (WhatsApp y Videollamadas)</h2>
                    <p>
                        El contacto inicial y la gestión de citas se realizan a través de WhatsApp. Al hacer clic en los botones de "Consulta Inicial" o "Sesión Regular" y enviarme un mensaje, estás consintiendo que utilice tu número de teléfono para responder a tu solicitud. Las sesiones se llevan a cabo mediante plataformas de videollamada como Zoom o Google Meet, cuyas propias políticas de privacidad y cifrado aplican durante su uso.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">6. Tus Derechos</h2>
                    <p>
                        En cualquier momento puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición respecto a tus datos personales. Para ello, puedes enviarme un correo electrónico a josefinadl07@gmail.com.
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
