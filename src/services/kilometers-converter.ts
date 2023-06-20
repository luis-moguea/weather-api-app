export const kmConverter = (meters: number | any) =>{
    const kilometers = meters * 3.6
    return parseFloat(kilometers.toFixed(1))
}