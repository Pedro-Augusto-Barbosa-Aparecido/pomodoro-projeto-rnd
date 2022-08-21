import { Button as NativeBaseButton, IButtonProps } from "native-base";

export function Button ({ ...rest }: IButtonProps) {
  return (
    <NativeBaseButton 
      bg="green.500"
      color={"white"}
      mt={4}
      py={4}
      w="full"
      _pressed={{
        bg: "green.300"
      }}
      _text={{
        fontSize: "md",
        fontFamily: "body",
        fontWeight: "bold"
      }}
      {...rest}
    />
  );
}
