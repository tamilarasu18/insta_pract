"use client";

import Image from "next/image";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import { Login } from "@/models/users_model";
import { useAppDispatch } from "@/store";
import { LoginThunk } from "@/store/authSlice";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData,setLoginData] = useState(new Login())
    const [userAgent, setUserAgent] = useState<any>(null);
    const dispatch = useAppDispatch()
  useEffect(() => {
     setUserAgent(navigator.userAgent);
  }, []);
  console.log(userAgent,"userAgent");
  
    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const inputStyles = {
        '& .MuiInputBase-input': {
            color: '#000',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #9CA3AF'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #9CA3AF'
            },
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #9CA3AF'
        },
    };

    return (
        <div className="flex  h-screen">
            <div className="flex-1">
                <div className="bg-blue-500 h-full text-white text-5xl flex flex-col items-start justify-center px-24">
                    <div className="font-light pb-2">Instapract</div>
                    <div className="font-semibold leading-tight">User Centric Teleconsulting, Expert Opinion Platform.</div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col items-start justify-center px-24 h-full">
                    <Image
                        className="mb-16"
                        src={"/images/png/instapract.png"}
                        alt={"logo"}
                        width={260}
                        height={35}
                    ></Image>
                    <div className="w-full">
                        <div className="text-black text-2xl font-semibold mb-6">Login</div>
                        <div className="flex mb-12">
                            <div className="border-b border-blue-500 border-2 flex-1"></div>
                            <div className="border-b border-gray-400 flex-1"></div>
                        </div>
                        <div className="text-black text-xl font-semibold">UserName</div>
                        <div className="my-2">
                            <TextField
                                placeholder="Enter mail"
                                fullWidth
                                onChange={(ele) => {setLoginData({...loginData,username:ele.target.value} as Login)}}
                                sx={inputStyles}

                            />
                        </div>
                        <div className="text-black text-xl font-semibold mt-8">Password</div>
                        <div className="my-2">
                            <TextField
                                placeholder="Enter Password"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                onChange={(ele) => {setLoginData({...loginData,password:ele.target.value} as Login)}}
                                sx={inputStyles}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            onClick={handleClickShowPassword}
                                            position="end"
                                            className="cursor-pointer"
                                        >
                                            <div className="">
                                                {showPassword ? <VisibilityIcon sx={{ color: 'black' }} /> : <VisibilityOffIcon sx={{ color: 'black' }} />}
                                            </div>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="my-6 flex items-center gap-3">
                            <div className="border border-gray-300 w-6 h-6 rounded-full"></div>
                            <div className="text-xl">Remember me</div>
                        </div>
                        <div onClick={()=>{
                            loginData.device_id = "55c3389cb5ddd720dc0297617f3561c43a36218a277c974c8d43d545a643f45c";
                            loginData.os_id = "b93a9204-ee21-4cf9-8a94-cf5eeabf7301";
                            loginData.language = "da315627-3ece-2016-c628-b61dc5ee9be0";
                            loginData.role_id = "143f37f2-ca38-0ab1-2489-1e47113655fc";
                            dispatch(LoginThunk(loginData))
                        }} className="text-xl text-white font-semibold bg-blue-500 text-center py-4 rounded mt-8 cursor-pointer">
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
