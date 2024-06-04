"use client";

import TextField from "@mui/material/TextField/TextField";
import Image from "next/image";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { RootState, useAppSelector } from "@/store";

export default function ProfilePage() {
  const user = useAppSelector((state: RootState) => state.auth);

  const inputStyles = {
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #9CA3AF",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #9CA3AF",
      },
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #9CA3AF",
    },
  };

  function TitleComponent({ text }: { text: string }) {
    return (
      <div className="flex items-center mb-6">
        <div className="text-black text-xl mr-4 ">{text}</div>
        <div className="flex-1 h-[1px]  bg-gray-300"></div>
      </div>
    );
  }

  function CustomTextField({
    placeholder,
    title,
    rows,
    value,
  }: {
    placeholder: string;
    title: string;
    rows: number;
    value: string;
  }) {
    return (
      <div className="w-full">
        <div className="text-black text-base font-light mb-2">{title}</div>
        <TextField
          placeholder={placeholder}
          fullWidth
          multiline
          rows={rows}
          value={value}
          sx={inputStyles}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 overflow-scroll" id="diff-scroll" style={{height:"calc(100vh - 94px)"}}>
      <TitleComponent text={"Profile"} />
      <div className="flex items-center justify-between gap-12 mb-12">
        <CustomTextField
          placeholder="First Name"
          title={"First Name"}
          rows={1}
          value={user.userData?.PatientProfile?.first_name ?? ""}
        />
        <CustomTextField
          placeholder="Middle Name"
          title={"Middle Name"}
          rows={1}
          value={user.userData?.PatientProfile?.middle_name ?? ""}
        />
        <CustomTextField
          placeholder="Last Name"
          title={"Last Name"}
          rows={1}
          value={user.userData?.PatientProfile?.last_name ?? ""}
        />
      </div>
      <div className="flex items-center justify-between gap-12 mb-12">
        <CustomTextField
          placeholder="Gender"
          title={"Gender"}
          rows={1}
          value={user.userData?.PatientProfile?.gender ?? ""}
        />
        <CustomTextField
          placeholder="DOB"
          title={"DOB"}
          rows={1}
          value={user.userData?.PatientProfile?.dob ?? ""}
        />
        <CustomTextField
          placeholder="Age"
          title={"Age"}
          rows={1}
          value={user.userData?.PatientProfile?.age ?? ""}
        />
      </div>
      <TitleComponent text={"Contact Details"} />
      <div className="flex items-start gap-12">
        <div className="w-1/3">
          <CustomTextField
            placeholder="Address"
            title={"Address"}
            rows={7}
            value={user.userData?.PatientProfileLocation?.landmark ?? ""}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-12 mb-12">
            <CustomTextField
              placeholder="Country"
              title={"Country"}
              rows={1}
              value={user.userData?.PatientProfileLocation?.country_name ?? ""}
            />
            <CustomTextField
              placeholder="State"
              title={"State"}
              rows={1}
              value={user.userData?.PatientProfileLocation?.state_name ?? ""}
            />
          </div>
          <div className="flex items-center justify-between gap-12 mb-12">
            <CustomTextField
              placeholder="City"
              title={"City"}
              rows={1}
              value={user.userData?.PatientProfileLocation?.city_name ?? ""}
            />
            <CustomTextField
              placeholder="Zipcode"
              title={"Zipcode"}
              rows={1}
              value={user.userData?.PatientProfileLocation?.postal_code ?? ""}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 mb-12">
        <CustomTextField
          placeholder="Mobile Number"
          title={"Mobile Number"}
          rows={1}
          value={user.userData?.PatientProfileLocation?.phone1 ?? ""}
        />
        <CustomTextField
          placeholder="Alternative Mobile Number"
          title={"Alternative Mobile Number"}
          rows={1}
          value={user.userData?.PatientProfileLocation?.phone2 ?? ""}
        />
      </div>
      <TitleComponent text={"Login Credentials"} />
      <div className="flex">
        <div className="w-1/3">
          <div className="relative">
            <Image
              className=""
              src={"/images/jpg/empty_profile.jpeg"}
              alt={"logo"}
              width={260}
              height={35}
            ></Image>
            <div className="absolute bottom-6 left-14 bg-white rounded-full ">
              <ControlPointOutlinedIcon sx={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className="text-base text-black font-light ml-8">
            Add your profile picture
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-12 mb-12">
            <CustomTextField
              placeholder="User Name / Email ID"
              title={"User Name / Email ID"}
              rows={1}
              value={user.userData?.User?.email ?? ''}
            />
            <CustomTextField
              placeholder="Password"
              title={"Password"}
              rows={1}
              value={''}
            />
          </div>
          <div className="flex items-end justify-between gap-12 mb-12 ">
            <div className="w-[47%]">
              <CustomTextField
                placeholder="Retype Password"
                title={"Retype Password"}
                rows={1}
                value={""}
              />
            </div>
            <div className="flex">
              <div className="bg-blue-500 text-white text-base rounded px-8 py-3 flex-1">
                Update
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
