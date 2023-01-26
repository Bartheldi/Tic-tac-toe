let onMove = document.querySelector("#heading .onMove")
let newGame = document.querySelector(".btn-newGame")
let resetCalc = document.querySelector(".btn-resetCalc")
let gameStatus = document.querySelector("#heading #player-move-text")
let playerX = document.querySelector("#player-score .scoreX")
let playerO = document.querySelector("#player-score .scoreO")
let colBoxSelect = document.querySelectorAll("#column1-box1,#column1-box2,#column1-box3,#column1-box4,#column1-box5,#column1-box6,#column2-box1,#column2-box2,#column2-box3,#column2-box4,#column2-box5,#column2-box6,#column3-box1,#column3-box2,#column3-box3,#column3-box4,#column3-box5,#column3-box6,#column4-box1,#column4-box2,#column4-box3,#column4-box4,#column4-box5,#column4-box6,#column5-box1,#column5-box2,#column5-box3,#column5-box4,#column5-box5,#column5-box6,#column6-box1,#column6-box2,#column6-box3,#column6-box4,#column6-box5,#column6-box6")



let tieArray = []
let flag = 0 // 0 = X, 1 = O
let winner = false
let pomWinner = false

let pointsX = JSON.parse(localStorage.getItem("playerX"))
playerX.textContent = ""

if (pointsX === null) {
    playerX.append("0")
} else {
    playerX.append(pointsX)
}


let pointsO = JSON.parse(localStorage.getItem("playerO"))
playerO.textContent = ""

if (pointsO === null) {
    playerO.append("0")
} else {
    playerO.append(pointsO)
}

drawMoveTitle(flag)


/* Array checking whether the box was clicked -> 0 = no, 1 = yes*/
let flagColBox = new Array(7);

for (let i = 0; i < flagColBox.length; i++) {
    flagColBox[i] = new Array(7);
}

for (let i = 1; i < 7; i++) {
    for (let j = 1; j < 7; j++) {
        flagColBox[i][j] = 0;
    }
}


/* for possible game draw purpose */
for (i = 0; i < 36; i++) {
    tieArray.push("0")
}


// Create one dimensional array
let colBox = new Array(7);


// Loop to create 2D array using 1D array
for (let i = 0; i < colBox.length; i++) {
    colBox[i] = new Array(7);
}

let h = 0;

// Loop to initialize 2D array elements.
for (let i = 1; i < 7; i++) {
    for (let j = 1; j < 7; j++) {
        colBox[i][j] = colBoxSelect[h++];
    }
}


colBox[1][1].addEventListener("click", function (e) {

    // if variable is value 0 then create element p, 0 means first click
    if (flagColBox[1][1] === 0) {

        print(colBox[1][1])



        // if 1 - do nothing after another click 
        flagColBox[1][1] = 1

        tieArray[0] = 1


        // print a player on a turn to title
        drawMoveTitle(flag)

        // Check the win possibility

        if (flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[1][2] == 1 && flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {

            // Checking horizontal win possibility
            if (flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[1][1], colBox[2][1], colBox[3][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            // Checking vertical win possibility
            if (flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[1][1], colBox[2][2], colBox[3][3], colBox[4][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }


            // Checking column win possibility
            if (flagColBox[1][2] == 1 && flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {
                winner = win(colBox[1][1], colBox[1][2], colBox[1][3], colBox[1][4], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[1][2].addEventListener("click", function (e) {


    if (flagColBox[1][2] === 0) {

        print(colBox[1][2])

        flagColBox[1][2] = 1

        tieArray[1] = 1


        drawMoveTitle(flag)


        if (flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1 && flagColBox[1][6] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {


            if (flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {

                winner = win(colBox[1][2], colBox[2][2], colBox[3][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1) {

                winner = win(colBox[1][2], colBox[2][3], colBox[3][4], colBox[4][5], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1 && flagColBox[1][6] == 1) {

                winner = win(colBox[1][2], colBox[1][3], colBox[1][4], colBox[1][5], colBox[1][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagColBox[1][1] == 1 && flagColBox[1][3] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {

                winner = win(colBox[1][2], colBox[1][1], colBox[1][3], colBox[1][4], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }

})


colBox[1][3].addEventListener("click", function (e) {


    if (flagColBox[1][3] === 0) {

        print(colBox[1][3])

        flagColBox[1][3] = 1

        tieArray[2] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[1][2] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[1][2] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {

            if (flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[1][3], colBox[2][3], colBox[3][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[1][2] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {
                winner = win(colBox[1][3], colBox[1][1], colBox[1][2], colBox[1][4], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[1][2] == 1 && flagColBox[1][4] == 1 && flagColBox[1][5] == 1) {
                winner = win(colBox[1][3], colBox[1][6], colBox[1][2], colBox[1][4], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[1][4].addEventListener("click", function (e) {


    if (flagColBox[1][4] === 0) {

        print(colBox[1][4])




        flagColBox[1][4] = 1

        tieArray[3] = 1

        drawMoveTitle(flag)

        if (flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[1][2] == 1 && flagColBox[1][3] == 1 && flagColBox[1][5] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[1][5] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1) {

            if (flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[1][4], colBox[2][4], colBox[3][4], colBox[4][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[1][2] == 1 && flagColBox[1][3] == 1 && flagColBox[1][5] == 1) {
                winner = win(colBox[1][4], colBox[1][1], colBox[1][2], colBox[1][3], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[1][5] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1) {
                winner = win(colBox[1][4], colBox[1][6], colBox[1][2], colBox[1][3], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[1][5].addEventListener("click", function (e) {


    if (flagColBox[1][5] === 0) {

        print(colBox[1][5])

        flagColBox[1][5] = 1

        tieArray[4] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[2][4] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1 ||
            flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1 && flagColBox[1][1] == 1) {

            if (flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[1][5], colBox[2][5], colBox[3][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][4] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[1][5], colBox[2][4], colBox[3][3], colBox[4][2], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1) {
                winner = win(colBox[1][5], colBox[1][6], colBox[1][4], colBox[1][3], colBox[1][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1 && flagColBox[1][1] == 1) {
                winner = win(colBox[1][5], colBox[1][4], colBox[1][3], colBox[1][2], colBox[1][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[1][6].addEventListener("click", function (e) {


    if (flagColBox[1][6] === 0) {

        print(colBox[1][6])


        flagColBox[1][6] = 1

        tieArray[5] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[1][5] == 1 && flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1) {

            if (flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[1][6], colBox[2][6], colBox[3][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[1][6], colBox[2][5], colBox[3][4], colBox[4][3], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][5] == 1 && flagColBox[1][4] == 1 && flagColBox[1][3] == 1 && flagColBox[1][2] == 1) {
                winner = win(colBox[1][6], colBox[1][5], colBox[1][4], colBox[1][3], colBox[1][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[2][1].addEventListener("click", function (e) {


    if (flagColBox[2][1] === 0) {

        print(colBox[2][1])


        flagColBox[2][1] = 1

        tieArray[6] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[3][2] == 1 && flagColBox[4][3] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {

            if (flagColBox[1][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[2][1], colBox[1][1], colBox[3][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[2][1], colBox[6][1], colBox[3][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][2] == 1 && flagColBox[4][3] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[2][1], colBox[3][2], colBox[4][3], colBox[5][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[2][1], colBox[2][2], colBox[2][3], colBox[2][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)
        }

    }
})


colBox[2][2].addEventListener("click", function (e) {


    if (flagColBox[2][2] === 0) {

        print(colBox[2][2])

        flagColBox[2][2] = 1

        tieArray[7] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {


            if (flagColBox[1][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {

                winner = win(colBox[2][2], colBox[1][2], colBox[3][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }

            }

            if (flagColBox[6][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {

                winner = win(colBox[2][2], colBox[6][2], colBox[3][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1) {

                winner = win(colBox[2][2], colBox[1][1], colBox[3][3], colBox[4][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1) {

                winner = win(colBox[2][2], colBox[6][6], colBox[3][3], colBox[4][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {

                winner = win(colBox[2][2], colBox[2][1], colBox[2][3], colBox[2][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {

                winner = win(colBox[2][2], colBox[2][6], colBox[2][3], colBox[2][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }

            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[2][3].addEventListener("click", function (e) {


    if (flagColBox[2][3] === 0) {

        print(colBox[2][3])


        flagColBox[2][3] = 1

        tieArray[8] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[6][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[1][2] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[2][2] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {

            if (flagColBox[1][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[2][3], colBox[1][3], colBox[3][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[2][3], colBox[6][3], colBox[3][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][2] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[2][3], colBox[1][2], colBox[3][4], colBox[4][5], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[2][3], colBox[2][1], colBox[2][2], colBox[2][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[2][2] == 1 && flagColBox[2][4] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[2][3], colBox[2][6], colBox[2][2], colBox[2][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[2][4].addEventListener("click", function (e) {


    if (flagColBox[2][4] === 0) {

        print(colBox[2][4])


        flagColBox[2][4] = 1

        tieArray[9] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[6][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[1][5] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[2][5] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {

            if (flagColBox[1][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[2][4], colBox[1][4], colBox[3][4], colBox[4][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[2][4], colBox[6][4], colBox[3][4], colBox[4][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][5] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[2][4], colBox[1][5], colBox[3][3], colBox[4][2], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[2][4], colBox[2][1], colBox[2][2], colBox[2][3], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[2][5] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {
                winner = win(colBox[2][4], colBox[2][6], colBox[2][5], colBox[2][3], colBox[2][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[2][5].addEventListener("click", function (e) {


    if (flagColBox[2][5] === 0) {

        print(colBox[2][5])


        flagColBox[2][5] = 1

        tieArray[10] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[2][4] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {

            if (flagColBox[1][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[2][5], colBox[1][5], colBox[3][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[2][5], colBox[6][5], colBox[3][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[2][5], colBox[1][6], colBox[3][4], colBox[4][3], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[2][5], colBox[6][1], colBox[3][4], colBox[4][3], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[2][2] == 1 && flagColBox[2][3] == 1 && flagColBox[2][4] == 1) {
                winner = win(colBox[2][5], colBox[2][1], colBox[2][2], colBox[2][3], colBox[2][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[2][4] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {
                winner = win(colBox[2][5], colBox[2][6], colBox[2][4], colBox[2][3], colBox[2][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[2][6].addEventListener("click", function (e) {


    if (flagColBox[2][6] === 0) {

        print(colBox[2][6])




        flagColBox[2][6] = 1

        tieArray[11] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[3][5] == 1 && flagColBox[4][4] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1 ||
            flagColBox[2][5] == 1 && flagColBox[2][4] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {

            if (flagColBox[1][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[2][6], colBox[1][6], colBox[3][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[2][6], colBox[6][6], colBox[3][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][5] == 1 && flagColBox[4][4] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[2][6], colBox[3][5], colBox[4][4], colBox[5][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][5] == 1 && flagColBox[2][4] == 1 && flagColBox[2][3] == 1 && flagColBox[2][2] == 1) {
                winner = win(colBox[2][6], colBox[2][5], colBox[2][4], colBox[2][3], colBox[2][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[3][1].addEventListener("click", function (e) {


    if (flagColBox[3][1] === 0) {

        print(colBox[3][1])


        flagColBox[3][1] = 1

        tieArray[12] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[2][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {

            if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[3][1], colBox[1][1], colBox[2][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[2][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[3][1], colBox[6][1], colBox[2][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {
                winner = win(colBox[3][1], colBox[3][2], colBox[3][3], colBox[3][4], colBox[3][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[3][2].addEventListener("click", function (e) {


    if (flagColBox[3][2] === 0) {

        print(colBox[3][2])


        flagColBox[3][2] = 1

        tieArray[13] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[4][3] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[3][1] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1 ||
            flagColBox[3][6] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {

            if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[3][2], colBox[1][2], colBox[2][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[3][2], colBox[6][2], colBox[2][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[4][3] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[3][2], colBox[2][1], colBox[4][3], colBox[5][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][1] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {
                winner = win(colBox[3][2], colBox[3][1], colBox[3][3], colBox[3][4], colBox[3][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][6] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {
                winner = win(colBox[3][2], colBox[3][6], colBox[3][3], colBox[3][4], colBox[3][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)
        }

    }
})


colBox[3][3].addEventListener("click", function (e) {


    if (flagColBox[3][3] === 0) {

        print(colBox[3][3])


        flagColBox[3][3] = 1

        tieArray[14] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[1][5] == 1 && flagColBox[2][4] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[2][2] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1 ||
            flagColBox[3][6] == 1 && flagColBox[3][5] == 1 && flagColBox[3][4] == 1 && flagColBox[3][2] == 1) {

            if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[3][3], colBox[1][3], colBox[2][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[3][3], colBox[6][3], colBox[2][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][5] == 1 && flagColBox[2][4] == 1 && flagColBox[4][2] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[3][3], colBox[1][5], colBox[2][4], colBox[4][2], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[3][3], colBox[1][1], colBox[2][2], colBox[4][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[2][2] == 1 && flagColBox[4][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[3][3], colBox[6][6], colBox[2][2], colBox[4][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][4] == 1 && flagColBox[3][5] == 1) {
                winner = win(colBox[3][3], colBox[3][1], colBox[3][2], colBox[3][4], colBox[3][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][6] == 1 && flagColBox[3][5] == 1 && flagColBox[3][4] == 1 && flagColBox[3][2] == 1) {
                winner = win(colBox[3][3], colBox[3][6], colBox[3][5], colBox[3][4], colBox[3][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[3][4].addEventListener("click", function (e) {


    if (flagColBox[3][4] === 0) {

        print(colBox[3][4])


        flagColBox[3][4] = 1

        tieArray[15] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[6][4] == 1 && flagColBox[5][4] == 1 && flagColBox[4][4] == 1 && flagColBox[2][4] == 1 ||
            flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[5][2] == 1 && flagColBox[4][3] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][5] == 1 ||
            flagColBox[3][6] == 1 && flagColBox[3][5] == 1 && flagColBox[3][3] == 1 && flagColBox[3][2] == 1) {


            if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[3][4], colBox[1][4], colBox[2][4], colBox[4][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][4] == 1 && flagColBox[5][4] == 1 && flagColBox[4][4] == 1 && flagColBox[2][4] == 1) {
                winner = win(colBox[3][4], colBox[6][4], colBox[5][4], colBox[4][4], colBox[2][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[4][5] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[3][4], colBox[1][2], colBox[2][3], colBox[4][5], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[4][3] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[3][4], colBox[1][6], colBox[2][5], colBox[4][3], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[5][2] == 1 && flagColBox[4][3] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[3][4], colBox[6][1], colBox[5][2], colBox[4][3], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][5] == 1) {
                winner = win(colBox[3][4], colBox[3][1], colBox[3][2], colBox[3][3], colBox[3][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][6] == 1 && flagColBox[3][5] == 1 && flagColBox[3][3] == 1 && flagColBox[3][2] == 1) {
                winner = win(colBox[3][4], colBox[3][6], colBox[3][5], colBox[3][3], colBox[3][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[3][5].addEventListener("click", function (e) {


    if (flagColBox[3][5] === 0) {

        print(colBox[3][5])


        flagColBox[3][5] = 1

        tieArray[16] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[4][4] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1 ||
            flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1 ||
            flagColBox[3][6] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1) {

            if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[3][5], colBox[1][5], colBox[2][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[3][5], colBox[6][5], colBox[2][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[4][4] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[3][5], colBox[2][6], colBox[4][4], colBox[5][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][1] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1) {
                winner = win(colBox[3][5], colBox[3][1], colBox[3][2], colBox[3][3], colBox[3][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[3][6] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1) {
                winner = win(colBox[3][5], colBox[3][6], colBox[3][2], colBox[3][3], colBox[3][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[3][6].addEventListener("click", function (e) {


    if (flagColBox[3][6] === 0) {

        print(colBox[3][6])


        flagColBox[3][6] = 1

        tieArray[17] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[3][5] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1) {

            if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[3][6], colBox[1][6], colBox[2][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[3][6], colBox[6][6], colBox[2][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagColBox[3][5] == 1 && flagColBox[3][2] == 1 && flagColBox[3][3] == 1 && flagColBox[3][4] == 1) {
                winner = win(colBox[3][6], colBox[3][5], colBox[3][2], colBox[3][3], colBox[3][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[4][1].addEventListener("click", function (e) {


    if (flagColBox[4][1] === 0) {

        print(colBox[4][1])

        flagColBox[4][1] = 1

        tieArray[18] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[3][1] == 1 && flagColBox[2][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1) {

            if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[4][1], colBox[1][1], colBox[2][1], colBox[3][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[3][1] == 1 && flagColBox[2][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[4][1], colBox[6][1], colBox[3][1], colBox[2][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[4][1], colBox[4][2], colBox[4][3], colBox[4][4], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[4][2].addEventListener("click", function (e) {


    if (flagColBox[4][2] === 0) {

        print(colBox[4][2])


        flagColBox[4][2] = 1

        tieArray[19] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[5][1] == 1 && flagColBox[3][3] == 1 && flagColBox[2][4] == 1 && flagColBox[1][5] == 1 ||
            flagColBox[4][1] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1 && flagColBox[4][6] == 1) {

            if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[4][2], colBox[1][2], colBox[2][2], colBox[3][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[4][2], colBox[6][2], colBox[2][2], colBox[3][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][1] == 1 && flagColBox[3][3] == 1 && flagColBox[2][4] == 1 && flagColBox[1][5] == 1) {
                winner = win(colBox[4][2], colBox[5][1], colBox[3][3], colBox[2][4], colBox[1][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][1] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[4][2], colBox[4][1], colBox[4][3], colBox[4][4], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][3] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1 && flagColBox[4][6] == 1) {
                winner = win(colBox[4][2], colBox[4][3], colBox[4][4], colBox[4][5], colBox[4][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[4][3].addEventListener("click", function (e) {


    if (flagColBox[4][3] === 0) {

        print(colBox[4][3])


        flagColBox[4][3] = 1

        tieArray[20] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[3][2] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[4][6] == 1 && flagColBox[4][5] == 1 && flagColBox[4][4] == 1 && flagColBox[4][2] == 1) {


            if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[4][3], colBox[1][3], colBox[2][3], colBox[3][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[4][3], colBox[6][3], colBox[2][3], colBox[3][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[3][2] == 1 && flagColBox[5][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[4][3], colBox[2][1], colBox[3][2], colBox[5][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[4][3], colBox[1][6], colBox[2][5], colBox[3][4], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[4][3], colBox[6][1], colBox[2][5], colBox[3][4], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][4] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[4][3], colBox[4][1], colBox[4][2], colBox[4][4], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][6] == 1 && flagColBox[4][5] == 1 && flagColBox[4][4] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[4][3], colBox[4][6], colBox[4][5], colBox[4][4], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[4][4].addEventListener("click", function (e) {


    if (flagColBox[4][4] === 0) {

        print(colBox[4][4])


        flagColBox[4][4] = 1

        tieArray[21] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[6][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[3][5] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[4][6] == 1 && flagColBox[4][5] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {

            if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[4][4], colBox[1][4], colBox[2][4], colBox[3][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[4][4], colBox[6][4], colBox[2][4], colBox[3][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[3][5] == 1 && flagColBox[5][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[4][4], colBox[2][6], colBox[3][5], colBox[5][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[4][4], colBox[1][1], colBox[2][2], colBox[3][3], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[4][4], colBox[6][6], colBox[2][2], colBox[3][3], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[4][4], colBox[4][1], colBox[4][2], colBox[4][3], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][6] == 1 && flagColBox[4][5] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[4][4], colBox[4][6], colBox[4][5], colBox[4][3], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[4][5].addEventListener("click", function (e) {


    if (flagColBox[4][5] === 0) {

        print(colBox[4][5])


        flagColBox[4][5] = 1

        tieArray[22] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1 ||
            flagColBox[4][6] == 1 && flagColBox[4][4] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {

            if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[4][5], colBox[1][5], colBox[2][5], colBox[3][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[4][5], colBox[6][5], colBox[2][5], colBox[3][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[4][5], colBox[1][2], colBox[2][3], colBox[3][4], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][1] == 1 && flagColBox[4][2] == 1 && flagColBox[4][3] == 1 && flagColBox[4][4] == 1) {
                winner = win(colBox[4][5], colBox[4][1], colBox[4][2], colBox[4][3], colBox[4][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][6] == 1 && flagColBox[4][4] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[4][5], colBox[4][6], colBox[4][4], colBox[4][3], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[4][6].addEventListener("click", function (e) {


    if (flagColBox[4][6] === 0) {

        print(colBox[4][6])


        flagColBox[4][6] = 1

        tieArray[23] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[4][5] == 1 && flagColBox[4][4] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {

            if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[4][6], colBox[1][6], colBox[2][6], colBox[3][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[4][6], colBox[6][6], colBox[2][6], colBox[3][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[4][5] == 1 && flagColBox[4][4] == 1 && flagColBox[4][3] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[4][6], colBox[4][5], colBox[4][4], colBox[4][3], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[5][1].addEventListener("click", function (e) {


    if (flagColBox[5][1] === 0) {

        print(colBox[5][1])


        flagColBox[5][1] = 1

        tieArray[24] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 ||
            flagColBox[1][5] == 1 && flagColBox[2][4] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1 ||
            flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {


            if (flagColBox[1][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1) {
                winner = win(colBox[5][1], colBox[1][1], colBox[2][1], colBox[3][1], colBox[4][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1) {
                winner = win(colBox[5][1], colBox[6][1], colBox[2][1], colBox[3][1], colBox[4][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][5] == 1 && flagColBox[2][4] == 1 && flagColBox[3][3] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[5][1], colBox[1][5], colBox[2][4], colBox[3][3], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][1], colBox[5][2], colBox[5][3], colBox[5][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[5][2].addEventListener("click", function (e) {


    if (flagColBox[5][2] === 0) {

        print(colBox[5][2])


        flagColBox[5][2] = 1

        tieArray[25] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 ||
            flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[4][3] == 1 && flagColBox[3][4] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1 ||
            flagColBox[5][1] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[5][6] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {

            if (flagColBox[1][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[5][2], colBox[1][2], colBox[2][2], colBox[3][2], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][2] == 1 && flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1) {
                winner = win(colBox[5][2], colBox[6][2], colBox[2][2], colBox[3][2], colBox[4][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[4][3] == 1 && flagColBox[3][4] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[5][2], colBox[6][1], colBox[4][3], colBox[3][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][6] == 1 && flagColBox[2][5] == 1 && flagColBox[3][4] == 1 && flagColBox[4][3] == 1) {
                winner = win(colBox[5][2], colBox[1][6], colBox[2][5], colBox[3][4], colBox[4][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][1] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][2], colBox[5][1], colBox[5][3], colBox[5][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][6] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][2], colBox[5][6], colBox[5][3], colBox[5][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)
        }
    }
})


colBox[5][3].addEventListener("click", function (e) {


    if (flagColBox[5][3] === 0) {

        print(colBox[5][3])


        flagColBox[5][3] = 1

        tieArray[26] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 ||
            flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 ||
            flagColBox[2][6] == 1 && flagColBox[3][5] == 1 && flagColBox[4][4] == 1 && flagColBox[6][2] == 1 ||
            flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {


            if (flagColBox[1][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1) {
                winner = win(colBox[5][3], colBox[1][3], colBox[2][3], colBox[3][3], colBox[4][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][3] == 1 && flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1) {
                winner = win(colBox[5][3], colBox[6][3], colBox[2][3], colBox[3][3], colBox[4][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][6] == 1 && flagColBox[3][5] == 1 && flagColBox[4][4] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[5][3], colBox[2][6], colBox[3][5], colBox[4][4], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][3], colBox[5][1], colBox[5][2], colBox[5][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][3], colBox[5][6], colBox[5][2], colBox[5][4], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[5][4].addEventListener("click", function (e) {


    if (flagColBox[5][4] === 0) {

        print(colBox[5][4])


        flagColBox[5][4] = 1

        tieArray[27] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 ||
            flagColBox[6][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 ||
            flagColBox[2][1] == 1 && flagColBox[3][2] == 1 && flagColBox[4][3] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][5] == 1) {

            if (flagColBox[1][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1) {
                winner = win(colBox[5][4], colBox[1][4], colBox[2][4], colBox[3][4], colBox[4][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][4] == 1 && flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1) {
                winner = win(colBox[5][4], colBox[6][4], colBox[2][4], colBox[3][4], colBox[4][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[2][1] == 1 && flagColBox[3][2] == 1 && flagColBox[4][3] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[5][4], colBox[2][1], colBox[3][2], colBox[4][3], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][4], colBox[5][1], colBox[5][2], colBox[5][3], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][4], colBox[5][6], colBox[5][2], colBox[5][3], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[5][5].addEventListener("click", function (e) {


    if (flagColBox[5][5] === 0) {

        print(colBox[5][5])


        flagColBox[5][5] = 1

        tieArray[28] = 1

        drawMoveTitle(flag)

        if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[4][4] == 1 && flagColBox[3][3] == 1 && flagColBox[2][2] == 1 ||
            flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1 ||
            flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1) {


            if (flagColBox[1][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[5][5], colBox[1][5], colBox[2][5], colBox[3][5], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][5] == 1 && flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[5][5], colBox[6][5], colBox[2][5], colBox[3][5], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[4][4] == 1 && flagColBox[3][3] == 1 && flagColBox[2][2] == 1) {
                winner = win(colBox[5][5], colBox[6][6], colBox[4][4], colBox[3][3], colBox[2][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][1] == 1 && flagColBox[2][2] == 1 && flagColBox[3][3] == 1 && flagColBox[4][4] == 1) {
                winner = win(colBox[5][5], colBox[1][1], colBox[2][2], colBox[3][3], colBox[4][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][1] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[5][5], colBox[5][1], colBox[5][2], colBox[5][3], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][6] == 1 && flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[5][5], colBox[5][6], colBox[5][2], colBox[5][3], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[5][6].addEventListener("click", function (e) {


    if (flagColBox[5][6] === 0) {

        print(colBox[5][6])


        flagColBox[5][6] = 1

        tieArray[29] = 1


        drawMoveTitle(flag)

        if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 ||
            flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1 ||
            flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {


            if (flagColBox[1][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1) {
                winner = win(colBox[5][6], colBox[1][6], colBox[2][6], colBox[3][6], colBox[4][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1) {
                winner = win(colBox[5][6], colBox[6][6], colBox[2][6], colBox[3][6], colBox[4][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[1][2] == 1 && flagColBox[2][3] == 1 && flagColBox[3][4] == 1 && flagColBox[4][5] == 1) {
                winner = win(colBox[5][6], colBox[1][2], colBox[2][3], colBox[3][4], colBox[4][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][2] == 1 && flagColBox[5][3] == 1 && flagColBox[5][4] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[5][6], colBox[5][5], colBox[5][4], colBox[5][3], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[6][1].addEventListener("click", function (e) {


    if (flagColBox[6][1] === 0) {

        print(colBox[6][1])


        flagColBox[6][1] = 1

        tieArray[30] = 1

        drawMoveTitle(flag)

        if (flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1 ||
            flagColBox[5][2] == 1 && flagColBox[4][3] == 1 && flagColBox[3][4] == 1 && flagColBox[2][5] == 1 ||
            flagColBox[6][2] == 1 && flagColBox[6][3] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {

            if (flagColBox[2][1] == 1 && flagColBox[3][1] == 1 && flagColBox[4][1] == 1 && flagColBox[5][1] == 1) {
                winner = win(colBox[6][1], colBox[2][1], colBox[3][1], colBox[4][1], colBox[5][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][2] == 1 && flagColBox[4][3] == 1 && flagColBox[3][4] == 1 && flagColBox[2][5] == 1) {
                winner = win(colBox[6][1], colBox[5][2], colBox[4][3], colBox[3][4], colBox[2][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][2] == 1 && flagColBox[6][3] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[6][1], colBox[6][2], colBox[6][3], colBox[6][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)
        }

    }
})


colBox[6][2].addEventListener("click", function (e) {


    if (flagColBox[6][2] === 0) {

        print(colBox[6][2])


        flagColBox[6][2] = 1

        tieArray[31] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1 ||
            flagColBox[5][3] == 1 && flagColBox[4][4] == 1 && flagColBox[3][5] == 1 && flagColBox[2][6] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[6][3] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[6][3] == 1 && flagColBox[6][6] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {


            if (flagColBox[2][2] == 1 && flagColBox[3][2] == 1 && flagColBox[4][2] == 1 && flagColBox[5][2] == 1) {
                winner = win(colBox[6][2], colBox[2][2], colBox[3][2], colBox[4][2], colBox[5][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][3] == 1 && flagColBox[4][4] == 1 && flagColBox[3][5] == 1 && flagColBox[2][6] == 1) {
                winner = win(colBox[6][2], colBox[5][3], colBox[4][4], colBox[3][5], colBox[2][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[6][3] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[6][2], colBox[6][1], colBox[6][3], colBox[6][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][3] == 1 && flagColBox[6][6] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[6][2], colBox[6][3], colBox[6][6], colBox[6][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})


colBox[6][3].addEventListener("click", function (e) {


    if (flagColBox[6][3] === 0) {

        print(colBox[6][3])


        flagColBox[6][3] = 1

        tieArray[32] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[6][2] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[6][5] == 1 && flagColBox[6][4] == 1 && flagColBox[6][2] == 1) {

            if (flagColBox[2][3] == 1 && flagColBox[3][3] == 1 && flagColBox[4][3] == 1 && flagColBox[5][3] == 1) {
                winner = win(colBox[6][3], colBox[2][3], colBox[3][3], colBox[4][3], colBox[5][3])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[6][2] == 1 && flagColBox[6][4] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[6][3], colBox[6][1], colBox[6][2], colBox[6][4], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[6][5] == 1 && flagColBox[6][4] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[6][3], colBox[6][6], colBox[6][5], colBox[6][4], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[6][4].addEventListener("click", function (e) {


    if (flagColBox[6][4] === 0) {

        print(colBox[6][4])


        flagColBox[6][4] = 1

        tieArray[33] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1 ||
            flagColBox[6][1] == 1 && flagColBox[6][2] == 1 && flagColBox[6][3] == 1 && flagColBox[6][5] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[6][5] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {

            if (flagColBox[2][4] == 1 && flagColBox[3][4] == 1 && flagColBox[4][4] == 1 && flagColBox[5][4] == 1) {
                winner = win(colBox[6][4], colBox[2][4], colBox[3][4], colBox[4][4], colBox[5][4])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][1] == 1 && flagColBox[6][2] == 1 && flagColBox[6][3] == 1 && flagColBox[6][5] == 1) {
                winner = win(colBox[6][4], colBox[6][1], colBox[6][2], colBox[6][3], colBox[6][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[6][5] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[6][4], colBox[6][6], colBox[6][5], colBox[6][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[6][5].addEventListener("click", function (e) {


    if (flagColBox[6][5] === 0) {

        print(colBox[6][5])


        flagColBox[6][5] = 1

        tieArray[34] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1 ||
            flagColBox[5][4] == 1 && flagColBox[4][3] == 1 && flagColBox[3][2] == 1 && flagColBox[2][1] == 1 ||
            flagColBox[6][6] == 1 && flagColBox[6][4] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {


            if (flagColBox[2][5] == 1 && flagColBox[3][5] == 1 && flagColBox[4][5] == 1 && flagColBox[5][5] == 1) {
                winner = win(colBox[6][5], colBox[2][5], colBox[3][5], colBox[4][5], colBox[5][5])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][4] == 1 && flagColBox[4][3] == 1 && flagColBox[3][2] == 1 && flagColBox[2][1] == 1) {
                winner = win(colBox[6][5], colBox[5][4], colBox[4][3], colBox[3][2], colBox[2][1])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][6] == 1 && flagColBox[6][4] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[6][5], colBox[6][6], colBox[6][4], colBox[6][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


colBox[6][6].addEventListener("click", function (e) {


    if (flagColBox[6][6] === 0) {

        print(colBox[6][6])


        flagColBox[6][6] = 1

        tieArray[35] = 1


        drawMoveTitle(flag)

        if (flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1 ||
            flagColBox[5][5] == 1 && flagColBox[4][4] == 1 && flagColBox[3][3] == 1 && flagColBox[2][2] == 1 ||
            flagColBox[6][5] == 1 && flagColBox[6][4] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {

            if (flagColBox[2][6] == 1 && flagColBox[3][6] == 1 && flagColBox[4][6] == 1 && flagColBox[5][6] == 1) {
                winner = win(colBox[6][6], colBox[2][6], colBox[3][6], colBox[4][6], colBox[5][6])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[5][5] == 1 && flagColBox[4][4] == 1 && flagColBox[3][3] == 1 && flagColBox[2][2] == 1) {
                winner = win(colBox[6][6], colBox[5][5], colBox[4][4], colBox[3][3], colBox[2][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagColBox[6][5] == 1 && flagColBox[6][4] == 1 && flagColBox[6][3] == 1 && flagColBox[6][2] == 1) {
                winner = win(colBox[6][6], colBox[6][5], colBox[6][4], colBox[6][3], colBox[6][2])
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


newGame.addEventListener("click", function () {

    flag = 0
    winner = false
    pomWinner = false

    drawMoveTitle(flag)

    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            flagColBox[i][j] = 0;
            colBox[i][j].innerHTML = ""
            colBox[i][j].style.backgroundColor = ""
        }
    }

    tieArray = []

    for (i = 0; i < 36; i++) {
        tieArray.push("0")
    }

    onMove.textContent = ""
    onMove.append("X")
    onMove.style.color = "blue"
    onMove.style.fontSize = "22px"

    gameStatus.textContent = ""
    gameStatus.append("On the move:")
    gameStatus.style.fontSize = "18px"

})


resetCalc.addEventListener("click", function () {

    playerX.textContent = ""
    playerX.append("0")
    pointsX = 0
    localStorage.setItem("playerX", JSON.stringify(pointsX))

    playerO.textContent = ""
    playerO.append("0")
    pointsO = 0
    localStorage.setItem("playerO", JSON.stringify(pointsO))

})