"use client"
import Image from "next/image";
import LogoutIcon from '@mui/icons-material/Logout';
import { RootState, useAppSelector } from "@/store";
import Link from "next/link";
export default function TopBar() {
    const userData = useAppSelector((state: RootState) => state.auth.userData);
    console.log(userData?.access_token, "accessToken");

    return (
        <div className="sticky top-0 bg-white" style={{ boxShadow: "0px 0px 6px 0px #00000040", zIndex: 100 }}>
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="">
                    <Image
                        className=""
                        src={"/images/png/instapract.png"}
                        alt={"logo"}
                        width={260}
                        height={35}
                    ></Image>
                </div>
                <div className="bg-primary text-black rounded-md flex items-center">
                    <Link href={{pathname: '/profile'}}  className="flex">
                        <div className="mr-6">
                            <Image
                                className=""
                                src={userData?.PatientProfile?.profile_picture ?? "/images/png/profile_pic.png"}
                                alt={"logo"}
                                width={55}
                                height={65}
                            ></Image>
                        </div>
                        <div className="mr-6">
                            <div className="text-xl font-semibold text-black">Hi, {userData?.PatientProfile?.display_name ?? "Rowena Ravenclaw"}</div>
                            <div className="text-base text-black">User ID:{userData?.User?.id ?? "AAE4125"}</div>
                        </div>
                    </Link>

                    <LogoutIcon />
                </div>
            </div>
        </div>
    );
}
