import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    await client.connect()
    const query = `
    INSERT into users
    (username, password, name)
    VALUES ($1,$2,$3);`
    const values = [username, password, name]
    const result = client.query(query, values)
    return result
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    await client.connect()
    const query = `
    SELECT username, password, name from users
    WHERE id = $1;`
    const result = client.query(query, [userId])
    return result
}
