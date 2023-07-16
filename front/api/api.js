"use server"
//Lear a un .env? De tal manera que importe solo la variable
const BASE_URL = "https://notoriousback.ddns.net"

export async function getWordsSimilar(wordEnglish) {
    const response = await fetch(`${BASE_URL}/words?word=${wordEnglish}`)
    return response.json()
}

export async function getIdea(word, wordUse) {
    const res = await fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`)
    return res.json()
}

export async function getImage(history) {
    const response = await fetch(`${BASE_URL}/image?history=${history}`)
    return response.json()
}