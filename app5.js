const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

let win = 0;
let total = 0;

app.get("/janken", (req, res) => {
  let hand = req.query.hand;

  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = '';
  if( num==1 & hand=='パー') judgement = '勝ち';
  else if( num==1 & hand=='グー') judgement = 'あいこ';
  else if( num==1 & hand=='チョキ') judgement = '負け';  

  if( num==2 & hand=='グー') judgement = '勝ち';
  else if( num==2 & hand=='チョキ') judgement = 'あいこ';
  else if( num==2 & hand=='パー') judgement = '負け'; 

  if( num==3 & hand=='チョキ') judgement = '勝ち';
  else if( num==3 & hand=='パー') judgement = 'あいこ';
  else if( num==3 & hand=='グー') judgement = '負け'; 


  if( judgement=='勝ち') win += 1;
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/language", (req, res) => {
  const radio = req.query.radio;

  console.log({radio});
  let cpu = '';
  if( radio==1 ) cpu = 'こんにちは';
  else if( radio==2 ) cpu = 'Hello';
  else if( radio==3 ) cpu = '안녕하세요';
  else if( radio==4 ) cpu = '你好';
  else if( radio==5 ) cpu = 'Guten Tag';

  console.log( cpu );

  const display = {
    cpu: cpu,
    radio: radio,
  }
  res.render( 'language', display );
});


app.get("/today", (req, res) => {
  const range = req.query.range;

  console.log({range});
  let cpu = '';
  if( range<=10 ) cpu = '好きなものを食べて頑張ろう！大丈夫！';
  else if( range<=20 ) cpu = '友達と一種に過ごしてみよう！';
  else if( range<=30 ) cpu = '普段と違う服装で気分転換してみよう！';
  else if( range<=40 ) cpu = '今日の自炊はお休みしちゃう？';
  else if( range<=50 ) cpu = '普段通りで大丈夫！';
  else if( range<=60 ) cpu = 'ゴンチャへ行こう！';
  else if( range<=70 ) cpu = '自分にご褒美をあげちゃおう！';
  else if( range<=80 ) cpu = '課題を終わらせられるかも？';
  else if( range<=90 ) cpu = 'ハイテンションにいこう！';
  else if( range<=100 ) cpu = '絶好調！１日ハッピーに過ごそう！';

  console.log( '今日のアドバイス：' + cpu );

  const display = {
    cpu: cpu,
    range: range,
  }
  res.render( 'today', display );
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));
