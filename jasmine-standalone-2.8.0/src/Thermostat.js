const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE
  this.isEcoModeOn = true;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isEcoModeOn && this.temperature >= 25) {
    this.temperature = 25
  } else if (!this.isEcoModeOn && this.temperature >= 32) {
    this.temperature = 32
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) {
    this.temperature = 10
    return
  }
  this.temperature -= 1;
};

Thermostat.prototype.turnEcoModeOff = function() {
  this.isEcoModeOn = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.checkUsage = function() {
  if(this.temperature < 18) {
    return "low-usage"
  };
};
