import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, ArrowRight } from 'lucide-react';

const countries = [
  { code: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮', dialCode: '+225' },
  { code: 'SN', name: 'Sénégal', flag: '🇸🇳', dialCode: '+221' },
  { code: 'BJ', name: 'Bénin', flag: '🇧🇯', dialCode: '+229' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬', dialCode: '+228' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱', dialCode: '+223' },
  { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', dialCode: '+226' },
  { code: 'GN', name: 'Guinée', flag: '🇬🇳', dialCode: '+224' },
];

const LeadForm = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('CI');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      toast({
        title: t('form.error.title'),
        description: t('form.error.phone'),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const fullPhoneNumber = `${currentCountry.dialCode} ${phone}`;
      console.log('Lead submitted:', { phone: fullPhoneNumber, country: selectedCountry });
      
      toast({
        title: t('form.success.title'),
        description: t('form.success.description'),
      });
      
      setPhone('');
    } catch (error) {
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
    <div id="signup" className="relative">
      <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 max-w-lg mx-auto overflow-hidden">
        <div className="p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-8">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
              {t('form.title')} <span className="font-medium">{t('form.title.highlight')}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              {t('form.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-1 border border-gray-200">
              <div className="flex items-stretch">
                {/* Country Selector */}
                <div className="flex-shrink-0">
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="h-14 border-0 bg-transparent hover:bg-white/50 focus:ring-0 focus:ring-offset-0 rounded-xl px-4 min-w-[110px] transition-all duration-200">
                      <SelectValue>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{currentCountry.flag}</span>
                          <span className="font-medium text-gray-900 text-sm">{currentCountry.dialCode}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 z-50">
                      {countries.map((country) => (
                        <SelectItem 
                          key={country.code} 
                          value={country.code}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <span className="text-lg">{country.flag}</span>
                            <span className="font-medium text-gray-900">{country.dialCode}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Separator */}
                <div className="h-8 w-px bg-gray-300 mx-3 self-center"></div>

                {/* Phone Number Input */}
                <div className="flex-1 relative">
                  <Input
                    type="tel"
                    placeholder={t('form.phone.placeholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 border-0 bg-transparent hover:bg-white/50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0 text-base font-medium text-gray-900 placeholder:text-gray-500 rounded-xl px-4 transition-all duration-200"
                    required
                  />
                  <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-black text-white h-14 rounded-xl font-medium text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>{t('form.submitting')}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <span>{t('form.submit')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </Button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-xs text-gray-500 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium">{t('form.secure')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">{t('form.no.commitment')}</span>
              </div>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-10 space-y-4">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
              <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('form.priority.access')}</h4>
                <p className="text-xs text-gray-600 font-light">{t('form.priority.access.desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
              <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('form.preferential.rates')}</h4>
                <p className="text-xs text-gray-600 font-light">{t('form.preferential.rates.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
