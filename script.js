const boxes = document.querySelectorAll(".box");
const turn = document.querySelector(".turn");
const reset = document.querySelector(".reset");
console.log(boxes);
let turnO = true;
let btnDisable = false;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

turn.innerHTML = "Turn of O";

const turnOf = () => {
  if (turnO) {
    turn.innerHTML = "Turn of O";
  } else {
    turn.innerHTML = "Turn of x";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (btnDisable) return;
    if (box.innerText !== "") return; // Ignore clicks on already used boxes
    turnOf();
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    checkWinner();
  });
});

const showWinner = (winner) => {
  turn.innerHTML = `Congratulatins, winner is ${winner}`;
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    if (
      boxes[pattern[0]].innerText !== " " &&
      boxes[pattern[1]].innerText !== " " &&
      boxes[pattern[2]].innerText !== " "
    ) {
      if (
        boxes[pattern[0]].innerText === "X" &&
        boxes[pattern[1]].innerText === "X" &&
        boxes[pattern[2]].innerText === "X"
      ) {
        btnDisable = true;
        showWinner(boxes[pattern[0]].innerText);
        console.log("winner is x");
      } else if (
        boxes[pattern[0]].innerText === "O" &&
        boxes[pattern[1]].innerText === "O" &&
        boxes[pattern[2]].innerText === "O"
      ) {
        btnDisable = true;
        showWinner(boxes[pattern[0]].innerText);

        console.log("winner is o");
      }
    }
  }
};

reset.addEventListener("click", () => {
  for (let pattern of winPattern) {
    boxes[pattern[0]].innerText = "";
    boxes[pattern[1]].innerText = "";
    boxes[pattern[2]].innerText = "";
  }
  btnDisable = false;
  turn.innerHTML = "Turn of O";
});
