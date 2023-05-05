import missionIcon from "../../assets/achievement.png";
import visionIcon from "../../assets/targeting.png";
const AboutUs = () => {
  return (
    <div className="container px-8 mx-auto ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Welcome to our chef's recipes website! Our story is one that begins
            with a passion for food and a desire to share it with the world. As
            chefs, we have spent countless hours in the kitchen, experimenting
            with different flavors and ingredients to create dishes that not
            only taste delicious, but also look beautiful. We believe that food
            is not just something that sustains us, but a form of art that
            should be shared and enjoyed with others. Our journey began with a
            small restaurant in the heart of the city, where we served our
            signature dishes to a loyal following of food enthusiasts. Over
            time, our reputation grew, and we were asked to share our recipes
            with others who wanted to recreate our dishes at home.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white p-1">
                  {/* Icon */}
                  <img src={missionIcon} alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-white">
                  Our Mission
                </dt>
                <dd className="mt-2 text-base text-gray-300">
                  Our mission is to inspire and empower people to live healthier
                  and happier lives through the power of nutrition and healthy
                  eating.
                </dd>
                <dd className="mt-2 text-base text-gray-300">
                We believe that food is the foundation of good health
                  and that everyone deserves access to delicious, nutritious
                  meals. That's why we're dedicated to creating a community
                  where people can come together to share their love of healthy
                  eating, learn new recipes and cooking techniques, and support
                  one another in their journey to optimal health.
                </dd>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white p-1">
                  {/* Icon */}
                  <img src={visionIcon} alt="" className="w-full h-full " />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-white">
                  Our Vision
                </dt>
                <dd className="mt-2 text-base text-gray-300">
                  Our vision is to create a world where healthy eating is the
                  norm, and everyone has access to delicious, nutritious food
                  that supports their optimal health and wellbeing.
                </dd>
                <dd className="mt-2 text-base text-gray-300">
                  We believe that by empowering people with the knowledge and
                  skills to make healthy food choices, we can create a ripple
                  effect that extends beyond just individual health, to the
                  health of our communities and the planet as a whole.
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="mt-10">
          <h3 className="text-lg leading-6 font-medium text-white">
            Meet the Team
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?dpr=2"
                alt="Team member 1"
              />
              <div className="p-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  John Doe
                </h3>
                <p className="mt-2 text-base text-gray-500">Co-Founder, CEO</p>
                <button className="mt-3 btn btn-primary">Connect</button>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="Team member 2"
              />
              <div className="p-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Jane Smith
                </h3>
                <p className="mt-2 text-base text-gray-500">Co-Founder, CTO</p>
                <button className="btn btn-primary mt-3">Connect</button>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Team member 3"
              />
              <div className="p-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Mark Johnson
                </h3>
                <p className="mt-2 text-base text-gray-500">Lead Designer</p>
                <button className="btn btn-primary mt-3">Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
