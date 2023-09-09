const getAirBnb = async () => {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc593fa811msh25694d891e54b17p1da2c1jsnd7b4ddd79288",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.results;
    console.log(data);
    let html = ``;
    for (let i = 0; i < data.length; i++) {
      var address = data[i].address;
      var id = data[i].id;
      var name = data[i].name;
      var img = data[i].images[0];
      html += `
      <h1>${address}</h1>
      <h2>${id}</h2>
      <p>${name}</p>
      <img src="${img}" />
      `;
    }
    main.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};
getAirBnb();
//name,hinh anh, dia chi
