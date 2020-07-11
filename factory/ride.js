const { v4: uuidv4 } = require("uuid");

const Ride = {
  setData(rides) {
    this.data = rides;
  },

  book(data) {
    this.data.push({
      ID: uuidv4(),
      startLocation: data.startLocation,
      endLocation: data.endLocation,
      driver: data.driverId,
      rider: data.riderId,
      isStarted: false,
      completed: false,
    });
  },

  start(rideId) {
    this.data = this.data.map((ride) => {
      const isRide = ride.ID === rideId;

      return isRide ? { ...ride, isStarted: true } : ride;
    });
  },

  end(rideId) {
    this.data = this.data.map((ride) => {
      const isRide = ride.ID === riderId;

      return isRide ? { ...ride, isComplete: true } : ride;
    });
  },
};

module.exports = Ride;
