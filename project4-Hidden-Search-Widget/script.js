window.onload=()=>{
const search=document.querySelector('.search-container');
const btn=document.querySelector('.btn');
const input=document.querySelector('input');

btn.addEventListener('click',()=>{
 btn.classList.toggle('active');
 input.classList.toggle('active');
 if(input.classList.contains('active'))
 input.focus();
 console.log('clicked')
});
}