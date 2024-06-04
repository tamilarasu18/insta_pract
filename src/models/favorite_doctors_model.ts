export class PatientMyProviders {
    doctor_user_id: string | null = null;
    is_deleted: string | null = null;
    patient_user_id: string | null = null;

    constructor(data?: PatientMyProviders) {
        if (data) {
            this.doctor_user_id = data.doctor_user_id;
            this.is_deleted = data.is_deleted;
            this.patient_user_id = data.patient_user_id;
        }
    }
}


export class MyProvider {
    id: string | null = null;
    patient_user_id: string | null = null;
    doctor_user_id: string | null = null;

    constructor(data?: MyProvider) {
        if (data) {
            this.id = data.id;
            this.patient_user_id = data.patient_user_id;
            this.doctor_user_id = data.doctor_user_id;
        }
    }
}

export class ProvidersData {
    success: boolean | null = null;
    msg: string | null = null;
    PatientMyProviders: MyProvider[] = [];

    constructor(data?: ProvidersData) {
        if (data) {
            this.success = data.success;
            this.msg = data.msg;
            this.PatientMyProviders = data.PatientMyProviders ? data.PatientMyProviders.map(p => new MyProvider(p)) : [];
        }
    }
}