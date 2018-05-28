import { QuanLyDonHangModule } from './quan-ly-don-hang.module';

describe('QuanLyDonHangModule', () => {
  let quanLyDonHangModule: QuanLyDonHangModule;

  beforeEach(() => {
    quanLyDonHangModule = new QuanLyDonHangModule();
  });

  it('should create an instance', () => {
    expect(quanLyDonHangModule).toBeTruthy();
  });
});
