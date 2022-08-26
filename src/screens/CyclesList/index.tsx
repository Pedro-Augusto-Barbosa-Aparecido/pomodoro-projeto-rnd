import { Box, Center, Heading, ScrollView, Text, useTheme, VStack } from "native-base";
import { FolderNotch, FolderOpen } from "phosphor-react-native";
import { useContext } from "react";
import { CounterContext } from "../../context/counterContext";
import { Card } from "./components/Card";
// const cycles = [
//   {projectName: "Teste", time: 12, status: "in progress", id: (new Date()).getTime(), createdAt: new Date()},
//   {projectName: "Teste", time: 12, status: "canceled", id: (new Date()).getTime(), createdAt: new Date()},
//   {projectName: "Teste", time: 12, status: "finish", id: (new Date()).getTime(), createdAt: new Date()},
//   {projectName: "Teste", time: 12, status: "in progress", id: (new Date()).getTime(), createdAt: new Date()},
//   {projectName: "Teste", time: 12, status: "canceled", id: (new Date()).getTime(), createdAt: new Date()},
//   {projectName: "Teste", time: 12, status: "in progress", id: (new Date()).getTime(), createdAt: new Date()},
// ]
export function CyclesList () {
  const { cycles } = useContext(CounterContext);
  const { colors } = useTheme();

  return (
    <Box
      bg="coolGray.800" 
      flex={1} 
      color="white"
      pt={16}
      px={4}
    >
      <Heading
        mb={4}
        color="gray.500"
      >
        Cycles List
      </Heading>
      <ScrollView
        w={"full"}
        display={cycles.length === 0 ? "none" : "flex"}
      >
        {
          (cycles.length > 0) ? cycles.map((cycle, index) => {
            return <Card 
              project={cycle.projectName}
              time={cycle.time}
              status={cycle.status}
              createdAt={cycle.createdAt}
              key={index}
            />
          }) :
          <></>
        }
      </ScrollView>
      {
        cycles.length === 0 && <Center
        flex={1}
      >
        <FolderOpen 
          size={120}
          weight="thin"
          color={colors.gray["800"]}
        />
        <Text
          color={"gray.800"}
          fontSize={"md"}
          fontFamily={"body"}
        >
          Empty cycles, please init some cycles. 
        </Text>
      </Center>
      }
    </Box>

  );

}