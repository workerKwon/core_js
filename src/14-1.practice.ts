function fetchPokemon() {
    const arr = []
    Array(1000).fill(null).forEach(async (_, i) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        const data = await res.json()
        arr.push(data)
    })
    return arr;
}