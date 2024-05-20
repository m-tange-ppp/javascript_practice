// console.log("App.jsがloadされました");

export class App {
    setBackground() { // 背景色を設定する
        this.changeBackgroundColor(document.body);
    };

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
                    this.updateCount(); // タスクの個数を更新
                });
                this.changeBackgroundColor(inputItem);
                this.changeTextColor(inputItem);
                todoList.appendChild(inputItem); // タスクを追加
                this.updateCount(); // タスクの個数を更新
                inputTodo.value = ""; // 入力欄を空白に
            }
        });
    }

    updateCount() { // タスクの個数をカウントする
        const todoCount = document.getElementById("js-todo-count");
        const todoList = document.getElementById("js-todo-list");
        const itemCount = todoList.getElementsByTagName("li").length;
        todoCount.textContent = `Todoアイテム数 : ${itemCount}`;
        this.setBackground(); // タスクを追加するたびに背景色を変える
    }

    changeBackgroundColor(task) { // 背景をカラフルにする
        const letters = "01234556789ABCDEF"; // 16進数の元文字列
        let color1 = "#";
        let color2 = "#";
        let color3 = "#";
        for (let i = 0; i < 6; i++) { // 6桁の16進数カラーコードを生成
            color1 += letters[Math.floor(Math.random() * 16)];
            color2 += letters[Math.floor(Math.random() * 16)];
            color3 += letters[Math.floor(Math.random() * 16)];
        }
        const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
        task.style.background = gradient; // タスクの背景色の設定
    }

    changeTextColor(task) { // 文字色をランダムに変える
        const letters = "01234556789ABCDEF"; // 16進数の元文字列
        let color1 = "#";
        for (let i = 0; i < 6; i++) { // 6桁の16進数カラーコードを生成
            color1 += letters[Math.floor(Math.random() * 16)];
        }
        task.style.color = color1; // タスクの文字色の設定
    }
}