"use client";
import React from "react";

function Counter() {
  // 1. Initial HTML がcount = 0で生成される
  const [count, setCount] = React.useState(0);

  // 2. Hydrationの後にuseEffect発火、localStrageに保存された値をcountに設定
  // (useEffect、localStorageはclientのブラウザ環境でしか使えない)
  React.useEffect(() => {
    // "4" | null
    const savedValue = window.localStorage.getItem("saved-count");

    if (savedValue === null) {
      return;
    }

    setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
