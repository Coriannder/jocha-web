# Reglas de Mimetismo Técnico: Pepena Web

Estas reglas derivan de la auditoría al workspace 'medevice' (Repo Front) y son de cumplimiento obligatorio para garantizar consistencia técnica.

---

## 1. Stack Tecnológico Estricto
- **Framework**: Next.js 15 (App Router).
- **Lenguaje**: TypeScript (Strict Mode obligatorio). `noImplicitAny: true`.
- **Estilos**: Tailwind CSS + `tailwindcss-animate`.
- **UI Components**: Shadcn UI (Radix Primitives) + Iconos `lucide-react`.
- **Gestión de Estado**: React Hooks nativos (usar librerías solo si es crítico).

## 2. Patrones de Código
- **Componentes Funcionales**:
  ```tsx
  // Correcto
  const MyComponent = ({ prop }: Props): React.JSX.Element => { ... }
  ```
  - Explicitar siempre el tipo de retorno `React.JSX.Element`.
  - Usar `type` para props en lugar de `interface` (salvo que se requiera extensión).

- **Estructura de Directorios**:
  - `src/components/[feature]/[component].tsx` (Agrupar por funcionalidad lógica).
  - `src/components/ui/` (Componentes base Shadcn).
  - `src/app/` (Páginas y Layouts).
  - `src/lib/utils.ts` (Utilidades como `cn`).

- **Importaciones**:
  - Usar alias de ruta `@/` (Ej: `import { Button } from "@/components/ui/button"`).

## 3. Estilo y Clases (Tailwind)
- **Utilidades**: Usar `cn()` (clsx + tailwind-merge) para combinaciones condicionales.
- **Animaciones**: Usar clases `animate-in`, `fade-in`, `slide-in-from-*` (Patrón Medevice).
- **Transiciones**: `transition-all duration-300` por defecto en elementos interactivos.
- **Glassmorphism**: `backdrop-blur-sm` o `md` en tarjetas flotantes o overlays.
- **Bordes**: `rounded-xl` o `rounded-2xl` para contenedores "modernos" (Adaptar a Mondrian según diseño, pero mantener la calidad de implementación).

## 4. TypeScript & Linting
- **Prohibido `any`**: Definir tipos o interfaces para todas las props y respuestas de API.
- **Prop Drilling**: Evitar excesivo prop drilling; usar composición o Context si es necesario.
- **Archivos**: Nombres en `kebab-case` para archivos (ej: `action-card.tsx`) y `PascalCase` para componentes exportados.

## 5. Mantenibilidad
- **Comentarios**: Mínimos, solo para lógica compleja. El código debe ser auto-explicativo.
- **Magic Strings**: Extraer textos repetitivos o configuración a constantes o archivos de configuración.

---

## 6. Reglas Específicas del Proyecto (Pepena Mondrian)
- **Grilla**: Respetar estrictamente la grilla de 12 columnas.
- **Bordes**: Los bordes de separación Mondrian deben ser consistentes (8px recomendado).
- **Colores**: Usar variables CSS/Tailwind (`--primary`, `--secondary`) mapeadas a los colores Mondrian (Rojo, Azul, Amarillo, Negro, Blanco).
