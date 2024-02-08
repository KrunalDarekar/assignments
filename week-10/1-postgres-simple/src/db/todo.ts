import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */ 
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect()
    const query = " INSERT INTO todos (title, description, userId) VALUES ($1, $2, $3);"
    const values = [title, description, userId]
    const result = await client.query(query, values)
    console.log(result)
    return result
}

createTodo(1,"todo-title","todo-description")
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.connect()
    const query = `UPDATE todos
    SET done = $1
    WHERE id = $2;`
    const values = [true, todoId]
    const result = await client.query(query,values)
    return result
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const query = `SELECT title,description,done,id from todos
    WHERE userId = $1;`
    const values = [userId]
    const result = await client.query(query, values)
    return result
}