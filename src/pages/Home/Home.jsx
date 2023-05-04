import Section from "../../Shared/Section/Section";
import ChefsSections from "../../components/Home/ChefsSection/ChefsSections";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import ServicesWeProvide from "../../components/Home/ServicesWeProvide/ServicesWeProvide";

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
      {/* Services Section */}
      <Section
        title="MAIN SERVICES WE PROVIDE"
        subTitle="Our services are the best in town, we provide great quality baked products"
      >
        <ServicesWeProvide />
      </Section>
    </div>
  );
};

export default Home;
