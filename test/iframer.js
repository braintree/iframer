var iframer = require('../index');

describe('iframer', function () {
  it('returns an iframe element', function () {
    var result = iframer();

    expect(result).to.be.an.instanceof(HTMLIFrameElement);
  });

  it('applies default attribtutes', function () {
    var result = iframer();

    expect(result.getAttribute('src')).to.equal('about:blank');
    expect(result.getAttribute('frameborder')).to.equal('0');
    expect(result.getAttribute('allowtransparency')).to.equal('true');
    expect(result.getAttribute('scrolling')).to.equal('no');
  });

  it('sets attributes', function () {
    var result = iframer({
      frameborder: '10',
      width: '40%'
    });

    expect(result.getAttribute('frameborder')).to.equal('10');
    expect(result.getAttribute('width')).to.equal('40%');
  });

  describe('id', function () {
    it('defaults to empty', function () {
      var result = iframer();

      expect(result.id).to.equal('');
    });

    it('is set to match name', function () {
      var result = iframer({name: 'foo'});

      expect(result.id).to.equal('foo');
    });

    it('will use passed in id over name', function () {
      var result = iframer({name: 'foo', id: 'bar'});

      expect(result.id).to.equal('bar');
    });
  });

  describe('style', function () {
    it('applies styles as a string', function () {
      var result = iframer({style: 'background: tomato; transition: color 100ms;'});

      expect(result.getAttribute('style')).to.equal('background: tomato; transition: color 100ms;');
    });

    it('applies styles as an object', function () {
      var result = iframer({
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
