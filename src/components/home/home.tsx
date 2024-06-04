"use client"

import FavoriteIcon from '@mui/icons-material/Favorite';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { addDoctors, addToFavorite, getDoctors, nullToast, removeDoctors } from "@/store/doctorsSlice";
import { PatientMyProviders } from '@/models/favorite_doctors_model';

export default function HomePageComponet() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (doctors.doctorsList == null)
            dispatch(getDoctors("https://uae-saas-api.instapract.ae/web/api/doctor/doc-list"))
    }, [])
    const doctors = useAppSelector((state: RootState) => state.doctors);
    const user = useAppSelector((state: RootState) => state.auth);
    console.log(doctors.doctorsList, "doctorList", doctors.showToast);

    function ProfileImage({ src, alt, width, height }: { src: any, alt: any, width: any, height: any }) {
        const [imageSrc, setImageSrc] = useState(src);

        const handleError = () => {
            setImageSrc('/images/jpg/empty_profile.jpeg');
        };

        return (
            <img
                className="rounded-full w-14 h-14 object-cover"
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                onError={handleError}
            />
        );
    }

    const favoriteDoc = (isFav: boolean, doctor_user_id: string) => {
        if (isFav) {
            const body = new PatientMyProviders({ doctor_user_id: doctor_user_id, is_deleted: "yes", patient_user_id: user.userData?.User?.id ?? "" });
            dispatch(removeDoctors(body))
        } else {
            const body = new PatientMyProviders({ doctor_user_id: doctor_user_id, is_deleted: "no", patient_user_id: user.userData?.User?.id ?? "" });
            dispatch(addDoctors(body))
        }
    };

    console.log(doctors.doctorsList,"doctors.doctorsList");
    

    return (
        <div className="container mx-auto">
            {doctors.showToast && <div className="bg-green-500 flex items-center justify-between px-4 text-white h-16 ">
                <div className=""></div>
                <div className="flex gap-4">
                    <div className="text-black bg-white rounded-full w-6 h-6 text-center">
                        <DoneIcon sx={{ fontSize: "18px" }} />
                    </div>
                    <div className="">{doctors.showToast == "add" ? "Added to favorites" : "Removed from favorites"}</div>
                </div>
                <div onClick={() => dispatch(nullToast())} className="">
                    <CloseIcon />
                </div>
            </div>}
            <div className="mx-24 mt-4">
                <div className="text-xl text-black font-base">
                    List of Available Doctors
                </div>
                <div className="mt-8" >
                    {doctors.doctorsList && doctors.doctorsList!.map((doctor) => (<div key={doctor.id} className="mb-8 flex items-center justify-between rounded py-4 px-8" style={{ boxShadow: "0px 0px 2px 0px #00000040" }}>
                        <div className="flex items-center gap-8">
                            <div className="">
                                <ProfileImage
                                    src={doctor.profile_picture}
                                    alt={"profile pic"}
                                    width={65}
                                    height={65}
                                />

                            </div>
                            <div className="">
                                <div className="text-black text-xl">{doctor.name}</div>
                                <div className="text-gray-400 text-base">Clinical Psychologist</div>
                            </div>
                        </div>
                        <div onClick={() => {favoriteDoc(doctor.isFav ?? false,doctor.id!) }} className={`${doctor.isFav ? "text-red-500" : "text-gray-200" }  cursor-pointer`}>
                            <FavoriteIcon />
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
}
