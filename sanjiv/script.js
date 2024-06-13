const GIT_HUB_API = "https://api.github.com/users/mesanjiv";

async function fetchGitHubUser() {
 try {
   const response =  await fetch(GIT_HUB_API);
   console.log(response);
   if (!response.ok) {
     throw new Error("Network response was not ok");
   }
   const data = await response.json();

   if(!data.location) {
    throw new Error("He has no location! He should be hacker")
   };
   
   const userImage = document.createElement("img");
   const userName = document.createElement("h2");
   userImage.src = data.avatar_url;
   userImage.alt = "User Image";

   userName.textContent = data.name || "Name not provided";

   document.body.appendChild(userName);
   document.body.appendChild(userImage);
 } catch (error) {
  console.log(error.message);
 }
}
fetchGitHubUser();

// const user = {
//   id: 1,
//   name: "Sanjiv Sharma",
//   email: "sanjiv@gmail.com",
//   password: "Password@1",
// };

// const dbUser = ["sanjiv@gmail.com"];
// function login(user) {
//   if (!user) {
//     throw new Error("User does not exist");
//   }

//   const emailExists = dbUser.includes(user.email);

//   if(!emailExists) {
//     throw new Error("Wrong Email")
//   }

//   return "Successfully login"
// }


// login(user);