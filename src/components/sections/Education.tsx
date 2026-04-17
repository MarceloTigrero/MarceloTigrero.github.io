import React from 'react';
import { useTranslation } from 'react-i18next';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  link: string;
}

const Education = () => {
  const { t } = useTranslation();
  const education = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('education.title')}</h2>
        
        <div className="grid gap-8">
          {education.map(edu => (
            <div key={edu.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {edu.degree}
                  </a>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;