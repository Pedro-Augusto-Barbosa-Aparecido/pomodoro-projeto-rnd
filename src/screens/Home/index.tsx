import { VStack, Icon, Heading, Box, Text, HStack } from "native-base";
import { useContext, useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { THEME } from "../../styles/theme";

import { Activity, HandPalm, Timer } from "phosphor-react-native";
import { CounterContext } from "../../context/counterContext";

import CountDown from "react-native-countdown-component";

export function Home () {
  const { colors, fonts } = THEME;
  const { 
    currentCycle, 
    hasActiveCycle, 
    changeActiveStatus
  } = useContext(CounterContext);

  const [showStartButton, setShowStartButton] = useState<boolean>(true);

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
        />
        <Input 
          placeholder="Enter with time to work..."
          keyboardType="numeric"
          InputLeftElement={<Icon as={<Timer color={colors.gray[500]} size={24} />} ml={4} />}
        />
        <Box
          mt={4}
        >
          <CountDown 
            size={70}
            until={0}
            timeToShow={['M', 'S']}
            timeLabels={{ m: null, s: null }}
            running={false}
            digitTxtStyle={{
              color: colors.white,
              letterSpacing: 4,
              fontStyle: "normal",
              textDecorationStyle: "solid"
            }}
            digitStyle={{
              backgroundColor: colors.gray[600],
              backfaceVisibility: "hidden"
            }}
            separatorStyle={{
              marginHorizontal: 8
            }}
            showSeparator
          />
        </Box>
        {
          showStartButton ?
          <Button
            onPress={() => setShowStartButton(false)}
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
