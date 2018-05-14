import { PytelSharedModule } from './pytel-shared.module';

describe('PytelSharedModule', () => {
  let pytelSharedModule: PytelSharedModule;

  beforeEach(() => {
    pytelSharedModule = new PytelSharedModule();
  });

  it('should create an instance', () => {
    expect(pytelSharedModule).toBeTruthy();
  });
});
