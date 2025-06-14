const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository =  new FlightRepository();
    }

    async createFlight(data){
        try {
            console.log("Input data:", data);
            console.log("Arrival:", data.arrivalTime);
            console.log("Departure:", data.departureTime);

            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than depature time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight =  await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity                                                   //here we've used 
            }); 
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw {error};
        }
    }

    async getFlightData() {

    }
}


module.exports = FlightService;

/*
*{   
* flightNumber
* airplaneId
* departureAirportId
* arrivalAirportId
* arrivalTime
* departureTime
* price
* totalSeats   ->   fetch from airplane
}
*/