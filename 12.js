function rotate(k,list){ var c,d=list.length;
    while(k!==0){
        for(i=0;(i<list.length)&& k!==0;i++){if(i==0){c=list[0];
        list[d-1]=c;}
    else{c=list[i];
    list[i-1]=c;}
    k=k-1;
    }
    }

}
var ef=[1,2,3,4,5,6,7,8,9];
alert(rotate(3,ef));