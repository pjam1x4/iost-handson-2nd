# IOST Handson 2nd

## 概要

IOSTのストレージを用いてhelloメッセージを返すスマートコントラクトです。

## 使用方法

### パッケージのインストール

```shell
$ npm install
```
### テストネットのアカウントを作成

```shell
$ npm run signUp id:hogehoge
```

### アカウント情報の保存

※今回紹介する方法は、セキュリティの観点から問題があります。ハンズオンなので、簡単な方法として紹介していますが、実際の環境では安全な方法でアカウント情報を保存してください。

```config/account.json```に、先程作成したアカウントのIDと秘密鍵を入力してください。

## コマンド

### アカウントの環境関連
ストレージの利用トークンを購入する。

```shell
$ npm run ram amount:3000
```


トランザクション発行手数料トークンを購入する。

```shell
$ npm run gas amount:10
```

トークンの残高を確認。

```shell
$ npm run balance id:hogehoge
```


### スマートコントラクトのデプロイなど
スマートコントラクトのデプロイを実行する。

```shell
$ npm run deploy
```

デプロイしたスマートコントラクトのアップデートを実行する。

```shell
$ npm run update
```


### スマートコントラクトの実行例

メッセージ内容を変更

```shell
$ npm run change msg:hey
```

メッセージ内容を表示

```shell
$ npm run view
```

helloを実行

```shell
$ npm run hello
```