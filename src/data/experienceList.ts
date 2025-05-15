import { ExperienceViewModel } from "../models/ExperienceViewModel";

export const experienceList: Record<string, ExperienceViewModel> = {
  fenergoSaas: {
    jobTitle: "SaaS Engineer",
    company: "Fenergo",
    startDate: "2021",
    details: [
      {
        task: "Design, build, and maintain scalable APIs, services, and systems for Fenergo’s cloud-based platform.",
        technologies: ["C#.NET", "TypeScript", "React"],
      },
      {
        task: "Develop and maintain automated testing to ensure high performance, reliability, and maintainability.",
        technologies: ["Cypress", "Jest"],
      },
      {
        task: "Manage cloud infrastructure and deployments, optimizing system reliability and scalability.",
        technologies: ["Azure DevOps", "Pulumi", "Amazon Web Services"],
      },
      {
        task: "Implement and maintain event-driven architectures, leveraging modern software patterns for scalability and consistency.",
        technologies: ["CQRS", "Event Sourcing"],
      },
      {
        task: "Diagnose and resolve production issues, ensuring system reliability and participating in on-call rotations for rapid incident response.",
        technologies: [],
      },
    ],
  },
  fenergoIntern: {
    jobTitle: "Intern / Technical Consultant",
    company: "Fenergo",
    startDate: "2019",
    endDate: "2021",
    details: [
      {
        task: "Configuration of Fenergo Framework based on C#.Net technology.",
        technologies: ["C#.NET", "SQL"],
      },
      {
        task: "Collaborated with the QA team to manage the test cycle, addressing and resolving bugs and other issues.",
        technologies: [],
      },
      {
        task: "Created and executed test cases, and developed tools to automate testing.",
        technologies: ["TFS/Azure DevOps", "Postman", "Jenkins"],
      },
    ],
  },
  baCollege: {
    jobTitle: "Electronic and Computer Engineering",
    company: "Trinity College Dublin",
    startDate: "2013",
    endDate: "2017",
    details: [
      {
        task: "Graduated.",
        technologies: ["2.1"],
      },
    ],
  },
};
