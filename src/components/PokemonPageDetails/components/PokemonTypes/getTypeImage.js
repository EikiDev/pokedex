import useFetchData from "../../../../hooks/useFetchData"

export async function getTypeImages(types) {
    const typeImages = await Promise.all(types.map(async (type) => {
        const { id } = await useFetchData(type.type.url)
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png`
        return spriteUrl
    }))
    return typeImages
}