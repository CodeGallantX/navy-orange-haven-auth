
import React, { useState } from 'react';
import { Stethoscope, Heart, Shield, Users } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Stethoscope size={40} className="text-orange-300" />
              </div>
              <h1 className="text-4xl font-bold text-white">MediCare HMS</h1>
            </div>
            
            <p className="text-xl text-orange-100 max-w-md leading-relaxed">
              Advanced Hospital Management System connecting doctors and patients for better healthcare.
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mt-12">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Heart size={32} className="mx-auto mb-2 text-orange-300" />
                <p className="text-sm font-medium">Patient Care</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Shield size={32} className="mx-auto mb-2 text-orange-300" />
                <p className="text-sm font-medium">Secure Platform</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users size={32} className="mx-auto mb-2 text-orange-300" />
                <p className="text-sm font-medium">Team Collaboration</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Stethoscope size={32} className="mx-auto mb-2 text-orange-300" />
                <p className="text-sm font-medium">Expert Doctors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white/70 backdrop-blur-sm">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-navy-800 rounded-lg">
                <Stethoscope size={24} className="text-orange-400" />
              </div>
              <h1 className="text-2xl font-bold text-navy-800">MediCare HMS</h1>
            </div>
          </div>

          {/* Auth Toggle */}
          <div className="text-center">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isLogin 
                    ? 'bg-navy-800 text-white shadow-md' 
                    : 'text-navy-600 hover:bg-gray-200'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  !isLogin 
                    ? 'bg-navy-800 text-white shadow-md' 
                    : 'text-navy-600 hover:bg-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl card-shadow p-8">
            {isLogin ? <LoginForm /> : <SignupForm onSwitchToLogin={() => setIsLogin(true)} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
