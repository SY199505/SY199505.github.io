(function () {
	'use strict';
	
	window.ai = ai;
})(window);

let over = false;
let gamerWin = [];
let computerWin = [];
let wins = [];
let count = 0;
let i, j, k;

for (i = 0; i < 15; i++) {
	wins[i] = [];
	for (j = 0; j < 15; j++) {
		wins[i][j] = [];
	}
}
//横线
for (i = 0; i < 15; i++) {
	for (j = 0; j < 11; j++) {
		for (let k = 0; k < 5; k++) {
			wins[i][j + k][count] = true;
		}
		count++;
	}
}
//竖线
for (i = 0; i < 15; i++) {
	for (j = 0; j < 11; j++) {
		for (let k = 0; k < 5; k++) {
			wins[j + k][i][count] = true;
		}
		count++;
	}
}
//正斜线
for (i = 0; i < 11; i++) {
	for (j = 0; j < 11; j++) {
		for (let k = 0; k < 5; k++) {
			wins[i + k][j + k][count] = true;
		}
		count++;
	}
}
//反斜线
for (i = 0; i < 11; i++) {
	for (j = 14; j > 3; j--) {
		for (let k = 0; k < 5; k++) {
			wins[i + k][j - k][count] = true;
		}
		count++;
	}
}

for (var i = 0; i < count; i++) {
	gamerWin[i] = 0;
	computerWin = 0;
}

function cal (e) {
	for (k = 0; k < count; k++) {
		if (wins[i][j][k]) {
			gamerWin[k]++;
			computerWin[k] = 6;
			if (gamerWin[k] == 5) {
				window.alert('你赢了！');
				over = true;
			}
		}
	}
	if (!over) {
		computerMove();
	}
}

function computerMove () {
	let gamerScore = [];
	let computerScore = [];
	let max = 0,
	u = 0,
	v = 0;
	for (i = 0; i < 15; i++) {
		gamerWin[i] = [];
		computerScore[i] = [];
		for (j = 0; j < 15; j++) {
			gamerWin[i][j] = 0;
			computerScore[i][j] = 0;
		}
	}
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (chressBord[i][j] == 0) {
                for (var k = 0; k < count; k++) {
                    if (wins[i][j][k]) {
                        if (myWin[k] == 1) {
                            myScore[i][j] += 200;
                        } else if (myWin[k] == 2) {
                            myScore[i][j] += 400;
                        } else if (myWin[k] == 3) {
                            myScore[i][j] += 2000;
                        } else if (myWin[k] == 4) {
                            myScore[i][j] += 10000;
                        }
                        if (computerWin[k] == 1) {
                            computerScore[i][j] += 220;
                        } else if (computerWin[k] == 2) {
                            computerScore[i][j] += 420;
                        } else if (computerWin[k] == 3) {
                            computerScore[i][j] += 2100;
                        } else if (computerWin[k] == 4) {
                            computerScore[i][j] += 20000;
                        }
                    }
                }
                if (myScore[i][j] > max) {
                    max = myScore[i][j];
                    u = i;
                    v = j;
                } else if (myScore[i][j] == max) {
                    if (computerScore[i][j] > computerScore[u][v]) {
                        u = i;
                        v = j;
                    }
                }
                if (computerScore[i][j] > max) {
                    max = computerScore[i][j];
                    u = i;
                    v = j;
                } else if (computerScore[i][j] == max) {
                    if (myScore[i][j] > myScore[u][v]) {
                        u = i;
                        v = j;
                    }
                }
            }
        }
    }
    oneStep(u, v, false);
    chressBord[u][v] = 2;
    for (var k = 0; k < count; k++) {
        if (wins[u][v][k]) {
            computerWin[k]++;
            myWin[k] = 6; //这个位置对方不可能赢了
            if (computerWin[k] == 5) {
                window.alert('计算机赢了');
                over = true;
            }
        }
    }
    if (!over) {
        me = !me;
    }
}
