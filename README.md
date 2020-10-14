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
sh ./config.sh
```

```
sh ./deploy.command
```
