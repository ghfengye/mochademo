var expect = chai.expect;

describe('浏览器测试加法函数', function() {
    it('3加2等于5', function() {
        expect(add(3, 2)).to.be.equal(5);
        expect(add(3, 2)).to.be.a('Number');
    });
});
describe('测试多个测试套件', function() {
    it('4加2等于6', function() {
        expect(add(4, 2)).to.be.equal(6);
    });
});
describe('测试嵌套测试套件', function() {
    describe('子测试套件', function() {
        it('3加4等于7', function() {
            expect(add(3, 4)).to.be.equal(7);
        });
    });
    describe('子测试套件2', function() {
        it('3+5=8', function() {
            expect(add(3, 5)).to.be.equal(8);
        })
    })
});