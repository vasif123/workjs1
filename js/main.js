var hour = new Date().getHours();
console.log(hour);
if(hour>7&&hour<=12){
    document.body.style.backgroundColor='blue';
    alert('Xow gorduk');
}
else if(hour>12&&hour<=18){
    document.body.style.backgroundColor='red';
    alert('Her vaxtin xeyir');
}
else if(hour>18&&hour<=21){
    document.body.style.backgroundColor='green';
    alert('Axsamin xeyir');
}
else if(hour>21&&hour<=0){
    document.body.style.backgroundColor='purple';
    alert('bildiris');
}
else if(hour>0&&hour<=7){
    document.body.style.backgroundColor='black';
    alert('Gecen xeyre');
}


///////////////////////////////////


var Kvadrat=10;
console.log(Math.pow(Kvadrat,2));


var r =10;
var S=Math.PI*Math.pow(r,2);
console.log(S);
