# paginació Wheel

Aquest codi serveix per tenir una web on paginem d'una pantalla a una altra amb la roda del ratolí (event `wheel`), com fan a la web https://details.ch.

Per associar el moviment de la roda amb la funció que passa pàgina, ho fem amb l'event de javascript `wheel`:
`window.onwheel = passaPagina;`

En aquest cas volem que, quan paginem, sembli que la nova pàgina vingui d'avall i la que ha de marxar, puji. Per fer això, d'entrada, posem totes les pàgines fora de la pantalla, tenint al `css` la classe `supercontenidor` amb posició absoluta i `top: 100vh;`. Cada cop que vulguem mostrar una pàgina, li canviem per codi el `top`, donant-li el valor 0. Posem un temps de transició a la propietat `top` de 3 segons per què la pàgina puji de manera animada. De la mateixa manera, per què la pàgina que volem passar desaparegui cap a adalt, li donem al seu `top` un valor de `-100vh`.

Com que normalment, quan l'usuari mogui la roda (especialment des d'un trackpad), aquest event es cridarà vàries vegades, hem de tenir un xivato que ens digui si ja estem passant pàgina, per només passar-ne una. En el nostre cas és la variable `passant`, que tindrà el valor `false` mentre no estem passant pàgina, però si es mou la roda, a més de fer el pas de pàgina, la posem a `true`. Després de 3 segons la tornem a posar a `false`, fent servir un `setTimeout`. Aprofitem aquesta funció que s'executa 3 segons després per posar de nou a sota de la pantalla el contenidor que hem fet pujar, de manera que quedi llest per quan vulguem tornar-lo a mostrar des d'avall.

Heu de tenir en compte que no tots els dispositius tenen un ratolí o si en tenen, poden no tenir roda. En general, s'hauria de buscar una alternativa per poder paginar a dispositius mòbils i altres que no tinguin ratolí amb roda. D'altra banda, elements com el trackpad permeten activar aquest event, sense ser realment un ratolí ni tenir cap roda.
