describe('On the splash page', function() {

  var splashController;
  var splashFactory;

  beforeEach(module('hearthCompanion'));

  function splashFactoryMock() {
    splashFactory = jasmine.createSpyObj('splashFactory', ['print']);
    return splashFactory;
  }

  beforeEach(inject(function($controller) {
    splashController = $controller('SplashController', {
      splashFactory : splashFactoryMock()
    });
  }));

  it('has a button counter', function() {
    expect(splashController.clicked).toBe(0);
  });

  it('incrementing increases clicked by 1', function() {
    splashController.inc();
    expect(splashController.clicked).toBe(1);
  });

  it('splashFactory print method is called', function() {
    splashController.inc();
    expect(splashFactory.print).toHaveBeenCalled();
  });

  it('inc should be called', function() {
    spyOn(splashController, 'inc');
    splashController.inc();
    expect(splashController.inc).toHaveBeenCalled();
  })

});
