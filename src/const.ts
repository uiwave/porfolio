import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import CVIcon from "@/assets/icons/readdotcv.svg";
import ReactIcon from "@/assets/icons/react.svg";
import AstroIcon from "@/assets/icons/astro.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import SvelteIcon from "@/assets/icons/svelte.svg";
import VueIcon from "@/assets/icons/vuedotjs.svg";
import AngularIcon from "@/assets/icons/angular.svg";

export const SOCIAL_LINKS = {
  cv: {
    href: "/cv/erick-uscachi.pdf",
    label: "Ver mi CV",
    icon: CVIcon,
  },

  github: {
    href: "https://github.com/uiwave",
    label: "Visitar mi perfil de GitHub",
    icon: GithubIcon,
  },

  linkedin: {
    href: "https://linkedin.com/in/tu-usuario",
    label: "Visitar mi perfil de LinkedIn",
    icon: LinkedinIcon,
  },
} as const;

export const NAV_ITEMS = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Experiencia", href: "#experiencia" },
  { nombre: "Formación", href: "#formacion" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contacto", href: "#contacto" },
] as const;

export const EXPERIENCIAS = [
  {
    empresa: "Freelance",
    puesto: "Desarrollador de Software",
    periodo: "2024 — Actualidad",
    descripcion:
      "Desarrollo aplicaciones web modernas y soluciones de software a medida, participando en el análisis, diseño, desarrollo y despliegue de proyectos. Trabajo con tecnologías como React, TypeScript, Next.js, Astro, Java y Spring Boot, aplicando buenas prácticas de desarrollo y arquitecturas escalables.",
  },
] as const;

export const FORMACIONES = [
  {
    institucion: "Universidad Nacional de San Antonio Abad del Cusco",
    titulo: "Ingeniería Informática",
    periodo: "2018 — 2026",
    descripcion:
      "Formación universitaria orientada al desarrollo de software, ingeniería de sistemas, bases de datos, arquitectura de aplicaciones y desarrollo de soluciones tecnológicas.",
  },
] as const;

export const DATOS_CONTACTO = [
  {
    label: "Email",
    valor: "uiwavedev@gmail.com",
    href: "uiwavedev@gmail.com",
    emoji: "✉️",
  },
  { label: "Ubicación", valor: "Remoto / LATAM", href: null, emoji: "🌍" },
  { label: "Disponibilidad", valor: "Inmediata", href: null, emoji: "⚡" },
] as const;

const fila1 = [
  ReactIcon,
  AstroIcon,
  NextjsIcon,
  SvelteIcon,
  VueIcon,
  AngularIcon,
  GithubIcon,
  LinkedinIcon,
  CVIcon,
];

const fila2 = [
  VueIcon,
  AngularIcon,
  ReactIcon,
  SvelteIcon,
  AstroIcon,
  NextjsIcon,
  LinkedinIcon,
  GithubIcon,
  CVIcon,
];

export const SKILLS_ROWS = [
  { iconos: fila1, tipo: "derecha", duracion: "60s" },
  { iconos: fila2, tipo: "izquierda", duracion: "50s" },
] as const;

export const ESTADISTICAS = [
  { valor: "2+", etiqueta: "Años de experiencia" },
  { valor: "2", etiqueta: "Proyectos publicados" },
  { valor: "10+", etiqueta: "Tecnologías dominadas" },
  { valor: "Inmediata", etiqueta: "Disponibilidad" },
] as const;
