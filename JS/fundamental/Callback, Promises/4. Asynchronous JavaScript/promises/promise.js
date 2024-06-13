// const GIT_HUB_API = "https://api.github.com/users/ngimatendi";

// const user = fetch(GIT_HUB_API);

// console.log(user);

//Real example
// const GIT_HUB_API = "https://api.github.com/users/arjunsubedi360";

fetch("https://api.github.com/users/arjunsubedi360")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data", data)
    const userImage = document.createElement("img");
    const userName = document.createElement("h2"); // Assuming the user's name is displayed as a heading
    const repo = document.createElement("h4");

    userImage.src = data.avatar_url;
    userImage.alt = "User Image";

    userName.textContent = `Fullname: ${data.name}` || "Name not provided"; // Display the user's name or a default message if it's not provided
    repo.textContent = `Public Repo: ${data.public_repos}`;

    document.body.appendChild(userName);
    document.body.appendChild(repo);
    document.body.appendChild(userImage);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
