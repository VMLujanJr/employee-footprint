const Role = require('../lib/assets/js/Role.js');

test('create a Role object', () => {
    const role = new Role('title', 1, 'deptname'); // add dept_id?

    expect(role.title).toBe('title');
    expect(role.salary).toBe(1);
});

test('get Role title', () => {
    const role = new Role('title', 1, 'deptname');

    expect(role.getTitle()).toEqual(expect.any(String));
});

test('get Role salary', () => {
    const role = new Role('title', 1, 'deptname');

    expect(role.getSalary()).toEqual(expect.any(Number));
});