type Project = {
  id: string;
  title: string;
  projectType: string;
  technologies: string;
  date: string;
  shortDescription: string;
  url: string;
  mainImg: string;
  illustrationsImgs: string[];
  longDescription: string;
  tools: {
    logos: string;
    toolsDescription?: string;
    urlGithub: string;
  };
  note: number;
};
