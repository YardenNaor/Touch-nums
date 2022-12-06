'use strict'

// Connecting Javascript with HTML
// (Let the fun begin)
// Touch the Numbers (proj name: touch-nums)
// • User sees a board with 16 cells, containing numbers 1..16, in a random order
// o Hint: use an HTML table
// o Hint: Nice technique for building the board:
// place the 16 numbers in a simple array, shuffle it, then build the <table> by
// popping a number from the nums array.
// o Note: there is no need to use as matrix in this exercise
// • User should click the buttons in a sequence (1, 2, 3,… 16)
// • When user clicks the a button - call a function cellClicked(clickedNum)
// o If right – the button changes its color
// o When user clicks the wrong button noting happen
// • When user clicks the first number, game time starts and presented (3 digits after the
// dot, like in: 12.086)
// • Add difficulties (larger boards: 25, 36)

console.log('hi:',)

var gNums = []
var gcurrNum = 0
var gNumsCount
var startTime

function onGameInit() {
    getNums(gNumsCount)
    shuffle(gNums)
    startTime= Date.now ()
    renderTable(gNumsCount)
    if (gcurrNum===gNumsCount) onVictory()
}

function renderTable(numsCount) {
    const rowcount = Math.sqrt(numsCount)
    console.log('rowcount:',rowcount)
    var strHTML = ''
    for (var i = 0; i < rowcount; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < rowcount; j++) {
            const cell = drawNum(gNums)
            console.log('cell:',cell)
            strHTML += `<td data-i="${i}" data-j="${j}" onclick="onCellClicked(this,${cell})"> ${cell}</td>`
        }
        strHTML += '</tr>'
// console.log('str:',strHTML)
    }

    const elBoard = document.querySelector('.board')
    console.log(':',strHTML)
    elBoard.innerHTML = strHTML
}



function onCellClicked(elCell, num) {
    if (num === gcurrNum+1) {
        gcurrNum = num
        elCell.style.backgroundColor = 'blue'
    }

}


function onVictory() { 
  
    const elh1=  document.querySelector('h1')
   elh1.innerText= 'FINISHED!'
const endTime= Date.now()
const GameTime= endTime-startTime
   onGameInit()
    
}

function getNums(numsCount) {
    for (var i = 1; i <= numsCount; i++) {

        gNums.push(i)
        console.log('gnums:', gNums)
    }
}


function shuffle(items) {
    var randIdx, keep;
    for (var i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length);
        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}


function getTime() {
    return new Date().toString().split(' ')[4];
}


function drawNum(nums) {
    var randIdx = getRandomInt(0, nums.length)
    var num = nums[randIdx]
    nums.splice(randIdx, 1)
    return num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function onLevelHard(){
gNumsCount=36
onGameInit()
}

function onLevelMedium(){
gNumsCount=25
onGameInit()
}

function onLevelEasy(){
gNumsCount=16
onGameInit()
}

function getTimer(){

}

// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
