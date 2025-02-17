export const About = () => {
  return (
    <div className="bg-white pb-[3rem] pt-[4rem] md:pt-[8rem]">
      {/* pb --> bottom padding
          pt --> top padding
          md:pt --> top padding on med and larger screens */}
      <h1 className="mx-auto w-[80%] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-bold lowercase text-black pb-[1rem]">
        Experiences
      </h1>
      {/* EXPERIENCE ONE */}
      <h1 className="block md:hidden text-[3rem] font-semibold text-black mx-auto w-[80%]">
        Fenergo
      </h1>
      <h1 className="block md:hidden text-[3rem] font-semibold text-black mx-auto w-[80%]">
        SaaS Engineer
      </h1>
      <p className="block md:hidden text-[2rem] font-medium text-black mx-auto w-[80%]">
        2021 - Present
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center h-[1000px]">
        {/* grid --> CSS grid layout
            grid-cols-1 --> 1 column by default
            md:grid-cols-2 --> 2 columns on med and larger screens
            w-[80%] --> width of the element to 80% of its parent container
            mx-auto --> centers horizontally, margin auto
            gap-[3rem] --> gap of 3rem between grid items
            items-center */}
        <div>
          {/* <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md-leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-black">
            I am a <span>this, and that.</span>
          </h2> */}
          <div className="mb-8 flex items-center md:gap-10">
            {/* mb --> margin bottom, 12 is 3rem
            flex --> Flexbox layout, makes child elements aligh in a row by default
            items-center --> aligns items vertically (useful with flexbox?) 
            md:space-x-10 --> md means for medium or larger, space-x means horizontal spacing gap of 10(2.5rem) between child elements
            ----------------> changed to "gap" */}
            {/* <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span> */}
            {/* w-16 --> 64px width" */}
            <p className="text-xl text-black w-[80%]">
              Design, build, and maintain scalable APIs, services, and systems
              for Fenergo’s cloud-based platform.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Develop and test scalable web applications using C#.NET and
              TypeScript/React, ensuring high performance, maintainability, and
              reliability through automated Cypress testing
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Manage cloud infrastructure and deployments using Azure DevOps,
              Pulumi, and AWS services like DynamoDB, Lambda, S3, SQS, Step
              Functions, and EventBridge.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Implement and maintain event-driven architectures using CQRS and
              Event Sourcing principles.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Ensure system reliability by diagnosing and resolving production
              issues across multiple services and participating in on-call
              rotations for rapid incident response.
            </p>
          </div>
        </div>
        <div className="w-full h-[1000px] mx-auto relative hidden md:flex flex-col items-center justify-center">
          <p className="text-[3vw] font-semibold text-black">Fenergo</p>
          <p className="text-[1.5vw] font-medium text-black">SaaS Engineer</p>
          <p className="text-[1.5vw] font-light text-black">2021 - Present</p>
        </div>
      </div>
      {/* EXPERIENCE TWO */}
      <h1 className="block md:hidden text-[3rem] font-semibold text-black mx-auto w-[80%]">
        Intern / Technical Consultant
      </h1>
      <p className="block md:hidden text-[2rem] font-medium text-black mx-auto w-[80%]">
        2020 - 2021
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center h-[1000px]">
        <div>
          <div className="mb-8 flex items-center md:gap-10">
            <p className="text-xl text-black w-[80%]">
              Configuration of Fenergo Framework based on C#.Net technology.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Collaborated with the QA team to manage the test cycle, addressing
              and resolving bugs and other issues.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              Created and executed test cases, and developed tools to automate
              testing.
            </p>
          </div>
          <div className="mb-8 flex items-center md:gap-10">
            <span className="w-16 hidden md:block h-[3px] bg-slate-400 rounded-full"></span>
            <p className="text-xl text-black w-[80%]">
              TFS/Azure DevOps, Postman, Jenkins
            </p>
          </div>
        </div>
        <div className="w-full h-[1000px] mx-auto relative hidden md:flex flex-col items-center justify-center order-1">
          <p className="text-[3vw] font-semibold text-black">Fenergo</p>
          <p className="text-[1.5vw] font-medium text-black">
            Intern / Technical Consultant
          </p>
          <p className="text-[1.5vw] font-light text-black">2019 - 2021</p>
        </div>
      </div>
    </div>
  );
};
