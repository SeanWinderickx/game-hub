import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" height="25rem">
      <Image
        src={game.background_image}
        alt={game.name}
        height="20rem"
        width="100%"
        objectFit="cover"
        objectPosition="center"
      />
      <CardBody
        background="#3B3B3B"
        color="white"
        padding={20}
        height="7rem"
        borderRadius="0 0 10px 10px"
      >
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
