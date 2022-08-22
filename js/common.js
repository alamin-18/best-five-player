// player add function
let playerCount =0;
let arr = [];
function playerAdd(playerName,btnId){
        playerCount = playerCount + 1;
        if(playerCount <= 5){
            arr.push(1)
        }
   
    console.log(playerCount);
    const playerNameInner = document.getElementById(playerName).innerText;
    
    let addedName = document.getElementById("player-add");
    // condition
    const totalPlayerSselect = addedName.childElementCount;
    if(totalPlayerSselect > 4){
        
        alert('5 tar besi add korte parba na')
    }
    else{
        // element create
    
    const li = document.createElement("li");
    li.innerText = playerNameInner;
    addedName.appendChild(li);
        // disable button
    const btnDisable = document.getElementById(btnId);
    btnDisable.style.backgroundColor = "#A2A9AF";
    btnDisable.setAttribute("disabled",'');
    };

};

// claculation function

document.getElementById("calulate").addEventListener("click",function(){    
    const playerInput = document.getElementById("player-price").value;
    const playerValue = parseInt(playerInput);
    
    const playerPrice = playerValue * arr.length;
    const playerCostInner = document.getElementById('player-cost');
    playerCostInner.innerText = playerPrice;
    playerInput.value = '';
});

// total calculation function

document.getElementById("total-btn").addEventListener("click",function(){

    const manegerInput = document.getElementById("maneger-input").value;
    const manegerValue = parseInt(manegerInput);

    const coachInput = document.getElementById("coach-input").value;
    const coachValue = parseInt(coachInput);

    const playerCostInner = document.getElementById('player-cost').innerText;
    const playerCost = parseInt(playerCostInner);
    
    const totalCost = manegerValue + coachValue + playerCost;
    const total = document.getElementById('total-cost');
    total.innerText = totalCost;

})

