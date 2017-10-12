import del from '../src/del.js';
import chai from 'chai';

let expect = chai.expect;

describe('减法函数测试', function() {
    it('3减1应该等于2', function() {
        expect(del(3, 1)).to.be.equal(2);
    })
})