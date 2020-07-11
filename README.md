#Master
maximumBookableDistance
bookRide()
fetchRideHistory(riderId)

#Rider
ID
mobileNumber
name
currentLocation

    setLocation()

#Driver
ID
mobileNumber
name
cab
currentLocation
isAvailable

    setLocation()
    setAvailability()

#Cab
ID
registerationNumber
make

#Rides
ID
startLocation
endtLocation
driver
rider
isStarted
isCompleted

    startRide()
    endRide()
