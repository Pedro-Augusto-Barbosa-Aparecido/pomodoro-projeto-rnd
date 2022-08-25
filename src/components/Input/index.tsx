import { Input as NativeBaseInput, IInputProps } from "native-base";

interface IInput extends IInputProps {

} 

export function Input ({ ...rest }: IInput) {
  return (
    <NativeBaseInput 
      bg="gray.600"
      borderWidth={2}
      borderColor="gray.600"
      h={16}  
      shadow="4"
      fontSize="md"
      fontFamily={"body"}
      placeholderTextColor="gray.500"
      color={"gray.400"}
      _focus={{
        bg: "gray.800",
        borderColor: "green.600",
        borderWidth: 2
      }}
      {...rest}
    />
  );

}
