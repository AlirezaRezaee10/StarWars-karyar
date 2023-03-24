export function enhancedFetchTest(apiUrl) {
    return fetch(apiUrl)
        .then(res => {
            if (res.ok) return res.json()
        })
}

// export async function fetchData(url, pageNumber, hasError, loading) {
//     let setError = hasError
//     let setLoading = loading
//     let fetched
//     try {
//         const data = await enhancedFetchTest(url + '?page=' + pageNumber)
//         fetched = data.results
//         setLoading = true
//     } catch (hasError) {
//         setError = true
//     } finally {
//         setLoading = false
//     }
//     const results = {fetched: fetched,
//         error: hasError,
//         loading: loading}
//     return results
// }
