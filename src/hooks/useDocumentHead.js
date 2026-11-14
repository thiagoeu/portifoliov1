import { useEffect } from "react";

const BASE_TITLE = "Thiago Araujo | Desenvolvedor Full Stack & Engenheiro da Computação";
const BASE_DESCRIPTION =
  "Portfólio de Thiago Araujo - Engenheiro da Computação e Desenvolvedor Full Stack especializado em Node.js, React, Go, Python e IoT.";

/**
 * Hook customizado para atualizar deterministicamente o título e metatags da página.
 * Não requer dependências pesadas de terceiros (como react-helmet) e opera perfeitamente no ciclo do React 19.
 *
 * @param {Object} options
 * @param {string} [options.title] - Título específico da página.
 * @param {string} [options.description] - Descrição sucinta da página para SEO.
 */
export const useDocumentHead = ({ title, description } = {}) => {
  useEffect(() => {
    const previousTitle = document.title;
    const finalTitle = title ? `${title} | Thiago Araujo` : BASE_TITLE;
    document.title = finalTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription ? metaDescription.getAttribute("content") : BASE_DESCRIPTION;

    if (description) {
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", finalTitle);
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
};

export default useDocumentHead;
