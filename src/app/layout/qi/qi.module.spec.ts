import { QiModule } from './qi.module';

describe('ChartsModule', () => {
    let chartsModule: QiModule;

    beforeEach(() => {
        chartsModule = new QiModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
