/////////////////// Header & Menu Option (Hamburger)///////////////////////////////////////////////////////////////////////////////////
/*var li=document.getElementsByName('li');
var a=document.getElementsByName('a');
console.log();
var state=false;
for(let i=0;i<li.length;i++){
    if(state==false){
        li[i].addEventListener('click',function(){
            li[i].style.backgroundColor= 'rgb(255, 255, 255)';   
        });
        a[i].addEventListener('click',function(){
            a[i].style.color= '#000';  
        });

    }else{
        li[i].addEventListener('click',function(){
            li[i].style.backgroundColor= 'none';   
        });
        a[i].addEventListener('click',function(){
            a[i].style.color= '#fff';  
        });
    }
    
    if(i==li.length-1){
       state=true;
       console.log(state);
    }
}*/
var main_menu=document.getElementsByClassName('main_menu_options');
console.log(main_menu);
var menu_all=document.getElementById('menu_all');
var i=1;
var header=document.getElementsByClassName('main_header');
var all_content=document.getElementsByClassName('all_content');
main_menu[main_menu.length-1].addEventListener('click',function(){
    if(i==1){
        main_menu[0].style.boxShadow= '5px 5px 3px rgb(195, 195, 195)';
        menu_all.style.display='flex';
        //all_content[0].style.opacity=.5;
        i=i-1;
    }else{
        //all_content[0].style.opacity=1;
        main_menu[0].style.boxShadow='';
        menu_all.style.display='none'; 
        i+=1;
    }
    
});
i

/////////////////// Menu Option (Hamburger) end///////////////////////////////////////////////////////////////////////////////////

/////////////////// Theme  ///////////////////////////////////////////////////////////////////////////////////
var color=0;
var dark_mode=document.querySelector('#dark_mode');
var header=document.querySelector('.main_header');
dark_mode.addEventListener('click',function yo(){
    if(color==0){
        header.style.background='black';
        color=1;
    }else{
        header.style.background='rgb(0, 195, 255)';
        color=0;
    }
});