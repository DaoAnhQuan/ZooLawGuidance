import React from 'react';
import {Card, Input,Row, Col, Image, Tag, List, Avatar} from 'antd';

const {Search} = Input;
const Reference = ({})=>{

    const data = [
        {
          title: 'Phát hiện hơn 20kg vảy tê tê cất giấu trong thùng xốp',
          link: 'https://laodong.vn/phap-luat/phat-hien-hon-20kg-vay-te-te-cat-giau-trong-thung-xop-769862.ldo'
        },
        {
          title: 'Hải Phòng: Bắt lô hàng vảy tê tê lớn nhất từ trước đến nay',
          link: 'https://laodong.vn/phap-luat/hai-phong-bat-lo-hang-vay-te-te-lon-nhat-tu-truoc-den-nay-733602.ldo'
        },
        {
          title: ' Xét xử 2 đối tượng buôn bán 7 cá thể tê tê trái phép  - Kiểm Sát Online',
          link: 'https://kiemsat.vn/xet-xu-2-doi-tuong-buon-ban-7-ca-the-te-te-trai-phep-55720.html',
        },
        {
          title: 'Bảo vệ tê tê trước bờ vực tuyệt chủng - Báo Nhân Dân',
          link: 'https://nhandan.com.vn/doi-song-xa-hoi/bao-ve-te-te-truoc-bo-vuc-tuyet-chung-607379/',
        },
      ];

    return(
        <Card title='Tê tê vàng'>
            <Row>
                <Col span='13'>
                    <p><strong>Tên khoa học: </strong>Manis pentadactyla</p>
                    <p><strong>Lớp: </strong>Lớp thú (Mammalia)</p>
                    <p><strong>Bộ: </strong>Bộ tê tê (Pholidota)</p>
                    <p><strong>Mô tả:</strong></p>
                    <Row style={{textAlign:'justify', paddingRight:'20px'}}>
                        <Col span='1'>
                        </Col>
                        <Col span='23'>
                            <p>
                                Thân tê tê có phủ vảy sừng xếp chồng lên nhau như vảy cá. Chúng ăn kiến và mối; miệng không có răng; lưỡi dài (đến 25 cm), bọc bởi lớp nhớt dính. Tuyến nước dãi nằm sâu trong lồng ngực tiết ra chất nhớt này để tê tê bắt mồi. Dạ dày có màng sừng như mề gà.
                                <br/>
                                Tê tê vàng có chiều dài trung bình khoảng 80–90 cm. Thường thì mỗi lứa sinh chỉ một con, thỉnh thoảng mới có hai. Sau khi vài tuần ẩn trong hang, con con leo lên đuôi mẹ và được "đèo" đi mọi nơi.
                                <br/>
                                Tê tê vàng khác tê tê Java cũng phổ biến ở Việt Nam ở những điểm sau đây: tai có vành thịt rõ ràng; lòng bàn chân trước không có da trơn; phần đuôi tương đối ngắn hơn; và vảy không che sống mũi.
                            </p>
                        </Col>
                    </Row>
                    <p><strong>Danh mục: </strong>
                        <Tag>NĐ 64</Tag>
                        <Tag>NĐ 06 nhóm IB</Tag>
                        <Tag>Phụ lục I CITES</Tag>
                    </p>
                </Col>
                <Col span='11'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Zoo_Leipzig_-_Tou_Feng.jpg/1024px-Zoo_Leipzig_-_Tou_Feng.jpg'/>
                </Col>
            </Row>
            <Row>
                <Col span='24'>
                    <p><strong>Các vụ án liên quan tại Việt Nam:</strong></p>
                </Col>
            </Row>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Zoo_Leipzig_-_Tou_Feng.jpg/1024px-Zoo_Leipzig_-_Tou_Feng.jpg" />}
                        title={<a href={item.link}>{item.title}</a>}
                    />
                </List.Item>
                )}
            />
        </Card>
    )
}

export default Reference;