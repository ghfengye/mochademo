var expect = chai.expect;
describe('hooks', function() {
    var foo = false;
    beforeEach(function() {
        foo = true;
    });
    it('测试before钩子', function() {
        expect(foo).to.be.ok;
    });
});
describe('减法测试', function() {
    it.only('6-9', function() {
        expect(del(6, 9)).to.be.ok;
    });
    it('测试', function() {
        // expect([1, 22, 3]).to.include(22);
        // expect('foobar').to.include('bar');
        expect({ foo: 'bar', name: 'mzn' }).to.be.include.keys('name')
    });
    it('匹配对象', function() {
        expect({ name: 'mzn' }).to.be.deep.equal({ name: 'mzn' })
    });
    it('布尔值', function() {
        expect('everthing').to.be.ok;
    });
    it('布尔值', function() {
        expect('null').to.be.ok;
    });
    it('是否为实例', function() {
        expect(function() {}).to.be.an.instanceof(Function);
    });
    it('是否为空', function() {
        expect('dd').to.not.be.empty;
    });
});