$(function(){
	$("#map").goMap({ 
		address: 'Česká republika',
		maptype: 'ROADMAP',
		zoom: 7,
		markers: data,
		icon: 'images/marker.png'
	});
});