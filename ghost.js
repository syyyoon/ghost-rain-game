function createGhost() {
  const ghost = document.createElement("div");
  ghost.style.position = "absolute";
  ghost.style.top = "0px";

  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghost.style.left = randomLeft + "px";

  ghost.style.width = GHOST_WIDTH + "px";
  ghost.style.height = GHOST_HEIGHT + "px";
  ghost.style.background = 'url("images/ghost.png") no-repeat';
  bgElement.appendChild(ghost);

  //고스트가 주기적으로 비처럼 내리는 동작을 구현한다.
  //고스트가 바닥에 닿으면 사라지는 동작을 구현한다.
  setInterval(function () {
    let ghostTopNum = Number(ghost.style.top.split("px")[0]) + 10;
    let ghostLeftNum = Number(ghost.style.left.split("px")[0]);
    let heroLeftNum = Number(heroElement.style.left.split("px")[0]);
    // 배경의 높이 - (고스트 높이 + 용사의 높이) ----> 조건 1
    if (ghostTopNum > 500 - (GHOST_HEIGHT + HERO_HEIGHT)) {
      // 유령의 Left < 용사의 Left < 유령의 Left + 유령의 너비(Width) ---> 조건 2
      if (
        ghostLeftNum < heroLeftNum &&
        heroLeftNum < ghostLeftNum + GHOST_WIDTH
      ) {
        ghost.style.backgroundPosition = "-45px";
        dieGhost(ghost);
        return;
      }
    }

    if (ghostTopNum > 500 - GHOST_HEIGHT) {
      ghost.remove();
      return;
    }
    ghost.style.top = ghostTopNum + "px";
  }, 100);
}

// 유령과 용사가 겹치면 유령이 죽는 동작 구현!!
function dieGhost(ghost) {
  setTimeout(function () {
    ghost.remove();
  }, 3000);
}

createGhost();

setInterval(createGhost, 5000);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
