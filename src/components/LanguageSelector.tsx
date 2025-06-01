
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex items-center bg-gray-100 rounded-lg p-1">
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
            language === 'fr' 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setLanguage('fr')}
        >
          FR
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
            language === 'en' 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setLanguage('en')}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;
