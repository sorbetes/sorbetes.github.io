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
        <h1 className="block md:hidden text-[2rem] text-black">
          {experience.startDate} - {experience.endDate ?? "Present"}
        </h1>
        <p className="block md:hidden text-[2rem] font-medium text-black mx-auto"></p>
        {details.map((detail, i) => (
          <div key={`task_${i}`}>
            <div className="flex items-center md:gap-10">
              <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-black">
                {detail.task}
              </p>
            </div>
            <div className="mb-8 flex items-center gap-2 md:gap-4 pt-2">
              {detail.technologies.length > 0 && (
                <>
                  {/* <span className="w-[4px] h-6 bg-[#626b8c] rounded-full"></span> */}
                  {detail.technologies.map((tech, i) => (
                    <p
                      key={`tech_${i}`}
                      className="text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] font-semibold text-white bg-black bg-opacity-80 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </p>
                  ))}
                  {/* <p className="text-lg font-semibold text-black bg-[#626b8c] bg-opacity-30 px-3 py-1 rounded-md tracking-wide">
                    {detail.technologies}
                  </p> */}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
