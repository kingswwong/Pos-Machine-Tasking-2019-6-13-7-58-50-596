const getItemReceipt = require('../src/getItemReceipt')

it('should be a itemMsg when get item receipt given barcodes = [0001, 0003, 0005, 0003]', () => {
    //given
    const barcode = ['0001', '0003', '0005', '0003'];
    //when
    const result = getItemReceipt(barcode)
    //then
    expect(result).toBe("Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola                       3          1\n" +
        "Pepsi-Cola                       5          2\n" +
        "Dr Pepper                       7          1\n" +
        "------------------------------------------------------------\n" +
        "Price: 20")
});
