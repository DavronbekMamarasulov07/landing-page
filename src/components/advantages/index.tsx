import Container from "../container";
import Card from "./card";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";

const Advantages = () => {
  const isButton = true;
  return (
    <div id="advantages">
      <Container>
        <div className="flex flex-col gap-[30px] overflow-hidden">
          <Card cardImage={card1} isButton={false} />
          <Card cardImage={card2} isButton={false} />
          <Card cardImage={card3} isButton={isButton} />
        </div>
      </Container>
    </div>
  );
};

export default Advantages;
