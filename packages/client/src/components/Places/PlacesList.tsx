import React, { FunctionComponent } from 'react';
import {List, Card} from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import {Place} from 'shared/src/api/interfaces/places';

interface OwnProps {
    list: Place[]
}

type Props = OwnProps;


const ListItemComponent = (place: Place) => {
    return <List.Item.Meta
        title={
            <div style={{display: 'flex'}}>
                <EnvironmentOutlined style={{marginRight: '10px'}}/>
                <a href={place.link}>{place.name}</a>
            </div>
        }
        description={<div style={{display: 'flex', marginLeft: '30px'}}>{`${place.city ? place.city + ', ' : ''}${place.country ? place.country : ''}`}</div>}
    />;
}

const PlacesList: FunctionComponent<Props> = (props) => {

  return (
      <Card className="List-container" style={{minWidth: '500px',width: '100%', height:'70vh', overflow: 'auto'}}>
          <List
              itemLayout="horizontal"
              dataSource={props.list}
              pagination={{
                  onChange: page => {
                  },
                  pageSize: 20,
              }}
              renderItem={place => (
                  <List.Item>
                      {ListItemComponent(place)}
                  </List.Item>
              )}

          />
      </Card>

  );
};

export default PlacesList;
