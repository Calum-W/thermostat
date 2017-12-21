describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("should initialize at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("should initialize with ecomode on", function(){
    expect(thermostat.isEcoModeOn).toBe(true);
  });

  describe("increaseTemp", function() {
    it("should increase the temperature by 1", function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE + 1);
    });
    // it("should have a maximum temperature of 25 when in power saving mode", function() {
    //   thermostat.ecoMode =;
    //
    // });
  });

  describe("decreaseTemp", function() {
    it("should decrease the temperature by 1", function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE - 1);
    });

    it("shouldn't be able to reduce temperature below 10", function() {
      for (var i = 0; i < 11; i++ ) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });
});
