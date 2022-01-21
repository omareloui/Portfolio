import { Mockup } from ".";

export interface ProjectPreviewProps {
  title: string;
  link?: string;
  role: string;
  hexColor: string;
  lightText?: boolean;

  height?: string;

  logo: string;

  mockup: Mockup[];
  mockupImage: string[];
  mockupStyles: string[];

  mockupsStyles?: string;
}
