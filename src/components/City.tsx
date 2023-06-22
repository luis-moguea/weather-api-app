import { Heading, Text } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";

const City = () => {
  const { data, error } = useGlobal();

  return (
    <>
      {error && <Text marginTop="10px">Ups! This place wasn't found...</Text>}
      <Heading marginTop="150px">{data?.name}</Heading>
    </>
  );
};

export default City;
