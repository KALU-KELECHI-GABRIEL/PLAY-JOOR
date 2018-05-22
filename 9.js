//Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

function conkat(x,y){
    let a=x.length;
    let b= y.length;
    var d=a+b;
    var nlist= new Array(d);
    for(i=0;i<x.length;i++){
        
        nlist[i]=x[i];
    }
    for(i=0;i<y.length;i++){
        nlist[i+x.length]=y[i];
    }
return nlist;
}
let x=[1,2,3]; let y=[4,5,6];
alert(conkat(x,y));
