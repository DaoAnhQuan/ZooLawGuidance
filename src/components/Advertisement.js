import {Component, useState, useRef} from 'react'
import JoditEditor from "jodit-react";
import {Card, Table, Button} from 'antd';
import {EditOutlined} from '@ant-design/icons'
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
        law: '<ul><li>Khoản 2, Điều 2</li><li>Khoản 3, điều 4</li></ul>',
        solution: '<p><strong>Nếu là ĐVHD:</strong></p><ul><li>Tử hình</li><li>Chung thân</li></ul>'
    },{
        key:2,
        id:2,
        group: 'Phụ lục II CITES',
        law: '<ul><li>Khoản 2, Điều 2</li><li>Khoản 3, điều 4</li></ul>',
        solution: '<p><strong>Nếu là ĐVHD:</strong></p><ul><li>Tử hình</li><li>Chung thân</li></ul>'
    }
    ]);
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const onCreate = values => {
        console.log('Received values of form: ', values);
        let data = [...dataSource];
        data[selectedItem.key-1] = {
            key: selectedItem.key,
            id: selectedItem.id,
            group: values.group?values.group:selectedItem.group,
            law: values.law,
            solution: values.solution,
        }
        console.log(data);
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
                        }}
                    />
                    <Button type='primary' onClick={onSave} style={{marginTop:'10px'}}>Lưu</Button>
                </Card>
                <Card title="Hướng dẫn">
                    <Table columns = {columns} dataSource = {dataSource} bordered/>
                </Card>
                <Button 
                    type="primary" 
                    style={{textAlign:'center'}}
                    onClick={()=>{
                        localStorage.setItem('dataSource',JSON.stringify(dataSource)); 

                        localStorage.setItem('introdata',introData)}}
                >
                    <Link to='/adpreview'>Preview</Link>
                </Button>
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