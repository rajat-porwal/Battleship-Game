class shipBuilding {
    constructor(length, timesHit, sunkStatus){
        this.length = length;
        this.timesHit = 0;
        this.sunkStatus = false;
    }

    shipHit() { //confused whether to add the condition for hit++ only if its less than ship size or leave it to be handled by other modules
        this.timesHit++;
    }
    
    isSunk() {
        if(this.timesHit == this.length){ // ship length equals no. of times it has been hit, it drowns 
            this.sunkStatus = true;
        }
    }
}

export default shipBuilding;