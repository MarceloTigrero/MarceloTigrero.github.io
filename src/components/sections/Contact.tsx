import React from 'react';
import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">{t('contact.title')}</h2>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href="https://github.com/MarceloTigrero" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Github size={32} />
            <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/marcelo-tigrero/" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:tigreromarcelo@gmail.com" target="_blank" rel="noopener noreferrer" title="Trabaje conmigo"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Mail size={32} />
            <span>Email</span>
          </a>

          <a href={t('contact.whatsapp_link')} target="_blank" rel="noopener noreferrer" title="WhatsApp"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
            <MessageCircle size={32} />
            <span>WhatsApp</span>
          </a>
          
          <a href={t('contact.cv_link')} 
            title={t('contact.download_cv')} download={t('contact.cv_file')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Download size={32} />
            <span>{t('contact.download_cv')}</span>
          </a>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">{t('contact.subtitle')}</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {t('contact.description')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="mailto:tigreromarcelo@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300">
              <Mail size={20} />
              {t('contact.email_btn')}
            </a>
            
            <a href={t('contact.whatsapp_link')} 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300">
              <MessageCircle size={20} />
              {t('contact.whatsapp_btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;