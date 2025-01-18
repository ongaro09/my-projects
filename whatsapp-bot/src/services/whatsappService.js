import puppeteer from 'puppeteer';

import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;


const client = new Client({
    authStrategy: new LocalAuth(),

    puppeteer: {
	headless: false,
    }
});

client.initialize();

export default client;

