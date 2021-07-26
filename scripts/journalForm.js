export function dailyExport() {
   return `<article>
   <form class="entryForm">
       <fieldset>
           <label for="entryDate">Date</label>
           <input type="date" name="entryDate" class="entryForm__date">
       </fieldset>
   </form>
</article>

<article>
   <form class="entryForm">
       <fieldset>
           <label for="entryConcept">Concepts covered</label>
           <input type="text" name="entryConcept" class="entryForm__concept">
       </fieldset>
   </form>
</article>

<article>
   <form class="entryForm">
       <fieldset>
           <label for="entryJournal">Journal Entry</label>
           <input type="text" name="entryJournal" class="entryForm__journal">
       </fieldset>
   </form>
</article>

<article>
   <form class="entryForm">
       <fieldset>
           <label for="entryMood">Mood for the day</label>
           <select name="entryMood" id="entryMood">
               <option value="sad">Sad</option>
               <option value="angry">Angry</option>
               <option value ="befuddled">Befuddled</option>
           </select>
       </fieldset>
   </form>
</article>
<button type="button">Record Journal Entry</button>` 
}