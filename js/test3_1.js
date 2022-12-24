const num = parseInt(prompt(`숫자를 입력 하십시오.`));

function isNegative (n) {
    if(n > 0) {
        alert(`${n} 는(은) 양수 입니다.`);
    } else if (n < 0) {
        alert(`${n} 는(은) 음수 입니다.`);
    } else {
        alert(`${n} 입니다.`);
    }
}

// 윗쪽 선언 후 아래쪽 실행
// 만약 입력된 것이 숫자가 이닐 경우 실행 안됨
if(!isNaN(num)) {
    isNegative(num);
}