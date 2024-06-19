const elem_services_short = document.getElementById("services_short");
elem_services_short.innerHTML = "";
Object.keys(services).forEach(function(item) {
    elem_services_short.innerHTML += 
    `<li><span>${item} ― ${services[item]}</span></li>`;
})

document.getElementById("services_text").innerText = services_text;
document.getElementById("email").textContent = email;
document.getElementById("experience").textContent = experience;
document.getElementById("occupation").textContent = occupation;
