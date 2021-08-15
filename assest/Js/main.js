const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("_nav_lists");
const times = document.getElementById("close");

hamburger.addEventListener("click", () => {
	navList.classList.toggle("_show");

	// console.log("click");
});

// Counter

const counters = document.querySelectorAll("._counter");
const speed = 80;

counters.forEach((counter) => {
	const uptadeCount = () => {
		const target = +counter.getAttribute("data-target");
		// console.log(target);
		const count = +counter.innerText;
		const time = target / speed;

		if (count < target) {
			counter.innerText = count + time;
			setTimeout(uptadeCount, 1);
		} else {
			count.innerText = target;
		}
	};
	uptadeCount();
});

var containerEl = document.querySelector(".container");

var mixer = mixitup(containerEl);

// Owl
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 20,
	// autoplay: true,
	// autoplayTimeout: 5000,
	// autoplayHoverPause: true,
	nav: true,
	// dots: false,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 3,
			nav: false,
		},
		1000: {
			items: 4,
		},
	},
});
// Date
const time = document.getElementById("date");
let date = new Date().toLocaleDateString();
time.innerText = date;
