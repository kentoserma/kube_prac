# Kubernetes学習・実験用リポジトリ
Kubernetesを自己学習したり、色々と実験したりするための資材を保管するためのリポジトリです。

## Ubuntu 24.04.1 LTSへのminikubeインストール手順
### ■前提
・Dockerはインストール済みであること

・rootユーザ以外でログインしていること
⇒minikube起動時、rootユーザだとdocker driverを利用できないため

### ■kubectlのインストール
1.curlをインストール
```
$ sudo apt install curl
```
2.kubectlをダウンロード
```
$ curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
```
3.kubectlバイナリを実行可能にする
```
$ chmod +x ./kubectl
```
4.kubectlバイナリをPATHに通す
```
$ sudo mv ./kubectl /usr/local/bin/kubectl
```
5.kubectlがインストールされているか、バージョンを確認
```
$ kubectl version --client
```
### ■kubectlのインストール
1.minikubeバイナリをダウンロード
```
$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
```
2.minikubeバイナリを実行可能にする
```
$ sudo mkdir -p /usr/local/bin/
$ sudo install minikube /usr/local/bin/
```
3.minikubeを起動
```
$ minikube start --driver=docker
```
4.minikubeが起動したことを確認
```
$ minikube status
```
