function conkat_alt(ex,ey){
    d=ex.length+ey.length;
    var naray=new Array(d),c=0,e=1;
    for(i=0;i<ex.length;i++){
        if(i===0){naray[0]=ex[0];
        let c=0;}
        else{
            naray[c+2]=ex[i];
            c+=2;
        }
    }
    for(i=0;i<ey.length;i++){
        if(i==0){naray[1]=ey[0];
        let e=1;}
        else{
            naray[e+2]=ey[i];
            e+=2;
        }  
}
return naray;
}
var j=[1,99,78];
var k=[4,5,6];
alert(conkat_alt(j,k));









