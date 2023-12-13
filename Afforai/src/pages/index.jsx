import DraggableMovingSlider from "../components/UseCaseComponents/DraggableMovingSlider";
import FAQSection from "../components/UseCaseComponents/FAQSection";
import HeadingSection from "../components/UseCaseComponents/HeadingSection";
import IntroductionSection from "../components/UseCaseComponents/IntroductionSection";
import LovedBySection from "../components/UseCaseComponents/LovedBySection";
import MultipleChatBotsSection from "../components/UseCaseComponents/MultipleChatBotsSection";
import ReviewSection from "../components/UseCaseComponents/ReviewsSection";
import SaveYourselfSection from "../components/UseCaseComponents/SaveYourselfSection";
import WhyChooseUsSection from "../components/UseCaseComponents/WhyChooseUsSection";

const index = () => {
  return (
    <>
      <HeadingSection />
      <LovedBySection />
      <IntroductionSection />
      <SaveYourselfSection />
      <WhyChooseUsSection />
      <MultipleChatBotsSection />
      <FAQSection />
      <ReviewSection />
    </>
  );
};

export default index;
