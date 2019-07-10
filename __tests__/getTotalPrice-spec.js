const getTotal = require('../src/getTotalPrice')

it('should be 20 when getTotalPrice given items = [{"id": "0001", "name" : "Coca Cola", "price": 3, "count" : 1},\' +\n' +
    '    \'{"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},\' +\n' +
    '    \'{"id": "0005", "name" : "Dr Pepper", "price": 7, "count": 1}]\'', () => {

    //given
    const items = [{"id": "0001", "name": "Coca Cola", "price": 3, "count": 1},
        {"id": "0003", "name": "Pepsi-Cola", "price": 5, "count": 2},
        {"id": "0005", "name": "Dr Pepper", "price": 7, "count": 1}]
    //when
    const result = getTotal(items)
    //then
    expect(result).toBe(20)

});
