
import React, { useState } from 'react';
import { User, Mail, Lock, Phone, MapPin, Calendar, Stethoscope, Heart, GraduationCap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    role: 'patient',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Patient specific
    dateOfBirth: '',
    address: '',
    emergencyContact: '',
    
    // Doctor specific
    specialization: '',
    licenseNumber: '',
    hospital: '',
    experience: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Signup data:', formData);
    
    toast({
      title: "Account Created Successfully!",
      description: `Welcome to MediCare HMS! Please sign in to continue.`,
    });

    // Switch to login form after successful signup
    setTimeout(() => {
      onSwitchToLogin();
    }, 1500);

    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderRoleSpecificFields = () => {
    if (formData.role === 'patient') {
      return (
        <>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-navy-700 font-medium">Date of Birth</Label>
            <div className="relative">
              <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-navy-700 font-medium">Address</Label>
            <div className="relative">
              <MapPin size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="address"
                placeholder="Enter your full address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContact" className="text-navy-700 font-medium">Emergency Contact</Label>
            <div className="relative">
              <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="emergencyContact"
                placeholder="Emergency contact number"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="space-y-2">
            <Label htmlFor="specialization" className="text-navy-700 font-medium">Specialization</Label>
            <Select onValueChange={(value) => handleInputChange('specialization', value)}>
              <SelectTrigger className="h-12 border-gray-200 focus:border-navy-500">
                <SelectValue placeholder="Select your specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                <SelectItem value="general">General Medicine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber" className="text-navy-700 font-medium">Medical License Number</Label>
            <div className="relative">
              <GraduationCap size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="licenseNumber"
                placeholder="Enter your license number"
                value={formData.licenseNumber}
                onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hospital" className="text-navy-700 font-medium">Hospital/Clinic</Label>
            <div className="relative">
              <Building2 size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="hospital"
                placeholder="Current workplace"
                value={formData.hospital}
                onChange={(e) => handleInputChange('hospital', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="text-navy-700 font-medium">Years of Experience</Label>
            <Select onValueChange={(value) => handleInputChange('experience', value)}>
              <SelectTrigger className="h-12 border-gray-200 focus:border-navy-500">
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="6-10">6-10 years</SelectItem>
                <SelectItem value="11-15">11-15 years</SelectItem>
                <SelectItem value="15+">15+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy-800 mb-2">Create Account</h2>
        <p className="text-gray-600">Join our healthcare community</p>
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
              <RadioGroupItem value="patient" id="patient-signup" />
              <Label htmlFor="patient-signup" className="flex items-center space-x-2 cursor-pointer">
                <Heart size={16} className="text-orange-500" />
                <span>Patient</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="doctor" id="doctor-signup" />
              <Label htmlFor="doctor-signup" className="flex items-center space-x-2 cursor-pointer">
                <Stethoscope size={16} className="text-navy-600" />
                <span>Doctor</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-navy-700 font-medium">First Name</Label>
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-navy-700 font-medium">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="h-12 border-gray-200 focus:border-navy-500"
              required
            />
          </div>
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
              className="pl-12 h-12 border-gray-200 focus:border-navy-500"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-navy-700 font-medium">Phone Number</Label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:border-navy-500"
              required
            />
          </div>
        </div>

        {/* Role-specific fields */}
        {renderRoleSpecificFields()}

        {/* Password Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-navy-700 font-medium">Password</Label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-navy-700 font-medium">Confirm Password</Label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-navy-500"
                required
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-navy-800 to-orange-600 hover:from-navy-700 hover:to-orange-500 text-white font-medium transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating Account...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>Create Account</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
