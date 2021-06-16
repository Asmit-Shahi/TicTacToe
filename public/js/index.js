// Variables
var turn = document.getElementById('turn');
var winner = document.getElementById('winner');
var xTurn = "✕ Turn";
var oTurn = "◯ Turn";
var board_item_1 = document.getElementById('board-item-1');
let board_item_2 = document.getElementById('board-item-2');
var board_item_3 = document.getElementById('board-item-3');
var board_item_4 = document.getElementById('board-item-4');
var board_item_5 = document.getElementById('board-item-5');
var board_item_6 = document.getElementById('board-item-6');
var board_item_7 = document.getElementById('board-item-7');
var board_item_8 = document.getElementById('board-item-8');
var board_item_9 = document.getElementById('board-item-9');

// Change Turn
function changeTurn() {
	if (turn.innerHTML == xTurn) {
		turn.innerHTML = oTurn;
	} else {
		turn.innerHTML = xTurn
	}
}

function dontChangeTurn() {
	if (turn.innerHTML == xTurn) {
		turn.innerHTML = oTurn
	} else if (turn.innerHTML == oTurn) {
		turn.innerHTML = xTurn
	} else {
	}
}

function boardItemOne() {
	// Check if that it is taken or not
	if (board_item_1.innerHTML == "✕") {
		turn.innerHTML = "◯ Turn";
	} else if (board_item_1.innerHTML == "◯"){
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == oTurn) {
				board_item_1.innerHTML = "◯";
				changeTurn()
		} else if (turn.innerHTML == xTurn) {
				board_item_1.innerHTML = "✕";
				changeTurn()
		}
	}
	checkGameCondition()
}

function boardItemTwo() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_2.innerHTML == "✕") {
		turn.innerHTML = "◯ Turn";
	} else if (board_item_2.innerHTML == "◯"){

		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_2.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_2.innerHTML = "✕";
		}
	}
	checkGameCondition()
}
function boardItemThree() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_3.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn";
	} else if (board_item_3.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_3.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_3.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemFour() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_4.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn"
	} else if (board_item_4.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_4.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_4.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemFive() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_5.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn";
	} else if (board_item_5.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_5.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_5.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemSix() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_6.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn";
	} else if (board_item_6.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_6.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_6.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemSeven() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_7.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn";
	} else if (board_item_7.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_7.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_7.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemEight() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_8.innerHTML == "✕") {
		turn.innerHTML = "◯ Turn";
	} else if (board_item_8.innerHTML == "◯"){
		wrongMove();
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_8.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_8.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

function boardItemNine() {
	changeTurn()

	// Check if that it is taken or not
	if (board_item_9.innerHTML == "✕") {
		
		turn.innerHTML = "◯ Turn";
	} else if (board_item_9.innerHTML == "◯"){
		
		turn.innerHTML = "✕ Turn";
	} /* plays The move */else {
			if (turn.innerHTML == xTurn) {
			board_item_9.innerHTML = "◯";
		} else if (turn.innerHTML == oTurn) {
			board_item_9.innerHTML = "✕";
		}
	}
	checkGameCondition()
}

// Checks who won the game
function checkGameCondition() {
	var X = "✕"
	var O = "◯"
	if (
		board_item_1.innerHTML == X &&
		board_item_2.innerHTML == X &&
		board_item_3.innerHTML == X ||
		board_item_4.innerHTML == X &&
		board_item_5.innerHTML == X &&
		board_item_6.innerHTML == X ||
		board_item_7.innerHTML == X &&
		board_item_8.innerHTML == X &&
		board_item_9.innerHTML == X ||
		board_item_1.innerHTML == X &&
		board_item_4.innerHTML == X &&
		board_item_7.innerHTML == X ||
		board_item_2.innerHTML == X &&
		board_item_5.innerHTML == X &&
		board_item_8.innerHTML == X ||
		board_item_3.innerHTML == X &&
		board_item_6.innerHTML == X &&
		board_item_9.innerHTML == X
		){
		turn.innerHTML = ""
		winner.innerHTML =  X + " Won"
	} else if (
		board_item_1.innerHTML == O &&
		board_item_2.innerHTML == O &&
		board_item_3.innerHTML == O ||
		board_item_4.innerHTML == O &&
		board_item_5.innerHTML == O &&
		board_item_6.innerHTML == O ||
		board_item_7.innerHTML == O &&
		board_item_8.innerHTML == O &&
		board_item_9.innerHTML == O ||
		board_item_1.innerHTML == O &&
		board_item_4.innerHTML == O &&
		board_item_7.innerHTML == O ||
		board_item_2.innerHTML == O &&
		board_item_5.innerHTML == O &&
		board_item_8.innerHTML == O ||
		board_item_3.innerHTML == O &&
		board_item_6.innerHTML == O &&
		board_item_9.innerHTML == O
		) {
		turn.innerHTML = ""
		winner.innerHTML = O + "Won"
	}
}