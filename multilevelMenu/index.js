const toggleMenu=(id,men,animation='fadeIn')=>{
    let toggle=document.getElementById(id);
    let menu=document.getElementById(men);    
    toggle.addEventListener('click',e=>{        
        menu.querySelectorAll(`.show-${animation}`).forEach(i=>i.classList.remove(`show-${animation}`));                
        if(!menu.classList.contains(`show-${animation}`))
            menu.classList.add(`show-${animation}`);
        else
            menu.classList.remove(`show-${animation}`);
    });
    if(menu.querySelector('.submenu'))
        viewSubmenu(menu,animation)
}

const viewSubmenu=(men,animation)=>{
    let subs=men.querySelectorAll('.submenu');    
    subs.forEach(i=>{
        i.parentElement.querySelector('.menu_link').addEventListener('click',e=>{
             let v=document.querySelectorAll(`.show-${animation}`);             
              v.forEach(j=>j.classList.remove(`show-${animation}`));
              let x=i.parentElement.parentElement;
              x.style.height='0';
              i.classList.add(`show-${animation}`);
        });
        i.querySelector('.back').addEventListener('click',e=>{
            i.classList.remove(`show-${animation}`);            
            i.parentElement.parentElement.classList.add(`show-${animation}`);            
        })
    });
}



toggleMenu('menu-toggle','main-menu','explode');
