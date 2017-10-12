var expect = require('chai').expect;

describe('异步函数测试', function() {
    it('4000ms后测试', function(done) {
        var x = 'sss';
        var f = function() {
            //断言
            expect(x).to.be.a('String');
            done(); //通知mocha测试结束
        }
        setTimeout(f, 4000);
    })
})