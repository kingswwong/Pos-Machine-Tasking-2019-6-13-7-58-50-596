const getItem = require('../src/getItem')
const isBarcodeValid = require('../src/isBarcodeValid')
function getItems(barcodes) {
    let items = []
    let hash = []
    for(let i = 0;i < barcodes.length;i++){
        if(isBarcodeValid(barcodes[i])){
            if(hash.indexOf(barcodes[i]) === -1){
                let temp = getItem(barcodes[i]);
                temp.count = 1
                items.push(temp);
            }else{
                for(let j = 0;j < items.length;j++){
                    if(barcodes[i].id === items[j].id){
                        items[i].count++;
                        break;
                    }
                }
            }
        }
    }
    return items;
}

module.exports = getItems
