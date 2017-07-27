const toggleMenuSlide=(id,men)=>{
    let toggle=document.getElementById(id);
    let menu=document.getElementById(men);    
    toggle.addEventListener('click',e=>{ 
        slide(menu);
        viewSubmenus(menu);
    });
}

const slide=(parent)=>{
    let height;    
    if(parent.style.height==0||parent.style.height=='0px'){
        slideDown(parent); 
    }
    else
        slideUp(parent);
}

const slideDown=parent=>{
    parent.querySelectorAll('.submenu').forEach(i=>{
        i.style.height=0;
    })
    let height=parent.children[0].scrollHeight*parent.children.length+5;            
    parent.style.height=height+'px';    
}

const slideUp=parent=>{
    parent.style.height=0;
}

const propagateHeigth=(elem,parent)=>{
    if(parent.classList.contains('submenu')||parent.classList.contains('menu')){                    
        parent.style.height=elem.style.height;        
        propagateHeigth(parent,parent.parentElement.parentElement);        
    }
 }

const returnParent=submenu=>{
    let parent=submenu.parentElement.parentElement;    
    let height=parent.children.length*parent.children[0].scrollHeight+5+'px';
    parent.style.height=height;
    propagateHeigth(parent,parent.parentElement.parentElement);
}

const viewSubmenus=(menu)=>{
    let subs=menu.querySelectorAll('.submenu_container');    
    subs.forEach(s=>{
        let elem=s.nextElementSibling;
        s.addEventListener('click',e=>{             
            slide(elem);
            propagateHeigth(elem,s.parentElement.parentElement);
        });
        elem.querySelector('.back').addEventListener('click',e=>{
            returnParent(elem);
            slide(elem);            
        })
    });
}

export default toggleMenuSlide;
