var cout=0;
function move(even) {
  //  alert(isNaN(even));

    if(isNaN(even)){
        cout+=1;
        if(cout>3){
            alert("Hay... My love are you ok?")
            cout=0;
            even.style.background="red";

        }
    }
    var left1=Math.floor((Math.random()*window.innerWidth)+ 1 );
    var top1=Math.floor( (Math.random()*window.innerHeight)+ 1 );
    even.style.left = left1+"px";
    even.style.top = top1+"px";

}
function evencliked() {
    alert("Yes, i love you too :*");
}
