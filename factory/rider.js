const { v4: uuidv4 } = require("uuid");

const Rider = {
  setData(riders) {
    this.data = riders;

    return this;
  },

  register(data) {
    this.data.push({
      ID: uuidv4(),
      name: data.name,
      mobileNumber: data.mobileNumber,
    });
  },

  setLocation(riderId, x, y) {
    this.data = this.data.map((rider) => {
      const isRider = rider.ID === riderId;
      return isRider
        ? Object.assign({}, rider, {
            currentLocation: { x, y },
          })
        : rider;
    });
  },

  getLocation(riderId, x, y) {
    let rider = this.data.find((rider) => {
      const isRider = rider.ID === riderId;

      return isRider;
    });

    return rider.currentLocation;
  },
};

module.exports = Rider;
