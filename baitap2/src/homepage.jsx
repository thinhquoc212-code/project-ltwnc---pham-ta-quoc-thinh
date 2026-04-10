import SanPham from './Component/project';
import staff from './assets/importPicWebPack';
import Clickme from './Component/clickme';
import Content from './Component/Content';
import { NavLink } from 'react-router-dom';

function Homepage() {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold"
  };
  return (
    <>
      <header>
        <h1>Yugioh Card shop</h1>
        <p>Kết nối chia sẻ đam mê</p>
      </header>
      <nav>
        <ul>
          <li><NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Trang Chủ
          </NavLink>
          
          </li>
          <li><NavLink
            to="/members"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Thành viên
          </NavLink>
          </li>
          <li>
            <NavLink
              to="/content"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Bình luận
            </NavLink>
          </li>
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
              <Clickme/>

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

        <footer class = "footer">
          <p>&copy; 2024 Yugioh Card shop. All rights reserved.</p>
          <p style = {{fontSize: '20px', fontWeight: 'bold', color: 'black', marginBottom: '10px', marginTop: '20px'}}>
            Phần bình luận
          </p>
          <p>
            <Content/>
          </p>
        </footer>
      </main>
    </>
  )
}

export default Homepage