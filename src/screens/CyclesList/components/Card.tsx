import { format } from "date-fns";
import { Box, Button, Heading, HStack, Text, useTheme, VStack } from "native-base";
import { Trash } from "phosphor-react-native";
import { useState } from "react";

type CardProps = {
  project: string;
  time: number;
  status: string;
  createdAt: Date
}

export function Card ({ project, time, status, createdAt }: CardProps) {
  const { colors } = useTheme();

  const [borderColor, setBorderColor] = useState<string>(() => {
    switch (status) {
      case "in progress":
        return "yellow.400";
      case "paused": 
        return "warmGray.300";
      case "canceled":
        return "red.700";
      case "finish":
        return "green.600";
      default:
        return "gray.400";
    }
  });

  const formatDate = (date: Date) => format(date, "MMMM dd, yyyy");

  return (
    <Box
      shadow={"6"}
      w="full"
      h={32}
      p={4}
      mb={4}
      bg="gray.800"
      borderLeftColor={borderColor}
      borderLeftWidth={8}
      borderRightRadius={6}
      borderLeftRadius={4}
    >
      <VStack
        justifyContent={"space-between"}
      >
        <HStack
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Heading
            color={"gray.400"}
            overflowX={"hidden"}
          >
            { project }
          </Heading>
          <Button
            bg="gray.700"
            p={1}
            _pressed={{
              bg: "gray.600"
            }}
          >
            <Trash 
              size={30}
              color={colors.red["500"]}
            />
          </Button>
        </HStack>
        <HStack
          alignItems={"center"}
          justifyContent="space-between"
          marginTop={10}
        >
          <Text
            color={"trueGray.400"}
          >
            Tempo na atividade: {time}min
          </Text>
          <Text
            color={"trueGray.700"}
          >
            {formatDate(createdAt)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );

}