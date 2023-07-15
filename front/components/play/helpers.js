import {toast} from "sonner";

export function WordsSimilarFormatter (wordsSimilar) {

    if (!wordsSimilar) return []

    return wordsSimilar
        .split("\n")
        .join(",")
        .split(",")
        .map((line) => line.replace(/^\s*\d+\.\s*([^()\[\]\s,.\/\d]+)(?:\([^()]*\)|\[[^\]]*\])?.*/, "$1").trim())
        .filter(word => !word.includes(" "))
        .map((word) => word.trim().replace(/\/.*$/, ""))
}

export function IdeaFormatter (data, word, wordUse) {
    const words = Array(word, wordUse).map( word => word.toLowerCase())
    const regex = new RegExp(`\\b${words[0]}\\w*\\b|\\b${words[1]}\\w*\\b`, "gi");
    return data.replace(regex, (match) =>
        `<span style="color: red">${match}</span>`
    );
}