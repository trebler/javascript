/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1Initializer } from './v1Initializer';
import { V1Status } from './v1Status';

/**
* Initializers tracks the progress of initialization.
*/
export class V1Initializers {
    /**
    * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
    */
    'pending': Array<V1Initializer>;
    'result'?: V1Status;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pending",
            "baseName": "pending",
            "type": "Array<V1Initializer>"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "V1Status"
        }    ];

    static getAttributeTypeMap() {
        return V1Initializers.attributeTypeMap;
    }
}

