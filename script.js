let onMove = document.querySelector("#heading .onMove")
let newGame = document.querySelector(".btn-newGame")
let resetCalc = document.querySelector(".btn-resetCalc")
let gameStatus = document.querySelector("#heading #player-move-text")
let playerX = document.querySelector("#player-score .scoreX")
let playerO = document.querySelector("#player-score .scoreO")


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

/* variables checking whether the box was clicked -> 0 = no, 1 = yes*/
let flagCol1Box1 = 0
let flagCol1Box2 = 0
let flagCol1Box3 = 0
let flagCol1Box4 = 0
let flagCol1Box5 = 0
let flagCol1Box6 = 0

let flagCol2Box1 = 0
let flagCol2Box2 = 0
let flagCol2Box3 = 0
let flagCol2Box4 = 0
let flagCol2Box5 = 0
let flagCol2Box6 = 0

let flagCol3Box1 = 0
let flagCol3Box2 = 0
let flagCol3Box3 = 0
let flagCol3Box4 = 0
let flagCol3Box5 = 0
let flagCol3Box6 = 0

let flagCol4Box1 = 0
let flagCol4Box2 = 0
let flagCol4Box3 = 0
let flagCol4Box4 = 0
let flagCol4Box5 = 0
let flagCol4Box6 = 0

let flagCol5Box1 = 0
let flagCol5Box2 = 0
let flagCol5Box3 = 0
let flagCol5Box4 = 0
let flagCol5Box5 = 0
let flagCol5Box6 = 0

let flagCol6Box1 = 0
let flagCol6Box2 = 0
let flagCol6Box3 = 0
let flagCol6Box4 = 0
let flagCol6Box5 = 0
let flagCol6Box6 = 0


/* for possible game draw purpose */
for (i = 0; i < 36; i++) {
    tieArray.push("0")
}





let col1Box1 = document.querySelector("#column1-box1")
let col1Box2 = document.querySelector("#column1-box2")
let col1Box3 = document.querySelector("#column1-box3")
let col1Box4 = document.querySelector("#column1-box4")
let col1Box5 = document.querySelector("#column1-box5")
let col1Box6 = document.querySelector("#column1-box6")

let col2Box1 = document.querySelector("#column2-box1")
let col2Box2 = document.querySelector("#column2-box2")
let col2Box3 = document.querySelector("#column2-box3")
let col2Box4 = document.querySelector("#column2-box4")
let col2Box5 = document.querySelector("#column2-box5")
let col2Box6 = document.querySelector("#column2-box6")

let col3Box1 = document.querySelector("#column3-box1")
let col3Box2 = document.querySelector("#column3-box2")
let col3Box3 = document.querySelector("#column3-box3")
let col3Box4 = document.querySelector("#column3-box4")
let col3Box5 = document.querySelector("#column3-box5")
let col3Box6 = document.querySelector("#column3-box6")

let col4Box1 = document.querySelector("#column4-box1")
let col4Box2 = document.querySelector("#column4-box2")
let col4Box3 = document.querySelector("#column4-box3")
let col4Box4 = document.querySelector("#column4-box4")
let col4Box5 = document.querySelector("#column4-box5")
let col4Box6 = document.querySelector("#column4-box6")

let col5Box1 = document.querySelector("#column5-box1")
let col5Box2 = document.querySelector("#column5-box2")
let col5Box3 = document.querySelector("#column5-box3")
let col5Box4 = document.querySelector("#column5-box4")
let col5Box5 = document.querySelector("#column5-box5")
let col5Box6 = document.querySelector("#column5-box6")

let col6Box1 = document.querySelector("#column6-box1")
let col6Box2 = document.querySelector("#column6-box2")
let col6Box3 = document.querySelector("#column6-box3")
let col6Box4 = document.querySelector("#column6-box4")
let col6Box5 = document.querySelector("#column6-box5")
let col6Box6 = document.querySelector("#column6-box6")




col1Box1.addEventListener("click", function (e) {

    // if variable is value 0 then create element p, 0 means first click
    if (flagCol1Box1 === 0) {

        print(col1Box1)



        // if 1 - do nothing after another click 
        flagCol1Box1 = 1

        tieArray[0] = 1


        // print a player on a turn to title
        drawMoveTitle(flag)

        // Check the win possibility

        if (flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 || 
            flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1 || 
            flagCol1Box2 == 1 && flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {

            // Checking horizontal win possibility
            if (flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col1Box1, col2Box1, col3Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            // Checking vertical win possibility
            if (flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col1Box1, col2Box2, col3Box3, col4Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            // Checking column win possibility
            if (flagCol1Box2 == 1 && flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {
                winner = win(col1Box1, col1Box2, col1Box3, col1Box4, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)



        }

    }
})




col1Box2.addEventListener("click", function (e) {


    if (flagCol1Box2 === 0) {

        print(col1Box2)

        flagCol1Box2 = 1

        tieArray[1] = 1


        drawMoveTitle(flag)


        if (flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 || flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1 || flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1 && flagCol1Box6 == 1 || flagCol1Box1 == 1 && flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {


            if (flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {

                winner = win(col1Box2, col2Box2, col3Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1) {

                winner = win(col1Box2, col2Box3, col3Box4, col4Box5, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1 && flagCol1Box6 == 1) {

                winner = win(col1Box2, col1Box3, col1Box4, col1Box5, col1Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagCol1Box1 == 1 && flagCol1Box3 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {

                winner = win(col1Box2, col1Box1, col1Box3, col1Box4, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }



            checkPossibleTie(pomWinner)


        }

    }

})




col1Box3.addEventListener("click", function (e) {


    if (flagCol1Box3 === 0) {

        print(col1Box3)

        flagCol1Box3 = 1

        tieArray[2] = 1


        drawMoveTitle(flag)

        if (flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 || flagCol1Box1 == 1 && flagCol1Box2 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1 || flagCol1Box6 == 1 && flagCol1Box2 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {

            if (flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col1Box3, col2Box3, col3Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box1 == 1 && flagCol1Box2 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {
                winner = win(col1Box3, col1Box1, col1Box2, col1Box4, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol1Box2 == 1 && flagCol1Box4 == 1 && flagCol1Box5 == 1) {
                winner = win(col1Box3, col1Box6, col1Box2, col1Box4, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})



col1Box4.addEventListener("click", function (e) {


    if (flagCol1Box4 === 0) {

        print(col1Box4)




        flagCol1Box4 = 1

        tieArray[3] = 1

        drawMoveTitle(flag)

        if (flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1 || flagCol1Box1 == 1 && flagCol1Box2 == 1 && flagCol1Box3 == 1 && flagCol1Box5 == 1 || flagCol1Box6 == 1 && flagCol1Box5 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1) {

            if (flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col1Box4, col2Box4, col3Box4, col4Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box1 == 1 && flagCol1Box2 == 1 && flagCol1Box3 == 1 && flagCol1Box5 == 1) {
                winner = win(col1Box4, col1Box1, col1Box2, col1Box3, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol1Box5 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1) {
                winner = win(col1Box4, col1Box6, col1Box2, col1Box3, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})




col1Box5.addEventListener("click", function (e) {


    if (flagCol1Box5 === 0) {

        print(col1Box5)

        flagCol1Box5 = 1

        tieArray[4] = 1


        drawMoveTitle(flag)

        if (flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 || flagCol2Box4 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1 || flagCol1Box6 == 1 && flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1 || flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1 && flagCol1Box1 == 1) {

            if (flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col1Box5, col2Box5, col3Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box4 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1) {
                winner = win(col1Box5, col2Box4, col3Box3, col4Box2, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1) {
                winner = win(col1Box5, col1Box6, col1Box4, col1Box3, col1Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1 && flagCol1Box1 == 1) {
                winner = win(col1Box5, col1Box4, col1Box3, col1Box2, col1Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})




col1Box6.addEventListener("click", function (e) {


    if (flagCol1Box6 === 0) {

        print(col1Box6)


        flagCol1Box6 = 1

        tieArray[5] = 1


        drawMoveTitle(flag)

        if (flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 || flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1 || flagCol1Box5 == 1 && flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1) {

            if (flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col1Box6, col2Box6, col3Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1) {
                winner = win(col1Box6, col2Box5, col3Box4, col4Box3, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box5 == 1 && flagCol1Box4 == 1 && flagCol1Box3 == 1 && flagCol1Box2 == 1) {
                winner = win(col1Box6, col1Box5, col1Box4, col1Box3, col1Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})











col2Box1.addEventListener("click", function (e) {


    if (flagCol2Box1 === 0) {

        print(col2Box1)


        flagCol2Box1 = 1

        tieArray[6] = 1


        drawMoveTitle(flag)

        if (flagCol1Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 || flagCol6Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 || flagCol3Box2 == 1 && flagCol4Box3 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1 || flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {

            if (flagCol1Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col2Box1, col1Box1, col3Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col2Box1, col6Box1, col3Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box2 == 1 && flagCol4Box3 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col2Box1, col3Box2, col4Box3, col5Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {
                winner = win(col2Box1, col2Box2, col2Box3, col2Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)
        }

    }
})



col2Box2.addEventListener("click", function (e) {


    if (flagCol2Box2 === 0) {

        print(col2Box2) 

        flagCol2Box2 = 1

        tieArray[7] = 1


        drawMoveTitle(flag)

        if (flagCol1Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 || flagCol6Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 || flagCol1Box1 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1 || flagCol6Box6 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1 || flagCol2Box1 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1 || flagCol2Box6 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {


            if (flagCol1Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {

                winner = win(col2Box2, col1Box2, col3Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                } 

            }

            if (flagCol6Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {

                winner = win(col2Box2, col6Box2, col3Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                } 
            }

            if (flagCol1Box1 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1) {

                winner = win(col2Box2, col1Box1, col3Box3, col4Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                } 
            }

            if (flagCol6Box6 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1) {

                winner = win(col2Box2, col6Box6, col3Box3, col4Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                } 
            }

            if (flagCol2Box1 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {

                winner = win(col2Box2, col2Box1, col2Box3, col2Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                } 
            }

            if (flagCol2Box6 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {

                winner = win(col2Box2, col2Box6, col2Box3, col2Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                } 

            }


            checkPossibleTie(pomWinner) 


        }
    }
})


col2Box3.addEventListener("click", function (e) {


    if (flagCol2Box3 === 0) {

        print(col2Box3)


        flagCol2Box3 = 1

        tieArray[8] = 1


        drawMoveTitle(flag)

        if (flagCol1Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol6Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol1Box2 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1 ||
            flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1 ||
            flagCol2Box6 == 1 && flagCol2Box2 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {

            if (flagCol1Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col2Box3, col1Box3, col3Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col2Box3, col6Box3, col3Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box2 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1) {
                winner = win(col2Box3, col1Box2, col3Box4, col4Box5, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {
                winner = win(col2Box3, col2Box1, col2Box2, col2Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol2Box2 == 1 && flagCol2Box4 == 1 && flagCol2Box5 == 1) {
                winner = win(col2Box3, col2Box6, col2Box2, col2Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


col2Box4.addEventListener("click", function (e) {


    if (flagCol2Box4 === 0) {

        print(col2Box4)


        flagCol2Box4 = 1

        tieArray[9] = 1


        drawMoveTitle(flag)

        if (flagCol1Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol6Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol1Box5 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1 ||
            flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box5 == 1 ||
            flagCol2Box6 == 1 && flagCol2Box5 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {

            if (flagCol1Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col2Box4, col1Box4, col3Box4, col4Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col2Box4, col6Box4, col3Box4, col4Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box5 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1) {
                winner = win(col2Box4, col1Box5, col3Box3, col4Box2, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box5 == 1) {
                winner = win(col2Box4, col2Box1, col2Box2, col2Box3, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol2Box5 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {
                winner = win(col2Box4, col2Box6, col2Box5, col2Box3, col2Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})


col2Box5.addEventListener("click", function (e) {


    if (flagCol2Box5 === 0) {

        print(col2Box5)


        flagCol2Box5 = 1

        tieArray[10] = 1


        drawMoveTitle(flag)

        if (flagCol1Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol6Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol1Box6 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1 ||
            flagCol6Box1 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1 ||
            flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1 ||
            flagCol2Box6 == 1 && flagCol2Box4 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {

            if (flagCol1Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col2Box5, col1Box5, col3Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col2Box5, col6Box5, col3Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1) {
                winner = win(col2Box5, col1Box6, col3Box4, col4Box3, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1) {
                winner = win(col2Box5, col6Box1, col3Box4, col4Box3, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol2Box2 == 1 && flagCol2Box3 == 1 && flagCol2Box4 == 1) {
                winner = win(col2Box5, col2Box1, col2Box2, col2Box3, col2Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol2Box4 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {
                winner = win(col2Box5, col2Box6, col2Box4, col2Box3, col2Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})



col2Box6.addEventListener("click", function (e) {


    if (flagCol2Box6 === 0) {

        print(col2Box6)




        flagCol2Box6 = 1

        tieArray[11] = 1


        drawMoveTitle(flag)

        if (flagCol1Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol6Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol3Box5 == 1 && flagCol4Box4 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1 ||
            flagCol2Box5 == 1 && flagCol2Box4 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {

            if (flagCol1Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col2Box6, col1Box6, col3Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col2Box6, col6Box6, col3Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box5 == 1 && flagCol4Box4 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col2Box6, col3Box5, col4Box4, col5Box3, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box5 == 1 && flagCol2Box4 == 1 && flagCol2Box3 == 1 && flagCol2Box2 == 1) {
                winner = win(col2Box6, col2Box5, col2Box4, col2Box3, col2Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})







col3Box1.addEventListener("click", function (e) {


    if (flagCol3Box1 === 0) {

        print(col3Box1)


        flagCol3Box1 = 1

        tieArray[12] = 1

        drawMoveTitle(flag)

        if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 ||
            flagCol6Box1 == 1 && flagCol2Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 ||
            flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {

            if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col3Box1, col1Box1, col2Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol2Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col3Box1, col6Box1, col2Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {
                winner = win(col3Box1, col3Box2, col3Box3, col3Box4, col3Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)


        }

    }
})





col3Box2.addEventListener("click", function (e) {


    if (flagCol3Box2 === 0) {

        print(col3Box2)


        flagCol3Box2 = 1

        tieArray[13] = 1

        drawMoveTitle(flag)

        if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 ||
            flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 ||
            flagCol2Box1 == 1 && flagCol4Box3 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1 ||
            flagCol3Box1 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1 ||
            flagCol3Box6 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {

            if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {
                winner = win(col3Box2, col1Box2, col2Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {
                winner = win(col3Box2, col6Box2, col2Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol4Box3 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col3Box2, col2Box1, col4Box3, col5Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box1 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {
                winner = win(col3Box2, col3Box1, col3Box3, col3Box4, col3Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box6 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {
                winner = win(col3Box2, col3Box6, col3Box3, col3Box4, col3Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)
        }

    }
})



col3Box3.addEventListener("click", function (e) {


    if (flagCol3Box3 === 0) {

        print(col3Box3)


        flagCol3Box3 = 1

        tieArray[14] = 1


        drawMoveTitle(flag)

        if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol1Box5 == 1 && flagCol2Box4 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1 ||
            flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1 ||
            flagCol6Box6 == 1 && flagCol2Box2 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1 ||
            flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1 ||
            flagCol3Box6 == 1 && flagCol3Box5 == 1 && flagCol3Box4 == 1 && flagCol3Box2 == 1) {

            if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col3Box3, col1Box3, col2Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col3Box3, col6Box3, col2Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box5 == 1 && flagCol2Box4 == 1 && flagCol4Box2 == 1 && flagCol5Box1 == 1) {
                winner = win(col3Box3, col1Box5, col2Box4, col4Box2, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col3Box3, col1Box1, col2Box2, col4Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol2Box2 == 1 && flagCol4Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col3Box3, col6Box6, col2Box2, col4Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box4 == 1 && flagCol3Box5 == 1) {
                winner = win(col3Box3, col3Box1, col3Box2, col3Box4, col3Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box6 == 1 && flagCol3Box5 == 1 && flagCol3Box4 == 1 && flagCol3Box2 == 1) {
                winner = win(col3Box3, col3Box6, col3Box5, col3Box4, col3Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }
    }
})




col3Box4.addEventListener("click", function (e) {


    if (flagCol3Box4 === 0) {

        print(col3Box4)


        flagCol3Box4 = 1

        tieArray[15] = 1

        drawMoveTitle(flag)

        if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol6Box4 == 1 && flagCol5Box4 == 1 && flagCol4Box4 == 1 && flagCol2Box4 == 1 ||
            flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1 ||
            flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1 ||
            flagCol6Box1 == 1 && flagCol5Box2 == 1 && flagCol4Box3 == 1 && flagCol2Box5 == 1 ||
            flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box5 == 1 ||
            flagCol3Box6 == 1 && flagCol3Box5 == 1 && flagCol3Box3 == 1 && flagCol3Box2 == 1) {


            if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col3Box4, col1Box4, col2Box4, col4Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box4 == 1 && flagCol5Box4 == 1 && flagCol4Box4 == 1 && flagCol2Box4 == 1) {
                winner = win(col3Box4, col6Box4, col5Box4, col4Box4, col2Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol4Box5 == 1 && flagCol5Box6 == 1) {
                winner = win(col3Box4, col1Box2, col2Box3, col4Box5, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol4Box3 == 1 && flagCol5Box2 == 1) {
                winner = win(col3Box4, col1Box6, col2Box5, col4Box3, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol5Box2 == 1 && flagCol4Box3 == 1 && flagCol2Box5 == 1) {
                winner = win(col3Box4, col6Box1, col5Box2, col4Box3, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box5 == 1) {
                winner = win(col3Box4, col3Box1, col3Box2, col3Box3, col3Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box6 == 1 && flagCol3Box5 == 1 && flagCol3Box3 == 1 && flagCol3Box2 == 1) {
                winner = win(col3Box4, col3Box6, col3Box5, col3Box3, col3Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})



col3Box5.addEventListener("click", function (e) {


    if (flagCol3Box5 === 0) {

        print(col3Box5)


        flagCol3Box5 = 1

        tieArray[16] = 1


        drawMoveTitle(flag)

        if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol2Box6 == 1 && flagCol4Box4 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1 ||
            flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1 ||
            flagCol3Box6 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1) {

            if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col3Box5, col1Box5, col2Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col3Box5, col6Box5, col2Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol4Box4 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col3Box5, col2Box6, col4Box4, col5Box3, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box1 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1) {
                winner = win(col3Box5, col3Box1, col3Box2, col3Box3, col3Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol3Box6 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1) {
                winner = win(col3Box5, col3Box6, col3Box2, col3Box3, col3Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})




col3Box6.addEventListener("click", function (e) {


    if (flagCol3Box6 === 0) {

        print(col3Box6)


        flagCol3Box6 = 1

        tieArray[17] = 1

        drawMoveTitle(flag)

        if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol3Box5 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1) {

            if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col3Box6, col1Box6, col2Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col3Box6, col6Box6, col2Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagCol3Box5 == 1 && flagCol3Box2 == 1 && flagCol3Box3 == 1 && flagCol3Box4 == 1) {
                winner = win(col3Box6, col3Box5, col3Box2, col3Box3, col3Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})





col4Box1.addEventListener("click", function (e) {


    if (flagCol4Box1 === 0) {

        print(col4Box1)

        flagCol4Box1 = 1

        tieArray[18] = 1


        drawMoveTitle(flag)

        if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol5Box1 == 1 ||
            flagCol6Box1 == 1 && flagCol3Box1 == 1 && flagCol2Box1 == 1 && flagCol5Box1 == 1 ||
            flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1) {

            if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col4Box1, col1Box1, col2Box1, col3Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol3Box1 == 1 && flagCol2Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col4Box1, col6Box1, col3Box1, col2Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            if (flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1) {
                winner = win(col4Box1, col4Box2, col4Box3, col4Box4, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})




col4Box2.addEventListener("click", function (e) {


    if (flagCol4Box2 === 0) {

        print(col4Box2)


        flagCol4Box2 = 1

        tieArray[19] = 1


        drawMoveTitle(flag)

        if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol5Box2 == 1 ||
            flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol5Box2 == 1 ||
            flagCol5Box1 == 1 && flagCol3Box3 == 1 && flagCol2Box4 == 1 && flagCol1Box5 == 1 ||
            flagCol4Box1 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1 ||
            flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1 && flagCol4Box6 == 1) {

            if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol5Box2 == 1) {
                winner = win(col4Box2, col1Box2, col2Box2, col3Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol5Box2 == 1) {
                winner = win(col4Box2, col6Box2, col2Box2, col3Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box1 == 1 && flagCol3Box3 == 1 && flagCol2Box4 == 1 && flagCol1Box5 == 1) {
                winner = win(col4Box2, col5Box1, col3Box3, col2Box4, col1Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box1 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1) {
                winner = win(col4Box2, col4Box1, col4Box3, col4Box4, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box3 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1 && flagCol4Box6 == 1) {
                winner = win(col4Box2, col4Box3, col4Box4, col4Box5, col4Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})



col4Box3.addEventListener("click", function (e) {


    if (flagCol4Box3 === 0) {

        print(col4Box3)


        flagCol4Box3 = 1

        tieArray[20] = 1


        drawMoveTitle(flag)

        if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol2Box1 == 1 && flagCol3Box2 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1 ||
            flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol5Box2 == 1 ||
            flagCol6Box1 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol5Box2 == 1 ||
            flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1 ||
            flagCol4Box6 == 1 && flagCol4Box5 == 1 && flagCol4Box4 == 1 && flagCol4Box2 == 1) {


            if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col4Box3, col1Box3, col2Box3, col3Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col4Box3, col6Box3, col2Box3, col3Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol3Box2 == 1 && flagCol5Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col4Box3, col2Box1, col3Box2, col5Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol5Box2 == 1) {
                winner = win(col4Box3, col1Box6, col2Box5, col3Box4, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol5Box2 == 1) {
                winner = win(col4Box3, col6Box1, col2Box5, col3Box4, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box4 == 1 && flagCol4Box5 == 1) {
                winner = win(col4Box3, col4Box1, col4Box2, col4Box4, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box6 == 1 && flagCol4Box5 == 1 && flagCol4Box4 == 1 && flagCol4Box2 == 1) {
                winner = win(col4Box3, col4Box6, col4Box5, col4Box4, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            checkPossibleTie(pomWinner)

        }

    }
})



col4Box4.addEventListener("click", function (e) {


    if (flagCol4Box4 === 0) {

        print(col4Box4)


        flagCol4Box4 = 1

        tieArray[21] = 1

        drawMoveTitle(flag)

        if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol6Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol2Box6 == 1 && flagCol3Box5 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1 ||
            flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol5Box5 == 1 ||
            flagCol6Box6 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol5Box5 == 1 ||
            flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box5 == 1 ||
            flagCol4Box6 == 1 && flagCol4Box5 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {

            if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col4Box4, col1Box4, col2Box4, col3Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col4Box4, col6Box4, col2Box4, col3Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol3Box5 == 1 && flagCol5Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col4Box4, col2Box6, col3Box5, col5Box3, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol5Box5 == 1) {
                winner = win(col4Box4, col1Box1, col2Box2, col3Box3, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol5Box5 == 1) {
                winner = win(col4Box4, col6Box6, col2Box2, col3Box3, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box5 == 1) {
                winner = win(col4Box4, col4Box1, col4Box2, col4Box3, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box6 == 1 && flagCol4Box5 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {
                winner = win(col4Box4, col4Box6, col4Box5, col4Box3, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)


        }

    }
})



col4Box5.addEventListener("click", function (e) {


    if (flagCol4Box5 === 0) {

        print(col4Box5)


        flagCol4Box5 = 1

        tieArray[22] = 1


        drawMoveTitle(flag)

        if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol5Box6 == 1 ||
            flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1 ||
            flagCol4Box6 == 1 && flagCol4Box4 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {

            if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col4Box5, col1Box5, col2Box5, col3Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col4Box5, col6Box5, col2Box5, col3Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol5Box6 == 1) {
                winner = win(col4Box5, col1Box2, col2Box3, col3Box4, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box1 == 1 && flagCol4Box2 == 1 && flagCol4Box3 == 1 && flagCol4Box4 == 1) {
                winner = win(col4Box5, col4Box1, col4Box2, col4Box3, col4Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box6 == 1 && flagCol4Box4 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {
                winner = win(col4Box5, col4Box6, col4Box4, col4Box3, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})



col4Box6.addEventListener("click", function (e) {


    if (flagCol4Box6 === 0) {

        print(col4Box6)


        flagCol4Box6 = 1

        tieArray[23] = 1

        drawMoveTitle(flag)

        if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol4Box5 == 1 && flagCol4Box4 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {

            if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col4Box6, col1Box6, col2Box6, col3Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col4Box6, col6Box6, col2Box6, col3Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol4Box5 == 1 && flagCol4Box4 == 1 && flagCol4Box3 == 1 && flagCol4Box2 == 1) {
                winner = win(col4Box6, col4Box5, col4Box4, col4Box3, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})







col5Box1.addEventListener("click", function (e) {


    if (flagCol5Box1 === 0) {

        print(col5Box1)


        flagCol5Box1 = 1

        tieArray[24] = 1


        drawMoveTitle(flag)

        if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 ||
            flagCol6Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 ||
            flagCol1Box5 == 1 && flagCol2Box4 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1 ||
            flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {


            if (flagCol1Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1) {
                winner = win(col5Box1, col1Box1, col2Box1, col3Box1, col4Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1) {
                winner = win(col5Box1, col6Box1, col2Box1, col3Box1, col4Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box5 == 1 && flagCol2Box4 == 1 && flagCol3Box3 == 1 && flagCol4Box2 == 1) {
                winner = win(col5Box1, col1Box5, col2Box4, col3Box3, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box1, col5Box2, col5Box3, col5Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})



col5Box2.addEventListener("click", function (e) {


    if (flagCol5Box2 === 0) {

        print(col5Box2)


        flagCol5Box2 = 1

        tieArray[25] = 1


        drawMoveTitle(flag)

        if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 ||
            flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 ||
            flagCol6Box1 == 1 && flagCol4Box3 == 1 && flagCol3Box4 == 1 && flagCol2Box5 == 1 ||
            flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1 ||
            flagCol5Box1 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1 ||
            flagCol5Box6 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {

            if (flagCol1Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1) {
                winner = win(col5Box2, col1Box2, col2Box2, col3Box2, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box2 == 1 && flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1) {
                winner = win(col5Box2, col6Box2, col2Box2, col3Box2, col4Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol4Box3 == 1 && flagCol3Box4 == 1 && flagCol2Box5 == 1) {
                winner = win(col5Box2, col6Box1, col4Box3, col3Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box6 == 1 && flagCol2Box5 == 1 && flagCol3Box4 == 1 && flagCol4Box3 == 1) {
                winner = win(col5Box2, col1Box6, col2Box5, col3Box4, col4Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box1 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box2, col5Box1, col5Box3, col5Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box6 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box2, col5Box6, col5Box3, col5Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)
        }
    }
})



col5Box3.addEventListener("click", function (e) {


    if (flagCol5Box3 === 0) {

        print(col5Box3)


        flagCol5Box3 = 1

        tieArray[26] = 1


        drawMoveTitle(flag)

        if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 ||
            flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 ||
            flagCol2Box6 == 1 && flagCol3Box5 == 1 && flagCol4Box4 == 1 && flagCol6Box2 == 1 ||
            flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1 ||
            flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {


            if (flagCol1Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1) {
                winner = win(col5Box3, col1Box3, col2Box3, col3Box3, col4Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box3 == 1 && flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1) {
                winner = win(col5Box3, col6Box3, col2Box3, col3Box3, col4Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box6 == 1 && flagCol3Box5 == 1 && flagCol4Box4 == 1 && flagCol6Box2 == 1) {
                winner = win(col5Box3, col2Box6, col3Box5, col4Box4, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box3, col5Box1, col5Box2, col5Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box3, col5Box6, col5Box2, col5Box4, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})



col5Box4.addEventListener("click", function (e) {


    if (flagCol5Box4 === 0) {

        print(col5Box4)


        flagCol5Box4 = 1

        tieArray[27] = 1


        drawMoveTitle(flag)

        if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 ||
            flagCol6Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 ||
            flagCol2Box1 == 1 && flagCol3Box2 == 1 && flagCol4Box3 == 1 && flagCol6Box5 == 1 ||
            flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box5 == 1 ||
            flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box5 == 1) {

            if (flagCol1Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1) {
                winner = win(col5Box4, col1Box4, col2Box4, col3Box4, col4Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box4 == 1 && flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1) {
                winner = win(col5Box4, col6Box4, col2Box4, col3Box4, col4Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol2Box1 == 1 && flagCol3Box2 == 1 && flagCol4Box3 == 1 && flagCol6Box5 == 1) {
                winner = win(col5Box4, col2Box1, col3Box2, col4Box3, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box4, col5Box1, col5Box2, col5Box3, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box4, col5Box6, col5Box2, col5Box3, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})



col5Box5.addEventListener("click", function (e) {


    if (flagCol5Box5 === 0) {

        print(col5Box5)


        flagCol5Box5 = 1

        tieArray[28] = 1

        drawMoveTitle(flag)

        if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 ||
            flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 ||
            flagCol6Box6 == 1 && flagCol4Box4 == 1 && flagCol3Box3 == 1 && flagCol2Box2 == 1 ||
            flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1 ||
            flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 ||
            flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1) {


            if (flagCol1Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1) {
                winner = win(col5Box5, col1Box5, col2Box5, col3Box5, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box5 == 1 && flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1) {
                winner = win(col5Box5, col6Box5, col2Box5, col3Box5, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol4Box4 == 1 && flagCol3Box3 == 1 && flagCol2Box2 == 1) {
                winner = win(col5Box5, col6Box6, col4Box4, col3Box3, col2Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box1 == 1 && flagCol2Box2 == 1 && flagCol3Box3 == 1 && flagCol4Box4 == 1) {
                winner = win(col5Box5, col1Box1, col2Box2, col3Box3, col4Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box1 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1) {
                winner = win(col5Box5, col5Box1, col5Box2, col5Box3, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box6 == 1 && flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1) {
                winner = win(col5Box5, col5Box6, col5Box2, col5Box3, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})



col5Box6.addEventListener("click", function (e) {


    if (flagCol5Box6 === 0) {

        print(col5Box6)


        flagCol5Box6 = 1

        tieArray[29] = 1


        drawMoveTitle(flag)

        if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 ||
            flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 ||
            flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1 ||
            flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {


            if (flagCol1Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1) {
                winner = win(col5Box6, col1Box6, col2Box6, col3Box6, col4Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1) {
                winner = win(col5Box6, col6Box6, col2Box6, col3Box6, col4Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol1Box2 == 1 && flagCol2Box3 == 1 && flagCol3Box4 == 1 && flagCol4Box5 == 1) {
                winner = win(col5Box6, col1Box2, col2Box3, col3Box4, col4Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box2 == 1 && flagCol5Box3 == 1 && flagCol5Box4 == 1 && flagCol5Box5 == 1) {
                winner = win(col5Box6, col5Box5, col5Box4, col5Box3, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})




col6Box1.addEventListener("click", function (e) {


    if (flagCol6Box1 === 0) {

        print(col6Box1)


        flagCol6Box1 = 1

        tieArray[30] = 1

        drawMoveTitle(flag)

        if (flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1 ||
            flagCol5Box2 == 1 && flagCol4Box3 == 1 && flagCol3Box4 == 1 && flagCol2Box5 == 1 ||
            flagCol6Box2 == 1 && flagCol6Box3 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {

            if (flagCol2Box1 == 1 && flagCol3Box1 == 1 && flagCol4Box1 == 1 && flagCol5Box1 == 1) {
                winner = win(col6Box1, col2Box1, col3Box1, col4Box1, col5Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box2 == 1 && flagCol4Box3 == 1 && flagCol3Box4 == 1 && flagCol2Box5 == 1) {
                winner = win(col6Box1, col5Box2, col4Box3, col3Box4, col2Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box2 == 1 && flagCol6Box3 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col6Box1, col6Box2, col6Box3, col6Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)
        }

    }
})


col6Box2.addEventListener("click", function (e) {


    if (flagCol6Box2 === 0) {

        print(col6Box2)


        flagCol6Box2 = 1

        tieArray[31] = 1


        drawMoveTitle(flag)

        if (flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1 ||
            flagCol5Box3 == 1 && flagCol4Box4 == 1 && flagCol3Box5 == 1 && flagCol2Box6 == 1 ||
            flagCol6Box1 == 1 && flagCol6Box3 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1 ||
            flagCol6Box3 == 1 && flagCol6Box6 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {


            if (flagCol2Box2 == 1 && flagCol3Box2 == 1 && flagCol4Box2 == 1 && flagCol5Box2 == 1) {
                winner = win(col6Box2, col2Box2, col3Box2, col4Box2, col5Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box3 == 1 && flagCol4Box4 == 1 && flagCol3Box5 == 1 && flagCol2Box6 == 1) {
                winner = win(col6Box2, col5Box3, col4Box4, col3Box5, col2Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol6Box3 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col6Box2, col6Box1, col6Box3, col6Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box3 == 1 && flagCol6Box6 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col6Box2, col6Box3, col6Box6, col6Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }

    }
})


col6Box3.addEventListener("click", function (e) {


    if (flagCol6Box3 === 0) {

        print(col6Box3)


        flagCol6Box3 = 1

        tieArray[32] = 1


        drawMoveTitle(flag)

        if (flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1 ||
            flagCol6Box1 == 1 && flagCol6Box2 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1 ||
            flagCol6Box6 == 1 && flagCol6Box5 == 1 && flagCol6Box4 == 1 && flagCol6Box2 == 1) {

            if (flagCol2Box3 == 1 && flagCol3Box3 == 1 && flagCol4Box3 == 1 && flagCol5Box3 == 1) {
                winner = win(col6Box3, col2Box3, col3Box3, col4Box3, col5Box3)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol6Box2 == 1 && flagCol6Box4 == 1 && flagCol6Box5 == 1) {
                winner = win(col6Box3, col6Box1, col6Box2, col6Box4, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol6Box5 == 1 && flagCol6Box4 == 1 && flagCol6Box2 == 1) {
                winner = win(col6Box3, col6Box6, col6Box5, col6Box4, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})



col6Box4.addEventListener("click", function (e) {


    if (flagCol6Box4 === 0) {

        print(col6Box4)


        flagCol6Box4 = 1

        tieArray[33] = 1


        drawMoveTitle(flag)

        if (flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1 ||
            flagCol6Box1 == 1 && flagCol6Box2 == 1 && flagCol6Box3 == 1 && flagCol6Box5 == 1 ||
            flagCol6Box6 == 1 && flagCol6Box5 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {

            if (flagCol2Box4 == 1 && flagCol3Box4 == 1 && flagCol4Box4 == 1 && flagCol5Box4 == 1) {
                winner = win(col6Box4, col2Box4, col3Box4, col4Box4, col5Box4)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box1 == 1 && flagCol6Box2 == 1 && flagCol6Box3 == 1 && flagCol6Box5 == 1) {
                winner = win(col6Box4, col6Box1, col6Box2, col6Box3, col6Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol6Box5 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col6Box4, col6Box6, col6Box5, col6Box3, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})


col6Box5.addEventListener("click", function (e) {


    if (flagCol6Box5 === 0) {

        print(col6Box5)


        flagCol6Box5 = 1

        tieArray[34] = 1


        drawMoveTitle(flag)

        if (flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1 ||
            flagCol5Box4 == 1 && flagCol4Box3 == 1 && flagCol3Box2 == 1 && flagCol2Box1 == 1 ||
            flagCol6Box6 == 1 && flagCol6Box4 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {


            if (flagCol2Box5 == 1 && flagCol3Box5 == 1 && flagCol4Box5 == 1 && flagCol5Box5 == 1) {
                winner = win(col6Box5, col2Box5, col3Box5, col4Box5, col5Box5)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box4 == 1 && flagCol4Box3 == 1 && flagCol3Box2 == 1 && flagCol2Box1 == 1) {
                winner = win(col6Box5, col5Box4, col4Box3, col3Box2, col2Box1)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box6 == 1 && flagCol6Box4 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col6Box5, col6Box6, col6Box4, col6Box3, col6Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }


            checkPossibleTie(pomWinner)

        }
    }
})


col6Box6.addEventListener("click", function (e) {


    if (flagCol6Box6 === 0) {

        print(col6Box6)


        flagCol6Box6 = 1

        tieArray[35] = 1


        drawMoveTitle(flag)

        if (flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1 ||
            flagCol5Box5 == 1 && flagCol4Box4 == 1 && flagCol3Box3 == 1 && flagCol2Box2 == 1 ||
            flagCol6Box5 == 1 && flagCol6Box4 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {

            if (flagCol2Box6 == 1 && flagCol3Box6 == 1 && flagCol4Box6 == 1 && flagCol5Box6 == 1) {
                winner = win(col6Box6, col2Box6, col3Box6, col4Box6, col5Box6)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol5Box5 == 1 && flagCol4Box4 == 1 && flagCol3Box3 == 1 && flagCol2Box2 == 1) {
                winner = win(col6Box6, col5Box5, col4Box4, col3Box3, col2Box2)
                if (winner === true) {
                    pomWinner = winner
                }
            }

            if (flagCol6Box5 == 1 && flagCol6Box4 == 1 && flagCol6Box3 == 1 && flagCol6Box2 == 1) {
                winner = win(col6Box6, col6Box5, col6Box4, col6Box3, col6Box2)
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

    flagCol1Box1 = 0
    flagCol1Box2 = 0
    flagCol1Box3 = 0
    flagCol1Box4 = 0
    flagCol1Box5 = 0
    flagCol1Box6 = 0

    flagCol2Box1 = 0
    flagCol2Box2 = 0
    flagCol2Box3 = 0
    flagCol2Box4 = 0
    flagCol2Box5 = 0
    flagCol2Box6 = 0

    flagCol3Box1 = 0
    flagCol3Box2 = 0
    flagCol3Box3 = 0
    flagCol3Box4 = 0
    flagCol3Box5 = 0
    flagCol3Box6 = 0

    flagCol4Box1 = 0
    flagCol4Box2 = 0
    flagCol4Box3 = 0
    flagCol4Box4 = 0
    flagCol4Box5 = 0
    flagCol4Box6 = 0

    flagCol5Box1 = 0
    flagCol5Box2 = 0
    flagCol5Box3 = 0
    flagCol5Box4 = 0
    flagCol5Box5 = 0
    flagCol5Box6 = 0

    flagCol6Box1 = 0
    flagCol6Box2 = 0
    flagCol6Box3 = 0
    flagCol6Box4 = 0
    flagCol6Box5 = 0
    flagCol6Box6 = 0


    col1Box1.innerHTML = ""
    col1Box2.innerHTML = ""
    col1Box3.innerHTML = ""
    col1Box4.innerHTML = ""
    col1Box5.innerHTML = ""
    col1Box6.innerHTML = ""

    col2Box1.innerHTML = ""
    col2Box2.innerHTML = ""
    col2Box3.innerHTML = ""
    col2Box4.innerHTML = ""
    col2Box5.innerHTML = ""
    col2Box6.innerHTML = ""

    col3Box1.innerHTML = ""
    col3Box2.innerHTML = ""
    col3Box3.innerHTML = ""
    col3Box4.innerHTML = ""
    col3Box5.innerHTML = ""
    col3Box6.innerHTML = ""

    col4Box1.innerHTML = ""
    col4Box2.innerHTML = ""
    col4Box3.innerHTML = ""
    col4Box4.innerHTML = ""
    col4Box5.innerHTML = ""
    col4Box6.innerHTML = ""

    col5Box1.innerHTML = ""
    col5Box2.innerHTML = ""
    col5Box3.innerHTML = ""
    col5Box4.innerHTML = ""
    col5Box5.innerHTML = ""
    col5Box6.innerHTML = ""

    col6Box1.innerHTML = ""
    col6Box2.innerHTML = ""
    col6Box3.innerHTML = ""
    col6Box4.innerHTML = ""
    col6Box5.innerHTML = ""
    col6Box6.innerHTML = ""

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
    gameStatus.style.fontSize = "22px"




    col1Box1.style.backgroundColor = ""
    col1Box2.style.backgroundColor = ""
    col1Box3.style.backgroundColor = ""
    col1Box4.style.backgroundColor = ""
    col1Box5.style.backgroundColor = ""
    col1Box6.style.backgroundColor = ""

    col2Box1.style.backgroundColor = ""
    col2Box2.style.backgroundColor = ""
    col2Box3.style.backgroundColor = ""
    col2Box4.style.backgroundColor = ""
    col2Box5.style.backgroundColor = ""
    col2Box6.style.backgroundColor = ""

    col3Box1.style.backgroundColor = ""
    col3Box2.style.backgroundColor = ""
    col3Box3.style.backgroundColor = ""
    col3Box4.style.backgroundColor = ""
    col3Box5.style.backgroundColor = ""
    col3Box6.style.backgroundColor = ""

    col4Box1.style.backgroundColor = ""
    col4Box2.style.backgroundColor = ""
    col4Box3.style.backgroundColor = ""
    col4Box4.style.backgroundColor = ""
    col4Box5.style.backgroundColor = ""
    col4Box6.style.backgroundColor = ""

    col5Box1.style.backgroundColor = ""
    col5Box2.style.backgroundColor = ""
    col5Box3.style.backgroundColor = ""
    col5Box4.style.backgroundColor = ""
    col5Box5.style.backgroundColor = ""
    col5Box6.style.backgroundColor = ""

    col6Box1.style.backgroundColor = ""
    col6Box2.style.backgroundColor = ""
    col6Box3.style.backgroundColor = ""
    col6Box4.style.backgroundColor = ""
    col6Box5.style.backgroundColor = ""
    col6Box6.style.backgroundColor = ""

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