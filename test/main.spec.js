var Nightmare = require('nightmare');
var expect = require('chai').expect;
var axios = require('axios');

var nightmare;
const url = 'http://localhost:8080';

describe('hello-express', function () {
  this.timeout(6500);
  this.slow(3000);
  
  beforeEach(()=> {
    nightmare = Nightmare();
  })
  
  it('should have the correct page title', done => {
    nightmare
      .goto(url)
      .evaluate(function () {
        return document.querySelector('body').innerText
      })
      .then(function (text) {
        expect(text).to.equal('Hello World');
        done()
      })
      .catch(err => done(err))
  });
  
  it('returns the correct status code', () => axios.get('http://localhost:8080')
    .then((response) => {
        return expect(response.status === 200)
    })
  )
});
