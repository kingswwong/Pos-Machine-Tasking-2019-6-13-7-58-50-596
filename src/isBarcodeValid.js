function isBarcodeValid(barcode) {
    const barcodeReg = /000[1-9]$|00010/
    if(!barcodeReg.test(barcode)){
        return "[Error]: barcode" + barcode + "isInvalid";
    }
    return true;
}


module.exports = isBarcodeValid
