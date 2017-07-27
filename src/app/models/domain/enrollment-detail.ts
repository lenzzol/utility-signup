import { Enrollment } from '../dto/enrollment';

export class EnrollmentDetail
{
    enrollment: Enrollment;
    depositAmount: number;
    accountNumber: string;
    confirmedStart: Date;
}