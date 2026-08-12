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
    empresa: "midudev",
    puesto: "Divulgador sobre Programación Web",
    periodo: "2021 — Actual",
    descripcion:
      "Streamer de programación más visto en Español en Twitch. +1 millón de seguidores entre todas mis redes sociales. Reconocido por Google, Microsoft y GitHub por mi impacto en la comunidad de desarrolladores.",
  },
  {
    empresa: "Adevinta",
    puesto: "Lead Frontend Architect",
    periodo: "2016 — 2022",
    descripcion:
      "Lideré una convergencia técnica entre diferentes productos y migramos una arquitectura monolítica a otra más flexible y optimizada. Fomenté buenas prácticas y mejoras en la cultura de rendimiento, además de la entrega rápida de valor a los usuarios.",
  },
  {
    empresa: "Hubii",
    puesto: "Senior FrontEnd Developer",
    periodo: "2011 — 2016",
    descripcion:
      "Desarrollé una plataforma de noticias geolocalizadas y una API para consumir la información. Escalé los servicios para soportar la carga de más de cientos de miles de peticiones al día. Recorté los tiempos de entrega y despliegues a producción a la mitad. Colaboré con Mozilla y Telefónica para desarrollar la primera app para televisores con FirefoxOS.",
  },
] as const;

export const FORMACIONES = [
  {
    institucion: "Universidad Nacional de Ingeniería",
    titulo: "Ingeniería en Sistemas",
    periodo: "2016 — 2021",
    descripcion:
      "Graduado con especialización en desarrollo de software. Participé en proyectos académicos de arquitectura web, bases de datos distribuidas y metodologías ágiles.",
  },
  {
    institucion: "Bootcamp Full-Stack",
    titulo: "Desarrollo Web Full-Stack",
    periodo: "2021 — 2022",
    descripcion:
      "Formación intensiva en JavaScript, React, Node.js y bases de datos. Construí proyectos reales de principio a fin con despliegue en producción.",
  },
  {
    institucion: "Certificación Profesional",
    titulo: "React Avanzado y Arquitectura Frontend",
    periodo: "2023",
    descripcion:
      "Certificación en patrones de diseño de componentes, estado global, testing y rendimiento en aplicaciones React a gran escala.",
  },
] as const;

export const DATOS_CONTACTO = [
  {
    label: "Email",
    valor: "erick@dev.com",
    href: "mailto:erick@dev.com",
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
