let fetch = require('node-fetch');
const { config } = require('../helpers/config');

const services = {

    async listar(name, value) {
        try {
            const res = await fetch(`${config.URL_CUERDA}${name}=${value}`);
            let response = await res.text();
            response = response.replace('var res = ', '');
            response = response.replace(/\n/g, '');
            response = response.replace(/\t/g, '');
            response = response.replace(';', '');
            response = response.replace("lsSet('zoomOff', 0 );", '');
            const json = eval(`[${response}]`);
            return json[0];
        } catch (error) {
            throw error;
        }
    },

    async song(t) {
        try {
            const res = await fetch(`${config.URL_CUERDA}t=${t}`);
            let response = await res.text();

            response = response.replace('var res = {', '');
            let schema = response.split('};');

            let contenido = schema[1];
            contenido = contenido.replace(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm, '');
            contenido = contenido.replace(/res.body \+= '  /g, '');
            contenido = contenido.replace(/res.body \+= '/g, '');
            contenido = contenido.replace(/';/g, '');
            contenido = contenido.replace(/<A>/g, '<figure>');
            contenido = contenido.replace(/<\/A>/g, '</figure>');
            contenido = contenido.replace(/\t/g, '');
            contenido = contenido.replace(/\n/g, '<br>');
            contenido = contenido.replace(/\\n/g, '<br>');
            // contenido = contenido.replace(/ /g, '&nbsp;&nbsp;');

            return contenido;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = services;