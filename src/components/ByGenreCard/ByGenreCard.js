import { List, Space, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from "react";
import Text from "antd/lib/typography/Text";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const BookGenre = ( {books, genre} ) => {
  
  return <div className="-20 py-4">
        <div style={{ padding: "3% 3%" }}>
          <Typography.Title style={{ "color": "#1890ff", "textAlign" : "center" }}>Books List of <span className="text-red-500">{genre}</span> genre:</Typography.Title>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={books}

            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                  <img style={{ width: "50%" }}
                    width={272}
                    alt="logo"
                    src={item.img}
                  />
                }
              >
                <List.Item.Meta
                  title={<a>{item.bookName}</a>}
                  description={item.description}
                />
                <Text keyboard>{item.author}</Text>
                
              </List.Item>
            )}
          />
        </div>
      </div>
}
export default BookGenre;
