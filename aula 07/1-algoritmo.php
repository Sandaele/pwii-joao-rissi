<?php
    echo('# calculadora de consumo médio de combustível'.'<br>');

    echo('distância percorrida: 30km'.'<br>');
    echo('quantidade de combustível consumida: 2l'.'<br>');
    $distancia = 30;
    $combustivel = 2;

    $consumo = $distancia / $combustivel;

    echo('consumo médio de combustível: '.$consumo.' km/l');
?>