const val_math = 260; //数的処理
const val_socio = 3; //人文科学
const val_cur = 0;



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
const to3Count = (str) => {
  var strPad0 = str.replaceAll("\u00a0", "0");
  if (strPad0.length >= 3) {
    console.log(str)
    return str
  }
  //\u00A0
  return to3Count("\u00a0"+str);
};

const max_math = document.getElementById("prog_math").max;
document.getElementById("prog_math").value = val_math;
document.getElementById("ratio_math").innerText = `${to3Count(val_math.toString())}/${to3Count(max_math.toString())}`;
document.getElementById("per_math").innerText = `${pad2(val_math * 100 / max_math)}%`;

const max_socio = document.getElementById("prog_socio").max;
document.getElementById("prog_socio").value = val_socio;
document.getElementById("ratio_socio").innerText = `${to3Count(val_socio.toString())}/${to3Count(max_socio.toString())}`;
document.getElementById("per_socio").innerText = `${pad2(val_socio * 100 / max_socio)}%`;

const max_cur = document.getElementById("prog_cur").max;
document.getElementById("prog_cur").value = val_cur;
document.getElementById("ratio_cur").innerText = `${to3Count(val_cur.toString())}/${to3Count(max_cur.toString())}`;
document.getElementById("per_cur").innerText = `${pad2(val_cur * 100 / max_cur)}%`;

