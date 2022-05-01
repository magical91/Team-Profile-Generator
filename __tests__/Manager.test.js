const Manager = require('../lib/Manager');

test('add office number', () => {
    const manager = new Manager('Marissa', '956', 'marissa.martinez91@outlook.com', '56');
console.log(manager)
    expect(manager.officeNumber).toEqual('56');
});