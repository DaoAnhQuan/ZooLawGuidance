import React, { useState, useRef } from 'react';
import {Modal, Cascader, Form} from 'antd';
import JoditEditor from "jodit-react";


const ModifyLawForm = ({visible, onCreate, onCancel, content}) =>{
    const [form] = Form.useForm();
    const lawEditor = useRef(null);
    const solutionEditor = useRef(null);
    
    const [lawContent,setLawContent] = useState('');
    
    const [solutionContent, setSolutionContent] = useState('');
    const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    const options = [{
        value: 'ND64',
        label: 'Loài NĐ 64',
    },{
        value: 'cites2',
        label: 'Phụ lục CITES II',
    }]

    let initialState = {
        law: '',
        solution: '',
    }
    if (content){
        initialState = {
            law: content.law,
            solution: content.solution,
        }
    }
    return (
        <Modal
        visible={visible}
        title= "Chỉnh sửa hướng dẫn"
        okText="Lưu"
        cancelText="Thoát"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues = {{...initialState}}
            >
                <Form.Item
                    name = "group"
                    label = "Loài bị tác động"
                >
                    <Cascader options={options} placeholder={content?content.group:""}></Cascader>
                </Form.Item>
                <Form.Item
                    name = "law"
                    label = "Cơ sở pháp lý"
                >
                    <JoditEditor
                        ref={lawEditor}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                    />
                </Form.Item>
                <Form.Item
                    name = "solution"
                    label = "Biện pháp xử lý"
                >
                    <JoditEditor
                        ref={solutionEditor}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModifyLawForm;