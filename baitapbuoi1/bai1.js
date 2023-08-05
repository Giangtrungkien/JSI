const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(url);
  const data = await res.json();
  const main = document.querySelector(".container");
  let html = "";
  for (let i = 0; i < data.length; i++) {
    var PostId = data[i].postId;
    var id = data[i].id;
    var name = data[i].name;
    var email = data[i].email;
    var body = data[i].body;
    html += `
      <h3>${PostId}</h3>
      <h3>${id}</h3>
      <h1>${name}</h3>
      <h2>${email}</h2>
      <p>${body}</p>`;
  }
  main.innerHTML = html;
};
getPosts();
