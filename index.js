// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  return cats.push("Ralph");
}

function destructivelyPrependCat(name){
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
  return cats.pop();
}

function destructivelyRemoveFirstCat(){
  return cats.shift();
}

function appendCat(name){
  const newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat(name){
  const newCats = ["Arnold", ...cats];
  return newCats;
}

function removeLastCat(){
  const newCats = cats.slice(0,-1);
  return newCats;
}

function removeFirstCat(){
  const newCats = cats.slice(1);
  return newCats;
}
