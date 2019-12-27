## API de Moedas

API para consulta para cotações de mais 150 moedas diretamente do site do bcb (Banco central do Brasil).

### (GET) Retorna moeda atráves da sigla

```
http://localhost:3333/currency/USD
```

Retorna a ultima cotação da moeda selecionada.

### (GET) Retorna moeda atráves da sigla com a data da cotação

```
http://localhost:3333/currency/USD?date=2019-12-26
```
Formato da data (yyyy-MM-dd)

### (GET) Retorna todas as moedas com a última cotação registrada

```
http://localhost:3333/currency/all
```

### (GET) Retorna todas as moedas com a data da cotação selecionada

```
http://localhost:3333/currency/all?date=2019-12-26
```
Formato da data (yyyy-MM-dd)

### (GET) Retorna a cotação de um período específico da moeda selecionada

```
http://localhost:3333/currency/USD?startDate=2019-12-20&endDate=2019-12-27
```

### Legendas
quotationDate - Data da Cotação
codCurrency - Código da Moeda
currency - Moeda
purchase - Compra
sale - Venda
prtPurchase - Paridade Compra
prtSale - Paridade Venda

### Moedas
AFN
ETB
THB
PAB
VES
BOB
GHS
CRC
SVC
NIO
DKK
ISK
NOK
SEK
CZK
GMD
DZD
KWD
BHD
IQD
JOD
LYD
MKD
RSD
SDG
TND
SSP
XDR
MAD
AED
STD
AUD
BSD
BMD
CAD
GYD
NAD
BBD
BZD
BND
KYD
SGD
CLF
FJD
HKD
TTD
XCD
USD
JMD
LRD
NZD
SBD
SRD
VND
AMD
CVE
ANG
AWG
HUF
CDF
BIF
KMF
XAF
XOF
XPF
DJF
GNF
MGA
RWF
CHF
HTG
PYG
UAH
JPY
GEL
ALL
HNL
SLL
MDL
RON
BGN
GIP
EGP
GBP
FKP
LBP
SHP
SYP
SZL
LSL
TMT
MZN
ERN
NGN
AOA
TWD
TRY
PEN
BTN
MRO
MRU
TOP
MOP
ARS
CLP
COP
CUP
DOP
PHP
MXN
UYU
BWP
MWK
ZMW
GTQ
MMK
PGK
HRK
LAK
ZAR
CNY
CNH
QAR
OMR
YER
IRR
SAR
KHR
MYR
RUB
BYN
TJS
MUR
NPR
SCR
LKR
INR
IDR
MVR
PKR
ILS
KGS
UZS
BDT
WST
KZT
MNT
VUV
KRW
TZS
KES
UGX
SOS
PLN
EUR
XAU
