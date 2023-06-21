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
import SpinnerComponet from "./SpinnerComponet";

const WeatherCard = () => {
  const { data, loading } = useGlobal();

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
      display="flex"
      flexDirection="column"
      marginTop="15px"
      color="black"
      backgroundImage={image}
      backgroundSize="cover"
      width="400px"
      height="650px"
      textAlign="center"
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <SearchInput />
      </Box>
      {loading && <SpinnerComponet />}
      <City />
      <CardBody>
        <Box textAlign="center">
          <Heading>{`${celsiusConverter(data?.main.temp)}°c`}</Heading>
          <WeatherDescription />
        </Box>
        <HStack
          marginTop="200px"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <HumidityBox />
          <WindBox />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
