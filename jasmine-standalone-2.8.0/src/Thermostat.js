const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature -= 1;
};
