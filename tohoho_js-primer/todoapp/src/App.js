console.log("App.jsがloadされました");
export class App {
    showInput() { // inputの内容をコンソール出力
        const formElement = document.getElementById("js-form");
        const inputTodo = document.getElementById("js-form-input");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // submitの本来の機能を抑制してリロードしないように
            console.log(`todoに追加したい : ${inputTodo.value}`);
        })
    }

    addTask() { // inputの内容をタスクとして追加
        const formElement = document.getElementById("js-form");
        const inputTodo = document.getElementById("js-form-input");
        const todoList = document.getElementById("js-todo-list");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // submitの本来の機能を抑制してリロードしないように
            if (inputTodo.value !== "") { // 入力されているときのみ実行
                const inputItem = document.createElement("li");
                inputItem.textContent = inputTodo.value; // タスクに入力値を代入
                inputItem.addEventListener("click", () => { // クリックすると消えるように
                    todoList.removeChild(inputItem);
                });
                todoList.appendChild(inputItem); // タスクを追加
                inputTodo.value = ""; // 入力欄を空白に
            }
        });
    }

    updateCount() {
        
    }
}