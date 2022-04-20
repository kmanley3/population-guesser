const nbYeah = (p0, percent, aug, p) => {
    let pop = p0
    let years = 0
    while(pop < p){
        pop += ((percent/100) * pop) + aug
        years++
    }
    return years
}
console.log(nbYeah(1500,5,100,5000))