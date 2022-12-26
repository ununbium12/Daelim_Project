const yrElement = document.querySelector("#year");
const mhElement = document.querySelector("#month");
const dyElement = document.querySelector("#date");
const btElement = document.querySelector("#bt");
const now = document.querySelector("#now");
const resultDays = document.querySelector("#day");
const resultHours = document.querySelector("#hour");

const nowday = new Date();
now.innerText = `${nowday.getFullYear()}년 ${nowday.getMonth() + 1}월 ${nowday.getDay()}일 ${nowday.getHours()}시 ${nowday.getMinutes()}분 현재`;

btElement.addEventListener('click', () => {
  const birthDay = new Date(yrElement.value, mhElement.value - 1, dyElement.value);
  let seting = nowday.getTime() - birthDay.getTime();
	let setingDay = Math.floor(seting / (1000 * 60 * 60 * 24));
	let setingHour = Math.floor(seting / (1000 * 60 * 60));
	
	resultDays.innerText = `날짜로는 ${setingDay} 일이 흐르고, `;
	resultHours.innerText = `시간으로는 ${setingHour} 시간이 흘렀습니다.`;

	yrElement.value = "";
	mhElement.value = "";
  dyElement.value = "";
});