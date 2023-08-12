// const getPosts = async () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   const res = await fetch(url);
//   const data = await res.json();
//   const main = document.querySelector("#main");
//   let html = "";
//   for (let i = 0; i < data.length; i++) {
//     var id = data[i].id;
//     var title = data[i].title;
//     var body = data[i].body;
//     html += `
//         <h1>${id}</h1>
//         <h2>${title}</h2>
//         <p>${body}</p>`;
//   }
//   main.innerHTML = html;
// };
// getPosts();
const getPhotos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  const data = await res.json();
  const main = document.querySelector("#main");
  let html = "";
  for (let i = 0; i < data.length; i++) {
    var id = data[i].id;
    var title = data[i].title;
    var img = data[i].url;
    html += `
        <h1>${id}</h1>
        <h2>${title}</h2>
        <img src="${img}" alt=""/>`;
  }
  main.innerHTML = html;
};
getPhotos();
