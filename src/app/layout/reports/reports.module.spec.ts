import { ReportsModule } from './reports.module';

describe('ChartsModule', () => {
    let chartsModule: ReportsModule;

    beforeEach(() => {
        chartsModule = new ReportsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
