const getItem = require('../src/getItem')

it('should be {"id": "0001", "name" : "Coca Cola", "price": 3} when get barcode by Id given barcode = 0001', () => {
    //given
    const barcode = "0001";
    //when
    const result = getItem(barcode)
    let toBeItem = {"id": "0001", "name" : "Coca Cola", "price": 3};
    //then
    expect(JSON.stringify(result)).toBe(JSON.stringify(toBeItem));
});
