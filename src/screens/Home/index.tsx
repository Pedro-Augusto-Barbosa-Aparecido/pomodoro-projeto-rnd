import { VStack, Icon, Heading, Box, Text, HStack } from "native-base";
import { useContext, useEffect, useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { THEME } from "../../styles/theme";

import { Activity, HandPalm, Timer } from "phosphor-react-native";
import { CounterContext } from "../../context/counterContext";

import { Alert } from "react-native";
import { Counter } from "./components/Counter";
import { differenceInSeconds } from "date-fns";

export function Home () {
  const { colors, fonts } = THEME;
  const { 
    currentCycle, 
    addCurrentCycle,
    amountSecondsPassed,
    setSecondsPassed,
    clearCurrentCycle,
    makeCycleAsFinishedOrCanceled
  } = useContext(CounterContext);

  const [showStartButton, setShowStartButton] = useState<boolean>(true);
  const [projectName, setProjectName] = useState<string>("");
  const [timeProject, setTimeProject] = useState<number>(0);

  const totalSeconds = currentCycle ? currentCycle.time * 60 : 0;
  const currentSeconds = currentCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  const handleStartCountdown = () => {
    clearCurrentCycle();
    addCurrentCycle({ projectName, time: 1 });

  }

  useEffect(() => {
    let interval: any;

    if (currentCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(currentCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          Alert.alert("Teste", "Finish")
          makeCycleAsFinishedOrCanceled(currentCycle.id, "finish");
          setSecondsPassed(totalSeconds);
          clearCurrentCycle();
          clearInterval(interval)
        } else setSecondsPassed(secondsDifference)
      }, 1000);
      
    }

    return () => {
      clearInterval(interval);
    }
  }, [
    currentCycle,
    setSecondsPassed,
  ]);

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
        Timer
      </Heading>
      <VStack        
        flex={1}
        alignItems="center"
      >
        <Input 
          placeholder="Enter with project name..."
          InputLeftElement={<Icon as={<Activity color={colors.gray[500]} size={24} />} ml={4} />}
          mb={4}
          value={projectName}
          onChangeText={(text) => setProjectName(text)}
        />
        <Input 
          placeholder="Enter with time to work..."
          keyboardType="numeric"
          value={timeProject.toString()}
          InputLeftElement={<Icon as={<Timer color={colors.gray[500]} size={24} />} ml={4} />}
          onChangeText={(text) => {
            try {
              if (parseInt(text || "0") > 60) 
                setTimeProject(60);
              else
                setTimeProject(parseInt(text || "0"));
            } catch (e) {
              Alert.alert("Tempo inválido!", "Você inseriu caracteres no campo \nde números, verifique o campo!!");
              setTimeProject(0);
            }
          }}
        />
        <Box
          mt={4}
        >
          <Counter 
            minutes={minutes} 
            seconds={seconds} 
          />
        </Box>
        {
          showStartButton ?
          <Button
            onPress={handleStartCountdown}
          >
            Começar
          </Button> : 
          <Button
            onPress={() => setShowStartButton(true)}
            bg="red.500"
          >
            <HStack
              alignItems={"center"}
            >
              <HandPalm size={20} color={colors.white} /> 
              <Text
                ml={2}
                fontSize="md"
                fontFamily="body"
                fontWeight="bold"
                color={"white"}
              >
                Interromper
              </Text>
            </HStack>
          </Button>
        }
      </VStack>
    </Box>
  );

}
