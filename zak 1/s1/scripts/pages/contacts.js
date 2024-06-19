const elem_links = document.getElementById("links");
elem_links.innerHTML = ""
Object.keys(links).forEach(function(link_name) {
    const link_data = links[link_name];
    elem_links.innerHTML += 
    `<a href="${link_data[1]}" class="btn"><img class="icon" src="../data/icons/${link_data[0]}" alt=""><span>${link_name}</span></a>`;
})
document.getElementById("contacts_text").innerText = contacts_text;
document.getElementById("email").textContent = email;
