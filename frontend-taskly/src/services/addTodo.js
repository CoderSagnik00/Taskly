export const addtodoToDB = async (data) => {
    const response = await fetch('/api/todo', {
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