export const HeroV2 = () => {
  return (
    <div className="h-[100vh] pt-[10vh]">
      <div className="flex flex-col mx-auto items-center">
        <div className="w-[500px] h-[500px] flex items-center justify-center relative mx-auto overflow-hidden">
          <img
            src="/images/profilepic.png"
            alt="Profile Picture"
            className="w-full h-full object-cover absolute inset-0 m-auto"
          />
        </div>
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] text-black text-center">
            grace
            <span className="text-black font-bold"> carandang</span>
          </h1>
          <h1 className="w-[80%] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black font-bold text-center mx-auto">
            dedicated to simplifying the complicated.
          </h1>
          <h1 className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-black text-center">
            SaaS Engineer at
            <span className="text-black font-bold"> Fenergo</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
