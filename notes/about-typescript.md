## Anotações sobre Typescript

- Os arquivos typescrypt são compilados para JS.
- Tipos são inferidos. Se era uma string, não aceitará algo diferente.
- Se tiver erro de tipo, o erro será gerado no terminal maas podemos compilar e usar o arquivo normalmente. Isso é configurável.
- Podemos usar o `tsc -w` para mantermos um `watch` nos arquivos ts. Assim a cada mudança nos arquivos ts, já gera automático o js correspondente.
- Pode-se usar o `live-serve` para manter o browser atualizando a cada mudança, em precisar executar um `refresh`. O próprio servidor já atualiza. Junto com o `tsc w`, ambos facilitam o estudo.

- A config `source mat: true` gera um arquivo de mapeamento que pode ser acessada no browser e traz o código como ts tornando mais fácil de debugar.
- É possível alterar a saída dos arquivos compilados para JS. Por exemplo, todos os arquivos JS irem para uma pasta chamada `build`.
- Mais informações do tsconfig na doc [handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) e [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

- O tipo `any` refere-se a qualquer tipo e pode ser útil na migração de JS para Typescript.
- O tipo `never` pode ser usado quando a função não terá retorno (loop infinito) ou o retorno é uma falha. Lembrando que se o retorno for vazio, o tipo é `void`.
- Union type permite definir quais tipos são permitidos usando `|` como separados. Por exemplo: `let nota: number | string = 10`.
- Podemos criar tipos específicos. Exemplo: 
```
type Funcionario = {
    supervisores: string[],
    ponto: (hora: number) => string
}

let func: Funcionario = {
    supervisores: ['Daiane', 'Laiane', 'Raiane'],
    ponto: pontoRegistrado
}

console.log(func)
console.log(func.ponto(8))
```

- Dica de JS. Spread espalha e Rest junta. :)

#### Namespace

- Namespace é uma propriedade do Typescript e não disponível no javascript.
- Podemos usar `/// <reference path='areaRetang.ts'/>` para importar namespace de outro arquivo
- Namespace define uma espaço onde o escopo será fechado. Por exemplo:

```
const PI = 3.14;

namespace Area {
  const PI = 3.1417;

  console.log('Na area',PI); // res: Na area 3.1417
}

console.log('Fora da area',PI); // res: Na area 3.14
```

| Namespace      | Módulos      |
| :------------- | :----------: |
|  Organização feita por objetos | Organização feita com módulos reais |
| Pode ser separado em vérios arquivos | App pode ter múltiplos módulos |
| Não há necessidade de loaders| Precisa de um loadre|
| Gerenciar dependências torna-se <br/>compliado com aplicações grandes| Declaração explícita de dependências |

### Interface

Usamos para determinar um conjunto de tipos. Uma classe pode implementar uma interface ou um método pode receber como propriedade uma propriedade com tipo de uma interface.

````
interface Humano {
  nome: string, -> obrigatório
  idade?: number, -> variavel opcional
  [prop: string]: any -> alguma varíavel com qualquer nome(prop: string ) e que recebe qualquer tipo de atributo (any)
    saudar(nome: string): void -> Método
}
````

## Anotações Gerais
- Bem interessante a biblioteca de gerar README: [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
- Uma API do Star Wars que proporciona um ambiente de estudos [Star Wars API](https://swapi.dev/)