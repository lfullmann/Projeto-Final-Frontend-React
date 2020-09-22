import React from "react";

import "./CardCategoria.css";
import { Card } from "react-bootstrap";
import api from "../../../service/api";
const CardCategoria = (props) => {
  const categoria = props.categoria;
  // const [editar, setEditar] = useState();

  async function deletar(id) {
    api
      .delete(
        `/categoria/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res));
    props.setNovo(props.novo + 1);
    console.log("clicou");
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCategoria;
