import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Componente de cabeçalho', () => {
	let componente: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		componente = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('deve criar o componente', () => {
		expect(componente).toBeTruthy();
	});

	it('deve exibir a estrutura de cabeçalho', () => {
		const cabecalho = fixture.nativeElement.querySelector('header') as HTMLElement;

		expect(cabecalho).toBeTruthy();
		expect(cabecalho.classList).toContain('topbar');
	});
});
