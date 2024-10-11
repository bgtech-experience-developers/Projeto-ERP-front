import React, { useState } from "react";
import './Accordion.css'; // Importando o CSS específico do accordion
import { links } from "./links";


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
    <div className="accordion">
      
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(0)}>
          <h3>Cadastro</h3>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            {links.cadastro.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
          
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(1)}>
          <h3>Produtos</h3>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            {links.produtos.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(2)}>
          <h3>Serviços</h3>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content">
            {links.serviços.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(3)}>
          <h3>Orçamentos</h3>
        </div>
        {activeIndex === 3 && (
          <div className="accordion-content">
           {links.orcamentos.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(4)}>
          <h3>Ordem de Serviço</h3>
        </div>
        {activeIndex === 4 && (
          <div className="accordion-content">
           {links.ordemServicos.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(5)}>
          <h3>Venda</h3>
        </div>
        {activeIndex === 5 && (
          <div className="accordion-content">
            {links.venda.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(6)}>
          <h3>Estoque</h3>
        </div>
        {activeIndex === 6 && (
          <div className="accordion-content">
            {links.estoque.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(7)}>
          <h3>Financeiro</h3>
        </div>
        {activeIndex === 7 && (
          <div className="accordion-content">
           {links.financeiro.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(8)}>
          <h3>Nota Fiscal</h3>
        </div>
        {activeIndex === 8 && (
          <div className="accordion-content">
            {links.notaFiscal.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(9)}>
          <h3>Contrato</h3>
        </div>
        {activeIndex === 9 && (
          <div className="accordion-content">
            {links.contrato.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(10)}>
          <h3>Atendimento</h3>
        </div>
        {activeIndex === 10 && (
          <div className="accordion-content">
            {links.atendimento.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(11)}>
          <h3>Relatório</h3>
        </div>
        {activeIndex === 11 && (
          <div className="accordion-content">
            {links.relatorio.map(link => (
              <p>{link.texto}</p>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Accordion;
