export const celsiusConverter = (kelvin:number | any) => {
    const celsius = kelvin - 273.15
    
    return parseFloat(celsius.toFixed(1))
}