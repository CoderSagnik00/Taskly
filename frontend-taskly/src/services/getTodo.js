export const getAllTodoFromDB = async () => {
    const response = await fetch('http://localhost:5000/api/todo').then(async (e) => {
        const data = await e.json()
        return data;
    })
    return response;

}