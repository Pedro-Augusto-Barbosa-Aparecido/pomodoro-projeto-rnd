import { Box, Heading } from "native-base";

export function CyclesList () {
  return (
    <Box
      bg="coolGray.800" 
      flex={1} 
      color="white"
      pt={16}
      px={4}
    >
      <Heading
        mb={8}
        color="gray.500"
      >
        Cycles List
      </Heading>
    </Box>

  );

}