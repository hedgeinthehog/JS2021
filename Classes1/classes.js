class Car {
    constructor(make ,model, year, color, engineType){
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color;
        this.engineType = engineType
    }
    getDetails(){            
        return this;
       }    
}

class CarTwo extends Car {
    constructor(make ,model, year, color, engineType, odometer){
       super(make ,model, year, color, engineType);
            this.odometer = odometer
    }

    getDetails(){            
        return this;
       } 

    isUsed(){
        if (this.odometer  > 2000){
            return this.odometer + "(Used)";
         }else {
            return  'new'
        }
       }        
}


class CarThree extends Car {
    //ecma6 - private variables
        #make;
        #model;
        #year;
        #color;
        #engineType;

    getPrivateValues(){
        console.log(this);
        return this;
    }
}


class CarFour extends Car {
    static getDetails(){
        return this;
    }
}
