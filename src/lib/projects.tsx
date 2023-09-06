import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "src", "projectPosts");

export function getSortedProjectData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const project: Project = {
      id,
      title: matterResult.data.title,
      projectType: matterResult.data.projectType,
      technologies: matterResult.data.technologies,
      date: matterResult.data.date,
      shortDescription: matterResult.data.shortDescription,
      url: matterResult.data.url,
      mainImg: matterResult.data.mainImg,
      illustrationsImgs: matterResult.data.illustrationsImgs,
      longDescription: matterResult.data.longDescription,
      tools: {
        logos: matterResult.data.tools.logos,
        toolsDescription: matterResult.data.tools.toolsDescription,
        urlGithub: matterResult.data.tools.urlGithub,
      },
    };

    return project;
  });
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const projectPostWithHTML: Project & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    projectType: matterResult.data.projectType,
    technologies: matterResult.data.technologies,
    date: matterResult.data.date,
    shortDescription: matterResult.data.shortDescription,
    url: matterResult.data.url,
    mainImg: matterResult.data.mainImg,
    illustrationsImgs: matterResult.data.illustrationsImgs,
    longDescription: matterResult.data.longDescription,
    tools: {
      logos: matterResult.data.tools.logos,
      toolsDescription: matterResult.data.tools.toolsDescription,
      urlGithub: matterResult.data.tools.urlGithub,
    },
    contentHtml,
  };

  // Combine the data with the id
  return projectPostWithHTML;
}
