import { Box, Center, HStack, Text, VStack } from "native-base";

interface CounterProps {
  minutes: string;
  seconds: string;
}

export function Counter ({ minutes, seconds }: CounterProps) {
  return (
    <VStack 
      h={200}
      w="full"
      alignItems="center"
    >
      <Center
        flex={1}
      >
        <HStack
          alignItems={"center"}
        >
          <Text
            color="white"
            fontFamily={"heading"}
            fontSize="8xl"
            letterSpacing={4}
            textAlign="center"
            alignContent={"center"}
          >
            {minutes}
          </Text>
          <Text
            color="white"
            fontFamily={"heading"}
            fontSize="8xl"
            letterSpacing={4}
            textAlign="center"
            alignContent={"center"}
            mb={3}
            ml={4}
            mr={4}
          >
            {":"}
          </Text>
          <Text
            color="white"
            fontFamily={"heading"}
            fontSize="8xl"
            letterSpacing={4}
            textAlign="center"
            alignContent={"center"}
          >
            {seconds}
          </Text>
        </HStack>
      </Center>
    </VStack>
  );
}