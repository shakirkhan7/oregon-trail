class Wagon {
    constructor (capacity, passengers){
        this.capacity =capacity
        this.passengers = []

    }
    getAvailableSeatCount(){
        return (this.capacity-this.passengers.length)
    }
    join(traveler){
        let capacity = 0;
        
            if(this.getAvailableSeatCount() > 0)
            {this.passengers.push(traveler)
            
            }

    }
        shouldQuarantine(){
        let nowQuarantine = true
        for(let QuarIndex=0; QuarIndex< this.passengers.length; QuarIndex++){
            if (this.passengers[QuarIndex].isHealthy === false){
                nowQuarantine=true
            }
        
        }
        return nowQuarantine
    } 
    totalFood (){
       let allFood= 1
        for (let foodIndex = 0; foodIndex < this.passengers.length; foodIndex++) {
            allFood += this.passengers[foodIndex].food
            
        }
        return allFood
    }
}
