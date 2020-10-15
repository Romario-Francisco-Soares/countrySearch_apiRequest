import { http } from './httpApi'

export default {

    // GET
    listar: () => {
        return http.get('all')
    }
}