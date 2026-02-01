# AGENT.md - Plan de Ejecución: Pepena Web (Revisión 4 Jornadas)

## 📋 Resumen Ejecutivo
- **Objetivo**: Desarrollar landing page "Pepena Web" para servicios de psicología.
- **Estética**: Mondrian (Grilla estricta, líneas 8px, colores primarios).
- **Stack Tecnológico**: Next.js 15, TypeScript (Strict), Tailwind CSS, Shadcn UI.
- **Estimación Total**: 23 Horas (Incluye 25% Buffer).
- **Desglose**: 4 Jornadas de Trabajo (Promedio 5.75h/día).

---

## 📅 Jornada 0: Configuración Inicial (Inmediata)
**Objetivo**: Dejar el entorno listo para codificar (Git + Stack base).

### 0.1 Infraestructura (1h)
- **Inicialización de Git y Repositorio Remoto (GitHub).**
- Inicialización de Next.js 15 + Strict TypeScript.
- Configuración de Tailwind CSS y Sistema de Diseño (Variables de color Mondrian).
- Instalación de librerías base (`lucide-react`, `clsx`, `tailwind-merge`).
- **[Skill]**: Generar `skill-landing-setup` con esta configuración base.

---

## 📅 Jornada 1: Sistema de Diseño Mondrian (5 Horas)
**Objetivo**: Sistema de grilla responsiva y componentes base.

### 1.1 Sistema de Grilla Core (4.5h)
- Desarrollo del `MondrianGrid` (Layout base de 12 columnas).
- Implementación de lógica de bordes gruesos (8px) y responsividad básica.
- Creación de componentes atómicos de bloques de color.
- **[Skill]**: Documentar patrón en `skill-mondrian-layout` (Grillas artísticas).

---

## 📅 Jornada 2: Navegación y Estructura Visual (6 Horas)
**Objetivo**: Estructura de navegación y primera impresión visual (Hero).

### 2.1 Finalización del Sistema Grilla (1.5h)
- Ajustes finos de responsividad en móviles y tablets.
- Pruebas de colapso de columnas.

### 2.2 Header y Navegación (2h)
- Menú minimalista integrado en la retícula.
- Routing y transiciones entre páginas.

### 2.3 Sección Hero y Primera Impresión (2.5h)
- Maquetación de la Home "Above the Fold".
- Integración de foto de perfil con estética Mondrian.
- Animaciones de entrada (`fade-in`, `slide-in`).

---

## 📅 Jornada 3: Contenido y Servicios (5.5 Horas)
**Objetivo**: Implementación del contenido estático y páginas informativas.

### 3.1 Páginas de Contenido (3h)
- **Sobre Mí**: Biografía y enfoque terapéutico.
- **Servicios**: Grid de servicios con iconografía `lucide-react`.
- Estilos de tipografía y legibilidad.

### 3.2 Sección de Contacto y FAQ (2.5h)
- **FAQ**: Implementación de acordeón (Shadcn) estilizado.
- **Contacto**: Layout de información y accesos directos.
- Preparación de puntos de conversión (CTAs).

---

## 📅 Jornada 4: Integraciones, SEO y Entrega (5.5 Horas)
**Objetivo**: Integraciones técnicas, optimización y cierre.

### 4.1 Integraciones Externas (2h)
- **Calendly**: Modal o Embed para gestión de turnos.
- **WhatsApp**: Botón de acción flotante o integrado.

### 4.2 SEO Técnico y Performance (2h)
- Metadata API (Título, Descripción, Keywords).
- Marcado JSON-LD (Schema.org).
- Generación de Sitemap y Robots.txt.
- **[Skill]**: Compilar estrategias en `skill-seo-pro`.

### 4.3 Pulido Final (1.5h)
- Auditoría de Accesibilidad (WCAG).
- Verificación Pixel Perfect vs Referencias.
- Limpieza de código final (Linting & Types).

---

## 🛡️ Buffer de Holgura (Incluido en tiempos parciales)
El tiempo de holgura (aprox 1h por jornada) ya está distribuido en las tareas para absorber imprevistos sin afectar el cronograma general.

---

## 🚀 Siguiente Paso
Esperando validación final para iniciar la **Jornada 1**.
