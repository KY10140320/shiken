//クロック
const time_limit = () => {
  const pad = (num) => (num < 10 ? '0' : '') + num; //表記を二桁に固定
  const deadline = new Date("2023/04/15");
  const now = new Date();
  let diff = (deadline - now) / 10;

  var day = pad(Math.floor(diff / (1000*60*60*24)));

  diff = diff % ( 1000 * 60 * 60 * 24 );
  var hour = pad(Math.floor(diff / ( 1000 * 60 * 60 )));

  diff = diff % ( 1000 * 60 * 60 );
  var min = pad(Math.floor(diff / ( 1000 * 60 )));

  diff = diff % ( 1000 * 60 );
  var sec = pad(Math.floor(diff / 1000));

  return `00:00:${day}:${hour}:${min}:${sec}`
  };
const datetimeJp = () => {
  const pad = (num) => (num < 10 ? '0' : '') + num; //表記を二桁に固定
  const now = new Date();
  const dayOfWeekJP =['日','月','火','水','木','金','土'];
  //めんどくさいので令和以外の入力は考えない！
  return `令和${pad(now.getFullYear()-2018)}年${pad(now.getMonth()+1)}月${pad(now.getDate())}日(${dayOfWeekJP[now.getDay()]})  ${pad(now.getHours())}時${pad(now.getMinutes())}分${pad(now.getSeconds())}秒`
  };
const updateClock = () => {
  document.getElementById("time_limit").innerText = time_limit();
  setTimeout(updateClock, 1000); //1000はマジックナンバー
  };
  updateClock();