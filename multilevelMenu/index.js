const toggleMenu=(id,men)=>{
    let toggle=document.getElementById(id);
    let menu=document.getElementById(men);
    toggle.addEventListener('click',e=>{
        menu.classList.toggle('show');
    });
    if(menu.querySelector('.submenu'))
        viewSubmenu(menu)
}

const viewSubmenu=(men)=>{
    let subs=men.querySelectorAll('.submenu');
    subs.forEach(i=>{
        let x=i.parentElement;   
        let b=i.querySelector('.back');     
        x.querySelector('.menu_link').addEventListener('click',e=>{ 
            console.log('padre');           
            e.preventDefault();
            i.classList.add('show');            
        });
        
        b.addEventListener('click',e=>{            
            e.preventDefault();
            i.classList.remove('show');                                    
        });
    });
}
toggleMenu('menu-toggle','main-menu');
