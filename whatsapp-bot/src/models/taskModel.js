import db from "../config/db.js";

/*
 * Fetch all tasks with due dates from the database
 * Returns the tasks as an array of objects
 */

const getClientasks = async () => {
    try {
        const [rows] = await db.execute(
            `SELECT * FROM tasks WHERE due_date >= CURDATE()`
        );

        return rows;
	
    } catch (err) {
        console.error(`Error fetching data: ${err}`);
        throw err;
    }
};

export default getClientasks;
