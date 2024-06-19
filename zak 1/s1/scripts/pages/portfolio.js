const elem_projects = document.getElementById("projects");
elem_projects.innerHTML = ""
Object.keys(projects).forEach(function(link_name) {
    const link_data = projects[link_name];
    elem_projects.innerHTML += 
    `<a href="${link_data}" class="btn">${link_name}</a>`;
})

document.getElementById("email").textContent = email;
document.getElementById("portfolio_text").textContent = portfolio_text;