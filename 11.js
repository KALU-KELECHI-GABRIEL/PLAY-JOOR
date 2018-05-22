function joiner(lista,listb){
    var joined=[],
    len1=lista.length,
    len2=listb.length,
    counter=0,
    c1=0,
    c2=0;
    while(c1<len1 && c2<len2){
        if(lista[c1]<listb[c2]){
            joined[counter]=lista[c1];
            c1++;
        }
        else{joined[counter]=listb[c2];
        c2++;}
    counter++;
    }
    return joined;
}
let x=[1,4,6];let y=[2,3,5];
alert(joiner(x,y));