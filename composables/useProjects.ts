import { Entry, Asset } from "contentful";
import { ProjectPreviewProps as Project } from "~~/@types";

type ProjectEntry = Omit<Project, "image"> & {
  image: Asset | string;
};

function entryToProject(entryItem: Entry<ProjectEntry>): Project {
  const { fields } = entryItem;
  fields.image =
    typeof fields.image !== "string"
      ? fields.image.fields.file.url
      : fields.image;
  return fields as Project;
}

function sortProjects(p1: Entry<ProjectEntry>, p2: Entry<ProjectEntry>) {
  return (
    Number(new Date(p1.sys.createdAt)) - Number(new Date(p2.sys.createdAt))
  );
}

export async function useProjects() {
  const { data } = await useAsyncData("projects", async () => {
    const { $contentfulClient } = await useNuxtApp();
    const { items } = await $contentfulClient.getEntries<Project>();
    const projects = items.sort(sortProjects).map(entryToProject);
    return projects;
  });

  return data.value;
}
