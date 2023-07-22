
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import image from "./img/logo.jpg"
import image1 from "./img/hot.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import image2 from "./img/banner.jpg"
import image3 from "./img/banner2.jpg"
import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./App.css"
import 'tailwindcss/tailwind.css'
import "./input.css"
function App() {
  const [menuopen, setMenuopen] = useState(false)


  const toggle = () => {
    setMenuopen(!menuopen)
  }
  return (
    <div>
      <header>
        <div className="flex justify-around items-center bg-[#000000]  sm:leading-[65px]">
          <div>
            <img src={image} alt="" className="w-[80px] h-[41px]" />
          </div>

          <div>
            <button onClick={toggle} className="menu-toggle  text-[25px] sm:hidden fixed right-4 top-4 z-50">
              {menuopen ? (
                <FontAwesomeIcon icon={faTimes} className="color-white" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="color-white" />
              )}
            </button>

            <div className={`${menuopen ? "" : "hidden"} sm:flex hidden float-right items-center mt-4 sm:mt-0`}>
              <ul className="flex flex-col sm:flex-row color-white left sm:justify-between sm:w-auto mr-36 ">
                <li className="px-10">
                  <a href="#" className="hover:text-red-600">TRAN</a>
                </li>
                <li className="px-10">
                  <a href="#" className="hover:text-red-600">CƠ HỘI NGHỀ NGHIỆP</a>
                </li>
                <li className="px-10">
                  <a href="#" className="hover:text-red-600">VỀ RIKKEISOFT</a>
                </li>
                <li className="px-10">
                  <a href="#" className="hover:text-red-600">TIN TỨC-SỰ KIỆN</a>
                </li>
                <li className="px-10">
                  <a href="#" className="hover:text-red-600">LIÊN HỆ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[65px] leading-[65px] mr-[130px]">
            <button className="bg-white text-black px-4   leading-8 shadow-md hover:shadow-lg">
              Ngôn ngữ
            </button>
          </div>

          <div className={`${menuopen ? "block" : "hidden"} fixed w-screen  bg-[#000000] color-white top-[65px] p-4 z-50`} onClick={toggle}>
            <ul className="flex flex-col sm:flex-row color-white left sm:justify-between sm:w-auto ">
              <li className="px-10">
                <a href="#" className="hover:text-red-600">TRANG CHỦ</a>
              </li>
              <li className="px-10">
                <a href="#" className="hover:text-red-600">TRANG CHỦ</a>
              </li>
              <li className="px-10">
                <a href="#" className="hover:text-red-600">CƠ HỘI NGHỀ NGHIỆP</a>
              </li>
              <li className="px-10">
                <a href="#" className="hover:text-red-600">VỀ RIKKEISOFT</a>
              </li>
              <li className="px-10">
                <a href="#" className="hover:text-red-600">TIN TỨC-SỰ KIỆN</a>
              </li>
              <li className="px-10">
                <a href="#" className="hover:text-red-600">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="text-black text-xl  text-center sm:mr-[570px] mt-3">
        <a href="#" className="px-2 hover:text-red-600">Trang chủ</a>/<a href="#" className="px-2 hover:text-red-600 ">Cơ hội việc làm</a>/<a href="#" className="px-2 hover:text-red-600">Tuyển dụng Ruby On Rails,VueJS</a>
      </div>

      <div className="sm:flex container  sm:m-auto sm:justify-around grid grid-cols-1">
        <div className="sm:w-[980px] lg:ml-[60px]">
          <h1 className="sm:text-[45px] text-[35px] font-bold  mt-[20px] sm:px-[10px] text-center sm:mr-[60px]">Tuyển dụng Ruby On Rails,VueJS</h1>
          <div className="grid lg:grid-cols-4 sm:w-[845px] sm:ml-[120px]  sm:grid-cols-2 grid-cols-1 mt-[30px] ml-[50px] ">
            <div className=" flex py-3">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red text-4xl " />
              </div>
              <div className="px-5">
                <b className="txt-xl">Địa điểm</b>
                <p className="text-[18px]">Đà Nẵng</p>
              </div>
            </div>

            <div className="flex py-3">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red text-4xl" />
              </div>
              <div className="px-5">
                <b className="text-xl">Trình Độ</b>
                <p className="text-[18px]">Junior</p>
              </div>
            </div>

            <div className=" flex py-3">
              <div >
                <FontAwesomeIcon icon={faSquareCheck} className="text-red text-4xl" />
              </div>
              <div className="px-5">
                <b className="text-xl">Mức Lương</b>
                <p className="text-[18px]">Thỏa thuận</p>
              </div>
            </div>

            <div className=" flex py-3">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red text-4xl" />
              </div>
              <div className="px-5">
                <b className="text-xl">Ngày Hết Hạn</b>
                <p className="text-[18px]">31/12/2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-[315px] text-center">
          <p className="text-center font-semibold text-lg">chia sẻ</p>
          <a href="" className="sm:text-[40px] text-[30px]  text-blue-600 px-1"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="" className="sm:text-[40px] text-[30px] text-blue-500 px-1"> <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href="" className=" sm:text-[40px] text-[30px] text-red-600 px-1"><FontAwesomeIcon icon={faGoogle} /></a>
          <div className="mt-[10px]">
            <button className="bg-[#BD2525] color-white font-medium w-[208px] h-[51px]">Ứng tuyển ngay</button>
          </div>
        </div>
      </div>

      <div className="container sm:px-[150px]">
        <div className=" mt-[25px] max-sm:px-9">
          <h2 className="text-[22px] font-bold text-red mb-[20px] ">Mô Tả Công Việc</h2>
          <ol className="list-disc">
            <li className="text-[17px] py-[4px]">Thiết kế, coding và kiểm thử hệ thống hoặc chức năng sau khi hoàn thành.</li>
            <li className="text-[17px] py-[4px]">Xây dựng kế hoạch và quản lý tiến độ lập trình theo kế hoạch.</li>
            <li className="text-[17px] py-[4px]">Nghiên cứu nắm bắt công nghệ mới.</li>
            <li className="text-[17px] py-[4px]">Join dự án sẽ được tham gia đầy đủ quy trình phát triển </li>
          </ol>
          <div className="px-[15px]">
            <p className="text-[17px]">+ Tạo thiết kế</p>
            <p className="text-[17px]">+ Tạo thiết kế</p>
            <p className="text-[17px]">+ Tạo thiết kế</p>
          </div>

        </div>

        <div className="mt-[25px] max-sm:px-9">
          <h2 className="text-[22px] font-bold text-red mb-[20px] left">Yêu cầu</h2>
          <ol className="list-disc">
            <li className="text-[17px] py-[4px]">Từ 2 năm kinh nghiệm</li>
            <li className="text-[17px] py-[4px]">Kỹ thuật: Rails, VueJS (đã làm với NuxtJS là lợi thế)</li>
            <li className="text-[17px] py-[4px]">Có kỹ năng tìm hiểu nghiệp vụ, điều tra, giải quyết issue kỹ thuật</li>
            <li className="text-[17px] py-[4px]">Có kỹ năng đối ứng công việc độc lập tốt</li>
            <li className="text-[17px] py-[4px]">Không ngại tìm hiểu ngôn ngữ mới đáp ứng yêu cầu dự án </li>
            <li className="text-[17px] py-[4px]">Lợi thế: kinh nghiệm làm với thị trường JP, mô hình agile/scrum </li>
            <li className="text-[17px] py-[4px]">Ham học hỏi, cầu tiến, chịu được áp lực </li>
          </ol>
        </div>



        <div className=" mt-[25px] mb-[35px] max-sm:px-9">
          <h2 className="text-[22px] font-bold text-red mb-[20px] left">Quyền Lợi</h2>
          <ul className="list-disc ">
            <li className="text-[17px] py-[4px]">LƯƠNG: Tối thiểu 13 tháng lương/năm. Xét TĂNG 2 lần/năm.</li>
            <li className="text-[17px] py-[4px]">THƯỞNG: thưởng Tết, thưởng dự án, thưởng ngày lễ, thưởng giới thiệu nhân sự...</li>
            <li className="text-[17px] py-[4px]">Phụ cấp thâm niên ( thời gian làm việc từ 2 năm trở lên).</li>
            <li className="text-[17px] py-[4px]">Tham gia các hoạt động học tập, đào tạo trong và ngoài công ty, tích điểm học tập, phát triển G◦  Point trên hệ thống Quản lý của công ty.</li>
            <li className="text-[17px] py-[4px]">Nghỉ thứ 7, chủ nhật + 12 ngày phép/ năm. </li>
            <li className="text-[17px] py-[4px]">Câu lạc bộ và nhiều hoạt động văn hóa ◦   thể thao ◦   nghệ thuật được công ty tài trợ hoặc hỗ trợ (Ví dụ: Bóng đá, bóng bàn, cầu lông, bơi lội, âm nhạc, tiếng anh, game...)</li>
            <li className="text-[17px] py-[4px]"> Đảm bảo sức khỏe: Khám sức khỏe định kỳ, hỗ trợ mua bảo hiểm sức khỏe chất lượng cao... </li>
            <li className="text-[17px] py-[4px]">Tham gia Chương trình bảo hiểm sức khỏe Rikkei Care. </li>
            <li className="text-[17px] py-[4px]">  Thoải mái tinh thần: Phát nhạc theo yêu cầu mỗi ngày, hoa quả tươi, các hoạt động teambuilding gắn kết... Đi chơi gần xa khắp nơi. </li>
            <li className="text-[17px] py-[4px]">  Cơ hội làm việc tại nước ngoài và du lịch khắp nơi. </li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className="text-4xl sm:ml-[120px] px-[30px] font-semibold  ">Vị trí đang tuyển</h1>
      </div>
      <div className="sm:flex sm:justify-around container grid grid-cols-1 left m-auto">
        <div className="sm:w-[845px] px-[30px]  mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px] max-sm:w-5 max-sm:h-6" />01 Sales IT Support - Tiếng Nhật (N2)</b>
            <p className="text-[19px] py-[10px] hover:text-red-600">Địa Điểm: Hà Nội - Trình Độ: Junior</p>
            <p className="text-[19px] ">- Hỗ trợ công việc của Sales chính, thực hiện process giấy tờ, tài liệu, profile công ty và triển khai thông tin đến phòng ban có liên quan. - Phối hợp với Rikkei Japan để làm thủ tục liên quan đến kh...</p>
          </span>
        </div>
        <div className="mt-[50px] px-[30px] ">
          <button className="bg-white border border-red-500 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white ">Ứng Tuyển Ngay</button>
        </div>
      </div>
      <hr className="container m-auto mt-[30px]" />

      <div className="sm:flex sm:justify-around container grid grid-cols-1 m-auto left">
        <div className="sm:w-[845px] px-[30px]  mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px]  max-sm:w-5 max-sm:h-6" />Java Developer (Middle)</b>
            <p className="text-[19px] py-[10px] hover:text-red-600 ">Địa Điểm: Hà Nội - Trình Độ:</p>
            <p className="text-[19px] ">- Phát triển dự án về bảo hiểm cho khách hàng. - Phạm vi công việc từ làm rõ yêu cầu của khách hàng, viết tài liệu thiết kế hệ thống cho đến develop, testing, deploy và vận hành hệ thống cho khách hàn...</p>
          </span>
        </div>
        <div className="mt-[50px] px-[30px] ">
          <button className="bg-white border  border-red-500 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white">Ứng Tuyển Ngay</button>
        </div>
      </div>
      <hr className="container m-auto mt-[30px]" />
      <div className="sm:flex sm:justify-around container grid grid-cols-1 m-auto left">
        <div className="sm:w-[845px] px-[30px]  mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px] max-sm:w-5 max-sm:h-6" />Tuyển dụng lập trình viên CakePhp, VueJS</b>
            <p className="text-[19px] py-[10px] hover:text-red-600">Địa Điểm: Đà Nẵng - Trình Độ: Junior</p>
            <p className="text-[19px] ">◦ Thiết kế, coding và kiểm thử hệ thống hoặc chức năng sau khi hoàn thành. ◦ Xây dựng kế hoạch và quản lý tiến độ lập trình theo kế hoạch. ◦ Nghiên cứu nắm bắt công nghệ mới. ◦ Join dự án sẽ đ...</p>
          </span>
        </div>
        <div className="mt-[50px] px-[30px] ">
          <button className="bg-white border border-red-600 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white">Ứng Tuyển Ngay</button>
        </div>
      </div>
      <div className="relative" style={{ background: '#ffffff' }}>
        <img alt="" src={image3} className="w-full sm:h-[550px] h-[350px] mt-[60px] object-cover" />
        <div className="w-[420px] sm:w-[1100px] m-auto rounded-xl p-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ background: '#ffffff' }}>
          <img alt="" src={image2} className="sm:w-[550px] sm:h-[350px] h-[250px] w-[300p] object-cover" />
        </div>
      </div>





      <footer className="bg-black">
        <div className="grid sm:grid-cols-4  sm:px-[130px] grid-cols-2">
          <div className="py-[30px]">
            <img src={image} alt="" className="w-[116px] h-[60px]" />
            <p className="color-white text-xl py-[15px]">Nơi giấc mơ bắt đầu</p>
          </div>
          <div className="py-[30px]">
            <ul>
              <li className="color-white py-[4px] hover:underline"><a href="#">Trang chủ</a></li>
              <li className="color-white py-[4px] hover:underline"><a href="#">Cơ hội nghề nghiệp</a></li>
              <li className="color-white py-[4px] hover:underline"><a href="#">Tin tức - sử kiện</a></li>
              <li className="color-white py-[4px] hover:underline"><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          <div className="color-white text-xl py-[30px]">
            <h1>Kênh kết nối</h1>
            <a href="" className="text-[40px] text-blue-600 px-[4px]"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="" className="text-[40px] text-blue-500 px-[4px]"> <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href="" className="text-[40px] text-red px-[4px]"><FontAwesomeIcon icon={faGoogle} /></a>
          </div>

        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:px-[130px]">
          <div className="w-[300px] color-white p-5">
            <h2 className="text-[17px] font-bold">Hà Nội</h2>
            <div className="text-sm mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 243-6231-685</p>
            </div>

            <div className="text-sm mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-sm mt-[10px]">Tầng 21, Tòa nhà Handico, Đ.Phạm Hùng, Q.Nam Từ Liêm, Hà Nội, Việt Nam</p>
            </div>

          </div>


          <div className="w-[300px] color-white p-5">
            <h2 className="text-[17px] font-bold">Đà Nẵng</h2>
            <div className="text-sm mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 23 696 268 5</p>
            </div>

            <div className="text-sm mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-sm mt-[10px]">Tầng 11 Toà nhà Thông Tấn Xã Việt Nam, 81 Quang Trung, Q. Hải Châu, Đà Nẵng.</p>
            </div>

          </div>


          <div className="w-[300px] color-white p-5">
            <h2 className="text-[17px] font-bold">Hồ Chí minh</h2>
            <div className="text-sm mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 243-6231-685</p>
            </div>

            <div className="text-sm mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-sm mt-[10px]">Tòa nhà Đảm Bảo An Toàn Hàng Hải phía Nam Số 42 đường Tự Cường, phường 4, Quận Tân Bình, thành phố Hồ Chí Minh, Việt Nam</p>
            </div>

          </div>


          <div className="w-[300px] color-white p-5">
            <h2 className="text-[17px] font-bold">Nhật Bản</h2>
            <div className="text-sm mt-[10px]">
              <p>Điện thoại</p>
              <p>(+81) 3-6435-0754</p>
            </div>

            <div className="text-sm mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-sm mt-[10px]">3F, Tòa nhà Tamachi 16th Fujishima, 4-13-4 Shiba, Minato-ku, Tokyo, Nhật Bản</p>
            </div>

          </div>
        </div>

        <hr className="mt-[35px] " />

        <p className="color-white sm:px-[130px] sm:py-[25px] text-center">@2023 Rikkeisoft. Đã đăng ký Bản quyền</p>
      </footer>
    </div>
  )
}

export default App
