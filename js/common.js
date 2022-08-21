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

lem_output = document.getElementById("player-add"); 
lem_output.innerHtml

