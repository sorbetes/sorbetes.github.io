import { useState } from "react";
import { ExperienceViewModel } from "../../models/ExperienceViewModel";
import { experienceList } from "../../data/experienceList";
import { ExperienceHeading } from "./ExperienceHeading";
import { ExperienceDetails } from "./ExperienceDetails";

export const AboutV2 = () => {
  const [experience, setExperience] = useState<ExperienceViewModel>(
    experienceList.fenergoSaas
  );

  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-8 relative">
      <div className="mx-auto flex flex-col w-full md:w-2/3 justify-center">
        {Object.values(experienceList).map((experience, i) => (
          <div key={`experience_${i}`}>
            <ExperienceDetails
              experience={experience}
              setExperience={setExperience}
            ></ExperienceDetails>
          </div>
        ))}
      </div>
      <ExperienceHeading
        company={experience.company}
        jobTitle={experience.jobTitle}
        startDate={experience.startDate}
        endDate={experience.endDate}
      ></ExperienceHeading>
    </div>
  );
};
