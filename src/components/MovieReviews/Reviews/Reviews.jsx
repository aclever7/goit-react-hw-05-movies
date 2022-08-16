import { UserOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';
import PropTypes from 'prop-types';

export const Reviews = ({ reviewsMovie }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={reviewsMovie}
      renderItem={({ author, author_details, content }) => {
        const avatar = author_details?.avatar_path ? (
          author_details?.avatar_path.includes('/https://') ? (
            author_details.avatar_path.slice(1)
          ) : (
            `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
          )
        ) : (
          <UserOutlined />
        );

        return (
          <List.Item key={author}>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={<a href="https://ant.design">{author}</a>}
              description={content}
            />
          </List.Item>
        );
      }}
    />
  );
};

Reviews.propTypes = {
  reviewsMovie: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      author_details: PropTypes.object,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};
