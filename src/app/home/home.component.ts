import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartaoService } from '../core/services/cartao.service';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent],
})
export class HomeComponent {
  private readonly cartaoService = inject(CartaoService);

  protected bloquearCartoes(): void {
    const dadosBloqueio = {
      cartaoId: '1234567890',
      tipoBloqueio: 'TEMPORARIO',
      motivo: 'Perda',
      portadores: [{ portadorId: '1' }, { portadorId: '2' }],
    };

    this.cartaoService.bloquearCartoes(dadosBloqueio).subscribe();
  }
}
