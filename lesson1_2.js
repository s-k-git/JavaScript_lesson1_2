var capital = prompt("日本の首都は？");
while (true) {
    if (capital === "東京") {
        alert("正解です！");
        break;
    } else if (capital === null) {
        alert("キャンセルボタンが押されました");
        break;
    } else {
        alert("不正解です！");
        capital = prompt("日本の首都は？");
    }
}