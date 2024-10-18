import React, { useState } from "react";
import {AccordionContainer, AccordionContent, AccordionItem, AccordionTitle} from './style'
import { useNavigate } from "react-router-dom";
import { Paragrafo } from "../Textos/Paragrafo";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { title: "Cadastro", links: [
      {
       tituloLink: "Clientes",
       link: "/register-client",
       
      },
      {
        tituloLink: "Fornecedores",
        link: "/register-supplier",
       },

       {
        tituloLink: "Funcionários",
        link: "/register-employee",
       }
    ] },
    // { title: "Produtos", links: links.produtos },
    // { title: "Serviços", links: links.serviços },
    // { title: "Orçamentos", links: links.orcamentos },
    // { title: "Ordem de Serviço", links: links.ordemServicos },
    // { title: "Venda", links: links.venda },
    // { title: "Estoque", links: links.estoque },
    // { title: "Financeiro", links: links.financeiro },
    // { title: "Nota Fiscal", links: links.notaFiscal },
    // { title: "Contrato", links: links.contrato },
    // { title: "Atendimento", links: links.atendimento },
    // { title: "Relatório", links: links.relatorio },
  ];
  function handleLink (link) {
    navigate(link)
  }
  return (
    <AccordionContainer>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionTitle
            isActive={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
          </AccordionTitle>
          <AccordionContent isActive={activeIndex === index}>
            {item.links.map((link, i) => (
              <Paragrafo onClick={()=> handleLink(link.link)} textProp ={link.tituloLink} cursorProp={"pointer"} key={i}/>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};


