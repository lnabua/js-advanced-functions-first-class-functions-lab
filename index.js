const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0, 2);

const returnLastTwoDrivers = () => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function() {
    return function(n) {
        return n * n;
    }
}

const fareMultiplier = createFareMultiplier(2);

const fareQuintupler = createFareMultiplier(5);

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

const selectDifferentDrivers = (drivers, cb) => cb(drivers);

selectDifferentDrivers(drivers, returnFirstTwoDrivers);

selectDifferentDrivers(drivers, returnLastTwoDrivers);