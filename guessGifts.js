let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]

const guessGifts = (wishlist, presents) => {
  const myGuess = []
  for(let i = 0; i < presents.length; i++){
    for(let j = 0; j < wishlist.length; j++){
    if(presents[i].size === wishlist[j].size && presents[i].clatters === wishlist[j].clatters && presents[i].weight === wishlist[j].weight){
      myGuess.push(wishlist[j].name)
      }
    }
  }
  return myGuess
}

console.log(guessGifts(wishlist, presents))

