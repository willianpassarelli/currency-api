# 💰 API de Moedas

API para consulta para cotações de mais 150 moedas diretamente do site do bcb (Banco central do Brasil).


## (GET) Retorna moeda selecionada
```
http://localhost:3333/currency/USD
```

Retorna a ultima cotação da moeda selecionada.

## (GET) Retorna moeda com a data da cotação

```
http://localhost:3333/currency/USD?date=2019-12-26
```
Formato da data (yyyy-MM-dd)

## (GET) Retorna todas as moedas com a última cotação registrada

```
http://localhost:3333/currency/all
```

## (GET) Retorna todas as moedas com a data da cotação selecionada

```
http://localhost:3333/currency/all?date=2019-12-26
```
Formato da data (yyyy-MM-dd)

## (GET) Retorna a cotação de um período específico da moeda selecionada

```
http://localhost:3333/currency/USD?startDate=2019-12-20&endDate=2019-12-27
```

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
