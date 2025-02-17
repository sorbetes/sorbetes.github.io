export const Hero = () => {
  return (
    <div className="h-[88vh] bg-white">
      {/*h-[88vh] means occupy 88% of the viewport HEIGHT
          ensures the Hero component dynamically adjusts its height based on the user's screen size, creating a responsive design
         bg-white for white background, use bg-[] for specific color */}
      <div className="h-[100%] w-[80%] grid-cols-1 lg:grid-cols-2 mx-auto grid gap-[3rem] items-center">
        {/*
          grid --> use CSS Grid layout, children of the element is part of grid
          w-[80%] use 80% of the parent width, 20% for the margin
          grid-cols-1 --> 1 column for small/default (the right column will disappear)
          lg:grid-cols-2 --> 2 columns if large screen 
          mx-auto --> auto margins, centers the element horizontally
          gap-[3rem] --> the gap between the grid items
          items-center --> centres grid items vertically*/}
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] text-black text-center">
            grace
            <span className="text-black font-bold"> carandang</span>
          </h1>
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[4rem] text-black font-bold text-center">
            dedicated to simplifying the complicated.
          </h1>
          <h1 className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-black text-center">
            SaaS Engineer at
            <span className="text-black font-bold"> Fenergo</span>
          </h1>
        </div>
        <div className="w-[500px] h-[500px] rounded-full bg-[#d1d9e6] hidden lg:flex items-center justify-center relative mx-auto">
          {/*hidden --> hidden by default unless
            lg:flex --> visible when large, sets display value to flex*/}
          <img
            src="/images/profilepic.png"
            alt="Profile Picture"
            className="w-[130%] h-[130%] object-cover absolute top-[0%]"
          />
        </div>
      </div>
    </div>
  );
};
