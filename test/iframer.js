var iFramer = require('../index');

describe('iFramer', function () {
  it('returns an iFrame element', function () {
    var result = iFramer();

    expect(result).to.be.an.instanceof(HTMLIFrameElement);
  });

  it('applies default attribtutes', function () {
    var result = iFramer();

    expect(result.getAttribute('src')).to.equal('about:blank');
    expect(result.getAttribute('frameborder')).to.equal('0');
    expect(result.getAttribute('allowtransparency')).to.equal('true');
    expect(result.getAttribute('scrolling')).to.equal('no');
  });

  it('sets attributes', function () {
    var result = iFramer({
      frameborder: '10',
      width: '40%'
    });

    expect(result.getAttribute('frameborder')).to.equal('10');
    expect(result.getAttribute('width')).to.equal('40%');
  });

  describe('id', function () {
    it('defaults to empty', function () {
      var result = iFramer();

      expect(result.id).to.equal('');
    });

    it('is set to match name', function () {
      var result = iFramer({name: 'foo'});

      expect(result.id).to.equal('foo');
    });

    it('will use passed in id over name', function () {
      var result = iFramer({name: 'foo', id: 'bar'});

      expect(result.id).to.equal('bar');
    });
  });

  describe('style', function () {
    it('applies styles as a string', function () {
      var result = iFramer({style: 'background: tomato; transition: color 100ms;'});

      expect(result.getAttribute('style')).to.equal('background: tomato; transition: color 100ms;');
    });

    it('applies styles as an object', function () {
      var result = iFramer({
        style: {
          backgroundColor: 'rgb(123, 0, 123)',
          width: '3em'
        }
      });

      expect(result.style.backgroundColor).to.equal('rgb(123, 0, 123)');
      expect(result.style.width).to.equal('3em');
    });
  });
});
