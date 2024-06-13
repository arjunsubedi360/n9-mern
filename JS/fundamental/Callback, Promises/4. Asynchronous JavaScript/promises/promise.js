// const GIT_HUB_API = "https://api.github.com/users/ngimatendi";

// const user = fetch(GIT_HUB_API);

// console.log(user);

//Real example
const GIT_HUB_API = "https://api.github.com/users/arjunsubedi360";

fetch(GIT_HUB_API)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const userImage = document.createElement("img");
    const userName = document.createElement("h2"); // Assuming the user's name is displayed as a heading
    const location = document.createElement("h4");

    userImage.src = data.avatar_url;
    userImage.alt = "User Image";

    userName.textContent = data.name || "Name not provided"; // Display the user's name or a default message if it's not provided
    location.textContent = data.location;

    document.body.appendChild(userName);
    document.body.appendChild(location);
    document.body.appendChild(userImage);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
