import React from 'react';
import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contacto</h2>
        
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

          <a href="https://api.whatsapp.com/send/?phone=593962713880&text=Hola+Marcelo,+vi+tu+web+y+me+encant%C3%B3+tu+trabajo.+Quer%C3%ADa+contactarte+porque+estoy+buscando+ayuda+para%3A+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" title="Escríbeme por WhatsApp"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
            <MessageCircle size={32} />
            <span>WhatsApp</span>
          </a>
          
          <a href="/Tigrero_MARCELO_esp.pdf" 
            title="Descargar CV" download="Tigrero_MARCELO_CV.pdf"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Download size={32} />
            <span>Descargar CV</span>
          </a>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">¿Interesado en trabajar juntos?</h3>
          <p className="text-gray-400 mb-8">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            No dudes en contactarme para discutir posibles proyectos.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="mailto:tigreromarcelo@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300">
              <Mail size={20} />
              Enviar Correo
            </a>
            
            <a href="https://api.whatsapp.com/send/?phone=593962713880&text=Hola+Marcelo,+vi+tu+web+y+me+encant%C3%B3+tu+trabajo.+Quer%C3%ADa+contactarte+porque+estoy+buscando+ayuda+para%3A+&type=phone_number&app_absent=0" 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300">
              <MessageCircle size={20} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;