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
### Generics

O tipo generecs fornece a possibilidade de inferir ou explicitar o tipo apenas no momento do seu uso.
Diferente do tipo `any`, ele consegue validar o tipo após o uso da função.

```typescript
function echoComGenerics<T>(objeto: T): T {
    return objeto;
}

console.log(echoComGenerics<string>('Thai').length); //Podemos deiaxr explicito o tipo T na hora do uso
console.log(echoComGenerics(28).length) // erro é validado pelo typescript antes da execução
console.log(echoComGenerics({ nome: 'Thai', idade: 28})) // TS infere o tipo de T conforme o tipo do objeto passado para ele
````

Podemos utilizar também o constrains para limitar os tipos de T:

```typescript
function echoComGenerics<T extends number | string>(objeto: T): T {
    return objeto;
}

console.log(echoComGenerics<string>('Thai').length); //Podemos deixar explicito o tipo T na hora do uso
console.log(echoComGenerics(28).length) // erro porque nao tem length em number
console.log(echoComGenerics({ nome: 'Thai', idade: 28})) // erro porque nao é string ou number
```

### Decorator

Decorators são parecidos com Annotations do java. Pode ser uma forma de chamar uma classe ou um método por notação.

Exemplo:

```
// @logarClasse
@logarSe(true)
class Eletro {
    constructor() {
        console.log("Chamou o construtor")
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function logarSe(sera: boolean): any {
```

## Anotações Gerais
- Bem interessante a biblioteca de gerar README: [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
- Uma API do Star Wars que proporciona um ambiente de estudos [Star Wars API](https://swapi.dev/)