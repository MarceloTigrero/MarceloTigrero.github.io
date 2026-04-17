import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  
  // Extraer el arreglo de experiencias traducidas
  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gray-800/50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('experience.title')}</h2>
        
        <div className="space-y-12">
          {displayedExperiences.map((exp: ExperienceItem) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              
              <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-gray-500 whitespace-nowrap mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 mx-auto flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
        >
          {showAll ? (
            <>
              {t('experience.show_less')} <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {t('experience.show_more')} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Experience;