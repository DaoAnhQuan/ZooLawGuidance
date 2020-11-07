import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio,AutoComplete, Cascader, Checkbox, Upload, message } from 'antd';
import {InboxOutlined} from'@ant-design/icons'  

const Complete = () => {
const [value, setValue] = useState('');
const tmps = [
        {value:'Lớp thú (Mammalia)'},
        {value:'Lớp bò sát (Reptilia)'},
        
    ];

const [options,setOptions] = useState(tmps);
const onSearch = (data)=>{
    setOptions(tmps.filter((option)=>{
        return option.value.includes(data);
    })) 
}
const onSelect = (data) => {
    setValue(data);
};

const onChange = (data) => {
    setValue(data);
};

return (
    <AutoComplete
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        onSearch = {onSearch}
        placeholder="Nhập lớp động vật"

    />
);
};

const ModifySpeciesForm = ({ visible, onCreate, onCancel, action, content }) => {
  const [form] = Form.useForm();
  const [animalGroup,setAnimalGroup] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [disableUpload,setDisbleUpload] = useState(false);
  const [animalSet, setAnimalSet] = useState([]);
  const animalOptions = [
    {
        value:'Lớp thú (Mammalia)',
        label: 'Lớp thú (Mammalia)',
        sets: [
            {
                value: 'Bộ cánh da',
                label: 'Bộ cánh da',
            },
            {
                value:'Bộ linh trưởng',
                label: 'Bộ linh trưởng',
            }
        ]
    },
    {
        value:'Lớp bò sát (Reptilia)',
        label: 'Lớp bò sát (Reptilia)',
        sets: [
            {
                value: 'Bộ có vảy',
                label: 'Bộ có vảy'
            },
            {
                value: 'Bộ rùa',
                label: 'Bộ rùa',
            }
        ]
    },
  ]

  const onChange = (value)=>{
    setAnimalGroup('');
    setDisabled(false);
    setAnimalSet(animalOptions.filter((opt)=>{
        return opt.value == value;
    })[0].sets);
  }
  const uploadProps = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file upload thành công.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload thất bại.`);
      }
    },
  };
  let intialState = {
    ND64 :'no',
    investimentLaw :'no'
  };
  if (content){
      let ND64 = 'no';
      let investimentLaw = 'no';
      if (content.ND64){
          ND64 = 'yes'
      }
      if (content.investimentLaw){
          investimentLaw = 'yes'
      }
      intialState = {
          vietnameseName: content.vietnameseName,
          scienceName:content.scienceName,
          ND64: ND64,
          ND06: content.ND06,
          cites: content.Cites,
          ND26: content.ND26,
          seafood: content.seafood,
          investimentLaw: investimentLaw,
          IUCN: content.IUCN
      }
  }
  return (
    <Modal
      visible={visible}
      title={action=="ADD"?"Thêm danh mục mới":"Chỉnh sửa danh mục"}
      okText={action=="ADD"?"Thêm":"Lưu"}
      cancelText="Thoát"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
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
        initialValues={{...intialState}}
      >
        <Form.Item
          name="vietnameseName"
          label="Tên Tiếng Việt"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên động vật',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
            name="scienceName" 
            label="Tên khoa học"
            rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên khoa học',
                },
              ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
            name="animalGroup"
            label="Lớp động vật"
            rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn lớp động vật',
                },
              ]}
        >
            <Cascader 
                options={animalOptions}  
                onChange={onChange} 
                placeholder={content?content.animalGroup:"Vui lòng chọn lớp động vật"}
                 />
        </Form.Item>
        <Form.Item
            name = "animalSet"
            label= "Bộ động vật"
            rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn bộ động vật',
                },
              ]}
        >
            <Cascader disabled={disabled} options={animalSet} placeholder={content?content.animalSet:"Vui lòng chọn bộ động vật"}></Cascader>
        </Form.Item>
        <Form.Item
            name = "ND64"
            label = "NĐ 64"
            rules={[
                {
                  required: true,
                  message: 'Không để trống trường này',
                },
              ]}
        >
            <Radio.Group>
                <Radio value="yes">Có</Radio>
                <Radio value="no">Không</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
            name = "ND06"
            label = "NĐ 06"
        >
            <Checkbox.Group
                options={['IB','IIB']}
            />
        </Form.Item>
        <Form.Item
            name = "cites"
            label = "CITES"
        >
            <Checkbox.Group
                options={['I','II']}
            />
        </Form.Item>
        <Form.Item
            name = "ND26"
            label = "NĐ 26"
        >
            <Checkbox.Group
                options={['I','II']}
            />
        </Form.Item>
        <Form.Item
            name = "seafood"
            label = "Loài thủy sản CXK, CĐK"
        >
            <Checkbox.Group
                options={['CXK','CĐK*1','CĐK*2','CĐK*3']}
            />
        </Form.Item>
        <Form.Item
            name = "investimentLaw"
            label = "Luật đầu tư"
            rules={[
                {
                  required: true,
                  message: 'Không để trống trường này',
                },
              ]}
        >
            <Radio.Group>
                <Radio value="yes">Có</Radio>
                <Radio value="no">Không</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
            name = "IUCN"
            label = "IUCN (tham khảo)"
        >       
            <Input />
        </Form.Item>
        <Form.Item
            name = "image"
            label="Ảnh minh họa"
        >
            <Upload.Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click hoặc thả file vào đây để upload</p>
            </Upload.Dragger>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModifySpeciesForm;