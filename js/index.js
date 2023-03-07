const val_math = 196; //数的処理
const val_hum = 2.3; //人文科学




const ragnarok = "2023/04/09"

//クロック
const time_limit = () => {
  const pad = (num) => (num < 10 ? '0' : '') + num; //表記を二桁に固定
  const deadline = new Date(ragnarok);
  const now = new Date();
  let diff = (deadline - now);

  var day = pad(Math.floor(diff / (1000*60*60*24)));

  diff = diff % ( 1000 * 60 * 60 * 24 );
  var hour = pad(Math.floor(diff / ( 1000 * 60 * 60 )));

  diff = diff % ( 1000 * 60 * 60 );
  var min = pad(Math.floor(diff / ( 1000 * 60 )));

  diff = diff % ( 1000 * 60 );
  var sec = pad(Math.floor(diff / 1000));

  return `${day}:${hour}:${min}:${sec}`
  };
const updateClock = () => {
  document.getElementById("time_limit").innerText = time_limit();
  setTimeout(updateClock, 1000); //1000はマジックナンバー
  };
  updateClock();


//進捗
const pad2 = (num) => (Math.floor(num) < 10 ? '0' : '') + num.toFixed(2);

const max_math = document.getElementById("prog_math").max;
document.getElementById("prog_math").value = val_math;
document.getElementById("per_math").innerText = `${pad2(val_math * 100 / max_math)}%`;

const max_hum = document.getElementById("prog_hum").max;
document.getElementById("prog_hum").value = val_hum;
document.getElementById("per_hum").innerText = `${pad2(val_hum * 100 / max_hum)}%`;

