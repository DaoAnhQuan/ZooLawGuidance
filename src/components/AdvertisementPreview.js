import {Component, useState, useRef} from 'react'
import JoditEditor from "jodit-react";
import {Card, Table, Button} from 'antd';
import {EditOutlined} from '@ant-design/icons'
import ModifyLawForm from './ModifyLawForm';

const AdvertisementPreview = () => {
	const editor = useRef(null)
    const dataSource = JSON.parse(localStorage.getItem('dataSource'));
    const introdata = localStorage.getItem('introdata');
	

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
        }  
    ]
    
	
	return (
            <div>
                <Card title="Giới thiệu" style={{marginBottom:'10px'}}>
                    <div dangerouslySetInnerHTML={{ __html:introdata}} />
                </Card>
                <Card title="Hướng dẫn">
                    <Table columns = {columns} dataSource = {dataSource} bordered/>
                </Card>
            </div>
            
        );
}

export default AdvertisementPreview;