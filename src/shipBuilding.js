class shipBuilding {
    constructor(length, timesHit, sunkStatus){
        this.length = length;
        this.timesHit = timesHit;
        this.sunkStatus = sunkStatus;
    }

    shipHit() { //confused whether to add the condition for hit++ only if its less than ship size or leave it to be handled by other modules
        this.timesHit++;
    }
    
    isSunk() {
        if(this.timesHit == this.length){
            this.sunkStatus = true;
        }
    }
}