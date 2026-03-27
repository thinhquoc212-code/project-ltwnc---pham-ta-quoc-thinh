import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SanPham from './Component/project'
import productlogo1 from './assets/fiendsmith.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <body>
          <header>
              <h1>Yugioh Card shop </h1>
              <p>Kết nối chia sẽ đam mê</p>
          </header>

          <nav>
              <ul>
                  <li><a href="...">Trang chủ</a></li>
                  <li><a href="...">Thành viên</a></li>
                  <li><a href="...">Liên hệ</a></li>
              </ul>
          </nav>

          <main>
              <section>
                  <h2>
                      Danh sách Sản phẩm 
                  </h2>
                  <br></br>
                  <div class="member-grid">
                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 1"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 2"
                            company="Mahadoyugioh"
                          />
                      </article>

                     <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 3"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 4"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 5"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 6"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 7"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 8"
                            company="Mahadoyugioh"
                          />
                      </article>

                      <article class="member-card">
                          <SanPham
                            img = {productlogo1}
                            namee="Nhan Vien 9"
                            company="Mahadoyugioh"
                          />
                      </article>

                  </div>
              </section>
          </main>

          <footer>
              <p>© 2026 – Lớp K24TT – Ngành Công nghệ Thông tin</p>
          </footer>
      </body>
    </>
  )
}

export default App
