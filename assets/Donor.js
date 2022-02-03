export default class Donor {
    constructor({name, amount}){
        this.name = name;
        this.amount = amount;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        return this.name = newName;
    }

    getAmount(){
        return this.amount;
    }

    setAmount(newAmount){
        return this.amount = newAmount;
    }
}
