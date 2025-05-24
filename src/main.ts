import './style.css';

const display = document.querySelector('#display') as HTMLInputElement | null;
const operators = ['+', '-', '*', '/', '.'];
document.querySelectorAll('.show').forEach((btn) =>{
  btn.addEventListener('click', () => {
    const val = (btn as HTMLButtonElement).textContent;

    if (!display || val === null) return;

    const lastChar = display.value.slice(-1);

    if (operators.includes(val) && operators.includes(lastChar)) {
      return;
    }

    display.value += val;
  });
});

const clear = document.querySelector('.clear') as HTMLButtonElement;
clear.addEventListener('click', ()=>{
  if(display !== null){
    display.value = '';
  }
})

const equals = document.querySelector('.equals') as HTMLButtonElement;
equals.addEventListener('click', () =>{
  if(display !== null){
    display.value = eval(display.value);
  }
})
