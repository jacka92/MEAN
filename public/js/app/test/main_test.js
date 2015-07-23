describe('http', function() {

  beforeEach(module('app'));

  var stats;
  var $httpBackend;

  beforeEach(inject(function(_stats_, _$httpBackend_) {
    stats = _stats_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Getting user Ids', function() {
    beforeEach(function() {
      $httpBackend.expectGET('players/playersId')
      .respond(200, {message: 'Got player Ids', id: 0});

      
      $httpBackend.flush();
    });

    it('should send an HTTP GET request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});