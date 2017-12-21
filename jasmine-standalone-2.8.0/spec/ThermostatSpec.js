describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("should initialize at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe("increaseTemp", function() {
    it("should increase the temperature by 1", function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE + 1);
    });
  });

  describe("decreaseTemp", function() {
    it("should decrease the temperature by 1", function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE - 1);
    });
  });
});
