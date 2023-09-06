import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src", "projectPosts");

export function getSortedPostData() {
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
