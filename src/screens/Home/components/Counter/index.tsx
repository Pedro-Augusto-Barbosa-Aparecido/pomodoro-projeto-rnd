import { Box, Center, Text, VStack } from "native-base";

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
      mt={4}
    >
      <Center
        flex={1}
      >
        <Text
          color="white"
          fontFamily={"heading"}
          fontSize="8xl"
          letterSpacing={4}
          textAlign="center"
          alignContent={"center"}
        >
          {minutes} : {seconds}
        </Text>
      </Center>
    </VStack>
  );
}