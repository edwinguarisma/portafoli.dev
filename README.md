# Portafolio para desarrolladores con Astro

Plantilla de portafolio profesional enfocada en mostrar tu perfil, experiencia y proyectos de forma clara y rápida.

## Vista previa

- Sitio base: [https://porfolio.dev/](https://porfolio.dev/)
- Imagen de referencia:

<div align="center">
  <img src="./public/porfolio.webp" alt="Vista previa del portafolio" />
</div>

## Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [AOS](https://michalsnik.github.io/aos/) para animaciones

## Secciones incluidas

- Hero principal
- Stack técnico
- Experiencia laboral
- Proyectos
- Sobre mí
- Contacto

## Ejecutar en local

### 1) Instalar dependencias

```bash
npm install
```

### 2) Iniciar entorno de desarrollo

```bash
npm run dev
```

### 3) Build de producción

```bash
npm run build
```

### 4) Previsualizar build

```bash
npm run preview
```

## Personalización rápida

Edita estos archivos para adaptar el portafolio a tu perfil:

- `src/content/site.ts`: nombre, headline, enlaces, SEO y stack.
- `src/data/experience.json`: experiencia laboral.
- `src/data/projects.json`: proyectos destacados.
- `public/img/`: fotos de perfil e imágenes.

## Estructura del proyecto

```text
src/
  components/      # Componentes reutilizables
  content/         # Configuración global del sitio
  data/            # Datos de experiencia y proyectos
  layouts/         # Layout base
  pages/           # Páginas Astro
  styles/          # Estilos globales
public/            # Assets estáticos
```

## Scripts disponibles

- `npm run dev`: desarrollo.
- `npm run build`: validación + build.
- `npm run preview`: servidor de preview.

## Créditos

Proyecto original inspirado en [midudev/porfolio.dev](https://github.com/midudev/porfolio.dev).

## Licencia

Este repositorio incluye un archivo `LICENSE.md`. Revisa sus términos antes de redistribuir o usar comercialmente.
