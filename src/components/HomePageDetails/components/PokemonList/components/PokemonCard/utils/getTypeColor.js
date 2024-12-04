const typeColor = {
    normal: "#9FA19F",
    fighting: "#FF8000",
    flying: "#81B9EF",
    poison: "#7F3FBF",
    ground: "#8C4820",
    rock: "#AFA981",
    bug: "#A1A61C",
    ghost: "#724573",
    steel: "#60A1B8",
    fire: "#E62829",
    water: "#2980EF",
    grass: "#47A62D",
    electric: "#F2B705",
    psychic: "#F24484",
    ice: "#3FD8FF",
    dragon: "#5060E1",
    dark: "#50413F",
    fairy: "#F077F2"
}

const typeDarkColor = {
    normal: "#7C7D7C",
    fighting: "#cd4e00",
    flying: "#6E9FCC",
    poison: "#67339C",
    ground: "#693618",
    rock: "#7d774f",
    bug: "#666918",
    ghost: "#671869",
    steel: "#185369",
    fire: "#7b0000",
    water: "#183B69",
    grass: "#296918",
    electric: "#c08500",
    psychic: "#c01252",
    ice: "#0da6cd",
    dragon: "#182169",
    dark: "#372826",
    fairy: "#bd3ebd"
}

export function getTypeColor(type, isDark) {
    if(isDark) return typeDarkColor[type]
    return typeColor[type]
}