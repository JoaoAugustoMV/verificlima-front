import { PrevisaoFonte } from "./previsaoFonte";

export class PrevisaoDia {
    diaDaPrevisao: string;
    previsaoFeitaEm: string;
    previsoesFontes: PrevisaoFonte[] 
  
    
    constructor(diaDaPrevisao: string, previsaoFeitaEm: string, previsoesFontes: PrevisaoFonte[]) {
      this.diaDaPrevisao = diaDaPrevisao
      this.previsaoFeitaEm = previsaoFeitaEm
      this.previsoesFontes = previsoesFontes
    }
    
  }