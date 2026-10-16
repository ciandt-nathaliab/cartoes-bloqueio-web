export interface DadosBloqueioCartoes {
  cartaoId: string;
  tipoBloqueio: string;
  motivo: string;
  portadores: Portador[];
}

export interface Portador {
  portadorId: string;
}
