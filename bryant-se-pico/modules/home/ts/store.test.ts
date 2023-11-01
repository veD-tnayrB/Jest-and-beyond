import { StoreManager } from './store';

describe('StoreManager', () => {
	let store: StoreManager;

	beforeEach(() => {
		store = new StoreManager();
	});

	test('load method should return the input string', () => {
		const input = 'create';
		const output = store.load(input);
		expect(output).toBe(input);
	});

	test('initA method should initialize dependency A and return true', () => {
		const isInitialized = store.initA();
		expect(isInitialized).toBe(true);
	});

	test('initB method should initialize dependency B and return false', () => {
		const isInitialized = store.initB();
		expect(isInitialized).toBe(false);
	});
});
