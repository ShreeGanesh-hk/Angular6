import { InventoryModule } from './inventory.module';

describe('ChartsModule', () => {
    let chartsModule: InventoryModule;

    beforeEach(() => {
        chartsModule = new InventoryModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
