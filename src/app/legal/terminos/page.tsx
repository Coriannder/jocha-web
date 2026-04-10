import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Terminos() {
    return (
        <main className="min-h-screen relative bg-soft-gradient text-text-main dark:text-gray-200 font-display transition-colors duration-300">
            <Navbar />
            <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold mb-10 text-text-main dark:text-white">Términos y Condiciones</h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-text-main/80 dark:text-gray-300 space-y-6">
                    <p>
                        Las presentes condiciones regulan el uso de los servicios de psicoterapia online brindados por Josefina Dominguez Lovaglio. Al agendar e iniciar un proceso terapéutico, aceptas implícitamente estas condiciones.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">1. Modalidad del Servicio</h2>
                    <p>
                        Las sesiones se realizan de forma exclusivamente online mediante videollamadas. La duración de las sesiones regulares es de aproximadamente 50 minutos. La frecuencia suele ser semanal inicialmente, y será evaluada conjuntamente con el paciente a lo largo del tratamiento.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">2. Política de Cancelaciones y Reprogramación</h2>
                    <p>
                        Para asegurar el correcto funcionamiento de la agenda y el respeto por el tiempo de la profesional y de otros pacientes, se aplica la siguiente política:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Las cancelaciones o modificaciones deben avisarse con al menos <strong>24 horas de anticipación</strong>.</li>
                        <li>Las sesiones canceladas o reprogramadas con <strong>menos de 24 horas de antelación se considerarán brindadas y deberán ser abonadas</strong> en su totalidad, independientemente del motivo.</li>
                        <li>En caso de olvido o ausencia a la sesión sin previo aviso, la sesión será cobrada.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">3. Honorarios y Pagos</h2>
                    <p>
                        El valor de la sesión se informará en el primer contacto. Los pagos en Europa o resto del mundo se gestionan vía transferencia bancaria (SEPA) o PayPal, y en Argentina mediante transferencias locales. 
                        El pago se debe realizar preferentemente antes del inicio de la sesión o en su defecto durante las 24 horas posteriores a la misma.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">4. Limitaciones Terapéuticas Online (Aviso Importante)</h2>
                    <p>
                        El servicio de atención psicológica online está enfocado al acompañamiento, la exploración emocional y la derivación de malestares vinculados (entre otros) a crisis migratorias, duelos y ansiedad clínica. 
                    </p>
                    <p>
                        <strong>Este no es un servicio para atención de emergencias o crisis psiquiátricas graves.</strong> Si sientes que tu vida o la de otros está en peligro inminente, experimentas un episodio psicótico activo, o te encuentras en una emergencia médica, <strong>debes acudir de inmediato a la guardia del hospital más cercano de la ciudad donde resides o contactar a las líneas locales de emergencia.</strong>
                    </p>

                    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-text-main dark:text-gray-200">5. Compromiso del Paciente</h2>
                    <p>
                        Al iniciar sesión, te comprometes a contar con un espacio privado, libre de interrupciones, y una conexión a internet estable. No está permitido en ningún caso grabar las sesiones en video o audio.
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
