import CustomButton from "../components/CustomButton.jsx";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-gray-600 text-gray-300">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Thiago Araujo
            <span className="block lg:block"> </span>
            <span className="text-gray-900"> Dev. Full Stack</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Sou desenvolvedor de software com graduação em Engenharia da
            Computação e experiência prática no desenvolvimento de soluções
            completas — do backend ao frontend. Trabalho com tecnologias
            modernas como <strong>Node.js, React, Python</strong> e{" "}
            <strong>Go</strong>, criando aplicações robustas, escaláveis e com
            boa performance.
            <br />
            Tenho atuado tanto no desenvolvimento de APIs quanto na criação de
            interfaces ricas. Minha abordagem é centrada em entender as
            necessidades reais do projeto e entregar soluções eficientes, com
            código limpo e bem estruturado. Se você está buscando alguém para
            desenvolver seu sistema ou otimizar sua stack,{" "}
            <span className="text-gray-900 font-semibold">
              {" "}
              vamos conversar !
            </span>
          </p>
        </div>

        {/* Imagem + Botões */}
        <div className="md:w-1/2 flex flex-col items-center gap-6">
          <img
            src={hero}
            alt="Hero"
            className="w-64 h-auto md:w-80 rounded-full shadow-lg"
          />

          {/* Botões */}
          <div className="flex gap-4">
            <CustomButton>
              Download CV
              <IoMdDownload />
            </CustomButton>
            <CustomButton>
              GitHub
              <FaGithub />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
