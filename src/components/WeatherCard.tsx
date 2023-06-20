import { Box, Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import WeatherDescription from "./WeatherDescription";
import { celsiusConverter } from "../services/celsius-convertion";
import useGlobal from "../hooks/useGlobal";
import SearchInput from "./SearchInput";
import City from "./City";
import WindBox from "./WindBox";
import HumidityBox from "./HumidityBox";
import tenGrades from "../assets/less-10.jpg";
import twentyGrades from "../assets/less-20.jpg";
import thirtyGrades from "../assets/less-30.jpg";
import moreThanThirtyGrades from "../assets/more-30.jpg";

const WeatherCard = () => {
  const { data } = useGlobal();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (Number(celsiusConverter(data?.main.temp)) <= 15) {
      setImage(tenGrades);
    } else if (Number(celsiusConverter(data?.main.temp)) <= 20) {
      setImage(twentyGrades);
    } else if (Number(celsiusConverter(data?.main.temp)) <= 30) {
      setImage(thirtyGrades);
    } else if (Number(celsiusConverter(data?.main.temp)) > 30) {
      setImage(moreThanThirtyGrades);
    }
  }, [data]);

  return (
    <Card
      color="black"
      backgroundImage={image}
      backgroundSize="cover"
      marginTop="100px"
      width="300px"
      height="450px"
      textAlign="center"
    >
      <SearchInput />
      <City />
      <CardBody>
        <Box textAlign="center">
          <Heading>{`${celsiusConverter(data?.main.temp)}°c`}</Heading>
          <WeatherDescription />
        </Box>
        <HStack marginTop="120px" justifyContent="space-between">
          <HumidityBox />
          <WindBox />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
