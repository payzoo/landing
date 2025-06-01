
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const countries = [
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'BE', name: 'Belgique', flag: '🇧🇪', dialCode: '+32' },
  { code: 'CH', name: 'Suisse', flag: '🇨🇭', dialCode: '+41' },
  { code: 'LU', name: 'Luxembourg', flag: '🇱🇺', dialCode: '+352' },
  { code: 'MC', name: 'Monaco', flag: '🇲🇨', dialCode: '+377' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'US', name: 'États-Unis', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'Royaume-Uni', flag: '🇬🇧', dialCode: '+44' },
  { code: 'DE', name: 'Allemagne', flag: '🇩🇪', dialCode: '+49' },
  { code: 'ES', name: 'Espagne', flag: '🇪🇸', dialCode: '+34' },
  { code: 'IT', name: 'Italie', flag: '🇮🇹', dialCode: '+39' },
  { code: 'NL', name: 'Pays-Bas', flag: '🇳🇱', dialCode: '+31' },
];

const LeadForm = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('FR');
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
      
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 max-w-4xl mx-auto overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Rejoignez l'aventure Payzoo
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
              Soyez les premiers informés du lancement et bénéficiez d'un accès prioritaire
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form with improved phone field visibility */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
              <div className="flex items-stretch gap-3">
                {/* Country Selector */}
                <div className="flex-shrink-0">
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="h-14 border-0 bg-gray-50 hover:bg-gray-100 focus:ring-0 focus:ring-offset-0 rounded-xl px-4 min-w-[140px] transition-all duration-200">
                      <SelectValue>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{currentCountry.flag}</span>
                          <div className="text-left">
                            <div className="font-bold text-gray-900 text-sm">{currentCountry.dialCode}</div>
                            <div className="text-xs text-gray-500">{currentCountry.name}</div>
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
                            <span className="font-semibold text-[#B4DE00]">{country.dialCode}</span>
                            <span className="text-gray-700 font-medium">{country.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Separator */}
                <div className="h-10 w-px bg-gray-200 mx-1 self-center"></div>

                {/* Phone Number Input - Improved visibility */}
                <div className="flex-1 relative">
                  <Input
                    type="tel"
                    placeholder="01 23 45 67 89"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 border-0 bg-gray-50 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#B4DE00] focus-visible:ring-offset-0 text-lg font-semibold text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 pr-12 transition-all duration-200"
                    required
                  />
                  <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <div className="absolute top-1 left-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Numéro de téléphone
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button - Positioned below */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white px-12 h-14 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Envoi...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <span>M'inscrire</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                )}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-green-500">🔒</span>
                <span className="font-medium">100% sécurisé</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-blue-500">⚡</span>
                <span className="font-medium">Désabonnement facile</span>
              </div>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-[#B4DE00]/5 to-transparent border border-[#B4DE00]/10 hover:border-[#B4DE00]/20 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Accès prioritaire</h4>
                <p className="text-sm text-gray-600">Découvrez Payzoo avant tout le monde</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tarifs préférentiels</h4>
                <p className="text-sm text-gray-600">Bénéficiez d'offres exclusives au lancement</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Newsletter exclusive</h4>
                <p className="text-sm text-gray-600">Recevez des insights et actualités</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
