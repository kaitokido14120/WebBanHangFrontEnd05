import { QuanLyNguoiDungModule } from './quan-ly-nguoi-dung.module';

describe('QuanLyNguoiDungModule', () => {
  let quanLyNguoiDungModule: QuanLyNguoiDungModule;

  beforeEach(() => {
    quanLyNguoiDungModule = new QuanLyNguoiDungModule();
  });

  it('should create an instance', () => {
    expect(quanLyNguoiDungModule).toBeTruthy();
  });
});
