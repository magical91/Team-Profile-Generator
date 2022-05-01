const Intern = require('../lib/Intern');

test('add school to employee class', () => {
    const intern = new Intern('Marissa', '956', 'marissa.martinez91@outlook.com', 'MSU');
console.log(intern)
    expect(intern.school).toEqual('MSU');
});