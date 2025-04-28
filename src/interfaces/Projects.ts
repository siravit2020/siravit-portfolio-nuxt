export interface ProjectLink {
  title: string;
  linkTo: string;
}

export interface ProjectItem {
  title: string;
  subTitle: string;
  description: string;
  links?: ProjectLink[];
  tools: string[];
  image: string;
}

export interface ProjectCategory {
  title: string;
  projectList: ProjectItem[];
}
