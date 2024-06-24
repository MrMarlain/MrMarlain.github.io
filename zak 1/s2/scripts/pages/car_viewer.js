let car_id = Number(getUrlParam("car_id", 0))

const car_info = cars[car_id]

document.getElementById("img_car_preview").src = `../data/${car_info["preview_path"]}`;
document.getElementById("car_name").textContent = car_info["name"]
document.getElementById("car_description").textContent = car_info["description"]
document.getElementById("car_price").textContent = car_info["price"]

const elem_car_gallery = document.getElementById("car_gallery");

car_info["gallery_images"].forEach(function(image_name) {
    elem_car_gallery.innerHTML += `
        <img src="../data/${car_info["gallery_path"]}/${image_name}" alt="" style="border-radius: 8px">
    `
});

