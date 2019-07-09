const getItemMsg = require('../src/getItemMsg')
const getItems = require('../src/getItems')
const getTotalPrice = require('../src/getTotalPrice')

function getItemReceipt(barcodes) {
    let items = getItems(barcodes)
    let totalPrice = getTotalPrice(items)
    let result = "Receipts\n" +
        "------------------------------------------------------------";
    result += getItemMsg(barcodes);
    result += "------------------------------------------------------------";
    result += "Price: " + totalPrice;
    return result;
}

module.exports = getItemReceipt
