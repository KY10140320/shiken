
const ragnarok = "2023-10-15 20:00"

//クロック
const time_limit = () => {
  const pad = (num) => (num < 10 ? '0' : '') + num; //表記を二桁に固定
  const deadline = new Date(ragnarok.replace(/-/g,"/"));
  const now = new Date();
  let diff = (now - deadline);

  // var day = pad(Math.floor(diff / (1000*60*60*24)));

  diff = diff % ( 1000 * 60 * 60 * 24 );
  var hour = Math.floor(diff / ( 1000 * 60 * 60 ));

  diff = diff % ( 1000 * 60 * 60 );
  var min = Math.floor(diff / ( 1000 * 60 ));

  diff = diff % ( 1000 * 60 );
  var sec = Math.floor(diff / 1000);

  if(diff < 0){
    return `20:00 START \n ${pad(-hour - 1)}:${pad(-min - 1)}:${pad(-sec - 1)}`
  }

  return `${pad(hour)}:${pad(min)}:${pad(sec)}`
  };
const updateClock = () => {
  document.getElementById("time_limit").innerText = time_limit();
  setTimeout(updateClock, 1000); //1000はマジックナンバー
  };
  updateClock();




