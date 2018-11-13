export function shuffle(array: any[]) {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;

    // While there remain elements to shuffle...
    while (--currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


export function generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
}
