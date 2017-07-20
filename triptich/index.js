'use strict';
(function(d){    
    
    d.getElementById('menu_close').addEventListener('click',e=>{        
        let x=document.getElementsByClassName('menu_column');
        d.getElementById('modal').classList.remove('visible');
        x[2].classList.add('flip');
        setTimeout(function(){
            x[0].classList.add('flip');
            d.getElementById('menu_close').classList.add('hidden');
        },500)
    });    

    d.getElementById('menu_open').addEventListener('click',e=>{
        var x=document.getElementsByClassName('menu_column');    
        x[0].classList.remove('flip');
        setTimeout(function(){
            x[2].classList.remove('flip');
            
        },500)
       
    });

    let items=document.querySelectorAll('.item');
    var modal=document.querySelector("#modal");
    items.forEach(i=>{
        i.addEventListener('click',e=>{            
            modal.classList.remove('visible');            
            d.querySelector('.menu_container').classList.add('minimize');
            let el=e.currentTarget;                        
            modal.querySelector('.current_title').innerText=el.querySelector('.item_name').innerText;
            modal.querySelector('.modal_body').innerHTML='<img src="'+
            el.querySelector('img').attributes.src.nodeValue+'" />'+
            '<p>'+el.querySelector('.item_description').innerText+'</p>';                        
            modal.classList.add('visible');                        
        })
    });

    document.getElementById('aceptar').addEventListener('click',e=>{
        modal.classList.remove('visible');
        d.querySelector('.menu_container').classList.remove('minimize');
    })
    document.getElementById('cancelar').addEventListener('click',e=>{
        modal.classList.remove('visible');
        d.querySelector('.menu_container').classList.remove('minimize');
    })
})(document);