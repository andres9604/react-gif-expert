export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=rZ0VJI3GUVZAiTvAfCfDp12zRgGCtB4Z&q=${category}&limit=10`;

  const res = await fetch(url);
  const { data } = await res.json();

  //console.log(data);

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  //console.log(gifs);

  return gifs;
};
