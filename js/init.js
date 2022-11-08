document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  // 화면에서 키 누르면 발생할 동작
  //key code 왼쪽 : 37, 오른쪽 : 39

  //getComputedStyle ?
  const heroLeft = getComputedStyle(heroElement).left;

  console.log("용사의 왼쪽 값 =>", heroLeft);

  //  split 은 문자열을 px 기준으로 분할하여 배열에 담는다.
  // Number 메서드를 통해 string => number 타입으로 바꿔준다.
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);

  // 배경 밖으로 용사 못나가게 하는 코드
  if (
    (heroLeftWithoutPx < 10 && e.keyCode === 37) ||
    (heroLeftWithoutPx + 10 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39)
  ) {
    return; // return 함수 종료
  }

  // 용사 움직이는 코드
  if (e.keyCode === 37) {
    //왼쪽키
    heroElement.style.left = heroLeftWithoutPx - 20 + "px";
    // console.log("용사의 왼쪽 값 -10px =>", heroLeftWithoutPx - 10);
    heroElement.className = "left";
  } else if (e.keyCode === 39) {
    //오른쪽키
    heroElement.style.left = heroLeftWithoutPx + 20 + "px";
    // console.log("용사의 왼쪽 값 +10px =>", heroLeftWithoutPx + 10);
    heroElement.className = "right";
  }
});

document.addEventListener("keyup", function (e) {
  heroElement.className = "stop";
});

// 용사가 배경 밖으로 못 나가게 막기

// 용사 왼쪽끝 : -5px
// 용사 오른쪽끝 : 755px
