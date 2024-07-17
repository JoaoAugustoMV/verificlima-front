export class PrevisaoFonte{
    nome: string;
    urlSite: string; 
    temperaturaMin: number;
    temperaturaMax: number;
    // fonte: Fonte
  
    constructor(nome: string, urlSite: string, temperaturaMin: number, temperaturaMax: number){
      this.nome = nome;
      this.urlSite = urlSite;
      this.temperaturaMin = temperaturaMin
      this.temperaturaMax = temperaturaMax
    } 
  }