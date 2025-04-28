const { CityRepository }= require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city= await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("someething went wrong in service layer");
            throw {error};
            
        }
    }
    
    async deleteCity(cityId){
        try {
            const ressponse= await this.cityRepository.deleteCity(cityId);
            return ressponse;
        } catch (error) {
            console.log("someething went wrong in service layer");
            throw {error};
            
        }
    }
    
    async updateCity(cityId , data){
        try {
            const city= await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("someething went wrong in service layer");
            throw {error};
            
        }
    }
    
    async getCity(){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("someething went wrong in service layer");
            throw {error};
            
        }
    }
}

module.expoorts = CityService;