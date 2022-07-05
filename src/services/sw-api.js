export const getAllStarships = async (page) => {
    const response = await fetch (`https://swapi.dev/api/starships?page=${page}`)
    const data = await response.json();
    console.log(data.results)
    return data.results;
}