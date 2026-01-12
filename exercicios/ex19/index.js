class Menu{
    constructor(menu){
        this.bmenu= document.querySelector(menu,barra_menu)
        this.barra_menu=barra_menu
        
    }

    addEventClick(){
        this.bmenu.addEventListener("click",()=>{
           this.barra_menu.classList.toggle("menu_false")
        })
        
    }


}
menu = new Menu("#menu","barra_menu")

menu.addEventClick()
 let c = document.querySelector("#menu")



