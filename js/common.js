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
        
        alert('must be added 5 player ')
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
    // palyer price input value  
    if(arr.length == 0){
        alert("Please add Player")
    }
    const playerInput = document.getElementById("player-price");
    const playerString =playerInput.value;
    const playerValue = parseInt(playerString);
    playerInput.value = '';
    
    // player Price calculation
    
    const playerPrice = playerValue * arr.length;
    const playerCostInner = document.getElementById('player-cost');
    playerCostInner.innerText = playerPrice;

});

// total calculation function

document.getElementById("total-btn").addEventListener("click",function(){
    // maneger price input value
    const manegerInput = document.getElementById("maneger-input");
    const manegerString = manegerInput.value;
    const manegerValue = parseInt(manegerString);
    manegerInput.value = "";
    
    // coach Input value
    const coachInput = document.getElementById("coach-input");
    const coachString = coachInput.value;
    const coachValue = parseInt(coachString);
    coachInput.value = "";

    // total calculation
    const playerCostInner = document.getElementById('player-cost').innerText;
    const playerCost = parseInt(playerCostInner);
    
    const totalCost = manegerValue + coachValue + playerCost;
    const total = document.getElementById('total-cost');
    total.innerText = totalCost;
    
});

