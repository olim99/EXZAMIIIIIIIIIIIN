let biba = prompt("Выберите первое число ");
let tala = prompt("Talang \n1) + \n2) / \n3) * \n4) -");
let boba = prompt("Выберите второе число");


biba = parseFloat(biba);
boba = parseFloat(boba);


const resultDiv = document.getElementById("result");


if (isNaN(biba) || isNaN(boba)) {
    resultDiv.textContent = "Ошибка: одно из введенных значений не является числом!";
} else {
    let result;
    let operation;


    if (tala === "1") {
        result = biba + boba;
        operation = "+";
    } else if (tala === "2") {
        if (boba !== 0) {
            result = biba / boba;
            operation = "/";
        } else {
            resultDiv.textContent = "Ошибка: деление на ноль невозможно";
            throw new Error("Ошибка: деление на ноль");
        }
    } else if (tala === "3") {
        result = biba * boba;
        operation = "*";
    } else if (tala === "4") {
        result = biba - boba;
        operation = "-";
    } else {
        resultDiv.textContent = "Неверный выбор операции";
        throw new Error("Неверный выбор операции");
    }


    resultDiv.textContent = `${biba} ${operation} ${boba} = ${result}`;
}