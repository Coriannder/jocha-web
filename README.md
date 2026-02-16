# Josefina Psicología 🧠

Landing page profesional para servicios de psicología online y presencial (Florencia, Italia).
Diseñada con un enfoque **empático, minimalista y premium**, orientada a expatriados argentinos.



## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: TypeScript (Strict Mode)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate`
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Iconos**: Lucide React
- **Deploy**: Vercel (Recomendado)

## 🚀 Instalación y Desarrollo

1.  **Clonar repositorio**:
    ```bash
    git clone [URL_DEL_REPO]
    cd jocha-web
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Correr servidor de desarrollo** (Puerto 4000 estricto):
    ```bash
    npm run dev -- -p 4000
    ```
    Visitar [http://localhost:4000](http://localhost:4000)

## 🤝 Flujo de Trabajo (Contribución)

Para mantener la calidad del código alineada con `medevice-front`, es **OBLIGATORIO** seguir estos pasos antes de cada commit:

1.  **Ejecutar Auditoría Pre-Commit**:
    ```bash
    npm run lint && npx tsc --noEmit
    ```
    *No commitear si hay errores.*

2.  **Standards**:
    - Usar rutas absolutas (`@/components/...`).
    - Tipado estricto (No `any`).
    - Componentes en `src/components/landing` (específicos) o `src/components/ui` (genéricos).

Ver [.agent/instructions.md](.agent/instructions.md) para reglas detalladas de mimetismo técnico.

## 📅 Features

- [x] **Hero & Bio**: Presentación profesional con optimización de imágenes.
- [x] **Servicios**: Tarjetas con efecto Glassmorphism.
- [x] **FAQ**: Sección de preguntas frecuentes interactiva.
- [ ] **Turnos**: Integración con Calendly.
- [ ] **SEO**: Metadatos y optimización para motores de búsqueda.

---
*Desarrollado para Josefina Psicología.*
