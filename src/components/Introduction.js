import {Component} from 'react'
import {Card} from 'antd'

class Introduction extends Component{
    render(){
        return (
            <Card title='Giới thiệu'>
                <div style={{textAlign:'justify', fontSize:'large'}}>
                HƯỚNG DẪN THỰC THI PHÁP LUẬT VỀ BẢO VỆ ĐỘNG VẬT HOANG DÃ 2020 (Tái bản có sửa
                đổi, bổ sung) là một tài liệu tham khảo nhằm hỗ trợ các cơ quan chức năng trong quá trình xử lý các vi phạm
                liên quan đến động vật hoang dã (ĐVHD) và xử lý tang vật là ĐVHD sau tịch thu trên cơ sở các văn bản quy
                phạm pháp luật có hiệu lực tại thời điểm phát hành tài liệu này. Trung tâm Giáo dục Thiên nhiên (ENV) đã
                nghiên cứu các văn bản pháp luật để đưa ra những hướng dẫn xử lý vi phạm cụ thể, phù hợp với các quy định
                hiện hành của pháp luật. Tuy nhiên, ENV khuyến khích các cơ quan chức năng nghiên cứu những văn bản quy
                phạm pháp luật có liên quan khi xem xét xử lý các hành vi vi phạm.
                <br/>
                ENV trân trọng cảm ơn các nhà khoa học, các cá nhân, cơ quan, đơn vị đã hỗ trợ ENV trong quá trình biên
                soạn tài liệu này. Để tiếp tục đóng góp ý kiến hoàn thiện tài liệu này và yêu cầu hỗ trợ trong quá trình xử lý
                các vi phạm về ĐVHD, Quý Anh/Chị vui lòng liên hệ Phòng Chính sách và Pháp luật của ENV theo thông tin
                dưới đây
                <br/>
                <br/>
                <div style={{fontStyle:'italic'}}>
                    <div>
                        <strong>Phòng Chính sách và Pháp luật</strong>
                        <br/>
                        <strong>Trung tâm Giáo dục Thiên nhiên (ENV)</strong>
                    </div>
                    Địa chỉ: Phòng 1701, Tòa 17T5, Đường Hoàng Đạo Thúy, Nhân Chính, Thanh Xuân, Hà Nội
                    <br/>
                    Hòm thư 222 - Bưu điện Hà Nội
                    <br/>
                    Điện thoại/Fax: 024 6281 5427/23
                    <br/>
                    Email: cgteam.env@gmail.com
                    <br/>
                    Website: www.thiennhien.org
                    <br/>
                    Đường dây nóng miễn phí thông báo vi phạm về động vật hoang dã: 1800-1522
                    <br/>
                    Tải bản mềm ấn phẩm tại đường dẫn&nbsp;
                    <a 
                        href='https://tinyurl.com/huongdanenv2020'
                        style={{fontStyle:'italic'}}
                    >
                        https://tinyurl.com/huongdanenv2020
                    </a>
                </div>
                </div>
            </Card>
        );
    }
}
export default Introduction;