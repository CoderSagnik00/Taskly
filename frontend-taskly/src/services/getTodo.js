export const getAllTodoFromDB = async () => {
    const response = await fetch(`/api/todo`).then(async (e) => {
        const data = await e.json()
        return data;
    })
    return response;

}