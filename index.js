const fetch = require('node-fetch');
const FormData = require('form-data');

const domain = '';
const url = {
    send: `https://${domain}/API21/HTTP/SendSMS.ashx`
};
const account = '';
const password = '';


exports.handler = async (event) => {

    const form = new FormData();
    form.append('UID', account);
    form.append('PWD', password);
    form.append('SB', event.title);
    form.append('MSG', event.content);
    form.append('DEST', event.phone);
    form.append('ST', '');

    console.log('begin');
    let resp_sendSNS = await fetch(url.send, {
        method: 'POST',
        body: form
    })
        .then((res) => { console.log(res); return res.text() })
        .then((dat) => {
            return dat;
        })
        .catch((err => {
            return err;
        }));


    return resp_sendSNS
};