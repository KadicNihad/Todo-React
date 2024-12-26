export const tasksService = {

     async list() {
        const response = await fetch('https://dummyjson.com/todos');

        return response.json();
    },
    find(id) {

    },
   async create() {
        const response = await fetch('https://dummyjson.com/todos/add', {
            method:'POST',
            headers: {'Content-Type':'applications/json'},
            body: JSON.stringify({
                todo:
            })

       })
    },
    update(id, todo, completed, userId) {

    },
    delete(id) {

    }
};

export default tasksService;