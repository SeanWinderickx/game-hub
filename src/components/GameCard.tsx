import { Card, CardBody } from "@chakra-ui/card";
import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" height="30rem" width="25rem">
      <Image
        src={getCroppedImageUrl(game.background_image)}
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
        height="10rem"
        borderRadius="0 0 10px 10px"
      >
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
