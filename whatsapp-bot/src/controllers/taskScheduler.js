import schedule from "node-schedule";
import client from "../services/whatsappService.js";
import getClientTasks from "../models/taskModel.js";


const tasks = await getClientTasks();


client.on("ready", () => {
    console.log("WhatsApp client is ready!");

    const targetNumber = process.env.PHONE_NUM;
    const formattedNumber = `${targetNumber}@c.us`;
    const message = "Hello! This is your scheduled message at 01:05 hrs.";

    const rule = new schedule.RecurrenceRule();
    rule.hour = 1;
    rule.minute = 05;
    rule.second = 0;
    
    schedule.scheduleJob(rule, async () => {
        try {
            console.log(`Sending message to ${formattedNumber} at 01:05 hrs.`);
            await client.sendMessage(formattedNumber, message);
            console.log(`Message successfully sent to ${formattedNumber}`);
        } catch (error) {
            console.error(`Failed to send message to ${formattedNumber}:`, error.message);
        }
    });

    console.log("Message has been scheduled to send at 01:05 hrs daily.");
});


export default tasks;
