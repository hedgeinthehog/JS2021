function onLoad(){
    // grepExample();
    switchExample();
}

function switchExample(){
    var x;
    var d = new Date().getDay().wwwww();

    switch (d) {
        case 1: {
            x="Monday";
            break;
        }
        case 2: {
            x="Tuesday";
            break;
        }
        case 3: {
            x="Wednesday";
            break;
        }
        case 4: {
            x="Thursday";
            break;
        }
        case 5: {
            x="Friday";
            break;
        }
        case 6: {
            x="Saturday";
            break;
        }
        case 7: {
            x="Sunday";
            break;
        }

        default:
            x="It is a new kind of day today";
            break;
    }

    document.write(x);
}

function grepExample(){
    var dummyArray =  [{
        "name": "Janis",
        "surname": "Berzs",
        "age":18
    }, {
        "name": "Inga",
        "surname": "Liepa",
        "age":22
    }, {
        "name": "Samanta",
        "surname": "Ozola",
        "age":29
    }, {
        "name": "Samanta",
        "surname": "Egle",
        "age":25
    }, {
        "name": "Zane",
        "surname": "Priede",
        "age":21
    }]
    var resultArray = jQuery.grep(dummyArray, function(dt){
        return (dt.name == "Samanta" && dt.age>20);
    });

    for (let i = 0; i < resultArray.length; i++) {
        document.write(resultArray[i].name + " " + resultArray[i].surname + "<br>");
    }

}

function arrayExample(){
    cars=["BMW", "Volvo", "Saab", "Ford", "Opel", "Tesla"]
    for (var i=0; i<cars.length; i++){
        if(cars[i]=="Tesla"){
            alert("Found");
        }
    }
    document.write("Array check has been finished!")
}