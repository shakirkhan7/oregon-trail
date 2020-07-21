class Wagon {
    constructor (capacity){
        this.capacity =capacity
        this.passengers = []

    }
    getAvailableSeatCount(){
        return (this.capacity-this.passengers.length)
    }
    join(traveler){
        
            if((this.capacity-this.passengers.length) > 0){
            this.passengers.push(traveler)
            
            }

    }
        shouldQuarantine(){
        let nowQuarantine = false
        for(let QuarIndex=0; QuarIndex< this.passengers.length; QuarIndex++){
            if (this.passengers[QuarIndex].isHealthy === false){
                nowQuarantine = true
            }
        }
        return nowQuarantine
    } 
    totalFood (){
       let allFood= 0
        for (let foodIndex = 0; foodIndex < this.passengers.length; foodIndex++) {
            allFood += this.passengers[foodIndex].food
            
        }
        return allFood
    }
}
