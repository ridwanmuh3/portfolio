export interface ExperienceObj {
  duration: string;
  title: string;
  url?: string;
  place: string;
  description: string;
  skills: string[];
}

export interface ProjectObj extends Omit<ExperienceObj, "place"> {}

export interface ConnectLinkObj {
  name: string;
  alias: string;
  url: string;
}
