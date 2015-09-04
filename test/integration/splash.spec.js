describe('On the splash page', function() {

  var splashController;
  var splashFactory;

  beforeEach(module('hearthCompanion'));

  beforeEach(inject(function($controller, _splashFactory_) {
    splashFactory = _splashFactory_;
    splashController = $controller('SplashController', {
      splashFactory : splashFactory
    });
  }));

  it('When incrementing, splash factory log is called', function() {
    spyOn(splashFactory, 'print');
    splashFactory.print.and.callThrough();
    splashController.inc();
    expect(splashFactory.print).toHaveBeenCalled();
  });


});
