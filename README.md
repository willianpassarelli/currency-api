# API de Moedas

API para consulta de cotações de mais 150 moedas convertidas para o Real, diretamente do site do bcb (Banco central do Brasil).


## (GET) Retorna moeda selecionada
```
https://currencydevpass.herokuapp.com/currency/USD
```

Retorna a ultima cotação da moeda selecionada.

## (GET) Retorna moeda com a data da cotação

```
https://currencydevpass.herokuapp.com/currency/USD?date=2020-01-06
```
Formato da data: yyyy-MM-dd

## (GET) Retorna todas as moedas com a última cotação registrada

```
https://currencydevpass.herokuapp.com/currency/all
```

## (GET) Retorna todas as moedas com a data da cotação selecionada

```
https://currencydevpass.herokuapp.com/currency/all?date=2020-01-06
```
Formato da data: yyyy-MM-dd

## (GET) Retorna a cotação de um período específico da moeda selecionada

```
https://currencydevpass.herokuapp.com/currency/USD?startDate=2019-12-20&endDate=2020-01-06
```
Formato da data: yyyy-MM-dd

## (POST) Grava no banco de dados a cotação de uma data específica

Ex.:
```
https://currencydevpass.herokuapp.com/quotation/20191223
```

Se a data já estiver no banco de dados ou no site do bcb não possuir nenhuma informação o mesmo retornará uma mensagem de erro.

Obs.: A API possui um schedule que roda todos os dias as 13:00 (Time zone de São Paulo) com atualização da cotação do dia, o schedule está programado com este horário pois o bcb atualiza a partir das 13:00hrs.

## Legendas

|KEY                |LABEL                          |
|----------------|-------------------------------
|quotationDate | Data da Cotação
|codCurrency | Código da Moeda
|currency | Moeda
|purchase | Compra
|sale | Venda
|prtPurchase | Paridade Compra
|prtSale | Paridade Venda

##  Moedas

| 1 | 2 | 3 | 4 |
|---|---|---|---|
|AFN|ALL|MDL|HRK|
|ETB|BND|RON|LAK|
|THB|KYD|BGN|ZAR|
|PAB|SGD|GIP|CNY|
|VES|CLF|EGP|CNH|
|BOB|FJD|GBP|QAR|
|GHS|HKD|FKP|OMR|
|CRC|TTD|LBP|YER|
|SVC|XCD|SHP|IRR|
|NIO|USD|SYP|SAR|
|DKK|JMD|SZL|KHR|
|ISK|LRD|LSL|MYR|
|NOK|NZD|TMT|RUB|
|SEK|SBD|MZN|BYN|
|CZK|SRD|ERN|TJS|
|GMD|VND|NGN|MUR|
|DZD|AMD|AOA|NPR|
|KWD|CVE|TWD|SCR|
|BHD|ANG|TRY|LKR|
|IQD|AWG|PEN|INR|
|JOD|HUF|BTN|IDR|
|LYD|CDF|MRO|MVR|
|MKD|BIF|MRU|PKR|
|RSD|KMF|TOP|ILS|
|SDG|XAF|MOP|KGS|
|TND|XOF|ARS|UZS|
|SSP|XPF|CLP|BDT|
|XDR|DJF|COP|WST|
|MAD|GNF|CUP|KZT|
|AED|MGA|DOP|MNT|
|STD|RWF|PHP|VUV|
|AUD|CHF|MXN|KRW|
|BSD|HTG|UYU|TZS|
|BMD|PYG|BWP|KES|
|CAD|UAH|MWK|UGX|
|GYD|JPY|ZMW|SOS|
|NAD|GEL|GTQ|PLN|
|BBD|HNL|MMK|EUR|
|BZD|SLL|PGK|XAU|

##
