// DOM Queries
// const startButton = document.querySelector("#start-button")
const startContainer = document.querySelector("#start-container")
const gameContainer = document.querySelector("#game-container")
const createContainer = document.querySelector("#create-container")

// Input Queries
const fName = document.querySelector("#fname")
const chosenEle = document.querySelector('#chosen-element')

// Player 1
const p1Name = document.querySelector("#p1-name")
const p1Ele = document.querySelector("#p1-element")

// Player 2
const p2Name = document.querySelector("#p2-name")
const p2Ele = document.querySelector("#p2-element")

// Battle
const prompt = document.querySelector("#battle-prompt")
const battleBtn = document.querySelector("#battle-button")


class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
}

const game = {
    players: [],
    playerOneReady: false,
    start: function() {
        // startButton.classList.toggle("hide")
        startContainer.classList.toggle("hide")
        gameContainer.classList.toggle("hide")
    },
    createPlayer: function(currEle) {
        // Need name and element
        // console.log("Creating player")
        // console.log(chosenEle.value)
        // console.log(fName.value)

        // console.log("actual element", currEle)
        // console.log(this.players)

        if(!this.playerOneReady) {
            console.log("Creating player one")
            this.players.push(new Player(fName.value, currEle))
            p1Name.textContent = fName.value
            p1Ele.classList.toggle("hide")
            prompt.innerText = "Player 2: Enter name and element"
            this.playerOneReady = true
        } else {
            console.log("Creating player two")
            this.players.push(new Player(fName.value, currEle))
            p2Name.textContent = fName.value
            p2Ele.classList.toggle("hide")
            prompt.innerText = "Let's Battle!!!"
            createContainer.classList.toggle("hide")
            battleBtn.classList.toggle("hide")
        }

        this.clearForm()
    },
    checkElement: function(eventParam) {
        eventParam.preventDefault()

        // Edge case
        const currEle = chosenEle.value.toLowerCase()
        // console.log(currEle)

        if(currEle === "water" || currEle === "fire" || currEle === "grass") {
            chosenEle.style.backgroundColor = "white"
            this.createPlayer(currEle)
        } else {
            chosenEle.style.backgroundColor = "#fd5e53"
        }

        // Change player name
        // p1Name.textContent = fName.value
    },
    clearForm: function() {
        fName.value = ""
        chosenEle.value = ""
    },
    battle: function() {
        // console.log("We are battling", this.players)
        // console.log("Player One", this.players[0])
        // console.log("Player Two", this.players[1])

        const p1 = this.players[0]
        const p2 = this.players[1]
        const pOneName = this.players[0].name
        const pTwoName = this.players[1].name

        console.log(p1.element, 'this is P1')
        console.log(p2.element, 'this is P2')

        
        // Update element displays - only if your file names are lowercase and all png files
        // if(p1.element === "fire") {
        //     p1Ele.src = `images/${p1.element}.png`
        // } else if(p1.element === "grass") {
        //     p1Ele.src = `images/${p1.element}.png`
        // } else if (p1.element === "water") {
        //     p1Ele.src = `images/${p1.element}.png`
        // }
        p1Ele.src = `images/${p1.element}.png`
        p2Ele.src = `images/${p2.element}.png`
    
        if(p1.element === "fire" && p2.element === "grass"){
            prompt.innerText = `${pOneName} Wins!`
        } else if (p1.element=== "grass" && p2.element=== "water"){
            prompt.innerText = `${pOneName} Wins!`
        } else if (p1.element === "water" && p2.element === "fire"){
            prompt.innerText = ` ${pOneName} Wins!`
        } else if (p1.element === p2.element){
            prompt.innerText = "Its a TIE!"
        } else {
            prompt.innerText = `${pTwoName} Wins! HOORAY!!!`
        }
        console.log(p1)
    }
}