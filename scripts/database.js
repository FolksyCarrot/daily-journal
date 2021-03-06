const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "sad"
        }, {
            Id: 2,
            date: "07/25/2025",
            concept: "GitHub",
            entry: "We talked about the concepts of a push and pull request on gitHub.",
            mood: "angry"
        }, {
            Id: 3 ,
            date: "07/26/2025",
            concept: "JavaScript",
            entry: "We talked about functions, objects, and arrays.",
            mood: "befuddled"
        }
    ]
}


export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}