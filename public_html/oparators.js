//general result Checker


var mark= prompt("Enter Your Mark");
var fline="Yoru Graid = ";
if(mark >= 0 && mark <= 32) {
    document.write("<h1>"+fline+"F"+"</h1>");
}

if(mark >= 33 && mark <= 39) {
    document.write("<h1>"+fline+"D"+"</h1>");
}
if(mark >= 40 && mark <= 49) {
    document.write("<h1>"+fline+"C"+"</h1>");
}
if(mark >= 50 && mark <= 59) {
    document.write("<h1>"+fline+"B"+"</h1>");
}
if(mark >= 60 && mark <= 69) {
    document.write("<h1>"+fline+"A-"+"</h1>");
}
if(mark >= 70 && mark <= 79) {
    document.write("<h1>"+fline+"A"+"</h1>");
}
if(mark >= 80 && mark <= 100) {
    document.write("<h1>"+fline+"A+"+"</h1>");
}