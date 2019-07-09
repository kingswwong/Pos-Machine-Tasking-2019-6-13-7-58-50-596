const isBarcodeValid = require('../src/isBarcodeValid')

it('should be true when invoke barcode given barcode = 0001', () => {
    //given
    const barcode = "0001";
    //when
    const result = isBarcodeValid(barcode)
    //then
    expect(result).toBe(true);
});

it('should be ErrorMsg when invoke barcode given barcode = 0001a', () => {
    //given
    const barcode = "0001a";
    //when
    const result = isBarcodeValid(barcode)
    //then
    expect(result).toBe("[Error]: barcode" + barcode + "isInvalid");
});
