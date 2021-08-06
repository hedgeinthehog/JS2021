
let car1 = new Car('Audi', 'Avant', '1998', 'black', 'gas');
let car2 = new CarTwo('BMW', 'bai', 'bum', 'digi', 'bai', 5500);
let car3 = new CarTwo('3 private data', '3 private data', '3 private data', '3 private data', '3private data');
let car4 = new CarTwo('4 static method', '4 static method', '4 static method', '4 static method', '4 static method');


function showData(pic){
        
    switch (pic.id){
        case "one":
            LoadCarData(car1);
            break;

        case "two":                
            LoadCarData(car2);
            document.getElementById("odometerId").hidden=false;
            document.getElementById("odometer").innerHTML=car2.isUsed();
            break;   

        case "three":                
            LoadCarData(car3);
            car3.getDetails();
            break;   

        case "four":                
            LoadCarData(car4);
            CarFour.getDetails(car4);
            break;  

        default:
            console.log('DEFAULTTTTTTT')   
    }
}

function LoadCarData(c) {
    document.getElementById('make').innerHTML=c.make;
    document.getElementById('model').innerHTML=c.model;
    document.getElementById('year').innerHTML=c.year;
    document.getElementById('color').innerHTML=c.color;
    document.getElementById('engineType').innerHTML=c.engineType;   
    document.getElementById("odometerId").hidden=true;
}




