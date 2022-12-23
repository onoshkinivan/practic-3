const container = document.createElement('div');
const myButton = document.createElement('button');
const title = document.querySelector('#title')

container.textContent = 'Текст внутри контейнера';
myButton.textContent = 'Применить';

document.body.appendChild(container);
document.body.appendChild(myButton);

container.addEventListener('click', function(){
    title.textContent =  title.textContent.toUpperCase()
})

const block = document.createElement('div');

myButton.addEventListener('click', function(){
    block.textContent = 'Блок создан при клике на кнопку';
    document.body.appendChild(block);
})

block.addEventListener('click', function(){
    block.style.color = 'red';
    block.style.paddingTop = '20px' 
})