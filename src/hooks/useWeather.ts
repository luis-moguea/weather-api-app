import useData from "./useData"
import { key } from "./useGlobal"

 interface Weather {
    id: number
    main: string
    description: string
    IconButtonProps: string
}


const useWeather = () => useData<Weather>(`/weather?q=London&appid=${key}`)

export default useWeather