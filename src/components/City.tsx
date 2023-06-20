import { Heading } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";

const City = () => {
  const { data } = useGlobal();
  return <Heading marginTop="200px">{data?.name}</Heading>;
};

export default City;
