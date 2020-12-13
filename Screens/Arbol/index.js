import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { arbolClient } from "../../api/api";
import { addN, cambiarLetra, removeN } from "../../stores/slices/arbol";
import { generarNuevoColor } from "../../utils/utils";
import NodoArbol from "./Nodo";

const Container = styled.View`
  /* flex-direction: row; */
  flex: 1;
  background-color: "#F5FCFF";
`;

const Boton = styled.TouchableOpacity`
  border-radius: 0px !important;
  flex: 1;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "DDDDDD")};
  padding: 10px;
  color: #ffffff;
  font-weight: 1000;
  font-size: 0.8em;
  /* height: ${(props) => (props.height ? props.height : 80)}; */
  text-align: center;
  /* width: ${(props) => (props.width ? props.width : 80)}; */
`;

const BotonText = styled.Text`
  flex: 1;
  align-items: center;
  color: #ffffff;
  font-weight: 1000;
  font-size: 1.2em;
  text-align: center;
`;

const BotoneraInferior = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  flex-direction: row;
`;

const ArbolContent = styled.View`
  flex: 1;
  padding-bottom: 40px;
`;

const Fila = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default function EstadisticasScreen() {
  const arbol = useSelector((state) => state.arbol.arbol);
  const dispatch = useDispatch();
  const probarArbol = () => {
    arbolClient.postArbol(arbol);
  };

  return (
    <Container>
      <ArbolContent>
        {arbol.map((fila, filaIndice) => (
          <Fila key={"Fila-" + filaIndice}>
            {fila.map((nodoLetra, columnaIndice) => (
              <NodoArbol
                key={
                  "Fila-" +
                  filaIndice +
                  "-Columna-" +
                  columnaIndice +
                  "-" +
                  nodoLetra
                }
                filaIndice={filaIndice}
                columnaIndice={columnaIndice}
              ></NodoArbol>
            ))}
          </Fila>
        ))}
      </ArbolContent>
      <BotoneraInferior>
        <Boton color={"blue"}>
          <BotonText onPress={() => dispatch(addN())}>Agregar</BotonText>
        </Boton>
        <Boton color={"green"}>
          <BotonText onPress={probarArbol}>Probar</BotonText>
        </Boton>
        <Boton color={"red"}>
          <BotonText onPress={() => dispatch(removeN())}>Quitar</BotonText>
        </Boton>
      </BotoneraInferior>
    </Container>
  );
}
