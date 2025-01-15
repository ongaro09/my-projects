import db from "../config/db.js";

/*
 * Fetch all personal tasks with due dates from the database
 * Returns the tasks as an array of objects
 */

const getPersonalTasks = async () => {
    try {
        const [rows] = await db.execute(
            `SELECT * FROM personal_schedule WHERE day_of_week = "Everyday"`
        );

        return rows;
	
    } catch (err) {
        console.error(`Error fetching data: ${err}`);
        throw err;
    }
};

export default getPersonalTasks;
