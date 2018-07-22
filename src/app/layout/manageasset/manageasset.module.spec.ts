import { ManageassetModule } from './manageasset.module';

describe('ChartsModule', () => {
    let chartsModule: ManageassetModule;

    beforeEach(() => {
        chartsModule = new ManageassetModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
