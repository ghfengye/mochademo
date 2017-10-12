var del = require('./del.js');
var expect = require('chai').expect;

describe('hook', function() {
    var foo = false;
    beforeEach(function() {
        setTimeout(function() {
            foo = true;
            done();
        }, 0);
    });
    it('测试钩子', function() {
        console.log(foo)
        expect(foo).to.be.ok;
    });
    it('测试钩子', function() {
        console.log(foo)
        expect(foo).to.be.ok;
    });
    it('测试钩子', function() {
        console.log(foo)
        expect(foo).to.be.ok;
    });
});
// describe('减法测试', function() { //测试套件
//     it.skip('2减1等于1', function() { //测试用例
//         expect(del(2, 1)).to.be.equal(1);
//     });
//     it('3减1等于2', function() {
//         expect(del(3, 1)).to.be.a('Number');
//     })
// });