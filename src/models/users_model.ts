export class Login {
    role_id: string | null = null;
    device_id: string | null = null;
    os_id: string | null = null;
    username: string | null = null;
    password: string | null = null;
    language: string | null = null;

    constructor(data?: Login) {
        if (data) {
            this.role_id = data.role_id;
            this.device_id = data.device_id;
            this.os_id = data.os_id;
            this.username = data.username;
            this.password = data.password;
            this.language = data.language;
        }
    }
}

export class User {
    id: string | null = null;
    username: string | null = null;
    email: string | null = null;
    status: number | null = null;
    hospital_id: string | null = null;
    avaya_ext: string | null = null;
    avaya_username: string | null = null;
    avaya_password: string | null = null;
    ribbon_ext: string | null = null;
    ribbon_username: string | null = null;
    ribbon_password: string | null = null;
    push_mode: number | null = null;

    constructor(data?: User) {
        if (data) {
            this.id = data.id;
            this.username = data.username;
            this.email = data.email;
            this.status = data.status;
            this.hospital_id = data.hospital_id;
            this.avaya_ext = data.avaya_ext;
            this.avaya_username = data.avaya_username;
            this.avaya_password = data.avaya_password;
            this.ribbon_ext = data.ribbon_ext;
            this.ribbon_username = data.ribbon_username;
            this.ribbon_password = data.ribbon_password;
            this.push_mode = data.push_mode;
        }
    }
}

export class Currency {
    symbol: string | null = null;
    prefix: string | null = null;
    hospital: string | null = null;
    country_id: string | null = null;

    constructor(data?: Currency) {
        if (data) {
            this.symbol = data.symbol;
            this.prefix = data.prefix;
            this.hospital = data.hospital;
            this.country_id = data.country_id;
        }
    }
}

export class PatientProfile {
    id: string | null = null;
    user_id: string | null = null;
    salute: string | null = null;
    first_name: string | null = null;
    middle_name: string | null = null;
    last_name: string | null = null;
    mrno: string | null = null;
    suffix: string | null = null;
    display_name: string | null = null;
    gender: string | null = null;
    dob: string | null = null;
    age: string | null = null;
    alternate_email: string | null = null;
    sys_language_id: string | null = null;
    ssno: string | null = null;
    blood_group: string | null = null;
    profile_picture: string | null = null;
    height: string | null = null;
    weight: string | null = null;
    bmi: string | null = null;
    linkedin_url: string | null = null;
    website_url: string | null = null;
    note: string | null = null;
    sys_ethnicity_id: string | null = null;
    sys_race_id: string | null = null;
    sys_time_zone_id: string | null = null;
    insurance_front_side: string | null = null;
    insurance_back_side: string | null = null;
    driving_licence: string | null = null;
    preferedlanguageid: string | null = null;
    preferedlanguagename: string | null = null;

    constructor(data?: PatientProfile) {
        if (data) {
            this.id = data.id;
            this.user_id = data.user_id;
            this.salute = data.salute;
            this.first_name = data.first_name;
            this.middle_name = data.middle_name;
            this.last_name = data.last_name;
            this.mrno = data.mrno;
            this.suffix = data.suffix;
            this.display_name = data.display_name;
            this.gender = data.gender;
            this.dob = data.dob;
            this.age = data.age;
            this.alternate_email = data.alternate_email;
            this.sys_language_id = data.sys_language_id;
            this.ssno = data.ssno;
            this.blood_group = data.blood_group;
            this.profile_picture = data.profile_picture;
            this.height = data.height;
            this.weight = data.weight;
            this.bmi = data.bmi;
            this.linkedin_url = data.linkedin_url;
            this.website_url = data.website_url;
            this.note = data.note;
            this.sys_ethnicity_id = data.sys_ethnicity_id;
            this.sys_race_id = data.sys_race_id;
            this.sys_time_zone_id = data.sys_time_zone_id;
            this.insurance_front_side = data.insurance_front_side;
            this.insurance_back_side = data.insurance_back_side;
            this.driving_licence = data.driving_licence;
            this.preferedlanguageid = data.preferedlanguageid;
            this.preferedlanguagename = data.preferedlanguagename;
        }
    }
}

export class PatientProfileLocation {
    id: string | null = null;
    user_id: string | null = null;
    door_no: string | null = null;
    street_name: string | null = null;
    landmark: string | null = null;
    locality: string | null = null;
    postal_code: string | null = null;
    phone1: string | null = null;
    phone2: string | null = null;
    phone_code: string | null = null;
    notes: string | null = null;
    country_id: string | null = null;
    country_name: string | null = null;
    state_id: string | null = null;
    state_name: string | null = null;
    city_id: string | null = null;
    city_name: string | null = null;

    constructor(data?: PatientProfileLocation) {
        if (data) {
            this.id = data.id;
            this.user_id = data.user_id;
            this.door_no = data.door_no;
            this.street_name = data.street_name;
            this.landmark = data.landmark;
            this.locality = data.locality;
            this.postal_code = data.postal_code;
            this.phone1 = data.phone1;
            this.phone2 = data.phone2;
            this.phone_code = data.phone_code;
            this.notes = data.notes;
            this.country_id = data.country_id;
            this.country_name = data.country_name;
            this.state_id = data.state_id;
            this.state_name = data.state_name;
            this.city_id = data.city_id;
            this.city_name = data.city_name;
        }
    }
}

export class NotificationDetails {
    totalpush: number | null = null;
    unread: number | null = null;
    read: number | null = null;
    unnotified: number | null = null;
    notified: number | null = null;
    totalappointment: number | null = null;
    totalcall: number | null = null;

    constructor(data?: NotificationDetails) {
        if (data) {
            this.totalpush = data.totalpush;
            this.unread = data.unread;
            this.read = data.read;
            this.unnotified = data.unnotified;
            this.notified = data.notified;
            this.totalappointment = data.totalappointment;
            this.totalcall = data.totalcall;
        }
    }
}

export class UserData {
    User: User | null = null;
    Currency: Currency | null = null;
    PatientProfile: PatientProfile | null = null;
    PatientProfileLocation: PatientProfileLocation | null = null;
    NotificationDetails: NotificationDetails | null = null;
    access_token: string | null = null;
    userType: string | null = null;

    constructor(data?: UserData) {
        if (data) {
            this.User = data.User ? new User(data.User) : null;
            this.Currency = data.Currency ? new Currency(data.Currency) : null;
            this.PatientProfile = data.PatientProfile ? new PatientProfile(data.PatientProfile) : null;
            this.PatientProfileLocation = data.PatientProfileLocation ? new PatientProfileLocation(data.PatientProfileLocation) : null;
            this.NotificationDetails = data.NotificationDetails ? new NotificationDetails(data.NotificationDetails) : null;
            this.access_token = data.access_token;
            this.userType = data.userType;
        }
    }
}
