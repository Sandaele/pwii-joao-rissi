<?php
    $array = array(2, 5, 7, 8, 10, 18, 30, 37, 38, 60);

    foreach ($array as $i) {
        if ($i % 2 == 0) {
            echo($i.' é par'.'<br>');
        } else {
            echo($i.' é impar'.'<br>');
        }
    }
?>