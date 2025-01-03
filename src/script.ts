let q = 4;
let arr = document.getElementsByClassName('element');
init();

// @ts-expect-error TS(2322): Type 'void' is not assignable to type '(((this: Gl... Remove this comment to see the full error message
window.onload = init();

let arr = document.getElementsByClassName('element');

function right() {
  let can = false;
  let access = false;
  let k;
  let score = document.getElementById('score');

  for (let i = 14; i > 0; i -= 4) {
    //alert("step1");
    access = false;
    for (let j = i; j >= i - 2; j--) {
      //alert("step2");
      if (arr[j].innerHTML !== '') {
        k = j;
        while (
          k < i + 1 &&
          (parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k + 1].innerHTML === '')
        ) {
          //alert("i="+i+" j="+j+" k="+k);
          if (
            parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k + 1].innerHTML =
              parseInt(arr[k + 1].innerHTML) + parseInt(arr[k].innerHTML);
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            score.innerHTML =
              // @ts-expect-error TS(2531): Object is possibly 'null'.
              parseInt(arr[k + 1].innerHTML) + parseInt(score.innerHTML);
            arr[k].innerHTML = '';
            can = true;
            access = true;
          } else if (
            parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access = false;
          } else if (arr[k + 1].innerHTML === '') {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k + 1].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
          }
          k += 1;
        }
      }
    }
  }
  if (can) {
    av();
  }
}

function left() {
  let can = false;
  let access = false;
  let k;
  let score = document.getElementById('score');
  //fixed
  for (let i = 13; i > 0; i -= 4) {
    //alert("step1");
    access = false;
    for (let j = i; j <= i + 2; j++) {
      //alert("step2");
      if (arr[j].innerHTML !== '') {
        k = j;
        while (
          k > i - (i % 4) &&
          (parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k - 1].innerHTML === '')
        ) {
          //alert("i="+i+" j="+j+" k="+k);
          if (
            parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k - 1].innerHTML =
              parseInt(arr[k - 1].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
            access = true;
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            score.innerHTML =
              // @ts-expect-error TS(2531): Object is possibly 'null'.
              parseInt(arr[k - 1].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access = false;
          } else if (arr[k - 1].innerHTML === '') {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k - 1].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
          }
          k -= 1;
        }
      }
    }
  }
  if (can) {
    av();
  }
}

function down() {
  let can = false;
  let access = false;
  let k;
  let score = document.getElementById('score');
  //fixed
  for (let i = 11; i > 7; i -= 1) {
    //alert(arr[i].innerHTML==="");
    access = false;
    for (let j = i; j >= 0; j = j - 4) {
      if (arr[j].innerHTML !== '') {
        k = j;
        while (
          k < 12 &&
          (parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k + 4].innerHTML === '')
        ) {
          //alert("i="+i+" j="+j+" k="+k);
          if (
            parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k + 4].innerHTML =
              parseInt(arr[k + 4].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
            access = true;
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            score.innerHTML =
              // @ts-expect-error TS(2531): Object is possibly 'null'.
              parseInt(arr[k + 4].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access = false;
          } else if (arr[k + 4].innerHTML === '') {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k + 4].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
          }
          k += 4;
        }
      }
    }
  }
  if (can) {
    av();
  }
}

function up() {
  let can = false;
  let access = false;
  let k;
  let score = document.getElementById('score');
  //fixed
  for (let i = 7; i > 3; i -= 1) {
    //alert(arr[i].innerHTML==="");
    access = false;
    for (let j = i; j < i + 9; j += 4) {
      if (arr[j].innerHTML !== '') {
        k = j;
        while (
          k >= i &&
          (parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k - 4].innerHTML === '')
        ) {
          //alert("i="+i+" j="+j+" k="+k);
          if (
            parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k - 4].innerHTML =
              parseInt(arr[k - 4].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
            access = true;
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            score.innerHTML =
              // @ts-expect-error TS(2531): Object is possibly 'null'.
              parseInt(arr[k - 4].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access = false;
          } else if (arr[k - 4].innerHTML === '') {
            // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
            arr[k - 4].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = '';
            can = true;
          }
          k -= 4;
        }
      }
    }
  }
  if (can) {
    av();
  }
}

function end() {
  alert(
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    'Your Score Is:' + document.getElementById('score').innerHTML + ' Game Over'
  );
  reset();
}

function random() {
  let done = false;
  while (done === false) {
    let num = Math.floor(Math.random() * 16);
    if (arr[num].innerHTML === '') {
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'.
      arr[num].innerHTML = 2;
      done = true;
    }
  }
}

function av() {
  let x = false;
  let count = 0;
  for (let i = 0; i < 16; i++) {
    if (arr[i].innerHTML === '') {
      x = true;
      count++;
    }
  }
  if (x) {
    random();
  }
  if (count === 1) {
    check();
  }
}

function check() {
  let x = false;
  for (let i = 0; i < 16; i++) {
    switch (i) {
      case 0:
        if (
          arr[1].innerHTML === arr[0].innerHTML ||
          arr[4].innerHTML === arr[0].innerHTML
        ) {
          x = true;
        }
        break;
      case 1:
        if (
          arr[1].innerHTML === arr[0].innerHTML ||
          arr[2].innerHTML === arr[1].innerHTML ||
          arr[1].innerHTML === arr[5].innerHTML
        ) {
          x = true;
        }
        break;
      case 2:
        if (
          arr[2].innerHTML === arr[1].innerHTML ||
          arr[3].innerHTML === arr[2].innerHTML ||
          arr[2].innerHTML === arr[6].innerHTML
        ) {
          x = true;
        }
        break;
      case 3:
        if (
          arr[3].innerHTML === arr[2].innerHTML ||
          arr[3].innerHTML === arr[7].innerHTML
        ) {
          x = true;
        }
        break;
      case 4:
        if (
          arr[4].innerHTML === arr[0].innerHTML ||
          arr[4].innerHTML === arr[8].innerHTML ||
          arr[4].innerHTML === arr[5].innerHTML
        ) {
          x = true;
        }
        break;
      case 5:
        if (
          arr[5].innerHTML === arr[1].innerHTML ||
          arr[5].innerHTML === arr[6].innerHTML ||
          arr[4].innerHTML === arr[5].innerHTML ||
          arr[5].innerHTML === arr[9].innerHTML
        ) {
          x = true;
        }
        break;
      case 6:
        if (
          arr[6].innerHTML === arr[5].innerHTML ||
          arr[6].innerHTML === arr[2].innerHTML ||
          arr[6].innerHTML === arr[7].innerHTML ||
          arr[6].innerHTML === arr[10].innerHTML
        ) {
          x = true;
        }
        break;
      case 7:
        if (
          arr[7].innerHTML === arr[3].innerHTML ||
          arr[7].innerHTML === arr[11].innerHTML ||
          arr[7].innerHTML === arr[6].innerHTML
        ) {
          x = true;
        }
        break;
      case 8:
        if (
          arr[8].innerHTML === arr[4].innerHTML ||
          arr[8].innerHTML === arr[12].innerHTML ||
          arr[8].innerHTML === arr[9].innerHTML
        ) {
          x = true;
        }
        break;
      case 9:
        if (
          arr[9].innerHTML === arr[8].innerHTML ||
          arr[9].innerHTML === arr[5].innerHTML ||
          arr[9].innerHTML === arr[10].innerHTML ||
          arr[9].innerHTML === arr[13].innerHTML
        ) {
          x = true;
        }
        break;
      case 10:
        if (
          arr[10].innerHTML === arr[9].innerHTML ||
          arr[10].innerHTML === arr[11].innerHTML ||
          arr[10].innerHTML === arr[6].innerHTML ||
          arr[10].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
      case 11:
        if (
          arr[11].innerHTML === arr[7].innerHTML ||
          arr[11].innerHTML === arr[15].innerHTML ||
          arr[11].innerHTML === arr[10].innerHTML
        ) {
          x = true;
        }
        break;
      case 12:
        if (
          arr[12].innerHTML === arr[8].innerHTML ||
          arr[12].innerHTML === arr[13].innerHTML
        ) {
          x = true;
        }
        break;
      case 13:
        if (
          arr[13].innerHTML === arr[12].innerHTML ||
          arr[13].innerHTML === arr[9].innerHTML ||
          arr[13].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
      case 14:
        if (
          arr[14].innerHTML === arr[13].innerHTML ||
          arr[14].innerHTML === arr[10].innerHTML ||
          arr[14].innerHTML === arr[15].innerHTML
        ) {
          x = true;
        }
        break;
      case 15:
        if (
          arr[15].innerHTML === arr[11].innerHTML ||
          arr[15].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
    }
  }
  if (!x) {
    end();
  }
}

function init() {
  let s = document.getElementById('splash');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  s.style.display = 'block';
  let arr = document.getElementsByClassName('element');
  for (let i = 0; i < 16; i += 1) {
    arr[i].innerHTML = '';
  }
  let control = document.getElementById('control');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  control.style.display = 'block';
  let score = document.getElementById('score');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  score.innerHTML = 0;
}

function pause() {
  let pause = document.getElementById('pause');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  pause.style.display = 'block';
  let control = document.getElementById('control');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  control.style.display = 'none';

  // add additional moves -- to undo the window.addEventListener
  window.removeEventListener('keydown', handleKeydown);
}

function reset() {
  let pause = document.getElementById('pause');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  pause.style.display = 'none';
  init();

  //Add the event listener
  window.addEventListener('keydown', handleKeydown);
}
function start() {
  let splash = document.getElementById('splash');
  let game = document.getElementById('game');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  splash.style.display = 'none';
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  game.style.display = 'block';
  random();
  random();
  //alert();
}
function resume() {
  let pause = document.getElementById('pause');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  pause.style.display = 'none';
  let control = document.getElementById('control');
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  control.style.display = 'block';

  window.addEventListener('keydown', handleKeydown);
}

function handleKeydown(e: any) {
  if (e.code == 'ArrowLeft') {
    left();
  } else if (e.code == 'ArrowRight') {
    right();
  } else if (e.code == 'ArrowUp') {
    up();
  } else if (e.code == 'ArrowDown') {
    down();
  }
}
// window.addEventListener('keydown', function (e) {
//   if (e.code == 'ArrowLeft') {
//     left();
//   } else if (e.code == 'ArrowRight') {
//     right();
//   } else if (e.code == 'ArrowUp') {
//     up();
//   } else if (e.code == 'ArrowDown') {
//     down();
//   }
// });

//Add the event listener
window.addEventListener('keydown', handleKeydown);
