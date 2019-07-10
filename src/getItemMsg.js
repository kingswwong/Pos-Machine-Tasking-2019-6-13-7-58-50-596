function getItemMsg(items) {
    let result = "";
    for (let i = 0; i < items.length; i++) {
        result += items[i].name + "                       " + items[i].price + "          " + items[i].count;
        if (i !== items.length - 1) {
            result += "\n";
        }
    }
    return result;
}

module.exports = getItemMsg;
