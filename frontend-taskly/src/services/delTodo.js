export const delTodoToDB = async (data) => {
    const response = await fetch('http://localhost:5000/api/todo', {
        method: 'DELETE',
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