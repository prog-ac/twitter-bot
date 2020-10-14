# Twitter いいねボット

## 準備 1

firebase プロジェクトを作成し、従量課金制にアップグレードする

## 準備 2

firebase-tools のインストール

```
npm install -g firebase-tools
```

```
firebase login
firebase init
```

cloud functions

existing project で作成したプロジェクトを選択する

## 使い方

1. config.sh.sample を config.sh にリネーム
2. config.sh の中に鍵を記載していく

```
source ./config.sh && node ./functions/test.js
```

を実行してみる。

スクリプトが完成したら、

config.sh の下２行の#を削除して

```
sh ./config.sh
```

```
sh ./deploy.command
```
