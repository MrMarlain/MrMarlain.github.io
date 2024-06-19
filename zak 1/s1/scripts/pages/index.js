document.getElementById("img_preview").src = `../data/${path_to_img_preview}`;
document.getElementById("username").textContent = `@${username}`;

const elem_names = document.getElementById("names");
if (use_name) elem_names.textContent += `${second_name} ${first_name}`;
else elem_names.style.display = "none";

document.getElementById("occupation").textContent = occupation;
document.getElementById("about_me").textContent = about_me;
document.getElementById("email").textContent = email;

const elem_projects = document.getElementById("projects");
elem_projects.innerHTML = ""
Object.keys(projects).forEach(function(link_name) {
    const link_data = projects[link_name];
    elem_projects.innerHTML += 
    `<a href="${link_data}" class="btn">${link_name}</a>`;
})