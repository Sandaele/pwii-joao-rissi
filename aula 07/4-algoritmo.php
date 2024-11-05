<?php
    echo('# calculadora de preços(?)'.'<br>');

    $valor = 50;
    $acrescimo = 0.16;
    $parcela = 10;

    $total = $valor + ($acrescimo * $valor);
    $parcelado = $total / $parcela;

    echo('valor da parcela: '.$parcelado.'<br>');
    echo('valor total da compra: '.$total);
?>