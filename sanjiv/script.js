const GIT_HUB_API = "https://api.github.com/users/mesanjiv";

async function fetchGitHubUser() {
  try {
    const response = await fetch(GIT_HUB_API);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const userImage = document.createElement("img");
    const userEmail = document.createElement("email");
    const userName = document.createElement("h2");

    userImage.src = data.avatar_url;
    userImage.alt = "User Image";

    userName.textContent = data.name || "Name not provided";
    userEmail.textContent = data.email || "email not found";

    document.body.appendChild(userName);
    document.body.appendChild(userEmail);
    document.body.appendChild(userImage);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchGitHubUser();
