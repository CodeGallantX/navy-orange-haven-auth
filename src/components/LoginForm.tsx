
import React, { useState } from 'react';
import { LogIn, User, Mail, Lock, Stethoscope, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Login attempt:', formData);
    
    toast({
      title: "Login Successful!",
      description: `Welcome back, ${formData.role}!`,
    });

    // Role-based redirect
    if (formData.role === 'patient') {
      window.location.href = 'https://preview--patient-navy-orange-view.lovable.app/';
    } else {
      window.location.href = 'https://preview--azure-doc-haven.lovable.app/';
    }

    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy-800 mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Role Selection */}
        <div className="space-y-3">
          <Label className="text-navy-700 font-medium">I am a:</Label>
          <RadioGroup
            value={formData.role}
            onValueChange={(value) => handleInputChange('role', value)}
            className="flex space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="patient" id="patient-login" />
              <Label htmlFor="patient-login" className="flex items-center space-x-2 cursor-pointer">
                <Heart size={16} className="text-orange-500" />
                <span>Patient</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="doctor" id="doctor-login" />
              <Label htmlFor="doctor-login" className="flex items-center space-x-2 cursor-pointer">
                <Stethoscope size={16} className="text-navy-600" />
                <span>Doctor</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-navy-700 font-medium">Email Address</Label>
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-navy-700 font-medium">Password</Label>
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-navy-800 hover:bg-navy-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing In...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <LogIn size={20} />
              <span>Sign In</span>
            </div>
          )}
        </Button>
      </form>

      <div className="text-center">
        <button className="text-orange-600 hover:text-orange-700 font-medium">
          Forgot your password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
