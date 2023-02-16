export const getGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=05nbeifDiMzrZsEA4zMw0qZRjxA0w27u&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};
