import { API_URL } from '../../../config/consts';

/* Repare que:
    *   Adicionei um parâmetro "dados" na função
    *
    *   Você *TERIA* que checar se cada um dos dados é diferente de nulo,
    *   se eu já não tivesse feito essa análise no backend.
    *   Todavia, o backend retorna um erro e você vai dar seus pulos pra
    *   descobrir como caralhos fazer a mensagem de erro aparecer na tela
    *   😎👍
    * 
    *   Outra coisa que você vai ter que fazer é aprender a usar o método POST
    *   usando o fetch() e como passar os dados através dele.
    * 
    *   No mais, era isso. Boa sorte.

    */
export const cadastro = async (dados) => {
    try {
        // Devolve uma resposta em dados binários no formato JSON.
        const resposta = await fetch(API_URL + '/establishments', { method: 'GET' });

        /* Converte o JSON binário para um objeto do JavaScript.
            *   Mas não, você não precisa dele aqui, isso é só código exemplar.
            *   😎👍
        */
        // const json = await resposta.json();
    } catch (e) {
        console.info(e);
    }
};