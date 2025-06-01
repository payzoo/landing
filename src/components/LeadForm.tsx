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
      <div className="absolute inset-0 bg-gradient-to-br from-[#B4DE00]/10 to-transparent rounded-3xl"></div>
      
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Rejoignez l'aventure Payzoo
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Soyez les premiers informés du lancement et bénéficiez d'un accès prioritaire
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Formulaire simplifié en une ligne */}
          <div className="flex items-center gap-0 bg-gray-50 rounded-2xl p-2 border border-gray-200 focus-within:border-[#B4DE00] focus-within:ring-2 focus-within:ring-[#B4DE00]/20 transition-all">
            {/* Country Selector */}
            <div className="flex-shrink-0">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="h-12 border-0 bg-transparent focus:ring-0 focus:ring-offset-0 rounded-l-xl px-3">
                  <SelectValue>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{currentCountry.flag}</span>
                      <span className="font-medium text-gray-600">{currentCountry.dialCode}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 z-50">
                  {countries.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium text-[#B4DE00]">{country.dialCode}</span>
                        <span className="text-gray-700">{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-gray-300 mx-2"></div>

            {/* Phone Number Input */}
            <div className="flex-1">
              <Input
                type="tel"
                placeholder="6 12 34 56 78"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg placeholder:text-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex-shrink-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-black hover:bg-gray-800 text-white px-6 h-10 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Découvrir en premier</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span>🔒</span>
              <span>Pas de spam</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <span>⚡</span>
              <span>Désabonnement facile</span>
            </div>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="w-5 h-5 bg-[#B4DE00]/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
            <span>Accès prioritaire à la beta</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="w-5 h-5 bg-[#B4DE00]/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
            <span>Tarifs préférentiels au lancement</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="w-5 h-5 bg-[#B4DE00]/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
            <span>Newsletter exclusive avec insights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
