import person from "./assets/amounts.js";
import CharityTracker from "./assets/CharityTracker.js";

const testDonationBtn = document.getElementById("donateBtn");
const resetBtn = document.getElementById('resetBtn');
const milestonesBtn = document.getElementById('milestoneStatus');
const goal = document.getElementById("goalAmount");
const percent = document.getElementById("percent");
const progressBar = document.getElementById("ProgressBar");
let progressWidth = document.getElementById("progress");

const CharityEvent = new CharityTracker({
    goal: 5000,
    currentAmount: 0,
    milestones: 4,
});

testDonationBtn.addEventListener('click', () => {
    const donation = person.map(item => item.amount);
    const randomDonation = Math.floor(Math.random() * donation.length);
    CharityEvent.addAmount(donation[randomDonation]);
    const progressBarPercent = ((CharityEvent.getCurrentAmount() /CharityEvent.getGoal() ) * (100)).toString();
    goal.innerText = `${CharityEvent.getCurrentAmount()}$ recaudados de: ${CharityEvent._goal}$`;
    percent.innerText = `${CharityEvent.getPercentAchievemnt()}`
    progressWidth.style.width = progressBarPercent.concat("%");
    if(CharityEvent.getCurrentAmount() >= 400){
        progressWidth.innerText = `${CharityEvent.getCurrentAmount()}$`
    }
});

resetBtn.addEventListener('click',() =>{
    location.reload();
});

milestonesBtn.addEventListener('click', () => {
    CharityEvent.milestoneStatus();
})

goal.innerText = `${CharityEvent.getCurrentAmount()}$ recaudados de: ${CharityEvent._goal}$`;
percent.innerText = `${CharityEvent.getPercentAchievemnt()}`;
CharityEvent.setMilestones();