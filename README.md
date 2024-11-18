# app5.js

## ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
views/janken.ejs | じゃんけんのテンプレートファイル
public/language.html | 選択した言語の挨拶をする開始画面
views/language.ejs | 選択した言語の挨拶をするテンプレートファイル
public/today.html | 今日のアドバイス開始画面
views/todayejs | 今日のアドバイステンプレートファイル

## 各機能の仕様
### /janken
コンピュータとじゃんけんをしてその勝敗がわかる機能
1. ユーザーが入力するグー・チョキ・パーのいずれかをhandという変数に受け取る
1. ```Math.floor( Math.random() * 3 + 1 )```で3以下の数字の乱数を作り，１・２・３をそれぞれグー・チョキ・パーに対応させる
1. handと乱数よりじゃんけんの勝敗関係をif文で以下のように指定する
1. グー・チョキ・パーを受け取り勝敗がつくたびに，試合数を表す変数totalに1を足す
1. 勝敗を表す変数 judgment が勝ちであった場合にのみ，勝利数を表す変数 win に１を足す
```javascript
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
```
#### 使用した変数一覧
変数名 | 内容
-|-
num | 3以下の整数の乱数
hand | 入力されたじゃんけんの手
judgement | numとhandの勝敗
total | じゃんけんをした回数
win | 勝利した回数
cpu | numによって決まるコンピュータの手

### /language
自分が使う言語を選択するとその言語で挨拶を返す機能
1. 5個のラジオボタンに5つの言語の名前を設定する
1. 各ラジオボタンに1~5の数字をつけ，変数radioに入れる
1. それぞれの言語に対応するように変数cpuにその言語の挨拶を入れる

#### 使用した変数一覧
変数名 | 内容
-|-
radio | ラジオボタンの入力に対応した1~5の数字
cpu | 選択された言語の挨拶

### /today
スライダーで今日の気分を入力するとそれに合わせたアドバイスが表示される機能
1. スライダーより1~100の数値を受け取り，変数rangeに入れる
1. rangeの数値10ごとに違うアドバイス文を設定し，変数cpuに入れる
1. "今日のアドバイス："という文字列とともにcpuの内容を表示する

#### 使用した変数一覧
変数名 | 内容
-|-
range | スライダーより入力された数値
cpu | 選択された言語の挨拶

## 使用方法
1. ターミナルでapp5.jsのあるディレクトリまで移動する
1. ```npm install```とコマンドを打つ
1. ```node app5.js```とコマンドを打ち，8080番ポートを起動する
1. 別のターミナルを開き，
```
GET /public/○○○○.html HTTP/1.1
Host: localhost

```
と入力する(○○○○は開きたいページのタイトル)
1. ブラウザで```http://localhost:8080/public/○○○○.html```と検索する
