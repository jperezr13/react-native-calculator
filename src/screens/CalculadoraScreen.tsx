import React from 'react'
import { Text, View } from 'react-native'
import BotonCalc from '../components/BotonCalc';
import { styles } from '../theme/appTheme'
import useCalculadora from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { 
        numero, numeroAnterior, limpiar, 
        positivoNegativo, borrarUltimoNumero, 
        armarNumero, bntDividir, bntMultiplicar,
        bntSumar, bntRestar, calcular
     } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (<Text style={styles.resultadoSmall}>{numeroAnterior}</Text>)
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
                <BotonCalc texto="del" color="#9b9b9b" accion={borrarUltimoNumero} />
                <BotonCalc texto="/" color="#FF9427" accion={bntDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="X" color="#FF9427" accion={bntMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={bntRestar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={bntSumar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={calcular} />
            </View>
        </View>
    )
}
