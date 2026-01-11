import { Card, Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Box padding={0}>
        <Skeleton height="20rem" />
      </Box>
      <Box>
        <SkeletonText />
      </Box>
    </Card>
  );
};

export default GameCardSkeleton;
