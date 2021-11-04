import {APP_URL} from '../../../config/consts'

export const cadastro = async () => {
    try{
        const resposta = await fetch (APP_URL + '/establishments', {method:'GET'})
        console.log(resposta)
    }catch(e){
        console.log(e)
    }
} 