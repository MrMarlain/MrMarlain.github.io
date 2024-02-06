// video
const video_names = [
	"video_1", "video_1"
];

//https://getfile.dokpub.com/yandex/ - получить прямую ссылку на файл с яндекс диска
/*const video_href = [
	"https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/45dnXWvdpCXZAg",
	"https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/GKB_1bvsV2SzMQ"
]*/

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

document.getElementById("background-video").src = "Data/" + video_names[getRandomInt(video_names.length)] + ".mp4";
//document.getElementById("background-video").src = video_href[getRandomInt(video_href.length)];

document.getElementById("background-video").load();



// video - position
window.addEventListener('resize', function(event) {
	const window_height = window.innerHeight
	var background_video = document.getElementById("background-video");
	const video_height = background_video.getBoundingClientRect().height;
	
	background_video.style.top = (window_height/2 - video_height/2) + 'px';
}, true);
window.dispatchEvent(new Event('resize'));



// key handler
function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

window.addEventListener('keypress', function(key) {
	if (key.code == "Digit1") {
		openInNewTab("https://vk.com/al_feed.php");
	} 
	else if (key.code == "Digit2") {
		openInNewTab("https://translate.google.com.co/?hl=ru");
	} 
	else if (key.code == "Digit3") {
		openInNewTab("https://www.youtube.com");
	} 
	else console.log(key.code)
}, true);


