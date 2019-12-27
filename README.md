## API de Moedas

API para consulta para cotações de mais 150 moedas diretamente do site do bcb (Banco central do Brasil).

### (GET) Retorna moeda atráves da sigla

```
http://localhost:3333/currency/USD
```

Retorna a ultima cotação da moeda selecionada.

### (GET) Retorna moeda atráves da sigla com a data da cotação

```
http://localhost:3333/currency/USD?date=23%2F12%2F2019
```

Formato da query

date: 23/12/2019

### (GET) Retorna todas as moedas com a última cotação registrada

```
http://localhost:3333/currency/all
```

### (GET) Retorna todas as moedas com a data da cotação selecionada

```
http://localhost:3333/currency/all?date=23%2F12%2F2019
```

Formato da query

date: 23/12/2019
