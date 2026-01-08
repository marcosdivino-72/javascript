function somar(...valor){
let r=0
for (i in valor){

    r+=valor[i]

}
return r
}

console.log(somar(-1,6,8,7,-10))