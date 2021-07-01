export const getGifs = async (category) => {
        //SOLO Quiere q se ejecute esta funcion getGiffs cuando el componente es renderizado por primera vez
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=0YnOueiE4wbyeajaSQ8lM8GUGp8OYzv4`;
    const resp =  await fetch ( url );
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    })
    return gifs;
} 