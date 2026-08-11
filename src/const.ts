import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import CVIcon from "@/assets/icons/readdotcv.svg";

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