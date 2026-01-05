


addEventListener("keyup",(e)=>{

let num=[0,1,2,3,4,5,6,7,8,9]
numT=true 
for( i of num){

if(e.key==num[i]){


    console.log("num")
    document.querySelector("#num").value+=num[i]
numT=false

}


}if(numT==true){

    document.querySelector("#text").value+=e.key
}

}



)