const { where } = require('sequelize');

const {Op} = require('sequelize');

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
            //the below approach also works but will not return updated object
            //if we are using Postgres then returning:true can be used , else not
            // const city=await City.update( data , {
            //     where : {
            //         id:CityId
            //     }
            // })
            //for getting updated data in mysql we use the below approach
            const city=await City.findByPk(CityId);
            city.name= data.name;
            await city.save(); 

            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter){    //filter can be empty
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                }) ;
                return cities
            }
            const cities = await City.findAll();
            return cities; 
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;