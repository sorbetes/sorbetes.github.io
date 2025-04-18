interface ExperienceHeadingProps {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
}

export const ExperienceHeading = ({
  company,
  jobTitle,
  startDate,
  endDate,
}: ExperienceHeadingProps) => {
  return (
    <div className="text-center w-full md:w-1/3 hidden md:flex flex-col items-center justify-center sticky h-screen top-0 self-start">
      <p className=" text-[2rem] md:text-[2.5rem] font-semibold text-black">
        {company}
      </p>
      <p className="text-[1rem] md:text-[1.5rem] font-medium text-black">
        {jobTitle}
      </p>
      <p className="text-[1rem] md:text-[1.5rem] font-light text-black">
        {startDate} - {endDate ?? "Present"}
      </p>
    </div>
  );
};
