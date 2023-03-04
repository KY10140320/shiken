//クロック
const time_limit = () => {
  const pad = (num) => (num < 10 ? '0' : '') + num; //表記を二桁に固定
  const deadline = new Date("2023/04/15");
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