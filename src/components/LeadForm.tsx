
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const LeadForm = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      
      console.log('Lead submitted:', { phone });
      
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
      
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 max-w-md mx-auto">
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
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-12 h-14 text-lg border-gray-200 focus:border-[#B4DE00] focus:ring-2 focus:ring-[#B4DE00]/20 rounded-xl bg-white/50 backdrop-blur-sm"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#B4DE00] to-[#9BC400] hover:from-[#9BC400] hover:to-[#8AB300] text-black py-4 h-14 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Inscription...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Je veux être informé</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </Button>

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
        <div className="mt-8 space-y-3">
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
