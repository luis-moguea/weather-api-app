import { Box, Text, HStack, Image } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import windImage from "../assets/wind-weather-lines-group-symbol_icon-icons.com_54629 (1).png";
import { kmConverter } from "../services/kilometers-converter";

const WindBox = () => {
  const { data } = useGlobal();

  return (
    <HStack>
      <Image width="35px" src={windImage} />
      <Box lineHeight="5">
        <Text>Wind</Text>
        <Text fontWeight="bold" fontSize="11px">{`Speed: ${kmConverter(
          data?.wind.speed
        )} Km/h`}</Text>
      </Box>
    </HStack>
  );
};

export default WindBox;
