/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CategoryDto } from './category.dto';
import { TagDto } from './tag.dto';


/**
 * A pet for sale in the pet store
 */
export interface PetDto { 
    name: string;
    photoUrls: Array<string>;
    id?: number;
    category?: CategoryDto;
    tags?: Array<TagDto>;
    /**
     * pet status in the store
     */
    status?: PetDtoStatusEnum;
}
export enum PetDtoStatusEnum {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold'
};


