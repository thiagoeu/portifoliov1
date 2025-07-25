import CustomButton from "../components/CustomButton.jsx";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-gray-600 text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-10 px-4 py-16 md:flex-row">
        {/* Texto */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl">
            Thiago Araujo
            <span className="block lg:block"> </span>
            <span className="bold text-2xl text-gray-900">
              {" "}
              Desenvolvedor Full Stack
            </span>
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
            desenvolver seu sistema ou otimizar sua stack, estou aqui para
            ajudar.
          </p>
        </div>

        {/* Imagem + Botões */}
        <div className="flex flex-col items-center gap-6 md:w-1/2">
          <img
            src={hero}
            alt="imagem do desenvolvedor"
            className="h-auto w-64 rounded-full shadow-lg md:w-80"
          />

          {/* Botões */}
          <div className="flex gap-4">
            <CustomButton>
              <IoMdDownload />
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1jiJuT8DTW1t4CJ-tbqm_Z8Xl-reKpdcx/view?usp=sharing"
              >
                Download CV
              </a>
            </CustomButton>
            <CustomButton>
              <FaGithub />
              <a target="_blank" href="https://github.com/thiagoeu">
                GitHub
              </a>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
