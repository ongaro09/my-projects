import client from "../services/whatsappService.js";

client.on('loading_screen', (percent, message) => {
    console.log(`LOADING SCREEN... ${percent}% ${message}`);
});

let pairingCodeRequested = false;
client.on('qr', async (qr) => {
    console.log('QR RECEIVED', qr);

    const pairingCodeEnabled = false;
    if (pairingCodeEnabled && !pairingCodeRequested) {
        const pairingCode = await client.requestPairingCode(PHONE_NUM);
        console.log('Pairing code enabled, code: '+ pairingCode);
        pairingCodeRequested = true;
    }
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
})
client.on('auth_failure', msg => {
    console.error(`AUTHENTICATION FAILURE: ${msg}`);
});

// client.on('message', async msg => {
//     console.log(`MESSAGE RECEIVED: ${msg}`);

//     if (msg.body === 'hello') {
// 	await msg.reply('Hello there! How may I assist?');
	
//     } else if (msg.body === 'help') {
// 	await client.sendMessage(msg.from, 'I got you!');
//     }
// });

export default client;
