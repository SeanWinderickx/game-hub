import { Card, Box } from "@chakra-ui/react";
import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Box padding={0}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          height="20rem"
          width="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box
        background="#3B3B3B"
        color="white"
        padding={7}
        height="10rem"
        borderRadius="0 0 10px 10px"
      >
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Box>
    </Card>
  );
};

export default GameCard;
