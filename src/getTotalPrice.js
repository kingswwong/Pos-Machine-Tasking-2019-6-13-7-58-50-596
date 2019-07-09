function getTotalPrice(items) {
    let sum = 0;
    for(let i = 0;i < items.length;i++){
        sum += items[i].price * items[i].count
    }
    return sum;
}

module.exports = getTotalPrice;
