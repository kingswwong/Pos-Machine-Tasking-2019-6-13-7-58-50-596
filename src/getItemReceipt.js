const getItemMsg = require('../src/getItemMsg')
const getItems = require('../src/getItems')
const getTotalPrice = require('../src/getTotalPrice')

function getItemReceipt(barcodes) {
    let items = getItems(barcodes)
    let totalPrice = getTotalPrice(items)
    let result = "Receipts\n" +
        "------------------------------------------------------------\n";
    result += getItemMsg(items);
    result += "\n";
    result += "------------------------------------------------------------\n";
    result += "Price: " + totalPrice;
    return result;
}

module.exports = getItemReceipt
