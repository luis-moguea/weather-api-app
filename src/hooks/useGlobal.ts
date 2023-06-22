import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useSelector } from "react-redux/es/exports";


export interface Weather {
  id: number;
  description: string;
}

interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
}

export interface Data {
  id: number;
  name: string;
  main: Temperature;
  wind: Wind;
}

export const key = import.meta.env.VITE_API_KEY

const useGlobal = () => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);

  const city = useSelector(
    (state: { city: { city: string } }) => state.city.city
  );

  const resetError = () => {
    setError("")
  }


  useEffect(() => {
    const controller = new AbortController();

    const callAPI = () => {
      isLoading(true);
      apiClient
        .get<Data>(
          `/weather?q=${city}&appid=${key}`,
          {
            signal: controller.signal,
          }
        )
        .then((res) => {
          const newData = {
            ...data,
            name: res.data.name,
            main: res.data.main,
            id: res.data.id,
            wind: { speed: res.data.wind.speed },
          };
          setData(newData)
          resetError()
          isLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          isLoading(false)
        });
    };

    if (city !== "") {
      callAPI();
    }

    return () => controller.abort();
  }, [city]);


  return { data, error, loading };
};

export default useGlobal;
