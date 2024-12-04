import { useState, useEffect } from "react"
import useFetchData from "./useFetchData"
import { useQuery } from "react-query"
import { fetchPokemonData } from "../utils/fetchPokemonData"

export const useFetchPokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsUrl, setPokemonsUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10")
    const [ pokemonsData, setPokemonsData ] = useState({
        sprites: [],
        pokemonsId: [],
        pokemonsType: []
    })
    const [typeSelected, setTypeSelected] = useState('')
    const [maxPokemons, setMaxPokemons] = useState(10)

    useQuery('pokemons', fetchPokemons, {
        refetchOnWindowFocus: false
    })

    useQuery(['pokemonsData', pokemons], getPokemonsData, {
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        if (typeSelected) {
            fetchTypePokemons()
        } else {
            resetPokemons()
        }
    }, [typeSelected, maxPokemons])

    async function resetPokemons() {
        const response = await useFetchData("https://pokeapi.co/api/v2/pokemon?limit=10")
        setPokemons(response.results)
        setPokemonsUrl(response.next)
    }
    
    async function fetchPokemons() {
        const response = await useFetchData(pokemonsUrl)
        setPokemons(currentPokemons => [...currentPokemons, ...response.results])
        setPokemonsUrl(response.next)        
    }

    async function fetchTypePokemons() {
        const typeData = await useFetchData(`https://pokeapi.co/api/v2/type/${typeSelected}`)
        const pokemonsType = await typeData.pokemon.slice(0, maxPokemons)
        const pokemonTypeList = pokemonsType.map(pokemon => pokemon.pokemon)
        setPokemons(pokemonTypeList)
    }

    async function getPokemonsData() {
        const pokemonsData = await Promise.all (pokemons.map( async (pokemon) => {
            const { sprite, id, types } = await fetchPokemonData(pokemon.name)
            return {
                sprite,
                id,
                types
            }
        }))
        const sprites = pokemonsData.map(pokemonData => pokemonData.sprite)
        const ids = pokemonsData.map(pokemonData => pokemonData.id)
        const typesArray = pokemonsData.map(pokemonData => pokemonData.types)
        const types = typesArray.map(array => {
            return array.map(type => type.type.name)
        })

        setPokemonsData({
            sprites: sprites,
            pokemonsId: ids,
            pokemonsTypes: types
        })
    }

    function handleOnClick() {
        if (typeSelected) {
            setMaxPokemons((currentValue) => currentValue + 10)
        } else {
            fetchPokemons()
        }
    }

    function handleButtonClick(typeReceived) {
        if (typeReceived === typeSelected) return

        setTypeSelected(typeReceived)
        setMaxPokemons(10)
    }

    return {
        pokemonsData:{
            pokemons,
            pokemonsData
        },
        handleOnClick,
        handleButtonClick
    }
}