import { Center, Spinner } from "native-base";

export function Loader () {
  return (
    <Center flex={1} bg="coolGray.900">
      <Spinner color="green.700" size={36} />
    </Center>
  );
}
