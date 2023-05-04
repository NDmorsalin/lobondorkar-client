/* eslint-disable react/prop-types */
const Section = ({ title, subTitle, children }) => {
  return (
    <section className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg space-y-8">
      <div className="text-center w-10/12 mx-auto sm:w-1/2">
        <h4 className="text-4xl font-bold text-white">{title}</h4>
        <div className="">
          <span className="inline-block rounded-s-full border-2 border-gray-400 w-8 sm:w-12 md:w-16"></span>
          <span className="inline-block border-2 border-orange-400 w-8 sm:w-12 md:w-16"></span>
          <span className="inline-block  rounded-e-full border-2 border-gray-400 w-8 sm:w-12 md:w-16"></span>
        </div>
        <p className="text-white text-lg font-semibold mt-4">{subTitle}</p>
      </div>

      {children}
    </section>
  );
};

export default Section;
