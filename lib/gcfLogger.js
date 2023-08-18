const crypto = require('crypto');

exports.log = async (payload, enc_key) => {
    var body = decrypt(payload.replace(payload.substr(payload, 16), ''), enc_key, payload.substr(payload, 16));
    body = JSON.parse(body);

    body.device.referenceId = generateUUID();

    console.log(JSON.stringify(body.device));

    body?.entries?.forEach(entryItem => {
        console.log(JSON.stringify({ deviceReferenceId: body.device.referenceId, entry: entryItem }));
    });
};

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

var decrypt = ((encrypted, enc_key, iv) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', enc_key, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
});