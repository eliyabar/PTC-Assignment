import React, {FunctionComponent, useEffect} from 'react';
import {Card, notification} from 'antd';
import Search from 'antd/es/input/Search';

interface OwnProps {
    setValue: (value: string) => void;
    isLoading: boolean
}

type Props = OwnProps;

const PlacesSearch: FunctionComponent<Props> = (props) => {
    const openNotification = (msg: string) => {
        notification.open({
            message: 'Notification',
            description: msg,
            duration: 1,
            onClick: () => {
            },
        });
    };
    useEffect(()=>{

    },[props.isLoading])
    return (
        <Card className="Search-container" style={{minWidth: '500px', width: '100%'}}>
            <Search
                placeholder="input search text"
                enterButton="Search"
                loading={props.isLoading}
                size="large"
                onSearch={value => {
                    if(value.trim() === '') {
                        openNotification('Please Enter Value')
                    } else {
                        props.setValue(value)
                    }
                    }}
            />
        </Card>);
};

export default PlacesSearch;
