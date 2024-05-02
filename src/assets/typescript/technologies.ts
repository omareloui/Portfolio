type Category =
  | "Development Tool"
  | "Library"
  | "Framework"
  | "Language"
  | "Preprocessor"
  | "Message Broker"
  | "Test Framework"
  | "Version Control System"
  | "VSC Cloud Hosting Service"
  | "Run Time For JS"
  | "Cloud Service"
  | "Design Tool"
  | "API"
  | "Auth System"
  | "DataBase"
  | "Package Manger"
  | "3D Development"
  | "PWA"
  | "Superset"
  | "Build Tool"
  | "Containerization Technology"
  | "Template Engine"
  | "Operating System"
  | "Architure";

export type Stack = "Front-End" | "Back-End" | "Front and Back Ends" | "DevOps" | "Other";

type Technology = { title: string; category: Category; stack: Stack };

export const technologies: Technology[] = [
  { title: "Go", category: "Language", stack: "Back-End" },

  { title: "TypeScript", category: "Superset", stack: "Front and Back Ends" },
  { title: "JavaScript", category: "Language", stack: "Front and Back Ends" },

  { title: "Rust", category: "Language", stack: "Back-End" },
  { title: "Lua", category: "Language", stack: "Back-End" },
  { title: "Deno", category: "Run Time For JS", stack: "Back-End" },
  { title: "Python", category: "Language", stack: "Back-End" },

  { title: "Html", category: "Language", stack: "Front-End" },
  { title: "Css", category: "Language", stack: "Front-End" },
  { title: "Sass", category: "Preprocessor", stack: "Front-End" },

  { title: "gRPC", category: "API", stack: "Back-End" },
  { title: "Protobuf", category: "Language", stack: "Back-End" },

  { title: "Microservices", category: "Architure", stack: "Back-End" },

  { title: "Pug", category: "Template Engine", stack: "Front-End" },
  { title: "EJS", category: "Template Engine", stack: "Front-End" },

  { title: "MJML", category: "Preprocessor", stack: "Front-End" },

  { title: "MarkDown", category: "Language", stack: "Front-End" },

  { title: "Nuxt", category: "Framework", stack: "Front and Back Ends" },
  { title: "Astro", category: "Framework", stack: "Front and Back Ends" },
  { title: "Htmx", category: "Framework", stack: "Front-End" },
  { title: "Vue", category: "Framework", stack: "Front-End" },
  { title: "ReactJs", category: "Framework", stack: "Front-End" },
  { title: "AlpineJs", category: "Framework", stack: "Front-End" },
  { title: "Lit", category: "Framework", stack: "Front-End" },

  { title: "ThreeJs", category: "3D Development", stack: "Front-End" },
  { title: "P5Js", category: "3D Development", stack: "Front-End" },
  { title: "WebGL", category: "3D Development", stack: "Front-End" },

  { title: "TailWindCss", category: "Framework", stack: "Front-End" },
  { title: "SkeletonCss", category: "Library", stack: "Front-End" },

  { title: "Vite", category: "Build Tool", stack: "Front and Back Ends" },
  { title: "PWA", category: "PWA", stack: "Front-End" },

  { title: "Node", category: "Run Time For JS", stack: "Back-End" },
  { title: "ExpressJs", category: "Framework", stack: "Back-End" },
  { title: "NestJS", category: "Framework", stack: "Back-End" },

  { title: "RabbitMQ", category: "Message Broker", stack: "Back-End" },
  { title: "MongoDB", category: "DataBase", stack: "Back-End" },
  { title: "PostgreSQL", category: "DataBase", stack: "Back-End" },
  { title: "MySQL", category: "DataBase", stack: "Back-End" },

  { title: "Sharp", category: "Library", stack: "Back-End" },

  { title: "JWT", category: "Auth System", stack: "Back-End" },
  { title: "RestAPI", category: "Auth System", stack: "Back-End" },
  { title: "GraphQL", category: "Auth System", stack: "Back-End" },

  { title: "LDAP", category: "Auth System", stack: "Back-End" },

  { title: "Jasmine", category: "Test Framework", stack: "Front and Back Ends" },
  { title: "Jest", category: "Test Framework", stack: "Front and Back Ends" },

  { title: "Neovim", category: "Development Tool", stack: "Other" },
  { title: "Vim", category: "Development Tool", stack: "Other" },
  { title: "VSCode", category: "Development Tool", stack: "Other" },

  { title: "Bazel", category: "Development Tool", stack: "Other" },
  { title: "Makefile", category: "Development Tool", stack: "Other" },

  { title: "Prettier", category: "Development Tool", stack: "Front and Back Ends" },
  { title: "ESLint", category: "Development Tool", stack: "Front and Back Ends" },

  { title: "Figma", category: "Design Tool", stack: "Other" },
  { title: "Illustrator", category: "Design Tool", stack: "Other" },

  { title: "Arch ~btw~", category: "Operating System", stack: "Other" },
  { title: "Nix", category: "Operating System", stack: "Other" },
  { title: "Linux", category: "Operating System", stack: "Other" },
  { title: "Windows", category: "Operating System", stack: "Other" },

  { title: "Git", category: "Version Control System", stack: "DevOps" },
  { title: "GitHub", category: "VSC Cloud Hosting Service", stack: "DevOps" },
  { title: "GitLab", category: "VSC Cloud Hosting Service", stack: "DevOps" },
  { title: "NPM", category: "Package Manger", stack: "Other" },
  { title: "PNPM", category: "Package Manger", stack: "Other" },
  { title: "AWS", category: "Cloud Service", stack: "DevOps" },
  { title: "DigitalOcean", category: "Cloud Service", stack: "DevOps" },
  { title: "Netlify", category: "Cloud Service", stack: "DevOps" },
  { title: "Heroku", category: "Cloud Service", stack: "DevOps" },
  { title: "Docker", category: "Containerization Technology", stack: "DevOps" },
];
