import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, Globe, Check } from 'lucide-react';

const countryData = {
  ci: { name: '🇨🇮 Côte d\'Ivoire', code: '+225' },
  fr: { name: '🇫🇷 France', code: '+33' },
  sn: { name: '🇸🇳 Sénégal', code: '+221' },
  gh: { name: '🇬🇭 Ghana', code: '+233' },
  ml: { name: '🇲🇱 Mali', code: '+223' },
  bj: { name: '🇧🇯 Bénin', code: '+229' },
  bf: { name: '🇧🇫 Burkina Faso', code: '+226' },
  other: { name: '🌍 Autre', code: '+' }
};

const LeadForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    userType: '',
    country: '',
    marketingOptIn: false
  });
  const [phonePrefix, setPhonePrefix] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (formData.country && countryData[formData.country as keyof typeof countryData]) {
      setPhonePrefix(countryData[formData.country as keyof typeof countryData].code);
    }
  }, [formData.country]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.userType || !formData.country) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const fullPhone = phonePrefix + ' ' + formData.phone;
      console.log('Lead submitted:', { ...formData, phone: fullPhone });
      
      toast({
        title: "Merci !",
        description: "Nous vous tiendrons informé du lancement de Payzoo.",
      });
      
      setFormData({
        phone: '',
        userType: '',
        country: '',
        marketingOptIn: false
      });
      setPhonePrefix('');
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
    <div id="signup" className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 max-w-sm mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-[#B4DE00]/20 rounded-full mb-3">
          <span className="text-lg">🚀</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          Rejoignez l'aventure
        </h3>
        <p className="text-gray-600 text-sm">
          Soyez notifié du lancement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Country and Phone Number on same line */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Pays et numéro de téléphone
          </Label>
          <div className="flex gap-2">
            {/* Country Selection */}
            <div className="relative w-2/5">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
              <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                <SelectTrigger className="pl-10 h-11 border-gray-200 focus:border-[#B4DE00] focus:ring-1 focus:ring-[#B4DE00] rounded-lg">
                  <SelectValue placeholder="Pays" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {Object.entries(countryData).map(([key, value]) => (
                    <SelectItem key={key} value={key} className="rounded-md">
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number with Prefix */}
            <div className="flex-1 flex gap-1">
              <div className="flex items-center px-2 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 min-w-[60px] justify-center">
                {phonePrefix || '+'}
              </div>
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="pl-10 h-11 border-gray-200 focus:border-[#B4DE00] focus:ring-1 focus:ring-[#B4DE00] rounded-lg"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* User Type */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Profil
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
            <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
              <SelectTrigger className="pl-10 h-11 border-gray-200 focus:border-[#B4DE00] focus:ring-1 focus:ring-[#B4DE00] rounded-lg">
                <SelectValue placeholder="Votre profil" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <SelectItem value="particulier" className="rounded-md">🌟 Particulier</SelectItem>
                <SelectItem value="marchand" className="rounded-md">🏪 Marchand</SelectItem>
                <SelectItem value="developpeur" className="rounded-md">💻 Développeur</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Marketing Opt-in */}
        <div className="flex items-start space-x-3 p-3 bg-gray-50/50 rounded-lg">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              id="marketing"
              checked={formData.marketingOptIn}
              onChange={(e) => setFormData({...formData, marketingOptIn: e.target.checked})}
              className="sr-only"
            />
            <label 
              htmlFor="marketing" 
              className={`flex items-center justify-center w-4 h-4 border-2 rounded cursor-pointer transition-all ${
                formData.marketingOptIn 
                  ? 'bg-[#B4DE00] border-[#B4DE00]' 
                  : 'border-gray-300 hover:border-[#B4DE00]'
              }`}
            >
              {formData.marketingOptIn && (
                <Check className="w-2.5 h-2.5 text-black" />
              )}
            </label>
          </div>
          <label htmlFor="marketing" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
            Recevoir les notifications de lancement
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#B4DE00] hover:bg-[#9BC400] text-black py-3 h-11 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              <span>Inscription...</span>
            </div>
          ) : (
            "Rejoindre la liste"
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Données sécurisées - Conforme RGPD
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
