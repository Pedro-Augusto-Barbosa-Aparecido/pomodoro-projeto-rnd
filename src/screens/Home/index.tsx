import { VStack, Icon, Heading, Box, Text, HStack } from "native-base";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { THEME } from "../../styles/theme";

import { Activity, Timer, Plus, Minus } from "phosphor-react-native";

export function Home () {
  const { colors } = THEME;
  
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

        <Button>
          Começar
        </Button>
      </VStack>
    </Box>
  );

}
