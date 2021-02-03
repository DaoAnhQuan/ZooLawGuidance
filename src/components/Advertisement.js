import {Component, useState, useRef} from 'react'
import JoditEditor from "jodit-react";
import {Card, Table, Button} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import ModifyLawForm from './ModifyLawForm';
import {Link} from 'react-router-dom';

const Advertisement = ({}) => {
	const editor = useRef(null)
    const [content, setContent] = useState('');
    const [visible,setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    let introData = '';
    const [dataSource, setDataSource] = useState([{
        key:1,
        id:1,
        group: 'Loài NĐ64',
        law: '<ul><li>Khoản 1, Điều 8, Nghị định 26</li></ul>',
        solution: '<p><strong>Nếu là ĐVHD:</strong></p><ul><li>Xử phạt hành chính 70 - 100 triệu</li><li>Yêu cầu gỡ bỏ quảng cáo</li></ul>'
    },{
        key:2,
        id:2,
        group: 'Phụ lục II CITES',
        law: '<ul><li>Khoản 1,2, Điều 5, Nghị định 06</li></ul>',
        solution: '<p><strong>Nếu là ĐVHD:</strong></p><ul><li>Yêu cầu gỡ bỏ quảng cáo</li></ul>'
    }
    ]);
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const onCreate = values => {
        let data = [...dataSource];
        data[selectedItem.key-1] = {
            key: selectedItem.key,
            id: selectedItem.id,
            group: values.group?values.group:selectedItem.group,
            law: values.law,
            solution: values.solution,
        }
        setDataSource(data);
        setVisible(false);
    };

    const onEditClick = (key)=>{
        setSelectedItem(dataSource.filter((item)=>{
            return item.key === key;
        })[0]);
        setVisible(true);
    }

    const columns = [
        {
            title: 'Loài bị tác động',
            dataIndex: 'group',
        render: text => <p><strong>{text}</strong></p>
        },{
            title: 'Cơ sở pháp lý',
            dataIndex: 'law',
            render: text => <div dangerouslySetInnerHTML={{ __html:text}} />
        },
        {
            title: 'Biện pháp xử lý',
            dataIndex: 'solution',
            render: text => <div dangerouslySetInnerHTML={{ __html:text}} />
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            width: '10%',
            align: 'center',
            render: (text,record)=>dataSource.length>=1?(
                    <div>
                        <Button shape="circle" onClick={()=>onEditClick(record.key)}>
                            <EditOutlined/>
                        </Button>
                        <Button shape='circle' style={{marginLeft:'10px'}}>
                            <DeleteOutlined/>
                        </Button>
                    </div>
                ):null,
            }       
    ]
    
    const onSave = ()=>{
        console.log(introData)
    }
    
	
	return (
            <div>
                <Card title="Giới thiệu" style={{marginBottom:'10px'}}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onChange={newContent => {
                            introData = newContent;
                            localStorage.setItem('introdata',introData);
                        }}
                    />
                    <Button type='primary' onClick={onSave} style={{marginTop:'10px'}}>Lưu</Button>
                </Card>
                <Card title="Hướng dẫn xử lý vi phạm liên quan đến quảng cáo động vật hoang dã trái phép">
                    <Button type='primary' style={{marginBottom:'10px'}}>Thêm mục</Button>
                    <Table columns = {columns} dataSource = {dataSource} bordered/>
                </Card>
                <Card style={{textAlign:'center'}}>
                    <Button 
                        type="primary" 
                        onClick={()=>{
                            localStorage.setItem('dataSource',JSON.stringify(dataSource)); 
                            console.log(introData);
                        }}

                    >
                        <Link to='/adpreview'>Preview</Link>
                    </Button>
                </Card>
                <ModifyLawForm
                    visible = {visible}
                    onCreate = {onCreate}
                    onCancel = {()=>setVisible(false)}
                    content = {selectedItem}
                />
            </div>
            
        );
}

export default Advertisement;