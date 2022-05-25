const Department = require('../lib/assets/js/Department.js');

test('create a department object', () => {
    const department = new Department('Legal');

    expect(department.deptname).toBe('Legal');
});

test('get department name', () => {
    const department = new Department('Legal');

    expect(department.getName()).toEqual(expect.any(String));
});