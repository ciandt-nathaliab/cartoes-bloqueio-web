import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DadosBloqueioCartoes } from '../../shared/models/dados-bloqueio-cartoes.model';
import { CartaoService } from './cartao.service';

describe('Serviço de cartões', () => {
  let servicoCartao: CartaoService;
  let controladorHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaoService, provideHttpClient(), provideHttpClientTesting()],
    });

    servicoCartao = TestBed.inject(CartaoService);
    controladorHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controladorHttp.verify();
  });

  it('deve enviar uma requisição POST com os dados de bloqueio', () => {
    const dadosBloqueio: DadosBloqueioCartoes = {
      cartaoId: '123456',
      tipoBloqueio: 'DEFINITIVO',
      motivo: 'SOLICITACAO_CLIENTE',
      portadores: [{ portadorId: '987654' }, { portadorId: '456789' }],
    };
    const respostaRecebida = jest.fn();

    servicoCartao.bloquearCartoes(dadosBloqueio).subscribe(respostaRecebida);

    const requisicao = controladorHttp.expectOne('operacoes/bloqueio-cartoes');
    expect(requisicao.request.method).toBe('POST');
    expect(requisicao.request.body).toEqual(dadosBloqueio);

    requisicao.flush(null);

    expect(respostaRecebida).toHaveBeenCalled();
  });
});
