import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Modal, Image, Card } from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ModifySpeciesForm from './ModifySpeciesForm';
import {Link} from 'react-router-dom';

const dataSource = [
    {
        key:'1',
        id: '1',
        vietnameseName: 'Báo gấm',
        scienceName: 'Neofelis nebulosa',
        animalSet: 'Thú ăn thịt (Carnivora)',
        animalGroup: 'Thú',
        ND64:true,
        ND06: 'IB',
        Cites: 'I',
        ND26:'I',
        seafood: 'CXK',
        investimentLaw:true,
        IUCN:'EN' 
    },
    {
        key:'1',
        id: '1',
        vietnameseName: 'Báo gấm',
        scienceName: 'Neofelis nebulosa',
        animalSet: 'Thú ăn thịt (Carnivora)',
        animalGroup: 'Thú',
        ND64:true,
        ND06: 'IB',
        Cites: 'I',
        ND26:'I',
        seafood: 'CXK',
        investimentLaw:true,
        IUCN:'EN' 
    }
];
const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};


class SpeciesList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
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
      },
      {
          title: 'Hành động',
          dataIndex: 'actions',
          width:'10%',
          align:'center',
          render: (text,record)=>
            this.state.dataSource.length>=1?(
                <div>
                    <Popconfirm title="Bạn muốn xóa?" onConfirm={()=>this.handleDelete(record.key)}>
                        <Button shape="circle" icon={<DeleteOutlined/>} />    
                    </Popconfirm>  
                    <Button shape="circle" icon={<EditOutlined/>} style={{marginLeft:'5px'}} 
                        onClick={()=>this.setAction('EDIT',record.key)}
                    />  
                </div>
            ):null,
      }
    ];
    this.state = {
      dataSource: [
        {
            key:'1',
            id: '1',
            vietnameseName: 'Báo gấm',
            scienceName: 'Neofelis nebulosa',
            animalSet: 'Bộ thú ăn thịt (Carnivora)',
            animalGroup: 'Lớp thú (Mammalia)',
            ND64:'x',
            ND06: 'IB',
            Cites: 'I',
            ND26:'I',
            seafood: 'CXK',
            investimentLaw:'x',
            IUCN:'EN', 
            image:'https://upload.wikimedia.org/wikipedia/commons/7/7d/Neofelis_nebulosa.jpg'
        },
        {
            key:'2',
            id: '2',
            vietnameseName: 'Cầy gấm',
            scienceName: 'Prionodon pardicolor',
            animalSet: 'Bộ thú ăn thịt (Carnivora)',
            animalGroup: 'Lớp thú (Mammalia)',
            ND64:'x',
            ND06: 'IB',
            Cites: 'II',
            ND26:'I',
            seafood: 'CXK',
            investimentLaw:'',
            IUCN:'EN', 
            image:'https://upload.wikimedia.org/wikipedia/commons/e/e3/Prionodon_pardicolor_-_Kunming_Natural_History_Museum_of_Zoology_-_DSC02486.JPG'
        }
    ],
      count: 2,
      visible: false,
      content:'',
      action:'ADD',
      modalVisible: false,
      record:''
    };
    this.setVisible.bind(this);
    this.onCreate.bind(this);
    this.onCancle.bind(this);
  };

  showImage = (key) =>{
      this.setState(
        {
          modalVisible:true,
          record: this.state.dataSource.filter((item)=>{
            return item.key === key;
          })[0],
        });
      
  }

  setVisible = (values)=>{
      this.setState({
          visible:values,
      })
  };

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };


  handleEdit = () =>{
    this.setVisible(true);
  }

  setAction = (action,key)=>{
      let content = '';
      if (action == 'EDIT'){
          content = this.state.dataSource.filter((item)=>{
              return item.key === key;
          })[0];
      }
        this.setState({
            action: action,
            content:content,
            visible: true,
        })
        
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const tmp = count+1;
    const newData = {
        key:tmp.toString(),
        id: '2',
        vietnameseName: '',
        scienceName: '',
        animalSet: '',
        animalGroup: '',
        ND64:'',
        ND06: '',
        Cites: '',
        ND26:'',
        seafood: '',
        investimentLaw:true,
        IUCN:'' 
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  onCancle = ()=>{
      console.log(this.state.visible);
      this.setVisible(false);
  }

  onCreate = values => {
    console.log('Received values of form: ', values);
    const content = this.state.content;
    
    let data = [...this.state.dataSource];
    if (this.state.action == 'EDIT'){
        let newObject = {
          key: content.key,
          id: content.id,
          vietnameseName: values.vietnameseName,
          scienceName: values.scienceName,
          animalGroup: values.animalGroup[0],
          animalSet: values.animalSet[0],
          ND64: values.ND64==="yes"?"x":'',
          ND06: values.ND06?values.ND06.toString():'',
          Cites: values.cites?values.cites.toString():'',
          ND26: values.ND26?values.ND26.toString():'',
          seafood: values.seafood?values.seafood.toString():'',
          investimentLaw: values.investimentLaw==="yes"?"x":'',
          IUCN: values.IUCN?values.IUCN.toString():'',
        }
        data[parseInt(content.key)-1] = newObject;
        this.setState({
          dataSource: data
        })
      }else{
        let newObject = {
          key: (this.state.count+1).toString(),
          id: (this.state.count+1).toString(),
          vietnameseName: values.vietnameseName,
          scienceName: values.scienceName,
          animalGroup: values.animalGroup[0],
          animalSet: values.animalSet[0],
          ND64: values.ND64==="yes"?"x":'',
          ND06: values.ND06?values.ND06.toString():'',
          Cites: values.cites?values.cites.toString():'',
          ND26: values.ND26?values.ND26.toString():'',
          seafood: values.seafood?values.seafood.toString():'',
          investimentLaw: values.investimentLaw==="yes"?"x":'',
          IUCN: values.IUCN?values.IUCN.toString():'',
      }
      data.push(newObject);
      this.setState({
        dataSource:data,
        count: this.state.count+1,
      })
    }
    this.setVisible(false);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const {record} = this.state
    return (
      <div>
        <Card>
          <Button
            onClick={()=>this.setAction('ADD','0')}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Thêm loài
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
          />
        </Card>

        <Card style={{textAlign:'center'}}>
          <Button 
            type='primary' 
            onClick={()=>{
              localStorage.setItem('species',JSON.stringify(dataSource));
            }}
          >
            <Link to='/speciespreview'>Preview</Link>
          </Button>
        </Card>
        
        <ModifySpeciesForm
            key = {this.state.visible}
            visible={this.state.visible}
            onCreate ={this.onCreate}
            onCancel ={()=>{
                this.setVisible(false);
            }}
            action= {this.state.action}
            content = {this.state.content}
        />
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

export default SpeciesList;