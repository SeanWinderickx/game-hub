import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" height="35rem">
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
        height="15rem"
        borderRadius="0 0 10px 10px"
      >
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
