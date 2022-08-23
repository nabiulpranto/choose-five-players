let arrSelected = [];

// Button Functionalities

// Button1
const handleButton1 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title1.innerText);
    if (arrSelected.length < 6) {
        player1();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button2
const handleButton2 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title2.innerText);
    if (arrSelected.length < 6) {
        player2();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button3
const handleButton3 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title3.innerText);
    if (arrSelected.length < 6) {
        player3();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button4
const handleButton4 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title4.innerText);
    if (arrSelected.length < 6) {
        player4();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button5
const handleButton5 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title5.innerText);
    if (arrSelected.length < 6) {
        player5();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button6
const handleButton6 = (e) => {
    e.target.disabled = true;
    arrSelected.push(title6.innerText);
    if (arrSelected.length < 6) {
        player6();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Getting Button Data
let button1 = document.getElementById("buttonData1");
let button2 = document.getElementById("buttonData2");
let button3 = document.getElementById("buttonData3");
let button4 = document.getElementById("buttonData4");
let button5 = document.getElementById("buttonData5");
let button6 = document.getElementById("buttonData6");

// Getting Title Data
let title1 = document.getElementById("titleData1");
let title2 = document.getElementById("titleData2");
let title3 = document.getElementById("titleData3");
let title4 = document.getElementById("titleData4");
let title5 = document.getElementById("titleData5");
let title6 = document.getElementById("titleData6");
let listParent = document.getElementById("selectedParent");

// Button Event Listener
button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);
button3.addEventListener("click", handleButton3);
button4.addEventListener("click", handleButton4);
button5.addEventListener("click", handleButton5);
button6.addEventListener("click", handleButton6);

// Setting Title To Cart
const player1 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title1.innerText}`;
    listParent.appendChild(list);
};

const player2 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title2.innerText}`;
    listParent.appendChild(list);
};
const player3 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title3.innerText}`;
    listParent.appendChild(list);
};
const player4 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title4.innerText}`;
    listParent.appendChild(list);
};
const player5 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title5.innerText}`;
    listParent.appendChild(list);
};
const player6 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title6.innerText}`;
    listParent.appendChild(list);
};

// ------------------ Calculator ------------------

const handleCalculate = () => {
    const playerCost = perPlayer.value * 5;
    playerExpense.innerText = playerCost;
};

const handleCalculateTotal = () => {
    const playerCost = perPlayer.value * 5;
    handleCalculate();
    const total =
        playerCost + parseInt(managerCost.value) + parseInt(coachCost.value);
    finalTotal.innerText = total;
};

// Getting Input Data
let perPlayer = document.getElementById("perPlayer");
let playerExpense = document.getElementById("playerExpense");
let managerCost = document.getElementById("managerCost");
let coachCost = document.getElementById("coachCost");
let finalTotal = document.getElementById("finalTotal");

// Getting Button Data
let calculateButton = document.getElementById("calculateButton");
let calculateTotal = document.getElementById("calculateTotal");

// Button Event Listener
calculateButton.addEventListener("click", handleCalculate);
calculateTotal.addEventListener("click", handleCalculateTotal);
