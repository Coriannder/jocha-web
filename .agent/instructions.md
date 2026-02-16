# Reglas de Desarrollo: Josefina Psicología

Estas reglas definen el estándar técnico y estético para el proyecto `JOCHA-WEB`. Su cumplimiento es obligatorio para mantener la coherencia con `medevice-front` y la calidad premium del sitio.

---

## 1. Stack Tecnológico Estricto
- **Framework**: Next.js 15 (App Router).
- **Lenguaje**: TypeScript (Strict Mode obligatorio). `noImplicitAny: true`.
- **Estilos**: Tailwind CSS 3.
  - **Plugins**: `tailwindcss-animate`.
  - **Config**: Uso de variables CSS para temas (Light/Dark).
- **UI Components**: Shadcn UI (Radix Primitives) + Iconos `lucide-react`.
- **Fuentes**: `Inter` (sans) y `Lora` (serif) vía `next/font/google`.

## 2. Estética y Diseño (Premium & Empathic)
- **Paleta de Colores**:
  - `primary`: Verdes naturales (#5F7161, #7A8C7C).
  - `background`: Tonos crema/papel (#F9F7F2) y sage suave.
  - **Uso**: Priorizar la calma y la legibilidad.
- **Glassmorphism**:
  - Usar clases `glass-card` (definidas en globals.css o vía utilidades Tailwind) para tarjetas flotantes.
  - `backdrop-blur-md` + bordes semitransparentes (`border-white/20`).
- **Imágenes**:
  - **Obligatorio**: Uso de `next/image` con `width/height` o `fill`.
  - **Bordes**: Redondeados suaves (`rounded-2xl`, `rounded-3xl` en retratos).

## 3. Arquitectura y Patrones
- **Directorios**:
  - `src/components/landing/`: Componentes específicos de la Landing Page (Hero, Bio, Services).
  - `src/components/ui/`: Componentes reutilizables (Button, Accordion, etc.).
  - `src/app/`: Rutas y Layouts.
- **Imports**:
  - Usar alias absoluto `@/` siempre.
  - Ej: `import { Button } from "@/components/ui/button"`.

## 4. Flujo de Trabajo (Agentic)
- **Pre-Commit Audit**:
  - Antes de sugerir un commit, **DEBES** ejecutar la skill `audit-pre-commit`.
  - Comando: `npm run lint && npx tsc --noEmit`.
  - **Tolerancia Cero**: No se permite commitear con errores de lint o tipos.
- **Rutas de Archivo**:
  - En tus razonamientos y tool calls, usa **RUTAS ABSOLUTAS DE WINDOWS**.
  - Ej: `C:\Users\sebas\Desktop\Dev-projects\JOCHA-WEB\...`
- **Branch Protection**:
  - **NUNCA** commitear directo a `main`.
  - Crear feature branches: `feat/landing-page`, `fix/styling`, etc.

## 5. TypeScript Standards
- **Interfaces**: Definir interfaces explícitas para Props.
  ```tsx
  interface HeroProps {
    title: string;
    subtitle?: string;
  }
  ```
- **Eventos**: Tipar eventos de React (ej: `React.ChangeEvent<HTMLInputElement>`).
- **No `any`**: Jamás usar `any`. Si es desconocido, usar `unknown` y validar.

---

## 6. Comandos Recurrentes
- **Dev Server**: `npm run dev -- -p 4000` (Puerto 4000 estricto).
- **Lint**: `npm run lint`.
- **Build**: `npm run build`.
