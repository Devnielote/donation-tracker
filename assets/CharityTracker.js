import Milestones from "./plugins/milestones.js";

export default class CharityTracker {
    constructor({goal,currentAmount,milestones}) {
        this._goal = goal;
        this._currentAmount = currentAmount;
        this.milestones = milestones;
        this.milestonesArray = [];
    };
    
    getGoal(){
        return this._goal;
    }

    addGoal(newGoal){
        this._goal = newGoal;
        return `Meta actualizada: ${this._goal}`;
    }

    getCurrentAmount(){
        return this._currentAmount;
    }

    addAmount(newAmount){
        this._currentAmount = this._currentAmount + newAmount;
        return `Cantidad recaudada actualizada: ${this._currentAmount}`;
    }
    
    getPercentAchievemnt(){
        const percentAchievemnt = (this._currentAmount / this._goal) * 100;
        if(percentAchievemnt >= 100){
            return `100% Completado`
        } else {
            return `${percentAchievemnt.toFixed(0)}% del 100%`;
        }
    };
    
    setMilestones(){
        //TODO: Pasar la milestones como objetos con booleanos a un array?
        const milestoneValues = this._goal / this.milestones;
        for(let i = 0; i < this.milestones; i++){
            const el = new Milestones({id:i, value:milestoneValues * i});
            this.milestonesArray.push(el); 
        }
        this.milestonesArray.push(this.milestones);
        this.milestonesArray.pop();

        return this.milestonesArray;
    }

    milestoneStatus(){
        this.milestonesArray.map(el => {
            if(this._currentAmount >= el.value){
                el.reached = true;
                console.log(`Milestone ${el.id} completado`);
            } else {
                console.log(`Milestone ${el.id} sin completar`);
            };
        });
    };
};
