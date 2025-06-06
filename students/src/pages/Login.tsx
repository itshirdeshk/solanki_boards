import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import background from "../assets/bg.jpg";
import axios from "axios";
import { studentLoginUrl } from "@/Config";
import { User, KeyRound, Shield } from "lucide-react";

export enum alertTypeEnum {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning",
}

interface LoginInput {
    applicationNumber: string;
    dateOfBirth: string; // Changed from headAadharNumber to dateOfBirth
}

export const Auth = () => {
    const navigate = useNavigate();
    const [loginInputs, setLoginInputs] = useState<LoginInput>({
        applicationNumber: "",
        dateOfBirth: "", // Changed from headAadharNumber to dateOfBirth
    });

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<alertTypeEnum>();

    async function sendRequest() {
        try {
            const response = await axios.post(
                `${studentLoginUrl}`,
                {
                    applicationNumber: loginInputs.applicationNumber,
                    dob: new Date(loginInputs.dateOfBirth).toISOString()
                }
            );

            const student = response.data.student;

            localStorage.setItem("id", student.id);
            localStorage.setItem("name", student.name);
            localStorage.setItem("paymentAmount", student.paymentAmount);
            localStorage.setItem("paymentStatus", student.paymentStatus);
            localStorage.setItem("number", student.phoneNumber);
            localStorage.setItem("role", "student");
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);

            setAlertMessage("Login Successful");
            setAlertType(alertTypeEnum.success);

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (e: any) {
            setAlertMessage(e.response?.data?.message || "An error occurred");
            setAlertType(alertTypeEnum.error);
            console.error(e.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-950 relative rounded-md">
            {/* Background Image */}
            <img
                src={background}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover ml-[-0.1vw]"
            />
            <div className="absolute inset-0 bg-opacity-0"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-6xl mx-auto rounded-lg shadow-lg  ">
                {/* Left Side */}
                <div className="hidden lg:flex w-1/2 bg-blue-900 p-8 flex-col rounded-l-lg justify-center items-center">
                    <img
                        src={logo}
                        alt="School Logo"
                        className="h-24 w-auto mb-8"
                    />
                    <Shield className="h-16 w-16 text-yellow-400 mb-6" />
                    <h1 className="text-3xl font-bold text-yellow-400 mb-4">
                        Welcome to Student Portal
                    </h1>
                    <p className="text-gray-100 text-lg text-center">
                        Secure access to your student dashboard.
                        Enter your Application Number and Date of Birth to continue. {/* Updated text */}
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex-1 bg-blue-950 p-6 lg:p-12 rounded-r-lg">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-yellow-200">
                                Student Login
                            </h2>
                            <p className="text-gray-400 mt-2 text-sm">
                                Enter your credentials to continue.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Application Number Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-yellow-200" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Application Number"
                                    className="w-full pl-10 pr-3 py-2 border border-blue-800 bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                    value={loginInputs.applicationNumber}
                                    onChange={(e) =>
                                        setLoginInputs({
                                            ...loginInputs,
                                            applicationNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* Date of Birth Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <KeyRound className="h-5 w-5 text-yellow-200" />
                                </div>
                                <input
                                    type="date" // Changed input type to date
                                    placeholder="Date of Birth (YYYY-MM-DD)"
                                    className="w-full pl-10 pr-10 py-2 border border-blue-800 bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                    value={loginInputs.dateOfBirth} // Changed from headAadharNumber to dateOfBirth
                                    onChange={(e) =>
                                        setLoginInputs({
                                            ...loginInputs,
                                            dateOfBirth: e.target.value, // Changed from headAadharNumber to dateOfBirth
                                        })
                                    }
                                />
                            </div>

                            {/* Login Button */}
                            <button
                                onClick={sendRequest}
                                className="w-full bg-yellow-300 text-blue-950 py-3 rounded-lg hover:bg-yellow-200 transition-all duration-300 flex items-center justify-center space-x-2 font-bold"
                            >
                                <KeyRound className="h-5 w-5" />
                                <span>Login</span>
                            </button>

                            {/* Alert Message */}
                            {alertMessage && (
                                <div
                                    className={`
                                        p-4 rounded-lg text-center text-sm
                                        ${
                                            alertType ===
                                            alertTypeEnum.success
                                                ? "bg-green-500 text-white"
                                                : "bg-red-500 text-white"
                                        }
                                    `}
                                >
                                    {alertMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;