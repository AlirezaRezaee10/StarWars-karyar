export function enhancedFetchTest(apiUrl) {
    return fetch(apiUrl)
        .then(res => {
            if (res.ok) return res.json()
        })
}
