document.getElementById("neymar").addEventListener("click",function(){
    const playerName = document.getElementById("neymar-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);

    const diseble = document.getElementById("neymar");
    if(playerName.innerText=== li.innerText ){
        diseble.setAttribute('disabled', true);
    }
    
});
document.getElementById("mbappe").addEventListener("click",function(){
    const playerName = document.getElementById("mbappe-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("marchado").addEventListener("click",function(){
    const playerName = document.getElementById("marchado-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("ramos").addEventListener("click",function(){
    const playerName = document.getElementById("ramos-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("sanches").addEventListener("click",function(){
    const playerName = document.getElementById("sanches-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("messi").addEventListener("click",function(){
    const playerName = document.getElementById("messi-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("kroos").addEventListener("click",function(){
    const playerName = document.getElementById("kroos-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("maria").addEventListener("click",function(){
    const playerName = document.getElementById("maria-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});
document.getElementById("salah").addEventListener("click",function(){
    const playerName = document.getElementById("salah-name").innerText;
    
    const addedName = document.getElementById("player-add");
    const li = document.createElement("li");
    li.innerText = playerName;
    addedName.appendChild(li);
});

let nodeList = document.querySelectorAll("li");
for (let i = 0; i < nodeList.length; i++) {
        console.log(i.innerText)
}