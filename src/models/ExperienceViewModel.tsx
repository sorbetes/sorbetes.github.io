export interface ExperienceViewModel {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  location?: string;
  details: { task: string; technologies: string[] }[];
}
