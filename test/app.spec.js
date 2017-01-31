describe('multi-environment testing', function () {
  if (isBrowser) {
    it('should foo', function () {
      // This test will only run in browsers.
      expect(isBrowser).to.not.be.false;
    });
  } else {
    it('should bar', function () {
      // This test will only run in Node.
      expect(isBrowser).to.be.false;
    });
  }
  it('shold baz', function () {
    // This test will run everywhere.
    expect({}).to.be.an('object');
  });
});