const { config } = require('../helpers/config');
const axios = require('axios');

const services = {

    async listar(name, value) {
        try {
            const res = await axios.get(`${config.URL_CUERDA}${name}=${value}`);
            let response = res.data;
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
            const res = await axios.get(`${config.URL_CUERDA}t=${t}`);
            let response = res.data;

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