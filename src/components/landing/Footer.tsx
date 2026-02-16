import Link from "next/link";
import { Camera, Mail, User, MapPin, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2C3333] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <span className="font-serif text-3xl text-white font-bold mb-6 block tracking-tight">
                            Josefina.
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Acompañamiento psicológico profesional con calidez humana.
                            Especialista en procesos migratorios y crisis vitales, ayudándote
                            a sentirte en casa, estés donde estés.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-primary hover:to-primary-light transition-all duration-300 shadow-sm"
                            >
                                <Camera className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-primary hover:to-primary-light transition-all duration-300 shadow-sm"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-primary hover:to-primary-light transition-all duration-300 shadow-sm"
                            >
                                <User className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6 text-white tracking-wide">
                            Mapa del sitio
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>
                                <Link
                                    href="#sobre-mi"
                                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                                >
                                    Sobre mí
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#servicios"
                                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#faq"
                                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                                >
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#reservar"
                                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                                >
                                    Reservar turno
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6 text-white tracking-wide">
                            Servicios
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Terapia Individual
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Orientación a Expatriados
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Talleres de Duelo Migratorio
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Consultoría Online
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6 text-white tracking-wide">
                            Contacto
                        </h4>
                        <ul className="space-y-6 text-gray-400 text-sm">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                <span>
                                    Florencia, Italia<br />
                                    <span className="text-xs text-gray-500 mt-1 block">
                                        (Atención Online Global)
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-primary" />
                                <Link
                                    href="mailto:hola@josefinapsi.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hola@josefinapsi.com
                                </Link>
                            </li>
                            <li className="flex items-center gap-4">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>Lun - Vie: 9:00 - 19:00 (CET)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500">
                        © 2023 Josefina Psicología. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Aviso Legal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
