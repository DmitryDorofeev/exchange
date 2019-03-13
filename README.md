# Exchange screen [![Build Status](https://travis-ci.org/DmitryDorofeev/exchange.svg?branch=master)](https://travis-ci.org/DmitryDorofeev/exchange)

Storybook: https://storybook.jsdaddy.tech/

Demo: https://exchange.jsdaddy.tech/


## Contents

* */src/components* - all markup with css + tests + stories
* */src/modules* - redux + sagas (I use [redux ducks proposal](https://github.com/erikras/ducks-modular-redux))
    * */exchange* - almost all displaying data on exchange screen (except rates)
    * */rates* - rates info + fetch logic
    * */pockets* - just wallets list
* */src/utils* - some useful functions
