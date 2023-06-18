const equalToButton = document.querySelector('#equalsTo');
const buttons = document.querySelector('.buttons');
const displayScreen = document.querySelector('.displayScreen');
const clearButton = document.getElementById('clear');


function addStuffToDisplayWindow(event){
    
    displayScreen.innerHTML += event.target.innerHTML;

}

buttons.addEventListener('click',addStuffToDisplayWindow);

clearButton.onclick = () =>{
    displayScreen.innerHTML='';
}