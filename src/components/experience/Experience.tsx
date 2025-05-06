import { useState } from "react";
import { ExperienceViewModel } from "../../models/ExperienceViewModel";
import { experienceList } from "../../data/experienceList";
import { ExperienceHeading } from "./ExperienceHeading";
import { ExperienceDetails } from "./ExperienceDetails";

export const Experience = () => {
  const [experience, setExperience] = useState<ExperienceViewModel>(
    experienceList.fenergoSaas
  );

  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-8 relative">
      <div className="mt-8 md:mx-auto flex flex-col w-full md:w-2/3 justify-center">
        {Object.values(experienceList).map((experience, i) => (
          <div key={`experience_${i}`}>
            <ExperienceDetails
              experience={experience}
              setExperience={setExperience}
            ></ExperienceDetails>
            {/* {Object.keys(experienceList).length !== i + 1 && (
              <div className="w-1/3 mx-auto flex items-center gap-4">
                <div className="h-[2px] flex-1 bg-black/30" />
                <span className="w-2 h-2 rounded-full bg-black" />
                <div className="h-[2px] flex-1 bg-black/30" />
              </div>
            )} */}
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
