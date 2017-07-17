(function(d){    
    
    d.getElementById('menu_close').addEventListener('click',e=>{
        var x=document.getElementsByClassName('menu_column');    
        x[2].classList.add('flip');
        setTimeout(function(){
            x[0].classList.add('flip');
        },500)
    });

    d.getElementById('menu_open').addEventListener('click',e=>{
        var x=document.getElementsByClassName('menu_column');    
        x[0].classList.remove('flip');
        setTimeout(function(){
            x[2].classList.remove('flip');
        },500)
    });
})(document);