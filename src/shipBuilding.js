class shipBuilding {
    constructor(length){
        this.length = length;
        this.timesHit = 0;
        this.sunkStatus = false;
    }

    shipHit() { //confused whether to add the condition for hit++ only if its less than ship size or leave it to be handled by other modules
        if (this.timesHit < this.length) { // added the if condition
            this.timesHit++;
          }
          this.isSunk(); // didnt think of calling it in shipHit before
    }
    
    isSunk() {
        if (this.timesHit >= this.length) {
            this.sunkStatus = true;
          }
        return this.sunkStatus;
    }
}

module.exports = {shipBuilding};