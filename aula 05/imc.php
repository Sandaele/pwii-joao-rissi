<?php

    echo ('# calculadora de imc'.'<br>');

    $peso = 70;
    $altura = 1.70;

    $imc = $peso / $altura ** 2;

    $class;

    if ($imc < 18.5) {
        $class = 'magreza';
    } elseif ($imc < 25) {
        $class = 'normal';
    } elseif ($imc < 30) {
        $class = 'sobrepeso';
    } elseif ($imc < 35) {
        $class = 'obesidade grau I';
    } elseif ($imc < 30) {
        $class = 'obesidade grau II';
    } else {
        $class = 'obesidade grau III';
    };

    echo ('imc: '.$imc.'<br>');
    echo ('classificação: '.$class)
?>