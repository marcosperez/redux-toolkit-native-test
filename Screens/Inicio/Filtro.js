import { Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../stores/slices/todoss";
import { Estados } from "../../constants";
import styled from "styled-components/native";

const Container = styled.View`
  height: 30;
  width: "100%";
  flex-direction: row;
  /* flex: 1;
  justify-content: "center";
  align-items: "center";
  background-color: "#F5FCFF";
  border-width: 1;
  flex-wrap: "wrap"; */
  align-self: stretch;
`;

const Boton = styled.TouchableOpacity`
  border-radius: 0px !important;
  flex: 1;
  align-items: "center";
  background-color: ${(props) => (props.color ? props.color : "DDDDDD")};
  padding: 7px;
  color: #ffffff;
  font-weight: 1000;
  font-size: 0.8em;
`;

export default function Filtro({}) {
  return (
    <Container>
      <Boton color="#000000">Todos</Boton>
      <Boton color="#81dd0f">En Progreso</Boton>
      <Boton color="#1115fa">Completado</Boton>
      <Boton color="#cc192a">Cerrados</Boton>
    </Container>
  );
}
