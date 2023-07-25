export * from './pet-api.service';
import { PetApiService } from './pet-api.service';
export * from './pet-api.serviceInterface';
export * from './store-api.service';
import { StoreApiService } from './store-api.service';
export * from './store-api.serviceInterface';
export * from './user-api.service';
import { UserApiService } from './user-api.service';
export * from './user-api.serviceInterface';
export const APIS = [PetApiService, StoreApiService, UserApiService];
