'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); 

const OpenModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i=0; i<btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click',OpenModal);

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}); 

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


 
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
  
document.addEventListener('keydown',function(e){
  console.log(e.key);

  if(e.key === 'Escape'){
    if (!modal.classList.contains('hidden')){
        closeModal();
    }
  }
});

// Another Way to better readability


// const closeModal = function(){
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
//     };

// for (let i=0; i<btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click',OpenModal);
// btnCloseModal.addEventListener('click',closeModal)
// overlay.addEventListener('click',closeModal);