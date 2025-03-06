import { useEffect } from "react";
import { ExperienceViewModel } from "../../models/ExperienceViewModel";
import { useInView } from "react-intersection-observer";

interface ExperienceDetailsProps {
  experience: ExperienceViewModel;
  setExperience: React.Dispatch<React.SetStateAction<ExperienceViewModel>>;
}

export const ExperienceDetails = ({
  experience,
  setExperience,
}: ExperienceDetailsProps) => {
  const details = experience.details;

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (experienceInView) {
      setExperience(experience);
    }
  }, [experienceInView]);

  return (
    <>
      <div
        ref={experienceRef}
        className="flex flex-col items-start justify-center md:h-[100vh] mx-auto w-full"
      >
        <h1 className="font-semibold block md:hidden text-[1rem] text-black">
          {experience.jobTitle} [{experience.company}]
        </h1>
        <h1 className="block md:hidden text-[0.8rem] text-black">
          {experience.startDate} - {experience.endDate ?? "Present"}
        </h1>
        <p className="block md:hidden text-[2rem] font-medium text-black mx-auto"></p>
        {details.map((detail, i) => (
          <div key={`task_${i}`}>
            <div className="flex items-center md:gap-10">
              <p className="text-[0.8rem] md:text-[1.1rem] lg:text-[1.25rem] text-black">
                {detail.task}
              </p>
            </div>
            <div className="mb-8 flex flex-wrap items-center gap-2 md:gap-4 pt-2">
              {detail.technologies.length > 0 && (
                <>
                  {detail.technologies.map((tech, i) => (
                    <p
                      key={`tech_${i}`}
                      className="text-[0.7rem] lg:text-[1rem] font-semibold text-white bg-black bg-opacity-90 px-3 py-1 rounded-full
          h-[1.75rem] flex items-center justify-center"
                    >
                      {tech}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
