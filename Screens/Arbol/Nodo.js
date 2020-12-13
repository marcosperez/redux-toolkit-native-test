import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { COLORES_LETRAS } from "../../constants";
import { cambiarLetra } from "../../stores/slices/arbol";
import { generarNuevoColor } from "../../utils/utils";

const Nodo = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#DDDDDD")};
`;

const NodoText = styled.Text`
  flex: 1;
  text-align: center;
`;

export default function NodoArbol({ filaIndice, columnaIndice }) {
  const dispatch = useDispatch();

  const nodoLetra = useSelector(
    (state) => state.arbol.arbol[filaIndice][columnaIndice]
  );
  const bgColor = COLORES_LETRAS[nodoLetra]; // generarNuevoColor();
  console.log(nodoLetra);

  return (
    <Nodo
      bgcolor={bgColor}
      onPress={() =>
        dispatch(cambiarLetra({ fila: filaIndice, columna: columnaIndice }))
      }
    >
      <NodoText>{nodoLetra}</NodoText>
    </Nodo>
  );
}
