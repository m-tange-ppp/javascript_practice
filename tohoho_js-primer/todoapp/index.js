import { App } from "./src/App.js"; // fromはパスを指定するので拡張子まで必要
addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.setBackground();
    app.addTask();
});