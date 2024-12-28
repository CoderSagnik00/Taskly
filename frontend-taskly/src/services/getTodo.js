export const getAllTodoFromDB = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/todo`).then(async (e) => {
        const data = await e.json()
        return data;
    })
    return response;

}