const DEFAULT_TEMPERATURE = 20;
const MAX_TEMP = 32
const MAX_ECO_TEMP = 25
const MEDIUM_ENERGY_USAGE_LIMIT = 18;


function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE
  this.isEcoModeOn = true;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isEcoModeOn && this.temperature >= MAX_ECO_TEMP) {
    this.temperature = MAX_ECO_TEMP
  } else if (!this.isEcoModeOn && this.temperature >= MAX_TEMP) {
    this.temperature = MAX_TEMP
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
  switch(true) {
    case (this.temperature < MEDIUM_ENERGY_USAGE_LIMIT):
      return "low-usage"
      break;
    case (this.temperature > MAX_ECO_TEMP):
      return "high-usage"
      break;
    case (this.temperature >= MEDIUM_ENERGY_USAGE_LIMIT):
      return "medium-usage";
      break;
  }
};
