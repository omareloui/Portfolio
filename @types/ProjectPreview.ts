export interface ProjectPreviewProps {
  title: string;
  subtitle: string;
  link?: string;
  github?: string;
  design?: string;
  description: string;
  image: string;
  technologies: Set<string>;
}
