import useFetchData from "../../../../hooks/useFetchData"

export async function getEffects(abilities) {
    const effects = await Promise.all(abilities.map(async (ability) => {
        const { effect_entries } = await useFetchData(ability.ability.url)
        if(effect_entries.length === 0) return "Ability effect not found"
        let effectsInEnglish = effect_entries.filter((effect) => effect.language.name === "en")
        return (effectsInEnglish[0].effect)
    }))
    return effects
}