import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import image from "./img/logo.jpg"
import image1 from "./img/hot.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import image2 from "./img/banner.jpg"
import image3 from "./img/banner2.jpg"
import { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [menuopen, setMenuopen] = useState(false)

  const taggle = () => {
    setMenuopen(!menuopen)
  }
  return (
    // đoạn header này a xem có cách nào khắc phục k chứ e cx chỉ có đến đây thôi a ạ hihi
    <div>
      <header>
        <div className="flex justify-around items-center bg-[#000000] leading-[65px]">
          <div>
            <img src={image} alt="" className="w-[80px] h-[41px] " />
          </div>
          <div>
            <button onClick={taggle} className="text-white   sm:hidden">
              {menuopen ? (<FontAwesomeIcon icon={faX} />) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>

            <div className={`${menuopen ? "" : "hidden"} sm:flex  left-0  items-center mt-4 sm:mt-0`}>
              <ul className="flex flex-col sm:flex-row  text-white left sm:justify-between sm:w-auto ">
                <li className="px-[40px]"><a href="#">TRANG CHỦ</a></li>
                <li className="px-[40px]"><a href="#">CƠ HỘI NGHỀ NGHIỆP</a></li>
                <li className="px-[40px]"><a href="#">VỀ RIKKEISOFT</a></li>
                <li className="px-[40px]"><a href="#">TIN TỨC-SỰ KIỆN</a></li>
                <li className="px-[40px]"><a href="#">LIÊN HỆ</a></li>
              </ul>
            </div></div>
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:shadow-lg">
            Ngôn ngữ
          </button>

        </div>
      </header>




      <div className="text-black text-xl sm:px-72 text-center sm:mr-[350px] mt-3">
        <a href="#" className="px-2 hover:text-red-600">Trang chủ</a>/<a href="#" className="px-2 hover:text-red-600 ">Cơ hội việc làm</a>/<a href="#" className="px-2 hover:text-red-600">Tuyển dụng Ruby On Rails,VueJS</a>
      </div>

      <div className="sm:flex sm:w-[1500px]  sm:m-auto sm:justify-around grid grid-cols-1">
        <div className="sm:w-[900px] lg:ml-[110px]">
          <h1 className="sm:text-[45px] text-[35px] font-bold  mt-[20px] sm:px-[50px] text-center">Tuyển dụng Ruby On Rails,VueJS</h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center mt-[30px]">
            <div className="w-[170px] flex justify-around mx-auto">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red-700 text-4xl " />
              </div>
              <div >
                <b className="text-[20px]">Địa điểm</b>
                <p className="text-[18px]">Đà Nẵng</p>
              </div>
            </div>

            <div className="w-[170px] flex justify-around mx-auto">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red-700 text-4xl" />
              </div>
              <div >
                <b className="text-[20px]">Trình Độ</b>
                <p className="text-[18px]">Junior</p>
              </div>
            </div>

            <div className="w-[170px] flex justify-around mx-auto">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red-700 text-4xl" />
              </div>
              <div >
                <b className="text-[20px]">Mức Lương</b>
                <p className="text-[18px]">Thỏa thuận</p>
              </div>
            </div>

            <div className="w-[170px] flex justify-around mx-auto">
              <div>
                <FontAwesomeIcon icon={faSquareCheck} className="text-red-700 text-4xl" />
              </div>
              <div >
                <b className="text-[20px]">Ngày Hết Hạn</b>
                <p className="text-[18px]">31/12/2023</p>
              </div>
            </div>
          </div>





        </div>

        <div className="m-auto">
          <p className="text-[18px] text-center font-bold">chia sẻ</p>
          <a href="" className="sm:text-[40px] text-[30px]  text-blue-600 px-[4px]"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="" className="sm:text-[40px] text-[30px] text-blue-500 px-[4px]"> <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href="" className=" sm:text-[40px] text-[30px] text-red-600 px-[4px]"><FontAwesomeIcon icon={faGoogle} /></a>
          <div className="mt-[10px]">
            <button className="bg-[#BD2525] text-white p-[15px]">Ứng tuyển ngay</button>
          </div>

        </div>
      </div>

      <div className="sm:w-[845px] sm:ml-[170px] px-[10px] ">
        <div className=" mt-[25px]">
          <h2 className="text-[22px] font-bold text-red-600 mb-[20px]  ">Mô Tả Công Việc</h2>
          <ol className="list-disc">
            <li className="text-[17px] py-[4px]">Thiết kế, coding và kiểm thử hệ thống hoặc chức năng sau khi hoàn thành.</li>
            <li className="text-[17px] py-[4px]">Xây dựng kế hoạch và quản lý tiến độ lập trình theo kế hoạch.</li>
            <li className="text-[17px] py-[4px]">Nghiên cứu nắm bắt công nghệ mới.</li>
            <li className="text-[17px] py-[4px]">Join dự án sẽ được tham gia đầy đủ quy trình phát triển </li>
          </ol>
          <div className="px-[15px]">
            <p className="text-[17px]" >+ Tạo thiết kế</p>
            <p className="text-[17px]">+ Tạo thiết kế</p>
            <p className="text-[17px]">+ Tạo thiết kế</p>
          </div>

        </div>

        <div className="mt-[25px]">
          <h2 className="text-[22px] font-bold text-red-600 mb-[20px]">Yêu cầu</h2>
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



        <div className=" mt-[25px] mb-[35px]">
          <h2 className="text-[22px] font-bold text-red-600 mb-[20px]">Quyền Lợi</h2>
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
        <h1 className="text-[30px] sm:ml-[170px] font-medium  ">Vị trí đang tuyển</h1>
      </div>
      <div className="sm:flex sm:justify-around sm:w-[1500px] grid grid-cols-1">
        <div className="sm:w-[845px] sm:ml-6 mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px] w-[25px]" />01 Sales IT Support - Tiếng Nhật (N2)</b>
            <p className="text-[19px] py-[10px] hover:text-red-600">Địa Điểm: Hà Nội - Trình Độ: Junior</p>
            <p className="text-[19px] ">- Hỗ trợ công việc của Sales chính, thực hiện process giấy tờ, tài liệu, profile công ty và triển khai thông tin đến phòng ban có liên quan. - Phối hợp với Rikkei Japan để làm thủ tục liên quan đến kh...</p>
          </span>
        </div>
        <div className="mt-[50px] m-[80px]">
          <button className="bg-white border border-red-500 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white ">Ứng Tuyển Ngay</button>
        </div>
      </div>
      <hr className="sm:w-[1300px] m-auto mt-[30px]" />

      <div className="sm:flex sm:justify-around sm:w-[1500px] grid grid-cols-1">
        <div className="sm:w-[845px] sm:ml-6 mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px] w-[25px]" />Java Developer (Middle)</b>
            <p className="text-[19px] py-[10px] hover:text-red-600 ">Địa Điểm: Hà Nội - Trình Độ:</p>
            <p className="text-[19px] ">- Phát triển dự án về bảo hiểm cho khách hàng. - Phạm vi công việc từ làm rõ yêu cầu của khách hàng, viết tài liệu thiết kế hệ thống cho đến develop, testing, deploy và vận hành hệ thống cho khách hàn...</p>
          </span>
        </div>
        <div className="mt-[50px] m-[80px]">
          <button className="bg-white border border-red-500 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white">Ứng Tuyển Ngay</button>
        </div>
      </div>
      <hr className="sm:w-[1300px] m-auto mt-[30px]" />
      <div className="sm:flex sm:justify-around sm:w-[1500px] grid grid-cols-1">
        <div className="sm:w-[845px] sm:ml-6 mt-[20px]">
          <span>
            <b className="flex sm:text-[22px] text-[18px] hover:text-red-600"><img src={image1} alt="" className="sm:w-[32px] w-[25px]" />Tuyển dụng lập trình viên CakePhp, VueJS</b>
            <p className="text-[19px] py-[10px] hover:text-red-600">Địa Điểm: Đà Nẵng - Trình Độ: Junior</p>
            <p className="text-[19px] ">◦ Thiết kế, coding và kiểm thử hệ thống hoặc chức năng sau khi hoàn thành. ◦ Xây dựng kế hoạch và quản lý tiến độ lập trình theo kế hoạch. ◦ Nghiên cứu nắm bắt công nghệ mới. ◦ Join dự án sẽ đ...</p>
          </span>
        </div>
        <div className="mt-[50px] m-[80px]">
          <button className="bg-white border border-red-600 text-red-500 px-[25px] py-[12px] rounded hover:bg-red-600 hover:text-white">Ứng Tuyển Ngay</button>
        </div>
      </div>

      <div className="relative">
        <img src={image3} alt="" className="w-full sm:h-[550px] h-[350px] mt-[60px]" />
        <div className="bg-[#ffffff] w-[420px] sm:w-[1100px] m-auto rounded-xl absolute top-12 left-7 sm:top-[100px] sm:left-[200px]">
          <img src={image2} alt="" className="sm:w-[550px] sm:h-[350px] h-[250px] w-[300p] p-[30px]" />
        </div>
      </div>

      <footer className="bg-black">
        <div className="grid sm:grid-cols-4  sm:px-[130px] grid-cols-2">
          <div className="py-[30px]">
            <img src={image} alt="" className="w-[116px] h-[60px]" />
            <p className="text-white text-[20px] py-[15px]">Nơi giấc mơ bắt đầu</p>
          </div>
          <div className="py-[30px]">
            <ul>
              <li className="text-white py-[4px] hover:underline"><a href="#">Trang chủ</a></li>
              <li className="text-white py-[4px] hover:underline"><a href="#">Cơ hội nghề nghiệp</a></li>
              <li className="text-white py-[4px] hover:underline"><a href="#">Tin tức - sử kiện</a></li>
              <li className="text-white py-[4px] hover:underline"><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          <div className="text-white text-[20px] py-[30px]">
            <h1>Kênh kết nối</h1>
            <a href="" className="text-[40px] text-blue-600 px-[4px]"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="" className="text-[40px] text-blue-500 px-[4px]"> <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href="" className="text-[40px] text-red-600 px-[4px]"><FontAwesomeIcon icon={faGoogle} /></a>
          </div>

        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-center  sm:px-[130px]">
          <div className="w-[300px] text-white">
            <h2 className="text-[17px] font-bold">Hà Nội</h2>
            <div className="text-[14px] mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 243-6231-685</p>
            </div>

            <div className="text-[14px] mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-[14px] mt-[10px]">Tầng 21, Tòa nhà Handico, Đ.Phạm Hùng, Q.Nam Từ Liêm, Hà Nội, Việt Nam</p>
            </div>

          </div>


          <div className="w-[300px] text-white">
            <h2 className="text-[17px] font-bold">Đà Nẵng</h2>
            <div className="text-[14px] mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 23 696 268 5</p>
            </div>

            <div className="text-[14px] mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-[14px] mt-[10px]">Tầng 11 Toà nhà Thông Tấn Xã Việt Nam, 81 Quang Trung, Q. Hải Châu, Đà Nẵng.</p>
            </div>

          </div>


          <div className="w-[300px] text-white">
            <h2 className="text-[17px] font-bold">Hồ Chí minh</h2>
            <div className="text-[14px] mt-[10px]">
              <p>Điện thoại</p>
              <p>(+84) 243-6231-685</p>
            </div>

            <div className="text-[14px] mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-[14px] mt-[10px]">Tòa nhà Đảm Bảo An Toàn Hàng Hải phía Nam Số 42 đường Tự Cường, phường 4, Quận Tân Bình, thành phố Hồ Chí Minh, Việt Nam</p>
            </div>

          </div>


          <div className="w-[300px] text-white">
            <h2 className="text-[17px] font-bold">Nhật Bản</h2>
            <div className="text-[14px] mt-[10px]">
              <p>Điện thoại</p>
              <p>(+81) 3-6435-0754</p>
            </div>

            <div className="text-[14px] mt-[10px]">
              <p>E-mail</p>
              <p>tuyendung@rikkeisoft.com</p>
            </div>

            <div >
              <p className="text-[14px] mt-[10px]">3F, Tòa nhà Tamachi 16th Fujishima, 4-13-4 Shiba, Minato-ku, Tokyo, Nhật Bản</p>
            </div>

          </div>
        </div>

        <hr className="mt-[35px] " />

        <p className="text-white sm:px-[130px] sm:py-[25px] text-center">@2023 Rikkeisoft. Đã đăng ký Bản quyền</p>
      </footer>
    </div>
  )
}

export default App
