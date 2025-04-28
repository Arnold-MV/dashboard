import { AccordionFaqs } from "./components/AccordionFaqs";

const PageFaqs = () => {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
      <h2 className="mb-8 text-3xl">Preguntas Frecuentes</h2>
      <div className="mb-5">
        <p>
          Bienvenido a nuestra sección de Preguntas Frecuentes (FAQ) diseñada
          específicamente para brindarte respuestas rápidas y claras sobre el
          dashboard para empresas que hemos desarrollado con pasión.
        </p>
        <p>
          En nuestra página de FAQs, encontrarás una recopilación dde las
          preguntas más comunes que nuestros usuarios suelen hacer sobre el
          funcionamiento características y uso de nuestro dashboard. Desde cómo
          registrarte en la plataforma hasta cómo aprovechar al máximo sus
          funciones, hemos reunido una lista exhaustiva de interrogantes para
          ofrecerte la mejor experiencia posible.
        </p>
        <p>
          Nuestro equipo se ha esforzado por proporcionar respuestas detalladas
          y fáciles de entender para garantizar que encuentres la información
          que necesitas de manera rápida y sencilla. Si no encuentras la
          respuesta que buscas, no dudes en contactarnos. Estamos aquí para
          ayudarte en cada paso del camino.
        </p>
        <p>
          Explora nuestras FAQs y descubre como nuestro dashboard puede impulsar
          la eficiencia y el éxito de tu empresa.
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
};

export default PageFaqs;
