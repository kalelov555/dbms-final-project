import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';

const success = () => {
  message.success('Book Successfully added to Database');
};


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddBook = () => {
  const onFinish = (values) => {

    axios.post("http://localhost:3001/form/add/book", values);
    success();
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'bookName']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'author']} label="Author" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'genre']} label="Genre" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'id']} label="Id" rules={[{ type: 'number', min: 0, max: 199 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'img']} label="Img URL">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'description']} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBook;
