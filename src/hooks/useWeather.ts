import useData from "./useData"

 interface Weather {
    id: number
    main: string
    description: string
    IconButtonProps: string
}


const useWeather = () => useData<Weather>(`/weather?q=London&appid=a54ebb23b31b921b86d72d7df850867f`)

export default useWeather