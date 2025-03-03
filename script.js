document.addEventListener("DOMContentLoaded", function () {
  const username = "RekTx";
  const projectList = document.getElementById("project-list");

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      repos.forEach((repo) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${
                      repo.html_url
                    }" target="_blank">View Repository</a>
                `;
        projectList.appendChild(projectDiv);
      });
    })
    .catch((error) => console.error("Error fetching repositories:", error));
});
