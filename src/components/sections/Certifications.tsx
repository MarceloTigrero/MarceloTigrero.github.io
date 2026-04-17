import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credential: string;
  link: string;
}

const Certifications = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  
  const certifications = t('certifications.items', { returnObjects: true }) as CertificationItem[];
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-gray-800/50" id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('certifications.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map(cert => (
            <a 
              key={cert.id} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform"
            >
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
              <p className="text-gray-600 text-xs mt-2">{t('certifications.credential')}: {cert.credential}</p>
            </a>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 mx-auto flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
        >
          {showAll ? (
            <>
              {t('certifications.show_less')} <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {t('certifications.show_more')} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Certifications;