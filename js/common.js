document.getElementById("calulate").addEventListener("click",function(){
    const playerInput = document.getElementById("player-price").value;
    const playerValue = parseInt(playerInput);

    const playerPrice = playerValue *5
    const playerCostInner = document.getElementById('player-cost');
    playerCostInner.innerText = playerPrice;
});

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


// player function

function playerAdd(playerName,btnId){
    const playerNameInner = document.getElementById(playerName).innerText;
    
    let addedName = document.getElementById("player-add");
    
    let areey = 0;
    console.log(areey);
    const totalPlayerSselect = addedName.childElementCount;
    if(totalPlayerSselect > 4){
        
        alert('5 tar besi add korte parba na')
    }
    else{
        
    const li = document.createElement("li");
    li.innerText = playerNameInner;
    addedName.appendChild(li);

    // const btnDisable = getElementById(btnId);
    // btnDisable.style.backgroundColor = "gey";
    // btnDisable.setAttribute("disabled",'');
    };

    
    

    // const addedNameHtml = addedName.innerHTML;
    
    // const a= document.getElementsByTagName();
    // console.log(a);

};

// function disable(){
//     disable = true;

// }
