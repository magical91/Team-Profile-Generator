const Employee = require('../lib/Employee');

// create employee
test('create new employee', () => {
    const employee = new Employee('Marissa', '956', 'marissa.martinez91@outlook.com');
console.log(employee)
    expect(employee.name).toEqual('Marissa');
    expect(employee.id).toEqual('956');
    expect(employee.email).toEqual('marissa.martinez91@outlook.com');
})