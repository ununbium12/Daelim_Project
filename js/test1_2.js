const inch = prompt(`인치 값을 입력 하십시오.`);

const cm = inch * 2.54;
const number = /^[0-9.]*$/;

if (inch == "") {
    alert(`공백 입니다.`);
} else if (number.test(inch)) {
    alert(`${inch}inch는 ${cm}cm 입니다.`);
} else {
    alert(`숫자와 .만 입력 가능`);
}