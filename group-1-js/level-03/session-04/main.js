// const obj = {
//   fristName: "haya",
//   lastName: "mohamed",
//   age: 12,
// };

// let { fristName: myName, lastName, city = "mansoura" } = obj; // shallow copy

// console.log(myName);
// console.log(lastName);
// console.log(city);

// console.log(obj); // return the actual object so destrucring dosent effect on it

// array

// const myFristName = "abdo";
// let [a1, b1, c1, d1] = myFristName;
// console.log(a1, b1, c1, d1);

// const arr = ["abdo", "mohamed", "hossam", "ali"];

// let [a, , , d, c = "hamada"] = arr;

// console.log(a, d, c);

// api https://jsonplaceholder.typicode.com/posts

// console.log the data

// async await
// async function getData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts/28");
//   let data = await res.json();
//   console.log(data);
// }
// getData();

// console.log(post1.title);

//get all posts from api and display them in cards
//limit it for 5 posts
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";
fetch(postsApiUrl)
  .then((res) => res.json())
  .then((data) => {
    displayPosts(data);
  });

function displayPosts(data) {
  data.map((post) => {
    const postDiv = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postBody = document.createElement("p");
    postDiv.className = "card";
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);
    document.body.appendChild(postDiv);
  });
}
