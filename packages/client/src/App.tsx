import React, {useEffect, useState} from 'react'
import './App.css'
import PlacesList from './components/Places/PlacesList';
import PlacesSearch from './components/Places/PlacesSearch';
import {Place} from 'shared/src/api/interfaces/places';
import {fetchPlaces} from './api';
import {notification, Typography} from 'antd';

const {Title} = Typography;

function App() {

    const [places, setPlaces] = useState<Place[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [fetchingData, setFetchingData] = useState(false)

    const openErrorNotification = (errorMsg: string) => {
        notification.error({
            message: 'Error',
            description: errorMsg,
            duration: 2,
            onClick: () => {
            },
        });
    };
    const openNotification = (msg: string) => {
        notification.open({
            message: 'Notification',
            description: msg,
            duration: 1,
            onClick: () => {
            },
        });
    };

    useEffect(() => {
        setFetchingData(true)
        fetchPlaces(searchValue).then(places => {
            if (searchValue.length && !places.length) {
                openNotification('No Results')
            }
            setPlaces(places)
        }).catch(e => {
            openErrorNotification(e?.response?.data)
        }).finally(() => {
            setFetchingData(false)
        })
    }, [searchValue])

    return (
        <div className="App">
            <header className="App-header">
                <Title>Facebook Places search</Title>
            </header>
            <body className="App-body">
            <PlacesSearch setValue={setSearchValue} isLoading={fetchingData}/>
            <PlacesList list={places}/>
            </body>

        </div>
    )
}

export default App
