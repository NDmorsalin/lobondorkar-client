import Section from "../../Shared/Section/Section";
import ChefsSections from "../../components/Home/ChefsSection/ChefsSections";
import HeroSection from "../../components/Home/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* chef Section */}
      <Section
        title="Meet Our Chefs "
        subTitle="Main core of our company is our staff"
      >
        <ChefsSections />
      </Section>
    </div>
  );
};

export default Home;
