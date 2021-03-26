
const masterButton = document.getElementById("master-button");
const bamButton = document.getElementById("bamboo--button");
let modalWin = document.getElementById("modal-win");
let modalMaster = document.querySelector('.mastercraft--window');
let rewardWin = document.querySelector(".reward--window");

masterButton.addEventListener('click', () => {
    
    modalWin.style.display = "block";
    modalMaster.style.display = "block";

    let modalButton = document.getElementById("modal-master_button");
    modalButton.addEventListener('click', () => {
        modalWin.style.display = "none"
    })
})

bamButton.addEventListener('click', () => {

    modalWin.style.display = "block";
    modalMaster.style.display = "none";
    rewardWin.style.display = "block";

    let closeWin = document.getElementById("close--window");
    closeWin.addEventListener('click', () => {
        modalWin.style.display = "none";
        console.log('ok')
    })
})