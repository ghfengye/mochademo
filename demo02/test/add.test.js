var add = require('../src/add.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0应该等于自身', function() {
        expect(add(1, 0)).to.be.equal(1);
    });
});
describe('异步读取文件', function() {
    describe('子套件', function() {
        //一个it里面只能调用一次done
        it('fs异步读取文件', function(done) {
            fs.readFile(__dirname + './../src/1.json', "utf-8", (err, data) => {
                if (err) throw err;
                console.log(data); //可显示测试结果
                expect(JSON.parse(data)).to.be.an("object");
                done(); //通知mocha测试结束
            });
        });
        it('fs读取不存在的文件', function() {
            fs.readFile(__dirname, './../src/1.txt', 'utf-8', (err, data) => {
                console.log(data);
                if (err) throw err;
                done();
            });
        });
    });
});