$(document).ready(function () {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: true,
		navigation: true,
		navigation: 'right',
		navigationTooltips: ['Home', 'About', 'Work', 'News' , 'Contact'],
		showActiveTooltip: true,
		

	});
});

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.getElementsByClassName('title');
	Array.from(elements).forEach(element => {
		new TypeIt(element, {
			speed: 20,
			waitUntilVisible: true,
			afterComplete: function (instance) {
				instance.destroy();
			}
		}).go();
	});


});

