export default class Milestone {
    constructor({id,value}){
        this.id = id;
        this.value = value;
        this.reached = false;
    }
}