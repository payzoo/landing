import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

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

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre numéro de téléphone.",
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
        title: "Merci !",
        description: "Nous vous tiendrons informé du lancement de Payzoo.",
      });
      
      setPhone('');
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="signup" className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B4DE00]/5 via-transparent to-blue-500/5 rounded-3xl"></div>
      
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 max-w-lg mx-auto overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              Rejoignez l'aventure Payzoo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Soyez les premiers informés du lancement et bénéficiez d'un accès prioritaire
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-1 border border-gray-200">
              <div className="flex items-stretch">
                {/* Country Selector */}
                <div className="flex-shrink-0">
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="h-12 border-0 bg-transparent hover:bg-white/50 focus:ring-0 focus:ring-offset-0 rounded-xl px-3 min-w-[100px] transition-all duration-200">
                      <SelectValue>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{currentCountry.flag}</span>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 text-sm">{currentCountry.dialCode}</div>
                          </div>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 z-50">
                      {countries.map((country) => (
                        <SelectItem 
                          key={country.code} 
                          value={country.code}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-[#B4DE00]/5 cursor-pointer transition-colors duration-150"
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <span className="text-lg">{country.flag}</span>
                            <span className="font-semibold text-gray-900">{country.dialCode}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Separator */}
                <div className="h-8 w-px bg-gray-300 mx-2 self-center"></div>

                {/* Phone Number Input */}
                <div className="flex-1 relative">
                  <Input
                    type="tel"
                    placeholder="01 23 45 67 89"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 border-0 bg-transparent hover:bg-white/50 focus-visible:ring-2 focus-visible:ring-[#B4DE00] focus-visible:ring-offset-0 text-base font-medium text-gray-900 placeholder:text-gray-500 rounded-xl px-3 transition-all duration-200"
                    required
                  />
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white h-12 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Inscription...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <span>Découvrir en premier</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </Button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">🔒</span>
                <span className="font-medium">100% sécurisé</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">⚡</span>
                <span className="font-medium">Sans engagement</span>
              </div>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-br from-[#B4DE00]/5 to-transparent">
              <div className="w-6 h-6 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Accès prioritaire</h4>
                <p className="text-xs text-gray-600">Découvrez Payzoo avant tout le monde</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Tarifs préférentiels</h4>
                <p className="text-xs text-gray-600">Bénéficiez d'offres exclusives au lancement</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Newsletter exclusive</h4>
                <p className="text-xs text-gray-600">Recevez des insights et actualités</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
