export const addtodoToDB = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (e) => {
        const data = await e.json()
        return data;
    })
    return response;
}