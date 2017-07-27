import { Resident } from './resident';
import { ServiceAddress } from './service-address';
import { User } from './user';
import { Property } from './property';

export class Enrollment {
    resident: Resident;
    serviceAddress: ServiceAddress;
    property: Property;
    desiredStart: Date;
    serviceRequestTypeId: number;
    created: Date;
    createdBy: User;

    constructor(){
        this.resident = new Resident();
        this.serviceAddress = new ServiceAddress();
        this.property = new Property();
        this.desiredStart = new Date();
    }
}
