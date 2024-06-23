var p=parseFloat(prompt("Enter a Number"));
var c=0;
for(var i=0;i<=p;i++){
    if(p%i==0){
        c+=1;
    }
}
if(c==2){
    document.writeln("it is a prime ");
}
else{
    document.writeln("it is not a prime");
}