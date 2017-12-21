const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) {
    this.temperature = 10
    return
  }
  this.temperature -= 1;
};
