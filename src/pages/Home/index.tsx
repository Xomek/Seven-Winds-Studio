import { FC } from "react";
import { Card } from "../../components";
import { randomData } from "../../helpers/randomData";

const Home: FC = () => {
  const card = randomData();
  console.log(card[0].items[0].items[0]);

  return (
    <div>
      <Card card={card[0].items[0].items[0]} />
      <Card card={card[1].items[1].items[1]} />
    </div>
  );
};

export default Home;
