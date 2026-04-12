import { ChevronDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        MARCELO TIGRERO 
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          <span className="text-2xl md:text-4xl">
            Ingeniero Mecatrónico | Full Stack Developer | Maestría en Energías
            Renovables
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Transformando el Futuro: Creando soluciones innovadoras donde la
          tecnología y la sostenibilidad se encuentran
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Conecto la ingeniería de hardware con soluciones de software escalables. 
          Como Líder de I+D y Producto, transformo necesidades industriales complejas en tecnología rentable. 
          Mi experiencia abarca desde el <span className="font-bold text-blue-400">prototipado rápido y diseño de PCBs</span>, 
          hasta <span className="font-bold text-emerald-400">Sistemas Embebidos (IoT)</span>, 
          combinando una visión Full Stack para gestionar todo el ecosistema: <span className="text-white">desde el circuito hasta la nube.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a
            href="/Tigrero_MARCELO_esp.pdf"
            download="Tigrero_MARCELO_CV.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:-translate-y-1"
          >
            <Download size={20} />
            Descargar CV PDF
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-tigrero/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Linkedin size={20} className="text-blue-400" />
            LinkedIn
          </a>
        </div>

      </div>

      <div 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-xl" />
    </section>
  );
};

export default Hero;