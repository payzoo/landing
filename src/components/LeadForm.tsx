
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, Globe, Check } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    userType: '',
    country: '',
    marketingOptIn: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Lead submitted:', formData);
      
      toast({
        title: "Merci !",
        description: "Nous vous tiendrons informé du lancement de Payzoo.",
      });
      
      // Reset form
      setFormData({
        phone: '',
        userType: '',
        country: '',
        marketingOptIn: false
      });
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
    <div id="signup" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B4DE00]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B4DE00]/20 rounded-2xl mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Rejoignez l'aventure
          </h3>
          <p className="text-gray-600 text-sm">
            Soyez parmi les premiers à découvrir Payzoo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number */}
          <div className="group">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
              Numéro de téléphone
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#B4DE00] transition-colors" />
              <Input
                id="phone"
                type="tel"
                placeholder="+225 1234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="pl-11 h-12 border-gray-200 focus:border-[#B4DE00] focus:ring-[#B4DE00] rounded-xl transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* User Type */}
          <div className="group">
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Votre profil
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
              <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
                <SelectTrigger className="pl-11 h-12 border-gray-200 focus:border-[#B4DE00] focus:ring-[#B4DE00] rounded-xl transition-all duration-200">
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl">
                  <SelectItem value="particulier" className="rounded-lg">🌟 Particulier</SelectItem>
                  <SelectItem value="marchand" className="rounded-lg">🏪 Marchand</SelectItem>
                  <SelectItem value="developpeur" className="rounded-lg">💻 Développeur</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Country */}
          <div className="group">
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Votre pays
            </Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
              <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                <SelectTrigger className="pl-11 h-12 border-gray-200 focus:border-[#B4DE00] focus:ring-[#B4DE00] rounded-xl transition-all duration-200">
                  <SelectValue placeholder="Sélectionnez votre pays" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl">
                  <SelectItem value="ci" className="rounded-lg">🇨🇮 Côte d'Ivoire</SelectItem>
                  <SelectItem value="fr" className="rounded-lg">🇫🇷 France</SelectItem>
                  <SelectItem value="sn" className="rounded-lg">🇸🇳 Sénégal</SelectItem>
                  <SelectItem value="gh" className="rounded-lg">🇬🇭 Ghana</SelectItem>
                  <SelectItem value="ml" className="rounded-lg">🇲🇱 Mali</SelectItem>
                  <SelectItem value="bj" className="rounded-lg">🇧🇯 Bénin</SelectItem>
                  <SelectItem value="bf" className="rounded-lg">🇧🇫 Burkina Faso</SelectItem>
                  <SelectItem value="other" className="rounded-lg">🌍 Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Marketing Opt-in */}
          <div className="flex items-start space-x-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
            <div className="relative">
              <input
                type="checkbox"
                id="marketing"
                checked={formData.marketingOptIn}
                onChange={(e) => setFormData({...formData, marketingOptIn: e.target.checked})}
                className="sr-only"
              />
              <label 
                htmlFor="marketing" 
                className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 ${
                  formData.marketingOptIn 
                    ? 'bg-[#B4DE00] border-[#B4DE00]' 
                    : 'border-gray-300 hover:border-[#B4DE00]'
                }`}
              >
                {formData.marketingOptIn && (
                  <Check className="w-3 h-3 text-black" />
                )}
              </label>
            </div>
            <label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
              J'accepte de recevoir des notifications concernant le lancement de Payzoo
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#B4DE00] to-[#9BC400] hover:from-[#9BC400] hover:to-[#8AB300] text-black py-4 h-14 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Inscription en cours...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Je rejoins la liste</span>
                <span className="text-xl">✨</span>
              </div>
            )}
          </Button>

          {/* Privacy Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
              <span>🔒</span>
              <span>Nous ne partagerons jamais vos données. Conforme RGPD.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
