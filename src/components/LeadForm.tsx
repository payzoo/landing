
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

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
    <div id="signup" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Rejoignez la liste d'attente
        </h3>
        <p className="text-gray-600">
          Soyez parmi les premiers à découvrir Payzoo et bénéficiez d'un accès anticipé.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone Number */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Numéro de téléphone *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+225 1234 5678"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4DE00] focus:border-[#B4DE00]"
            required
          />
        </div>

        {/* User Type */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Vous êtes *
          </Label>
          <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4DE00] focus:border-[#B4DE00]">
              <SelectValue placeholder="Sélectionnez votre profil" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              <SelectItem value="particulier">Particulier</SelectItem>
              <SelectItem value="marchand">Marchand</SelectItem>
              <SelectItem value="developpeur">Développeur</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Country */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Votre pays *
          </Label>
          <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4DE00] focus:border-[#B4DE00]">
              <SelectValue placeholder="Sélectionnez votre pays" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              <SelectItem value="ci">Côte d'Ivoire</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="sn">Sénégal</SelectItem>
              <SelectItem value="gh">Ghana</SelectItem>
              <SelectItem value="ml">Mali</SelectItem>
              <SelectItem value="bj">Bénin</SelectItem>
              <SelectItem value="bf">Burkina Faso</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Marketing Opt-in */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="marketing"
            checked={formData.marketingOptIn}
            onChange={(e) => setFormData({...formData, marketingOptIn: e.target.checked})}
            className="mt-1 w-4 h-4 text-[#B4DE00] border-gray-300 rounded focus:ring-[#B4DE00]"
          />
          <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
            J'accepte de recevoir des notifications SMS/WhatsApp concernant le lancement de Payzoo
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#B4DE00] hover:bg-[#9BC400] text-black py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Inscription en cours...' : 'Je rejoins la liste'}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Nous ne partagerons jamais vos données. Conforme RGPD.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
