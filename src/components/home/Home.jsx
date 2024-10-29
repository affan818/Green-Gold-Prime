import Carousel from "../../effect/Carousel";
import Product from "../product/Product";
import Counter from "../../effect/Counter";
import Info from "../info/Info";
import LearnMore from "../learnMore/LearnMore";
import Benifits from "../benifits/Benifits";
import WhatsAppButton from "../../whatsapp/WhatsAppButton";
import Count from "../../effect/Count";

function Home() {
  return (
    <>
      <div>
        <Carousel />
        <Product />
        <Info />
        <Benifits />
        <LearnMore />
        <Count />
        {/* Move WhatsAppButton outside any large sections */}
      </div>
      <WhatsAppButton />
    </>
  );
}

export default Home;
