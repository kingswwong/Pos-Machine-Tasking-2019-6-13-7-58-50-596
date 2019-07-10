const getItems = require('../src/getItems')

it('should be [{"id": "0001", "name" : "Coca Cola", "price": 3, "count" : 1},' +
    '{"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},' +
    '{"id": "0005", "name" : "Dr Pepper", "price": 7, "count": 1}]' +
    'when get items given barcode = [0001, 0003, 0005, 0003]',() => {
    //given
    const barcodes = ['0001', '0003', '0005', '0003']
    //when
    const result = getItems(barcodes)
    //then
    const items = [{"id": "0001", "name" : "Coca Cola", "price": 3, "count" : 1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7, "count": 1}]
    expect(JSON.stringify(result)).toBe(JSON.stringify(items))
});
