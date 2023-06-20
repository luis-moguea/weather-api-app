import { Box, Text, HStack, Image } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import humidityImage from "../assets/humidity_weather_icon_148585 (1).png";

const HumidityBox = () => {
  const { data } = useGlobal();
  return (
    <HStack>
      <Image width="25px" src={humidityImage} />
      <Box lineHeight="5">
        <Text>Humidity</Text>
        <Text
          fontWeight="bold"
          fontSize="11px"
        >{`${data?.main.humidity}%`}</Text>
      </Box>
    </HStack>
  );
};

export default HumidityBox;
