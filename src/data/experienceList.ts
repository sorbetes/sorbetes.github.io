import { ExperienceViewModel } from "../models/ExperienceViewModel";

export const experienceList: Record<string, ExperienceViewModel> = {
  fenergoSaas: {
    jobTitle: "SaaS Engineer",
    company: "Fenergo",
    startDate: "2021",
    details: [
      {
        task: "Designing and maintaining cloud-based CLM solutions that help financial institutions meet compliance requirements and deliver streamlined digital onboarding experiences, with a focus on Document Management, Ownership and Control, and Agent workflows.",
        technologies: [],
      },
      {
        task: "👩🏽‍💻 Develop robust APIs, backend services, and user-facing interfaces for Fenergo’s SaaS platform.",
        technologies: ["C#.NET", "TypeScript", "React"],
      },
      {
        task: "🧪 Implement and maintain automated testing to ensure performance, reliability, and maintainability.",
        technologies: ["Cypress", "Jest"],
      },
      {
        task: "☁️ Manage and optimize cloud infrastructure and deployments with a focus on reliability, scalability, and automation.",
        technologies: ["Azure DevOps", "Pulumi", "Amazon Web Services"],
      },
      {
        task: "🪅 Build event-driven systems using modern architectural patterns.",
        technologies: ["CQRS", "Event Sourcing"],
      },
      {
        task: "💥 Troubleshoot and resolve production issues promptly; participate in on-call rotations for incident response.",
        technologies: [],
      },
    ]
  },
  fenergoIntern: {
    jobTitle: "Intern / Technical Consultant",
    company: "Fenergo",
    startDate: "2019",
    endDate: "2021",
    details: [
      {
        task: "💻 Configuration of Fenergo Framework based on C#.Net technology.",
        technologies: ["C#.NET", "SQL"],
      },
      {
        task: "👯 Collaborated with the QA team to manage the test cycle, addressing and resolving bugs and other issues.",
        technologies: [],
      },
      {
        task: "🔨 Created and executed test cases, and developed tools to automate testing.",
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
        task: "🎓 Graduated.",
        technologies: [],
      },
    ],
  },
};
