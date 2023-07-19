import {cache} from "react"
import useSWR from "swr";

const fetcher = (...args) => fetch(`https://notoriousback.ddns.net/${args}`).then(res => res.json())

export function useGetWordsSimilar(wordEnglish, flag) {
    const {data, error, isLoading} = useSWR(flag ? `words?word=${wordEnglish}`: null, fetcher)

    return {
        wordSimilar: data,
        isLoadingWordSimilar: isLoading,
        isError: error
    }
}

export function useGetIdea(word, wordUse, flag) {
    const {data: ideaText, isLoading: isLoadingIdea} = useSWR(flag ? `idea?wordOne=${word}&wordTwo=${wordUse}`: null, fetcher)

    return {
        ideaText,
        isLoadingIdea,
    }
}

export function useGetImage(idea, flag) {
    const {data: image, isLoading: isLoadingImage} = useSWR(flag ? `image?history=${idea}`: null, fetcher)

    return {
        image,
        isLoadingImage
    }
}