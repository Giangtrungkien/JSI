const getSpotify = async (query) => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc593fa811msh25694d891e54b17p1da2c1jsnd7b4ddd79288",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// getSpotify();

document.querySelector("#inputSearch").addEventListener("input", () => {
  console.log(document.querySelector("#inputSearch").value);
});
