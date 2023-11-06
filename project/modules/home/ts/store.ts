import { AEntity, BEntity } from 'jest-test/entities';

// Codigo para simular pruebas
export class StoreManager {
	#aEntity: AEntity = new AEntity();
	#bEntity: BEntity = new BEntity();

	load = (id: string) => {
		return id;
	};

	initA = () => this.#aEntity.init();
	initB = () => this.#bEntity.init();
}
