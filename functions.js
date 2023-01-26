// checks whether there are the same marks on the selected fields, if so, it returns value = true

function win (box1, box2, box3, box4, box5) {

    if (box1.getElementsByTagName(`p`)[0].textContent === "X" && box2.getElementsByTagName(`p`)[0].textContent === "X" && box3.getElementsByTagName(`p`)[0].textContent === "X" && box4.getElementsByTagName(`p`)[0].textContent === "X" && box5.getElementsByTagName(`p`)[0].textContent === "X") {
        let player = "x"
        playerWon(player, box1, box2, box3, box4, box5)
        return true

    } else

    if (box1.getElementsByTagName(`p`)[0].textContent === "O" && box2.getElementsByTagName(`p`)[0].textContent === "O" && box3.getElementsByTagName(`p`)[0].textContent === "O" && box4.getElementsByTagName(`p`)[0].textContent === "O" && box5.getElementsByTagName(`p`)[0].textContent === "O") {
        let player = "o"
        playerWon(player, box1, box2, box3, box4, box5)
        return true
    }
    return false
}


// set all flags to 1 - end of the game, impossibility to click on the next box
function setFlagsTo_1 () {

    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            flagColBox[i][j] = 1;
        }
    }

}


function print (box) {
    let paragraph = document.createElement("p")

    flag = setMove(paragraph, flag)

    box.appendChild(paragraph)

    new Audio(`audio/simple-move.mp3`).play()
}


// chooses which player's turn it is
function setMove (paragraph, flag) {
    if (flag === 0) {
        paragraph.textContent = "X"
        paragraph.style.color = "blue"
        return flag = 1
    } else {
        paragraph.textContent = "O"
        paragraph.style.color = "red"
        return flag = 0
    }

}

/* writes the player who is currently on the turn */
function drawMoveTitle (flag) {
    if (flag === 0) {
        onMove.textContent = ""
        onMove.append("X")
        onMove.style.color = "blue"
    } else {
        onMove.textContent = ""
        onMove.append("O")
        onMove.style.color = "red"
    }
}


function playerWon(player, box1, box2, box3, box4, box5) {
    onMove.textContent = ""
    onMove.style.color = "orange"
    onMove.style.fontSize = "40px"

    gameStatus.textContent = ""
    gameStatus.append("Wins:")
    gameStatus.style.fontSize = "30px"

    box1.style.backgroundColor = "orange"
    box2.style.backgroundColor = "orange"
    box3.style.backgroundColor = "orange"
    box4.style.backgroundColor = "orange"
    box5.style.backgroundColor = "orange"

    new Audio(`audio/win.wav`).play()

    if (player === "x") {
        onMove.append("X")


        let pointsX = playerX.innerHTML

        pointsX++
        playerX.textContent = ""

        localStorage.setItem("playerX", JSON.stringify(pointsX))

        playerX.append(pointsX)

    } else {
        onMove.append("O")


        let pointsO = playerO.innerHTML

        pointsO++
        playerO.textContent = ""

        localStorage.setItem("playerO", JSON.stringify(pointsO))

        playerO.append(pointsO)

    }

}


/* if the winner is not found, it checks the field and if the field is full of 1, then it is a draw. 
    If a winner has been found sets all flags to 1 - makes the next move impossible.*/
function checkPossibleTie (winner) {


    if (winner === false) {
        if (checkArrayEqualElements(tieArray)) {
            tie()
        }
    } else if (winner === true) {
        setFlagsTo_1()
    }
}

/* a tie is written in the title */
function tie () {
    onMove.textContent = ""

    gameStatus.textContent = ""
    gameStatus.append("Draw!")
    gameStatus.style.fontSize = "40px"

    new Audio(`audio/tie.wav`).play()
}



function checkArrayEqualElements(_array) {

    if (typeof _array !== 'undefined') {
        let firstElement = _array[0];
        return _array.every(function (element) {
            return element === firstElement;
        });
    }
    return "Array is Undefined";


}