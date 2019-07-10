const getItemMsg = require('../src/getItemMsg')



it('should be msgSpec when invoke getItemMsg given items = items', () => {
    //given
    const items = [{"id": "0001", "name" : "Coca Cola", "price": 3, "count" : 1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7, "count": 1}]
    //when
    const result = getItemMsg(items)
    //then
    const msgSpec =
        "Coca Cola                       3          1\n" +
        "Pepsi-Cola                       5          2\n" +
        "Dr Pepper                       7          1";
    expect(result).toBe(msgSpec)
});

