export class Specialty {
    id: string | null = null;
    name: string | null = null;

    constructor(data?: Specialty) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
        }
    }
}

export class Doctor {
    id: string | null = null;
    email: string | null = null;
    specialty: Specialty[] = [];
    first_name: string | null = null;
    name: string | null = null;
    profile_picture: string | null = null;
    online_status: string | null = null;
    rating: string | number | null = null;
    fixed_charge: string | null = null;
    additional_minutes: string | null = null;
    avaya_ext: string | null = null;
    avaya_username: string | null = null;
    avaya_password: string | null = null;
    fixed_duration: string | null = null;
    isFav: boolean | null = false;

    constructor(data?: Doctor) {
        if (data) {
            this.id = data.id;
            this.email = data.email;
            this.specialty = data.specialty ? data.specialty.map(s => new Specialty(s)) : [];
            this.first_name = data.first_name;
            this.name = data.name;
            this.profile_picture = data.profile_picture;
            this.online_status = data.online_status;
            this.rating = data.rating;
            this.fixed_charge = data.fixed_charge;
            this.additional_minutes = data.additional_minutes;
            this.avaya_ext = data.avaya_ext;
            this.avaya_username = data.avaya_username;
            this.avaya_password = data.avaya_password;
            this.fixed_duration = data.fixed_duration;
            this.isFav = data.isFav;
        }
    }
}
