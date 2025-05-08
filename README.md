"""
Este script calcula o número de dias em que uma pessoa fez login no sistema da 42 Rio dentro de um intervalo de datas especificado.

Funcionalidades:
- Aceita uma data de início e uma data de término como entrada.
- Recupera os dados de login do usuário especificado no sistema da 42 Rio.
- Conta e retorna o número total de dias únicos em que o usuário fez login durante o período informado.

Uso:
- Certifique-se de que a conexão com a API ou banco de dados do sistema da 42 Rio esteja devidamente configurada.
- Forneça entradas de data válidas no formato 'YYYY-MM-DD'.
- O script exibirá o total de dias de login dentro do intervalo especificado.

Observações:
- O script assume que os dados de login são precisos e que o intervalo de datas é válido.
- Garanta o tratamento adequado de erros para casos como datas inválidas ou problemas de conectividade.

Retorno:
coins: 15 streak: 2

188025:[2025-04-22T00:00:00.000Z 2025-04-23T00:00:00.000Z 2025-04-24T00:00:00.000Z 2025-04-25T00:00:00.000Z 2025-04-26T00:00:00.000Z 2025-05-02T00:00:00.000Z 2025-05-03T00:00:00.000Z 2025-05-05T00:00:00.000Z 2025-05-07T00:00:00.000Z 2025-05-08T00:00:00.000Z]
"""