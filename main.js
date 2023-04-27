const burgers = document.querySelectorAll('.burger');
const burgersImg = document.querySelectorAll('.burger-img');
const closeBurger = document.querySelector('.close-burger');
const newDiv = document.createElement('DIV');
const container = document.getElementById('contenedor');
const burgerTitle = document.querySelectorAll('.titulo-burger');
let burger;


burgers.forEach((burger, index, ) => {
    burger.addEventListener('click', () => {
        const burgerImg = burgersImg[index];
        const burgerSrc = burgerImg.src;
        const burgerH5 = burgerTitle[index];
         
        
        container.appendChild(newDiv);
        newDiv.classList.add('burger-active');
        newDiv.innerHTML = `
            <img  src="${burgerSrc}" alt="">
            <h5 class="burgerh5-active">${burgerH5.textContent}</h5>
            <i class="fa-regular fa-circle-xmark close-burger"></i>`;

         const closeBtn = newDiv.querySelector('.close-burger');
            closeBtn.addEventListener('click', () => {
            
            newDiv.remove();
        });

    });

});



let counter = 1;
let manualBtns = document.querySelectorAll('.manual-btn');

manualBtns.forEach((manualBtn)=>{
    manualBtn.addEventListener('click', ()=>{
        clearInterval(pictureChange);
        pictureChange = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
           }
       }, 5000);
    })
})

 let pictureChange = setInterval(() => {
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if (counter > 4) {
         counter = 1;
    }
}, 5000);












