const { where } = require('sequelize');
const {City} =require ('../models/index');
const { Where } = require('sequelize/lib/utils');

class CityRepository {
    async createCity ({name}){
        try{
            const city= await City.create( { name});
            return city;
        }catch (error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(CityId) {
        try{
            await City.destroy({
                where: {
                    id:CityId
                }
            })
            return true;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw { error};
        }
    }

    async getCity(CityId){
        try {
            const city= await City.findByPk(CityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(CityId , data){
        try {
            const city=await City.update( data , {
                where : {
                    id:CityId
                }
            })
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;