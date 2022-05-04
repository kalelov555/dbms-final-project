import { Card, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Rater from "../Rater/Rater";

const { Meta } = Card;
const { Text } = Typography;

const ByNameCard = ({ books }) => {
  console.log("books", books);
  // const id = books.books[0].id;
  const bookName = books[0].bookName;
  const author = books[0].author;
  const description = books[0].description;
  const img = books[0].img;
  const genre = books[0].genre;
  
  return <Card
    key={books.id}
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
    <Text type="danger">{genre}</Text>
    <br></br><br></br>
    <Rater />
  </Card>
}

export default ByNameCard;
