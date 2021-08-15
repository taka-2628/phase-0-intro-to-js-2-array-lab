// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//.push (add at the end)
function destructivelyAppendCat(name){
    cats.push("Ralph");
}

//.upshift (add at the begging)
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

//.shift (remove at the begging)
function destructivelyRemoveLastCat(name){
    cats.pop();
}

//.shift (remove at the begging)
function destructivelyRemoveFirstCat(name){
    cats.shift();
}

//Spread Operator (make a copy and add at the end)
function appendCat(name) {
    const newCatsArray = [...cats, 'Broom']; 
    return newCatsArray;
}

//Spread Operator (make a copy and add at the beggining)
function prependCat(name){
    const newCatsArray = ["Arnold", ... cats]
    return newCatsArray;
}

/*
Alternative solutions
//Spread Operator (make a copy and add at the end)
function appendCat(name) {
    const newCatsArray = [...cats, name]; 
    return newCatsArray;
}
appendCat('Broom');

//Spread Operator (make a copy and add at the beggining)
function prependCat(name){
    const newCatsArray = [name, ... cats]
    return newCatsArray;
}
prependCat("Arnold")
*/

// (make a copy and remove the last one)
function removeLastCat(name){
    const copyOfCats = cats.slice(0, cats.length -1);
    return copyOfCats;
}

// (make a copy and remove the first one)
function removeFirstCat(name){
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}
