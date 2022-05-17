import { ProjectPreviewProps } from "~~/@types";

export function useProjects() {
  return [
    {
      title: "Alsun Yearbook",
      subtitle: "Yearbook (web version) of my college",
      link: "https://alsun.herokuapp.com",
      description: `
        I had this idea to create a place to gather all my university friends in
        one place to make it easy for us to reach each other after this era ends.
        So I made this Alsun Yearbook and added authentication system to make it
        only available to the people that the Yearbook includes.
      `,
      image: "/images/projects/alsun.webp",
      technologies: new Set([
        "Nuxt",
        "Vue",
        "JavaScript",
        "Sass",
        "Pug",

        "Node",
        "MongoDB",

        "RestAPI",
        "JWT",

        "Prettier",
        "ESLint",

        "Figma",

        "Heroku",
      ]),
    },

    {
      title: "Najeh's Portfolio",
      subtitle: "Photographer portfolio",
      description: `
        Najeh's an awesome photographer. I decided to use his art in my code and
        try new project idea I didn't do before.  A gallery and a photographer's
        portfolio.  On this project I tried something new which is using custom
        components and creating my own routing system which turned out pretty
        okay I'd say.
      `,
      link: "https://najeh.netlify.app",
      image: "/images/projects/najeh.webp",
      technologies: new Set([
        "Lit",
        "Vite",
        "TypeScript",
        "Sass",
        "Html",

        "Prettier",
        "ESLint",

        "Figma",

        "Netlify",
      ]),
    },

    {
      title: "Links",
      subtitle: "Link shortener",
      description: `
        I needed a link shortener to track and shorten links, so I created my
        own personal one. Now, I have all the slugs available for me to use.
      `,
      image: "/images/projects/links.webp",
      technologies: new Set([
        "Nuxt",
        "Vue",
        "TypeScript",
        "Sass",
        "Node",
        "MongoDB",
        "RestAPI",
        "Prettier",
        "ESLint",
        "Figma",
      ]),
      github: "https://github.com/omareloui/Links",
      design: "https://www.figma.com/file/0DGDQwOIle54iyNpxlgDnm/Links",
    },

    {
      title: "LemmeIn",
      subtitle: "Account manager",
      description: `
        I have this problem that I keep forgetting which account I use to log into
        whichever site or application, specially if I used oauth (signing with
        third party application like Facebook or Google) to sign with. So I
        needed some way to keep track of this, and I couldn't find any password
        manager that tracks the signing method if I oauthed into an application.
        So I created LemmeIn an accounts manager. Where I can store the passwords
        like any other password manager and on top of this create the option to
        store the oauthed account with the account used to sign with.
      `,
      github: "https://github.com/omareloui/LemmeIn",
      image: "/images/projects/lemme-in.webp",
      technologies: new Set([
        "Deno",
        "TypeScript",

        "MongoDB",
        "RestAPI",
        "JWT",

        "Nuxt",
        "Vue",
        "Sass",
        "Html",

        "Prettier",
        "ESLint",

        "Figma",
      ]),
    },

    {
      title: "Image Processor",
      subtitle: "An image processor api (with UI)",
      description: `
        An image processor to create a placeholder image or to change an already
        existing images' size, add filters, change the file type, and more...
        I created it during my FWD's scholarship and found many uses for it
        since then.
      `,
      github: "https://github.com/omareloui/ImageProcessorAPI",
      image: "/images/projects/image-processor.webp",
      technologies: new Set([
        "Node",
        "TypeScript",
        "ExpressJs",
        "Sharp",

        "RestAPI",

        "EJS",
        "AlpineJs",
        "SkeletonCss",

        "Jasmine",

        "Prettier",
        "ESLint",
      ]),
    },

    {
      title: "Music Utils",
      subtitle: "Well, a music utilities!",
      description: `
        I like to keep my music organized. That's why I wrote this script to
        organize the music folder's file system according to the metadata. Then
        updated it to fetch lyrics and download high quality music files using
        Deezloader to download from Deezer and Spotify. I created an API version
        (with a script for Tampermonkey to work on open.spotify.com) and a CLI
        version.
      `,
      github: "https://github.com/omareloui/MusicUtils",
      image: "/images/projects/music-utils.webp",
      technologies: new Set(["Python", "JavaScript"]),
    },

    {
      title: "Color Generator",
      subtitle: "A random color generator",
      description: `
        An application inspired by colorspark.app to
        generate random colors.
      `,
      github: "https://github.com/omareloui/ColorGenerator",
      link: "https://generate-random-color.netlify.app",
      image: "/images/projects/color-generator.webp",
      technologies: new Set([
        "JavaScript",
        "Sass",
        "Html",
        "Prettier",
        "Netlify",
      ]),
    },
  ] as ProjectPreviewProps[];
}
