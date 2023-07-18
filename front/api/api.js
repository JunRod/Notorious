import {cache} from "react"
import useSWR from "swr";

export const getIdea = cache(async (word, wordUse) => {
    const res = await fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`)
    return res.json()
})

export const getImage = cache(async(history) => {
    const response = await fetch(`${BASE_URL}/image?history=${history}`)
    return response.json()
})

const fetcher = (...args) => fetch(`https://notoriousback.ddns.net/${args}`).then(res => res.json())

export function useGetWordsSimilar(wordEnglish, flag) {
    const {data, error, isLoading} = useSWR(flag ? `words?word=${wordEnglish}`: null, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}