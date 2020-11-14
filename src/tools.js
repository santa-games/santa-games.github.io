export function convertStateIdToName(stateId) {
    if (stateId === 0) return "Proposed"
    if (stateId === 1) return "Active"
    if (stateId === 2) return "Completed"
    if (stateId === 3) return "Forfeit"
    if (stateId === 4) return "Cancelled"
    return "Unknown ["+stateId+"]"
}

export async function fetchJsonFrom(url) {
    try {
        console.log("Fetching from ["+url+"]");
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.error(error)
        return {};
    }
}