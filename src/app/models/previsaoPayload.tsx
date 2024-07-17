import { PrevisaoDia } from "./previsaoDia"

export class PrevisaoPayload{
    feitaEm: string
    previsoesDia: PrevisaoDia[]

    constructor(feitaEm: string, previsoesDia: PrevisaoDia[]){
        this.feitaEm = feitaEm
        this.previsoesDia = previsoesDia
    }
}