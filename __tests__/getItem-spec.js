const getItem = require('../src/getItem')

it('should be {"id": "0001", "name" : "Coca Cola", "price": 3} when get barcode by Id given barcode = 0001', () => {
    //given
    const barcode = "0001";
    //when
    const result = getItem(barcode)
    //then
    expect(result).toBe({"id": "0001", "name" : "Coca Cola", "price": 3});
});
