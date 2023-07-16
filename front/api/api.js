import {cache} from "react"

//Lear a un .env? De tal manera que importe solo la variable
const BASE_URL = "https://notoriousback.ddns.net"

export const getWordsSimilar = cache( async (wordEnglish) => {
    const response = await fetch(`${BASE_URL}/words?word=${wordEnglish}`)
    return response.json()
})

export const getIdea = cache(async (word, wordUse) => {
    const res = await fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`)
    return res.json()
})

export const getImage = cache(async(history) => {
    const response = await fetch(`${BASE_URL}/image?history=${history}`)
    return response.json()
})