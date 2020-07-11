const { v4: uuidv4 } = require("uuid");

const Driver = {
  setData(drivers) {
    this.data = drivers;
  },

  register(data) {
    this.data.push({
      ID: uuidv4(),
      name: data.name,
      mobileNumber: data.mobileNumber,
      cab: data.cabId,
      isAvailable: true,
    });
  },

  setLocation(driverId, x, y) {
    this.data = this.data.map((driver) => {
      const isDriver = driver.ID === driverId;
      return isDriver
        ? {
            ...driver,
            currentLocation: { x, y },
          }
        : driver;
    });
  },

  setAvailability(driverId, availability) {
    this.data = this.data.map((driver) => {
      const isDriver = driver.ID === driverId;
      return isDriver
        ? {
            ...driver,
            isAvailable: availability,
          }
        : driver;
    });
  },

  getLocation(driverId, x, y) {
    let driver = this.data.find((driver) => {
      const isDriver = driver.ID === riderId;

      return isDriver;
    });

    return driver.currentLocation;
  },
};

module.exports = Driver;
