export type Stack = "Front-End" | "Back-End" | "Front and Back Ends" | "Tool" | "DevOps" | "Other";

type Technology = { title: string; stack: Stack };

export const technologies: Technology[] = [
  { title: "Go", stack: "Back-End" },

  { title: "TypeScript", stack: "Front and Back Ends" },
  { title: "JavaScript", stack: "Front and Back Ends" },

  { title: "Rust", stack: "Back-End" },
  { title: "Lua", stack: "Back-End" },
  { title: "Deno", stack: "Back-End" },
  { title: "Python", stack: "Back-End" },

  { title: "Html", stack: "Front-End" },
  { title: "Css", stack: "Front-End" },
  { title: "Sass", stack: "Front-End" },

  { title: "gRPC", stack: "Back-End" },
  { title: "Protobuf", stack: "Back-End" },

  { title: "Nginx", stack: "Back-End" },
  { title: "Traefik", stack: "Back-End" },

  { title: "Microservices", stack: "Back-End" },

  { title: "Pug", stack: "Front-End" },
  { title: "EJS", stack: "Front-End" },

  { title: "MJML", stack: "Front-End" },

  { title: "MarkDown", stack: "Front-End" },

  { title: "Nuxt", stack: "Front and Back Ends" },
  { title: "Astro", stack: "Front and Back Ends" },
  { title: "Htmx", stack: "Front-End" },
  { title: "Vue", stack: "Front-End" },
  { title: "ReactJs", stack: "Front-End" },
  { title: "AlpineJs", stack: "Front-End" },
  { title: "Lit", stack: "Front-End" },

  { title: "ThreeJs", stack: "Front-End" },
  { title: "P5Js", stack: "Front-End" },
  { title: "WebGL", stack: "Front-End" },

  { title: "TailWindCss", stack: "Front-End" },
  { title: "SkeletonCss", stack: "Front-End" },

  { title: "Vite", stack: "Front and Back Ends" },
  { title: "PWA", stack: "Front-End" },

  { title: "Node", stack: "Back-End" },
  { title: "ExpressJs", stack: "Back-End" },
  { title: "NestJS", stack: "Back-End" },

  { title: "RabbitMQ", stack: "Back-End" },
  { title: "MongoDB", stack: "Back-End" },
  { title: "PostgreSQL", stack: "Back-End" },
  { title: "MySQL", stack: "Back-End" },

  { title: "Ansible", stack: "DevOps" },

  { title: "ElasticSearch", stack: "Back-End" },
  { title: "RSyslog", stack: "Back-End" },

  { title: "Sharp", stack: "Back-End" },

  { title: "JWT", stack: "Back-End" },
  { title: "RestAPI", stack: "Back-End" },
  { title: "GraphQL", stack: "Back-End" },

  { title: "LDAP", stack: "Back-End" },

  { title: "Jasmine", stack: "Front and Back Ends" },
  { title: "Jest", stack: "Front and Back Ends" },

  { title: "Bazel", stack: "Other" },
  { title: "Makefile", stack: "Other" },

  { title: "Prettier", stack: "Front and Back Ends" },
  { title: "ESLint", stack: "Front and Back Ends" },

  { title: "Neovim", stack: "Tool" },
  { title: "Vim", stack: "Tool" },
  { title: "VSCode", stack: "Tool" },

  { title: "Figma", stack: "Tool" },
  { title: "Illustrator", stack: "Tool" },

  { title: "Arch ~btw~", stack: "Tool" },
  { title: "Nix", stack: "Tool" },
  { title: "Linux", stack: "Tool" },
  { title: "Windows", stack: "Tool" },

  { title: "Git", stack: "DevOps" },
  { title: "GitHub", stack: "DevOps" },
  { title: "GitLab", stack: "DevOps" },
  { title: "NPM", stack: "Other" },
  { title: "PNPM", stack: "Other" },
  { title: "AWS", stack: "DevOps" },
  { title: "DigitalOcean", stack: "DevOps" },
  { title: "Netlify", stack: "DevOps" },
  { title: "Heroku", stack: "DevOps" },
  { title: "Docker", stack: "DevOps" },
];
