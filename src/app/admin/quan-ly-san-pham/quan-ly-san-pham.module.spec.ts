import { QuanLySanPhamModule } from './quan-ly-san-pham.module';

describe('QuanLySanPhamModule', () => {
  let quanLySanPhamModule: QuanLySanPhamModule;

  beforeEach(() => {
    quanLySanPhamModule = new QuanLySanPhamModule();
  });

  it('should create an instance', () => {
    expect(quanLySanPhamModule).toBeTruthy();
  });
});
