import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import Form from 'react-bootstrap/Form';
import mapIcon from '../../utils/mapIcon';
import usaIcon from '../../assets/usa-icon3.png';
import './index.css';


const Home = () => {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const MyComponent = () => {
        useMapEvents({
            click: (event) => {
                const { lat, lng } = event.latlng;
                setPosition({
                    latitude: lat,
                    longitude: lng
                });
                console.log("latitude:" + lat, "longitude:" + lng);
            }
        });
        return null;
    }

    const positions = [
        {
            latitude: 41.9596194,
            longitude: -110.2286238
        },
        {
            latitude: 45.8718012,
            longitude: -104.8537176
        },
        {
            latitude: 45.6138991,
            longitude: -107.1917125
        }
    ]

    return (
        <div className="home-container">
            <div className="home-sidebar">
                <div className="sidebar-title text-center">
                    <h1>Conhecendo USA <img src={usaIcon} /></h1>
                </div>
                <div className="sidebar-header">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione o ponto de partida</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione o local de destino</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div className="sidebar-results">

                </div>
                <div className="sidebar-footer">
                    <p>Victor Samuel dos Santos Lucas</p>
                    <p>Vinicius Vieira de Souza</p>
                </div>
            </div>
            <div className="home-main">
                <fildset>
                    <MapContainer
                        style={{ width: "100%", height: "100%" }}
                        center={[40.3350942, -97.3138203]}
                        zoom={5.3}
                    >
                        {/* <MyComponent /> */}
                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {/* {
                            positions && positions.map((p, index) =>
                                <Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[p.latitude, p.longitude]}
                                />
                            )
                        } */}
                        <MyComponent/>
                        {
                            position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[position.latitude, position.longitude]}
                                />
                            )
                        }
                    </MapContainer>
                </fildset>
            </div>
        </div>
    )
}

export default Home;