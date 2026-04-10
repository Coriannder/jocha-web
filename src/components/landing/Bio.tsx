import Image from "next/image";

export default function Bio() {
    return (
        <section id="sobre-mi" className="py-10 lg:py-14 relative scroll-mt-20 lg:scroll-mt-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        Sobre mi
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-text-main dark:text-white mb-8">
                        Habitar la distancia
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 mx-auto rounded-full"></div>
                </div>
                <div className="glass-card rounded-3xl p-6 md:p-8 shadow-sm bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                        <div className="prose prose-base prose-stone dark:prose-invert text-text-main/80 dark:text-gray-300 font-light leading-loose text-base text-justify md:text-left">
                            <p className="mb-8">
                                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-primary">
                                   M 
                                </span>
                                Migrar no es solo un desplazamiento geográfico, es un movimiento subjetivo que pone en juego diversos duelos.
                                Se desprenden de nosotros los modismos, la idiosincrasia y ese idioma que funciona como nuestro enlace afectivo fundamental.
                                Al partir, cambia el lugar que ocupábamos para los otros y nos confrontamos con lo que fuimos en relación a lo que aún no logramos habitar.
                                Ese vacío puede dejarnos atrapados en la idealización del pasado o en la espera de lo que no vuelve. El trabajo terapéutico propone transitar
                                esas pérdidas que aparecen &quot;a cuentagotas&quot;, para poder construir nuevas narrativas que se integren a nuestra historia y nos permitan volver
                                a sentirnos parte.
                                <br/>

                                Vivo en Italia desde hace tres años y me especializo en clínica online, con foco en los procesos
                                migratorios, sus efectos e implicancias en la subjetividad.
                                Soy Psicóloga egresada de la Universidad Nacional de Tucumán y
                                cuento con formación en clínica psicoanalítica y en el ámbito comunitario,
                                desempeñándome en la promoción de derechos humanos desde un abordaje pedagógico-psicológico
                                y en la prevención de consumos problemáticos.

                            </p>
                            {/* <p className="mb-8">
                                Como argentina viviendo en Florencia, entiendo profundamente la
                                ambivalencia del migrante: la alegría de descubrir lo nuevo
                                conviviendo con la nostalgia de lo conocido. El{" "}
                                <strong>{"duelo migratorio"}</strong> no es una enfermedad, es un
                                proceso natural de adaptación que requiere tiempo, paciencia y,
                                sobre todo, un espacio donde poder hablar tu propio idioma
                                emocional.
                            </p> */}
                            {/* <p>
                                Mi enfoque terapéutico busca integrar esas dos partes de tu
                                identidad: la que fuiste y la que estás construyendo. No tenés
                                que elegir entre tus raíces y tus alas.
                            </p> */}
                        </div>
                        <div className="flex flex-col items-center space-y-4 md:pt-4 min-w-[200px]">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-100/50 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800 shadow-lg">
                                    <Image
                                        src="/images/jocha-portrait.png"
                                        alt="Josefina Portrait"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="font-serif text-lg font-medium text-text-main dark:text-white">
                                    Josefina Dominguez <br/> Lovaglio.
                                </h4>
                                <p className="text-xs text-primary font-medium mt-1">
                                    Psicóloga UNT
                                </p>
                                <p className="text-[10px] text-text-main/60 dark:text-gray-500 mt-1">
                                    M.P. 3947
                                </p>
                            </div>
                            {/* <div className="pt-2 flex items-center justify-center">
                                <div className="relative w-8 h-6 mx-1 hover:scale-110 transition-transform">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuvhHMH_CV1eTiwCOHS2IOg8HdHyxlAOn-9fwXUVo1YcfvXy83SnoU3v68TfJCuO0siz43w64388yQDSWCsvnfDaFl6OJF6DnDYdUpg05Iv2jW8CLNW6C3U2YBM0ve640QA0ECuYp2cv5TOq-CIqtR5Ul_1NyJhihY4Cu4bGrqCwckvzYuqkdfwfFFvSxXszXa2ysYOfYCImGlqZHKosL-HmPyn4iw8UAThWmudo77cHaFKVIGRVw4Md7KURTbP3VIlVfg14lXIt8"
                                        alt="Argentina Flag"
                                        fill
                                        className="object-contain opacity-80"
                                    />
                                </div>
                                <span className="text-xs text-gray-400">&</span>
                                <div className="relative w-8 h-6 mx-1 hover:scale-110 transition-transform">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4flSOtFBAYQ7Fh9OlpkfarqlQhILWFaChy838mCEVMn1ZmImzXoOY3z5nsAFji3cV1LwuhDSh0KTORB5aa_lElsttUjxwbNNdT4hOpUhVzSkI0Vfz4xHcZ0NnetFm16KOozD3UnP5ScBVRazyMq53gjq6Mk6tm5xzT9tX4mrGqxiw8btTXSMgDGSNH4jFSY298rnGuw0Nza3P5WAxBLPWogjg6c49VSLce5LnbG1vDXaee1Pf1il8lD1id17h8bSagGBRqITMbX4"
                                        alt="Italy Flag"
                                        fill
                                        className="object-contain opacity-80"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </section>
    );
}
