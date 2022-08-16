import { Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export const CastList = ({ castMovie }) => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={castMovie}
      renderItem={cast => (
        <List.Item key={cast.id}>
          <List.Item.Meta
            avatar={
              cast?.profile_path ? (
                <Avatar
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                />
              ) : (
                <UserOutlined />
              )
            }
            title={<a href="https://ant.design">{cast.name}</a>}
            description={cast.character}
          />
        </List.Item>
      )}
    />
  );
};

CastList.propTypes = {
  castMovie: PropTypes.array.isRequired,
};
