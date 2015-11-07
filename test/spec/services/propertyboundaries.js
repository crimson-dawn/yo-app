'use strict';

describe('Service: propertyBoundaries', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var propertyBoundaries;
  beforeEach(inject(function (_propertyBoundaries_) {
    propertyBoundaries = _propertyBoundaries_;
  }));

  it('should do something', function () {
    expect(!!propertyBoundaries).toBe(true);
  });

});
