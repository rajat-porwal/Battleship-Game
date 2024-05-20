class shipBuilding {
    constructor(length, timesHit, sunkStatus){
        this.length = length;
        this.timesHit = timesHit;
        this.sunkStatus = sunkStatus;
    }

    shipHit() {
        this.timesHit++;
    }
    
    
}