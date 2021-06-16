// Variables
var turn = document.getElementById('turn')
var winner = document.getElementById('winner')
var xTurn = "✕ Turn";
var oTurn = "◯ Turn";
var playerX = "✕"
var playerO = "◯"

// Board Items
var board_item_1 = document.getElementById('board-item-1')
let board_item_2 = document.getElementById('board-item-2');
var board_item_3 = document.getElementById('board-item-3');
var board_item_4 = document.getElementById('board-item-4');
var board_item_5 = document.getElementById('board-item-5');
var board_item_6 = document.getElementById('board-item-6');
var board_item_7 = document.getElementById('board-item-7');
var board_item_8 = document.getElementById('board-item-8');
var board_item_9 = document.getElementById('board-item-9');

// Logic

function checkWinner() {
// Player X
	// Row ——
	if (board_item_1.innerHTML == playerX && board_item_2.innerHTML == playerX && board_item_3.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"

	} else if (board_item_4.innerHTML == playerX && board_item_5.innerHTML == playerX && board_item_6.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"

	} else if (board_item_7.innerHTML == playerX && board_item_8.innerHTML == playerX && board_item_9.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	}

	// Column |
	if (board_item_1.innerHTML == playerX && board_item_4.innerHTML == playerX && board_item_7.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	} else if (board_item_2.innerHTML == playerX && board_item_5.innerHTML == playerX && board_item_8.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	} else if (board_item_3.innerHTML == playerX && board_item_6.innerHTML == playerX && board_item_9.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	}

	// Diagonal
		if (board_item_1.innerHTML == playerX && board_item_5.innerHTML == playerX && board_item_9.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	} else if (board_item_3.innerHTML == playerX && board_item_5.innerHTML == playerX && board_item_7.innerHTML == playerX) {
		turn.innerHTML = ""
		winner.innerHTML = playerX + " Won"
	}

// Player O
	// Row ——
	if (board_item_1.innerHTML == playerO && board_item_2.innerHTML == playerO && board_item_3.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	} else if (board_item_4.innerHTML == playerO && board_item_5.innerHTML == playerO && board_item_6.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	} else if (board_item_7.innerHTML == playerO && board_item_8.innerHTML == playerO && board_item_9.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	}

	// Column |
		if (board_item_1.innerHTML == playerO && board_item_4.innerHTML == playerO && board_item_7.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	} else if (board_item_2.innerHTML == playerO && board_item_5.innerHTML == playerO && board_item_8.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	} else if (board_item_3.innerHTML == playerO && board_item_6.innerHTML == playerO && board_item_9.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	}

	// Diagonal
		if (board_item_1.innerHTML == playerO && board_item_5.innerHTML == playerO && board_item_9.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	} else if (board_item_3.innerHTML == playerO && board_item_5.innerHTML == playerO && board_item_7.innerHTML == playerO) {
		turn.innerHTML = ""
		winner.innerHTML = playerO + " Won"
	}
}

function boardItemOne() {
	if (turn.innerHTML == xTurn && board_item_1.innerHTML == "") {
		board_item_1.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_1.innerHTML == "") {
		board_item_1.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemTwo() {
	if (turn.innerHTML == xTurn && board_item_2.innerHTML == "") {
		board_item_2.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_2.innerHTML == "") {
		board_item_2.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemThree() {
	if (turn.innerHTML == xTurn && board_item_3.innerHTML == "") {
		board_item_3.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_3.innerHTML == "") {
		board_item_3.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemFour() {
	if (turn.innerHTML == xTurn && board_item_4.innerHTML == "") {
		board_item_4.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_4.innerHTML == "") {
		board_item_4.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemFive() {
	if (turn.innerHTML == xTurn && board_item_5.innerHTML == "") {
		board_item_5.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_5.innerHTML == "") {
		board_item_5.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemSix() {
	if (turn.innerHTML == xTurn && board_item_6.innerHTML == "") {
		board_item_6.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_6.innerHTML == "") {
		board_item_6.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemSeven() {
	if (turn.innerHTML == xTurn && board_item_7.innerHTML == "") {
		board_item_7.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_7.innerHTML == "") {
		board_item_7.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemEight() {
	if (turn.innerHTML == xTurn && board_item_8.innerHTML == "") {
		board_item_8.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_8.innerHTML == "") {
		board_item_8.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}

function boardItemNine() {
	if (turn.innerHTML == xTurn && board_item_9.innerHTML == "") {
		board_item_9.innerHTML = playerX;
		turn.innerHTML = oTurn;
	} else if (turn.innerHTML == oTurn && board_item_9.innerHTML == "") {
		board_item_9.innerHTML = playerO;
		turn.innerHTML = xTurn;
	}
	checkWinner()
}