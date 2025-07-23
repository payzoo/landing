import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const countries = [
  { code: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮', dialCode: '+225' },
  // { code: 'SN', name: 'Sénégal', flag: '🇸🇳', dialCode: '+221' },
  // { code: 'BJ', name: 'Bénin', flag: '🇧🇯', dialCode: '+229' },
  // { code: 'TG', name: 'Togo', flag: '🇹🇬', dialCode: '+228' },
  // { code: 'ML', name: 'Mali', flag: '🇲🇱', dialCode: '+223' },
  // { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', dialCode: '+226' },
  // { code: 'GN', name: 'Guinée', flag: '🇬🇳', dialCode: '+224' },
];

const LeadForm = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('CI');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const { toast } = useToast();
  const { t } = useLanguage();

  // Phone number validation function for Côte d'Ivoire
  const validatePhoneNumber = (phoneNumber: string): { isValid: boolean; error: string } => {
    // Remove any spaces or special characters
    const cleanPhone = phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '');
    
    // Check if empty
    if (!cleanPhone) {
      return { isValid: false, error: t('form.error.phone') };
    }
    
    // Check length (must be exactly 10 digits for Côte d'Ivoire)
    if (cleanPhone.length !== 10) {
      return { isValid: false, error: t('form.error.phone.length') };
    }
    
    // Check if it contains only numbers
    if (!/^\d{10}$/.test(cleanPhone)) {
      return { isValid: false, error: t('form.error.phone.invalid') };
    }
    
    // Check valid prefixes for Côte d'Ivoire mobile numbers
    const validPrefixes = ['01', '05', '07'];
    const prefix = cleanPhone.substring(0, 2);
    
    if (!validPrefixes.includes(prefix)) {
      return { isValid: false, error: t('form.error.phone.prefix') };
    }
    
    return { isValid: true, error: '' };
  };

  // Initialize EmailJS
  useEffect(() => {
    const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;
    if (emailUserId) {
      emailjs.init(emailUserId);
    } else {
      console.warn('EmailJS User ID is missing');
    }
  }, []);

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[0];

  // Handle phone input change with real-time validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    
    // Real-time validation
    const validation = validatePhoneNumber(value);
    setPhoneError(validation.error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number before submission
    const validation = validatePhoneNumber(phone);
    if (!validation.isValid) {
      setPhoneError(validation.error);
      toast({
        title: t('form.error.title'),
        description: validation.error,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const fullPhoneNumber = `${currentCountry.dialCode} ${phone}`;

      // Send email using EmailJS
      const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

      if (emailServiceId && emailTemplateId) {
        try {
          await emailjs.send(
            emailServiceId,
            emailTemplateId,
            {
              phone: fullPhoneNumber,
              country: currentCountry.name,
              country_code: selectedCountry
            }
          );
          console.log('Email sent successfully');
        } catch (emailError) {
          console.error('Error sending email:', emailError);
        }
      } else {
        console.warn('EmailJS Service ID or Template ID is missing');
      }

      toast({
        title: t('form.success.title'),
        description: t('form.success.description'),
      });

      setPhone('');
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: t('form.error.title'),
        description: t('form.error.description'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="signup" className="relative w-full max-w-md mx-auto">
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="relative p-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input container with error styling */}
            <div className={`bg-gray-50 rounded-xl p-1 border transition-all duration-200 ${
              phoneError ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
            }`}>
              <div className="flex items-stretch">
                {/* Country Selector */}
                <div className="flex-shrink-0">
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="h-12 border-0 bg-transparent hover:bg-white/50 focus:ring-0 focus:ring-offset-0 rounded-lg px-3 min-w-[100px] transition-all duration-200">
                      <SelectValue>
                        <div className="flex items-center space-x-2">
                          <span className="text-base">{currentCountry.flag}</span>
                          <span className="font-medium text-gray-900 text-sm">{currentCountry.dialCode}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 z-50">
                      {countries.map((country) => (
                        <SelectItem 
                          key={country.code} 
                          value={country.code}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <span className="text-base">{country.flag}</span>
                            <span className="font-medium text-gray-900">{country.dialCode}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Simple separator */}
                <div className="h-6 w-px bg-gray-300 mx-2 self-center"></div>

                {/* Phone Number Input */}
                <div className="flex-1 relative">
                  <Input
                    type="tel"
                    placeholder={t('form.phone.placeholder')}
                    value={phone}
                    maxLength={15}
                    onChange={handlePhoneChange}
                    className={`h-12 border-0 bg-transparent hover:bg-white/50 focus-visible:ring-1 focus-visible:ring-offset-0 text-base font-medium text-gray-900 placeholder:text-gray-500 rounded-lg px-3 transition-all duration-200 ${
                      phoneError 
                        ? 'focus-visible:ring-red-300 text-red-900 placeholder:text-red-400' 
                        : 'focus-visible:ring-orange-300'
                    }`}
                    required
                  />
                  <Phone className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
                    phoneError ? 'text-red-400' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            </div>

            {/* Error message display */}
            {phoneError && (
              <div className="text-sm text-red-600 mt-1 px-1 animate-in slide-in-from-top-1 duration-200">
                {phoneError}
              </div>
            )}

            {/* Simple Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12 rounded-xl font-medium text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>{t('form.submitting')}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <span>{t('form.submit')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </Button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default LeadForm;
