import Section from "../../Shared/Section/Section";
import ChefsSections from "../../components/Home/ChefsSection/ChefsSections";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import ServicesWeProvide from "../../components/Home/ServicesWeProvide/ServicesWeProvide";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

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

      {/* Testimonials Section */}
      <Section
        title="What Customers Are Saying
        About Us
        "
        subTitle="We pride ourselves on what our happy
        clients say."
      >
        <Testimonial />
      </Section>
    </div>
  );
};

export default Home;
