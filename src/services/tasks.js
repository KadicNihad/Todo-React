export const tasksService = {

     async list() {
        const response = await fetch('https://dummyjson.com/todos');

        return response.json();
    },
    find(id) {

    },
    create() {

    },
    update(id, todo, completed, userId) {

    },
    delete(id) {

    }
};

export default tasksService;