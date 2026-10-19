import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DadosBloqueioCartoes } from '../../shared/models/dados-bloqueio-cartoes.model';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CartaoService {
	private readonly http = inject(HttpClient);

	bloquearCartoes(dadosBloqueio: DadosBloqueioCartoes): Observable<void> {
		return this.http.post<void>(environment.api.endpoints.cartoes.bloqueio, dadosBloqueio);
	}
}
