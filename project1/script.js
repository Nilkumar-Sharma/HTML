
window.onload = () => {


    const panels=document.querySelectorAll('.panel')
    console.log(panels)
    
    panels.forEach(panel => {
    
        panel.addEventListener('click',()=>{
            removeActiveclass(panels);
            panel.classList.add('active')
        })
        
    });


};

function removeActiveclass(panels){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })

}