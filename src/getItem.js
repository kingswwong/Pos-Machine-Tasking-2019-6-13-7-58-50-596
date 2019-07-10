const data = require('../data/data')

function getItem(barcode) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === barcode) {
            return data[i];
        }
    }
}

module.exports = getItem
