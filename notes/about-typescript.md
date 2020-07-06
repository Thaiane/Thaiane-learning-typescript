## Anotações sobre Typescript

- Os arquivos typescrypt são compilados para JS.
- Tipos são inferidos. Se era uma string, não aceitará algo diferente.
- Se tiver erro de tipo, o erro será gerado no terminal maas podemos compilar e usar o arquivo normalmente. Isso é configurável.
- Podemos usar o `tsc -w` para mantermos um `watch` nos arquivos ts. Assim a cada mudança nos arquivos ts, já gera automático o js correspondente.
- Pode-se usar o `live-serve` para manter o browser atualizando a cada mudança, em precisar executar um `refresh`. O próprio servidor já atualiza. Junto com o `tsc w`, ambos facilitam o estudo.



## Anotações Gerais
- Bem interessante a biblioteca de gerar README: [readme-md-generator](https://github.com/kefranabg/readme-md-generator)