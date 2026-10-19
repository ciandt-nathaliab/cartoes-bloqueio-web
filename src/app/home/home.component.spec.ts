import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartaoService } from '../core/services/cartao.service';
import { DadosBloqueioCartoes } from '../shared/models/dados-bloqueio-cartoes.model';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let componente: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let servicoCartao: Pick<CartaoService, 'bloquearCartoes'>;

	beforeEach(async () => {
		servicoCartao = {
			bloquearCartoes: jest.fn().mockReturnValue(of(void 0)),
		};

		await TestBed.configureTestingModule({
			imports: [HomeComponent],
			providers: [{ provide: CartaoService, useValue: servicoCartao }],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		componente = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('deve criar o componente', () => {
		expect(componente).toBeTruthy();
	});

	it('deve exibir o título e o botão de bloqueio', () => {
		const titulo = fixture.nativeElement.querySelector('h1') as HTMLElement;
		const botao = fixture.nativeElement.querySelector('.botao-bloqueio') as HTMLButtonElement;

		expect(titulo.textContent?.trim()).toBe('Bloqueie seus cartões');
		expect(botao.textContent?.trim()).toBe('Bloquear cartões');
	});

	it('deve enviar os dados de bloqueio ao clicar no botão', () => {
		const dadosBloqueioEsperados: DadosBloqueioCartoes = {
			cartaoId: '1234567890',
			tipoBloqueio: 'TEMPORARIO',
			motivo: 'Perda',
			portadores: [{ portadorId: '1' }, { portadorId: '2' }],
		};
		const botao = fixture.nativeElement.querySelector('.botao-bloqueio') as HTMLButtonElement;

		botao.click();

		expect(servicoCartao.bloquearCartoes).toHaveBeenCalledTimes(1);
		expect(servicoCartao.bloquearCartoes).toHaveBeenCalledWith(dadosBloqueioEsperados);
	});
});
