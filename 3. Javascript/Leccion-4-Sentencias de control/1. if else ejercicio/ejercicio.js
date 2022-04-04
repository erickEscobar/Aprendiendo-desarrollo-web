/*
6am-11am - Buenos dias
12pm-18pm - Buenas tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let hora = 13;

if(hora>=19 && hora<=24){
    console.log("Buenas noches");
}
else if(hora>=12 && hora<=18){
    console.log("Buenas tardes");
}
else if(hora>=6 && hora<=11){
    console.log("Buenos dias");
}
else if(hora>=0 && hora<=5){
    console.log("Durmiendo");
}
else{
    console.log("Error hp");
}