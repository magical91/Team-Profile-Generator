const Engineer = require('../lib/Engineer');

test('add github to employee class', () => {
    const engineer = new Engineer('Marissa', '956', 'marissa.martinez91@outlook.com', 'magical91');
console.log(engineer)
    expect(engineer.github).toEqual('magical91')
});