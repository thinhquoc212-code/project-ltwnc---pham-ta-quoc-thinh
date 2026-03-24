import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import productlogo1 from './assets/Product/fiendsmith.jpg'
import productlogo2 from './assets/Product/k9.webp'
import productlogo3 from './assets/Product/mitsurugi.webp'
import productlogo4 from './assets/Product/skystriker.webp'
import productlogo5 from './assets/Product/solfachor.webp'
import productlogo6 from './assets/Product/typhoon.webp'
import './App.css'
import SanPham from './Component/My Product Component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
        <header>
            <h1>Giới thiệu bản thân </h1>
            <p>Lớp K24TT – Niên khóa 2024-2028, Phân hiệu ĐHĐN tại Kon Tum</p>
        </header>

        <nav>
            <ul>
                <li><a href="...">Trang chủ</a></li>
                <li><a href="...">Thành viên</a></li>
                <li><a href="...">Liên hệ</a></li>
            </ul>
        </nav>

        <main>
            <section class="class-intro">
                <h2>Thông tin Bản thân</h2>
                <p>
                    <strong>
                        Họ tên: 
                    </strong> 
                    Phạm Tạ Quốc Thinh
                </p>
                <p>
                    <strong>
                        Ngành học: 
                    </strong> 
                    Công nghệ Thông tin
                </p>
                <p>
                    <strong>
                        Trường:
                    </strong> 
                    Phân hiệu ĐHĐN tại Kon Tum
                </p>
                <p>
                  
                  <strong>sở thích: </strong>
                  coding, làm web, coi anime, chơi game
                </p>
            </section>

            <section>
                <h2>
                    Danh sách Sản phẩm 
                </h2>
                <br></br>
                <div class="member-grid">
                    <article class="member-card">
                        <SanPham
                          img = {productlogo1}
                          namee="Fiendsmith Engine"
                          price="1.000.000 VNĐ"
                          description="An engine with free 2 body and omni negate"
                        />
                    </article>

                    <article class="member-card">
                        <SanPham
                          img = {productlogo2}
                          namee="K9 Engine"
                          price="1.200.000 VNĐ"
                          description="Turn zero xyz handtrap"
                        />
                    </article>

                    <article class="member-card">
                        <SanPham
                          img = {productlogo3}
                          namee="Mitsurugi Engine"
                          price="2.000.000 VNĐ"
                          description="Omni negate with free 5 body engine"
                        />
                    </article>

                    <article class="member-card">
                        <SanPham
                          img = {productlogo4}
                          namee="Sky Striker Engine"
                          price="800.000 VNĐ"
                          description="Free draw engine for spell deck"
                        />
                    </article>

                    <article class="member-card">
                        <SanPham
                          img = {productlogo5}
                          namee="Solfachor Engine"
                          price="600.000 VNĐ"
                          description="Disgusting trash engine"
                        />
                    </article>

                    <article class="member-card">
                        <SanPham
                          img = {productlogo6}
                          namee="Typhoon Engine"
                          price="1.000.000 VNĐ"
                          description="Draw engine"
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
