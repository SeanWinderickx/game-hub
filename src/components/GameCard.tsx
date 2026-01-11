import { Card } from "@chakra-ui/react";
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
    <Card.Root>
      <Card.Header padding={0}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          height="20rem"
          width="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Card.Header>
      <Card.Body
        background="#3B3B3B"
        color="white"
        padding={7}
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
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
