import React, { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";
import _ from "lodash";

class MenuFilters extends React.Component {
  buildCheckboxes = (spec) => {
    const specList = [];

    this.props.productsByCat.map(({ specs }) => {
      if (Array.isArray(specs)) {
        specs.map(({ title, content }) => {
          content.map((iContent) => {
            if (title === spec) {
              specList.push(iContent);
            }
          });
        });
      }
    });

    const checkBoxList = _.uniq(specList);
    return checkBoxList.map((c) => {
      return (
        <div className="checkbox" key={c}>
          <label>
            <input
              type="checkbox"
              name={c}
              onChange={() => this.props.onFilterClick(c)}
              checked={this.props.specFiltersSelected.includes(c)}
            />{" "}
            {c}
          </label>
        </div>
      );
    });
  };

  mapSpecTitles = (categoria, subCategoria) => {
    const specs = catSpecs[categoria][subCategoria];

    if (specs) {
      return specs.map((spec) => {
        return (
          <Accordion key={spec}>
            <Card className="card sidebar-menu mb-4">
              <Accordion.Toggle
                as={Card.Header}
                eventKey={spec}
                className="card-header pointer"
              >
                <h3 className="h4 card-title">
                  {spec}

                  <> </>
                  <ContextAwareToggle eventKey={spec}></ContextAwareToggle>
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={spec}>
                <div id={spec}>
                  <div className="card-body">
                    <form>
                      <div className="form-group mb-0">
                        {this.buildCheckboxes(spec)}
                      </div>
                    </form>
                  </div>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      });
    }
  };

  render() {
    const { categoria, subCategoria } = this.props.categorias;
    const { isFiltersSelected } = this.props;

    return (
      <div className="col-lg-3">
        {this.mapSpecTitles(categoria, subCategoria)}
        <button
          className={
            isFiltersSelected
              ? "btn btn-sm btn-danger mb-4"
              : "btn btn-sm btn-danger mb-4 invisible "
          }
          onClick={() => this.props.onRemoveFiltersClick()}
        >
          <i className="fa fa-times-circle"></i> Limpar todos os filtros
        </button>
      </div>
    );
  }
}

function ContextAwareToggle({ eventKey }) {
  const currentEventKey = useContext(AccordionContext);

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <i
      className={
        isCurrentEventKey ? "fa fa-caret-up" : "fa fa-caret-down fa-xs"
      }
      style={{ fontSize: "14px" }}
    ></i>
  );
}

const catSpecs = {
  Computadores: {
    Desktops: [
      "Marca",
      "Armazenamento",
      "CPU",
      "RAM",
      "Gráficos",
      "Sistema Operativo",
      "Formato",
    ],
    Portáteis: [
      "Marca",
      "Armazenamento",
      "CPU",
      "RAM",
      "Gráficos",
      "Tipo teclado",
      "Ecrã touch",
      "Tamanho ecrã",
      "Resolução",
      "Taxa de atualização",
      "Sistema Operativo",
    ],
    Servidores: ["Marca", "Armazenamento", "CPU", "RAM", "Gráficos"],
  },
  Componentes: {
    "Placas gráficas": ["Memória", "Gama", "Gráficos", "Portas I/O"],
    Processadores: [
      "Série",
      "Socket",
      "Núcleos",
      "Gráficos",
      "Cooler incluído",
    ],
    "Fontes de Alimentação": ["Marca", "Eficiência", "Cablagem", "Potência"],
    Motherboards: [
      "Marca",
      "Chipset",
      "Socket",
      "Formato",
      "Suporte memória",
      "WiFi",
      "Bluetooth",
    ],
    Coolers: ["Socket", "Tipo", "Iluminação", "Tamanho ventoinha"],
    Caixas: [
      "Marca",
      "Suporte motherboards",
      "Tipo",
      "Janela lateral",
      "Iluminação",
      'Baías 5.25"',
      'Baías 3.5"',
      'Baías 2.5"',
      "Portas I/O",
      "Ventoínhas incluídas",
    ],
    RAM: [
      "Marca",
      "Formato",
      "Configuração",
      "Velocidade",
      "Latência",
      "Iluminação",
    ],
    Armazenamento: ["Marca", "Formato", "Capacidade", "Interface"],
  },
  Periféricos: {
    Audio: ["Marca", "Canais", "Tipo", "Sem fios", "Portas I/O"],
    "Ratos e Teclados": [
      "Marca",
      "DPI",
      "Layout teclado",
      "Formato teclado",
      "Iluminação",
      "Interruptores",
      "Conexão",
    ],
    Monitores: [
      "Marca",
      "Tamanho",
      "Resolução",
      "Painel",
      "Tempo de resposta",
      "Ratio",
      "Taxa de atualização",
      "Portas I/O",
      "Ajustabilidade",
      "VESA",
    ],
    Controladores: ["Marca", "Tipo"],
  },
};

export default MenuFilters;
