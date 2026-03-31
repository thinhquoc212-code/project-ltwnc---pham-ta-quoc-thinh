import { useState } from 'react'
import './App.css'
import SanPham from './Component/project'
import staff from './assets/importPicWebPack'

function App() {
  return (
    <>
      <header>
        <h1>Yugioh Card shop</h1>
        <p>Kết nối chia sẻ đam mê</p>
      </header>

      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Thành viên</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>Danh sách Sản phẩm</h2>

          <div className="member-grid">

            <article className="member-card">
              <SanPham
                img={staff.fiendsmith}
                namee="Phan Thanh Thành"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.linkace}
                namee="Phạm Tạ Quốc Thinh"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.k9}
                namee="Nguyễn Nữ Anh Thư"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.lala}
                namee="Nguyễn Thảo Uyên"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.lili}
                namee="Trần Đình Khánh"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.skystriker}
                namee="Lưu Thị Ngọc Lành"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.mitsurugi}
                namee="Trương Gia Huy"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.solfachor}
                namee="Lê Trường Chinh"
                company="Mahadoyugioh"
              />
            </article>

            <article className="member-card">
              <SanPham
                img={staff.typhoon}
                namee="Lương Ngọc Thuận"
                company="Mahadoyugioh"
              />
            </article>

          </div>

        </section>
      </main>
    </>
  )
}

export default App