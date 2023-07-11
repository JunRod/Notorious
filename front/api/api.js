const BASE_URL = "https://c276-190-237-47-121.ngrok-free.app"

function getIdea() {
    setIsLoading(true)

    fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`)
        .then(response => response.text())
        .then(data => {
            const DataMinusculas = data.toLowerCase()
            const regex = new RegExp(`\\b${word}\\w*\\b|\\b${wordUse}\\w*\\b`, "gi");
            const resaltado = DataMinusculas.replace(regex, (match) => {
                return `<span style="color: red">${match}</span>`;
            });
            setIdea(resaltado);
            setIsLoading(false)
        })
}

function getWordsSimilar () {
    setIsLoading(true)

    fetch(`${BASE_URL}/words?message=${wordEnglish}`)
        .then(response => response.text())
        .then(data => {
            setWordSimilar(data);
            setIsLoading(false)
        })
}

export function fetchAll () {
    if (wordEnglish.length === 0 ) return
    if (wordUse?.length === 0) return getWordSimilar()
    getIdea()
}