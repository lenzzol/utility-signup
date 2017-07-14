import { Resident } from './resident';
import { ServiceAddress } from './service-address';

export class Enrollment {
    resident: Resident;
    serviceAddress: ServiceAddress;

    constructor(){
        this.resident = new Resident();
        this.serviceAddress = new ServiceAddress();
    }
}
