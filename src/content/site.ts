/**
 * Personaliza tu portafolio aquí: un solo sitio para nombre, enlaces, SEO y stack.
 * - Coloca tu foto en `public/` y ajusta `avatarSrc` / `aboutImageSrc`.
 * - Actualiza `src/data/experience.json` y `src/data/projects.json` con tu historial.
 */
export const site = {
  meta: {
    title: "Edwin Guarisma — Desarrollador de Software",
    description:
      "Portafolio profesional: experiencia en producto, proyectos destacados y stack. Abierto/a a nuevas oportunidades.",
  },
  person: {
    greeting: "Hola, soy",
    displayName: "Edwin Guarisma",
    /** Línea principal bajo el nombre (impacto rápido para reclutadores) */
    headline: "3 años construyendo productos de software de punta a punta",
    /** Fragmento en negrita dentro del párrafo del hero */
    roleHighlight: "Full Stack Developer orientado a Performance y Automatización de Negocios",
    /** Complemento: ubicación, enfoque, tipo de producto (sin emojis como iconografía) */
    bioRest:
      "Ciudad Guayana, Venezuela. Convirtiendo ideas de negocio en aplicaciones rápidas, mantenibles y que venden.",
    avatarAlt: "Retrato profesional",
    avatarSrc: "/img/profile-2.jpg",
    aboutImageSrc: "/img/profile-3.jpg",
    aboutImageAlt: "Retrato en sección Sobre mí",
  },
  links: {
    email: "proyectoedwinjose@gmail.com",
    linkedin: "https://www.linkedin.com/in/tu-perfil",
    github: "https://github.com/edwinguarisma",
    /** Si subes un PDF a `public/`, pon la ruta, ej: "/cv.pdf" */
    cv: null as string | null,
  },
  availability: {
    show: true,
    label: "Disponible para nuevas oportunidades",
    /** Destino al pulsar el badge (correo o LinkedIn) */
    badgeHref: "mailto:proyectoedwinjose@gmail.com",
  },
  /** Texto largo de “Sobre mí”: 2–3 párrafos con hechos medibles */
  about: {
    paragraphs: [
      "A diferencia del desarrollador que solo se enfoca en el div o solo en la API REST, yo construyo el puente completo.",
      "Modelo la base de datos pensando en la escalabilidad del negocio (SQL Server / PostgreSQL), expongo endpoints eficientes (Node.js), y construyo la interfaz que convierte visitas en clientes (Next.js / Tailwind).",
      "Estructuro carpetas en el Front, migraciones en la DB y contenedores en Docker para que el próximo desarrollador (o mi yo del futuro) no quiera tirar el proyecto por la ventana.", "Asegurando que el producto no solo sea bonito y rápido, sino usable para todos e inclusivo."
    ],
  },
  /**
   * Agrupa tecnologías por capa para escaneo rápido (estilo bento / tarjetas).
   * Cada item:
   *  - `name`: etiqueta visible.
   *  - `slug` (opcional): slug de simple-icons.org (ej: "typescript", "nextdotjs").
   *     Si se omite, se muestra un bullet neutral.
   *  - `invert` (opcional): true cuando el logo es muy oscuro/negro y debe invertirse
   *     en modo oscuro para seguir siendo visible (Next.js, Expo, Vercel, etc.).
   */
  techStack: [
    {
      title: "Frontend",
      items: [
        { name: "TypeScript", slug: "typescript" },
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs", invert: true },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "React Native", slug: "react" },
        { name: "Expo", slug: "expo", invert: true },
      ],
    },
    {
      title: "Backend e infraestructura",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "APIs REST" },
        { name: "Docker", slug: "docker" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Supabase", slug: "supabase" },
        { name: "SQL Server", slug: "serverless" },
      ],
    },
    {
      title: "Forma de trabajar",
      items: [
        { name: "Git", slug: "git" },
        { name: "Code review" },
        { name: "Testing" },
        { name: "Accesibilidad" },
        { name: "UX/UI Design", slug: "figma" },
        { name: "SEO", slug: "googlesearchconsole" },
      ],
    },
  ],
  contact: {
    title: "¿Hablemos?",
    lead:
      "Escribe con contexto del rol o proyecto, modalidad y timing. Respondo con disponibilidad y siguientes pasos en pocos días hábiles.",
  },
  footer: {
    creditName: "Edwin Guarisma",
    creditUrl: "https://edwinguarisma.com",
  },
} as const
