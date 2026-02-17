import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    items: string[];
    isFeatured?: boolean;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    items,
    isFeatured = false,
}: ServiceCardProps) {
    return (
        <div
            className={`glass-card p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full ${isFeatured
                    ? "shadow-lg hover:shadow-2xl transform md:-translate-y-4 ring-1 ring-primary/20 hover:ring-primary/40 bg-white/60 dark:bg-white/10 backdrop-blur-xl"
                    : "shadow-sm hover:shadow-xl hover:-translate-y-2 relative z-10 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md"
                }`}
        >
            {isFeatured && (
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary to-primary-light text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-xl tracking-wide shadow-md">
                    MÁS CONSULTADO
                </div>
            )}

            <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border shadow-inner group-hover:scale-110 transition-all duration-500 text-primary ${isFeatured
                        ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/10"
                        : "bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 border-white/50"
                    }`}
            >
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-xl font-medium mb-1 text-text-main dark:text-white">
                {title}
            </h3>
            <p className="text-text-main/70 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            <div className="border-t border-primary/10 dark:border-gray-700 pt-6 mt-auto">
                <ul className="text-xs text-text-main/60 dark:text-gray-500 space-y-3">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
