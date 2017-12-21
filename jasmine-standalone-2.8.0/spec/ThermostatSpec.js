describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should initialize at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should initialize with ecomode on", function() {
    expect(thermostat.isEcoModeOn).toBe(true);
  });

  describe("increaseTemp", function() {
    it("should increase the temperature by 1", function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE + 1);
    });
    it("should have a maximum temperature of 25 when in power saving mode", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.temperature).toEqual(25);
    });
    it("should have a maximum temperature of 32 when it is not in power saving mode", function() {
      thermostat.turnEcoModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("decreaseTemp", function() {
    it("should decrease the temperature by 1", function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE - 1);
    });

    it("shouldn't be able to reduce temperature below 10", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe("reset", function() {
    it("should reset the temperature to the default", function() {
      thermostat.increaseTemp();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE);
    });
  });

  describe("checkUsage", function(){
    it("should return 'low-usage' when temperature is below 18 degrees", function(){
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.checkUsage()).toEqual("low-usage")
    });
    it("should return 'medium-usage' when temperature is between 18 and 25 degrees", function(){
      expect(thermostat.checkUsage()).toEqual("medium-usage")
    });
    it("should return 'high-usage' when temperature is above 25 degrees", function(){
      thermostat.turnEcoModeOff();
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.checkUsage()).toEqual("high-usage")
    });
  });
});
