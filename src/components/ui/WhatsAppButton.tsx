import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/393792954744?text=Hola%20Josefina%2C%20vi%20tu%20web%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center z-[100] group"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-x-4 group-hover:translate-x-0 pointer-events-none">
                ¿Hablamos?
                <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></span>
            </span>
        </a>
    );
}
