
export function WordsSimilarFormatter (wordsSimilar) {
    return wordsSimilar
        .split("\n")
        .map((line) => line.replace(/^\s*\d+\.\s*([^()\[\]\s,.\/\d]+)(?:\([^()]*\)|\[[^\]]*\])?.*/, "$1").trim())
        .filter((word) => word !== "")
        .join(",")
        .split(",")
        .map((word) => word.trim().replace(/\/.*$/, ""))
        .filter(word => !word.includes(" "));
}