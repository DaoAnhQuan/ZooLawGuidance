import React from 'react';
import { Table, Button, Card, Modal, Image } from 'antd';


class SpeciesPreview extends React.Component {
  constructor(props) {
    super(props);
    let objects = JSON.parse(localStorage.getItem('species'));
    this.state = {
      dataSource: objects,
      count: objects.length,
      content:'',
      modalVisible: false,
      record:''
    };
  };

  columns =  [
    {
      title: 'STT',
      dataIndex: 'key',
      width: '5%',
    },
    {
      title: 'Tên Tiếng Việt',
      dataIndex: 'vietnameseName',
      render: (text,record)=>
      this.state.dataSource.length>=1?(
          <div>
              <Button type="link" onClick = {()=>this.showImage(record.key)}>{text}</Button>
          </div>
      ):null,
    },
    {
      title: 'Tên khoa học',
      dataIndex: 'scienceName',
    },
    {
        title: 'Lớp',
        dataIndex: 'animalGroup',
    },
    {
        title: 'Bộ',
        dataIndex: 'animalSet',
    },
    {
      title: 'Danh mục',
      children:[
          {
              title:'NĐ 64',
              dataIndex: 'ND64',
          },
          {
              title: 'NĐ 06',
              dataIndex: 'ND06',
          },
          {
              title: 'CITES',
              dataIndex:'Cites',
          },
          {
              title: 'NĐ 26',
              dataIndex: 'ND26',
          },
          {
              title: 'Loài thủy sản CXK/CĐK',
              dataIndex: 'seafood',
          },
          {
              title: 'Luật đầu tư',
              dataIndex: 'investimentLaw',
          },
          {
              title: 'IUCN (tham khảo)',
              dataIndex: 'IUCN',
          }
      ],
    }
  ];

  showImage = (key) =>{
      this.setState(
        {
          modalVisible:true,
          record: this.state.dataSource.filter((item)=>{
            return item.key === key;
          })[0],
        });
      
  }


  render() {
    const { dataSource } = this.state;
    
    const {record} = this.state
    return (
      <div>
        <Card>
            <Table
            bordered
            dataSource={dataSource}
            columns={this.columns}
            />
        </Card>
        {this.state.record?
        <Modal
          title={record.vietnameseName}
          visible={this.state.modalVisible}
          onOk={()=>this.setState({modalVisible:false})}
          onCancel={()=>this.setState({modalVisible:false})}
          style={{textAlign:"center"}}
        >
          <Image src = {record.image}/> 
        </Modal>:''
        }
        
      </div>
    );
  }
}

export default SpeciesPreview;