import { DailyJournal } from "./dailyJournal.js"

const container = document.querySelector("#entries")
const render = () => {
    
    container.innerHTML = DailyJournal()
}
render()



