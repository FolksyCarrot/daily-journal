import { Entries } from "./entries.js"
import { dailyExport } from "./journalForm.js"
// Keep your existing imports and add the new import for the form function

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        

        <article class="entryForm">
           ${ dailyExport() }
        </article>
        
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}


