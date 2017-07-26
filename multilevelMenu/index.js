const toggleMenu=(id,men,navID)=>{
    let toggle=document.getElementById(id);
    let menu=document.getElementById(men);
    let nav=document.getElementById(navID);
    toggle.addEventListener('click',e=>{        
        menu.querySelectorAll('.show').forEach(i=>i.classList.remove('show'));
        menu.classList.toggle('show');
    });
    if(menu.querySelector('.submenu'))
        viewSubmenu(menu,nav)
}

const viewSubmenu=(men,nav)=>{
    let subs=men.querySelectorAll('.submenu');    
    subs.forEach(i=>{
        i.parentElement.querySelector('.menu_link').addEventListener('click',e=>{
             let v=document.querySelectorAll('.show');
              v.forEach(j=>{j.classList.remove('show');
                    fadeOut(j);
                });              
              i.classList.add('show');
              fadeIn(i);              
        });
        i.querySelector('.back').addEventListener('click',e=>{
            i.classList.remove('show');
            fadeOut(i);
            i.parentElement.parentElement.classList.add('show');
            fadeIn(i.parentElement.parentElement)
        })
    });
}


const fadeIn=(cont)=>{
    const childs=cont.children;
    for(let i of childs)
    i.classList.add('fadeIn')
}

const fadeOut=(cont)=>{
    const childs=cont.children;
    for(let i of childs)
    i.classList.remove('fadeIn')
}
toggleMenu('menu-toggle','main-menu','main-nav');
