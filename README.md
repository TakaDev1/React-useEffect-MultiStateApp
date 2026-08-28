# React-useEffect-MultiStateApp

Reactの `useEffect` を使って、複数の状態変更を監視する練習用アプリです。

## 📌 概要

`count` と `name` の2つの状態を `useState` で管理し、どちらかの状態が変更されたときに `useEffect` を実行して、コンソールへ変更内容を出力します。

## 🛠 使用技術

* TypeScript
* React
* Vite
* Tailwind CSS
* useState
* useEffect

## 📂 ディレクトリ構成

```text
src/
├── components/
│   ├── HandleCounter.tsx
│   ├── HandleName.tsx
│   └── DisplayState.tsx
├── App.tsx
└── index.css
```

## ✨ 実装内容

### 1. countの状態管理

`useState` を使用してカウントを管理します。

```tsx
const [count, setCount] = useState(0);
```

### 2. nameの状態管理

名前も `useState` を使用して管理します。

```tsx
const [name, setName] = useState("");
```

### 3. 複数の依存関係を設定

`useEffect` の依存配列に `count` と `name` の両方を指定しています。

```tsx
useEffect(() => {
  console.log(`状態が変更されました: ${count}, ${name}`);
}, [count, name]);
```

`count` または `name` が変更されるたびに副作用が実行されます。

## 🎯 学習ポイント

* `useState` による複数の状態管理
* `useEffect` の基本的な使い方
* `useEffect` の依存配列
* 複数の依存関係を監視する方法
* Propsを使った親子コンポーネント間のデータ受け渡し
* コンポーネントの役割分割

## 🚀 起動方法

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開いてください。

## 📝 学習課題

> カウントと名前の2つの状態を管理し、どちらかが更新されたときに「状態が変更されました: [count], [name]」とコンソールへ表示する。

### 条件

1. `count` と `name` を `useState` で管理する
2. `useEffect` の依存配列に `count` と `name` の両方を設定する
3. ボタンをTailwind CSSで緑背景・白文字にする
