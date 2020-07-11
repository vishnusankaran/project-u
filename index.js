let data = require("./factory/data");

const Rider = require("./factory/rider");
const Driver = require("./factory/driver");
const Ride = require("./factory/ride");

Rider.setData(data.riders);
Driver.setData(data.drivers);
Ride.setData(data.rides);

const registerRider = function (data) {
  Rider.register(data);
  return true;
};

const fetchRiders = function () {
  console.log(data.riders);
  return data.riders;
};

const updateRiderLocation = function (riderId, location) {
  Rider.setLocation(riderId, location.x, location.y);
};

const registerDriver = function (data) {
  Driver.register({ ...data, cabId: 1 });
};

const fetchDrivers = function () {
  console.log(data.drivers);
  return data.drivers;
};

const updateDriverLocation = function (driverId, location) {
  Driver.setLocation(driverId, location.x, location.y);
};

const setDriverAvailability = function (driverId, availability) {
  Driver.setAvailability(driverId, availability);
};

const getDistance = function (startLocation, endLocation) {
  return Math.sqrt(
    Math.pow(startLocation.x - endLocation.x, 2) +
      Math.pow(startLocation.y - endLocation.y, 2)
  );
};

const isNearby = function (rider, driver) {
  if (driver.currentLocation && rider.currentLocation) {
    let distance = getDistance(driver.currentLocation, rider.currentLocation);

    return distance <= data.maximumBookableDistance;
  }
};

const fetchDriverNearby = function (riderId) {
  const rider = data.riders.find((rider) => {
    rider.ID === riderId;
  });

  let driver = data.drivers.find((driver) => {
    return isNearby(rider, driver);
  });

  return driver;
};

const bookRide = function (riderId, endLocation) {
  const driver = fetchDriverNearby(riderId);
  const rider = data.riders.find((rider) => {
    rider.ID === riderId;
  });
  if (driver && rider) {
    Ride.book({
      startLocation: driver.currentLocation,
      endLocation: endLocation,
      rider: riderId,
      driver: driverId,
    });
  }
};

const endRide = function (rideId) {
  Ride.end(rideId);
};

const startRide = function (rideId) {
  Ride.start(rideId);
};

//
console.log("======================");
console.log("Fetch Riders", data.riders);

console.log("======================");
console.log("Fetch Drivers", data.drivers);

console.log("======================");
console.log("Fetch Rides", data.rides);

console.log("======================");
console.log("Registering Rider");
registerRider({
  name: "Vishnu",
  mobileNumber: "9876543210",
});

console.log("======================");
console.log("Registering Driver");
registerDriver({
  name: "Jishnu",
  mobileNumber: "9876543210",
});

let riders = fetchRiders();
let drivers = fetchDrivers();

console.log("======================");
console.log("Updating Rider Location");
updateRiderLocation(riders[0].ID, { x: 0, y: 0 });
console.log("Riders", data.riders);

console.log("======================");
console.log("Updating Driver Location");
updateDriverLocation(drivers[0].ID, { x: 1, y: 1 });
console.log("Drivers", data.drivers);

console.log("======================");
console.log("Book Ride");
bookRide(riders[0].ID, { x: 2, y: 2 });

console.log("======================");
console.log("Fetch Rides", data.rides);

console.log("======================");
console.log("Start Ride");
startRide(data.rides[0].ID);

console.log("======================");
console.log("Fetch Rides", data.rides);

console.log("======================");
console.log("Complete Ride");
endRide(data.rides[0].ID);

console.log("======================");
console.log("Fetch Rides", data.rides);
