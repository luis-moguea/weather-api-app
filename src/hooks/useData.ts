import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface FetchResults<T> {
    weather: T[]
}

const useData = <T>(enpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")

useEffect(() => {
    const controller = new AbortController()

    apiClient.get<FetchResults<T>>(enpoint, 
    {signal: controller.signal})
    .then(res => setData(res.data.weather))
    .catch(err => {if(err instanceof CanceledError) return;
        setError(err.message)})

    return () => controller.abort()

}, [])

    return {data, error}
}

export default useData
