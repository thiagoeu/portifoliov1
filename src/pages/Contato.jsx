import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import CustomButton from "../components/CustomButton.jsx";
import { Link } from "react-router-dom";
import contatoilustration from "../assets/contact.png";

const Contato = () => {
  return (
    <section className="min-h-screen w-full bg-gray-600 text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:items-center">
        {/* Texto */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl">
            Contato
          </h1>
          <p className="text-lg leading-relaxed">
            Entre em contato comigo para discutir possíveis colaborações ou
            projetos interessantes. Vamos criar algo incrível juntos!
          </p>

          {/* Informações de contato */}
          <div className="mt-8 space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3 rounded-2xl bg-gray-700 p-4">
              <FaEnvelope className="text-lg" />
              <a
                href="mailto:araujo.thiago1051@gmail.com"
                className="text-gray-300 hover:underline"
              >
                araujo.thiago1051@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gray-700 p-4">
              <FaWhatsapp className="text-lg text-green-400" />
              <a
                href="https://wa.me/5583996485508?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                +55 (83) 99648-5508
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gray-700 p-4">
              <FaGithub className="text-lg" />
              <a
                href="https://github.com/thiagoeu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                github.com/thiagoeu
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gray-700 p-4">
              <FaInstagram className="text-lg text-pink-400" />
              <a
                href="https://instagram.com/thiagoeu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                @thiagoeu
              </a>
            </div>
          </div>

          {/* Botão de CV */}
          <div className="mt-6">
            <CustomButton>
              <IoMdDownload />
              Download CV
            </CustomButton>
          </div>
        </div>

        {/* Ilustração centralizada */}
        <div className="flex h-full w-full items-center justify-center md:w-1/2">
          <img
            src={contatoilustration}
            alt="Ilustração de contato"
            className="w-64 md:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;
