export default class ProcessBar{
    constructor({milestones}){
        this.milestones = milestones;
    }

    setMilestones(numMilestones){
        return this.milestones = numMilestones;
    }

    getMilestones(){
       return this.milestones
    }
}