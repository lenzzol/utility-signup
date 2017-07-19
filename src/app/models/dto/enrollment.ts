import { Resident } from './resident';
import { ServiceAddress } from './service-address';
import { User } from './user';

export class Enrollment {
    resident: Resident;
    serviceAddress: ServiceAddress;
    desiredStart: Date;
    serviceRequestType: number;
    created: Date;
    createdBy: User;

    constructor(){
        this.resident = new Resident();
        this.serviceAddress = new ServiceAddress();
        this.desiredStart = new Date();
    }
}
