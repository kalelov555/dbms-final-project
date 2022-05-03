import { Card, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Rater from '../Rater/Rater';

const { Meta } = Card;
const { Text } = Typography;

const TopBook = ({ id, author, bookName, description, img }) => {
  return <Card
    key={id}
    style={{ width: 300 }}
    cover={
      <img style={{ width: "70%", textAlign: "center", marginLeft: "45px" }}
        alt="example"
        src={img}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Text keyboard>{author}</Text>
    <br></br>
    <br></br>
    <Meta
      title={bookName}
      description={description}
    />
    <br></br>
    <br></br>
    <Rater />
  </Card>
}

export default TopBook;
