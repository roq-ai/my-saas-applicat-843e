import axios from 'axios';
import queryString from 'query-string';
import { RentalCarInterface, RentalCarGetQueryInterface } from 'interfaces/rental-car';
import { GetQueryInterface } from '../../interfaces';

export const getRentalCars = async (query?: RentalCarGetQueryInterface) => {
  const response = await axios.get(`/api/rental-cars${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRentalCar = async (rentalCar: RentalCarInterface) => {
  const response = await axios.post('/api/rental-cars', rentalCar);
  return response.data;
};

export const updateRentalCarById = async (id: string, rentalCar: RentalCarInterface) => {
  const response = await axios.put(`/api/rental-cars/${id}`, rentalCar);
  return response.data;
};

export const getRentalCarById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/rental-cars/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRentalCarById = async (id: string) => {
  const response = await axios.delete(`/api/rental-cars/${id}`);
  return response.data;
};
