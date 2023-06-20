import { Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

const WeatherDescription = () => {
  const { data } = useWeather();

  return (
    <>
      {data.map((el) => (
        <Text key={el.id}>{el.description}</Text>
      ))}
    </>
  );
};

export default WeatherDescription;
