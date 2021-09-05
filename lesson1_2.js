while (true) {
    const capital = prompt("日本の首都は？");
    if (capital === "東京") {
        alert("正解です！");
        break;
    } else if (capital === null) {
        alert("キャンセルボタンが押されました");
        break;
    } else {
        alert("不正解です！");
    }
}