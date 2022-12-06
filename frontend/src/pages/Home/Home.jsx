import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import { GetAllCities, GetDijkstraResult, GetDistance } from '../../services/cities.services';
import mapIcon from '../../utils/mapIcon';
import usaIcon from '../../assets/usa-icon3.png';
import './index.css';

let temporaryArray = [];

const Home = () => {
    const [cities, setCities] = useState();
    const [selectedCities, setSelectedCities] = useState({ start: null, end: null });
    const [dijkstra, setDijkstra] = useState();
    const [results, setResults] = useState([]);
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    useEffect(() => {
        handleAllCities();
    }, []);

    const handleAllCities = async () => {
        const citiesTemp = (await GetAllCities()).data;
        setCities(citiesTemp);
    }

    const handleSearchRoute = async () => {
        !(selectedCities.start || selectedCities.end) && alert('Selecione o ponto de partida e o ponto de destino');
        const dijkstraTemp = (await GetDijkstraResult(selectedCities.start, selectedCities.end)).data;
        handleDistance(dijkstraTemp);
        setDijkstra(dijkstraTemp)
    }

    const handleDistance = async (dijkstraTemp) => {
        let defaultTemplate = {
            start: null,
            end: null,
            distance: 0
        };
        let res = 0;
        temporaryArray = [];
        for (let index = 0; index <= (dijkstraTemp.nodesInfo.length) - 2; index++) {
            console.log(dijkstraTemp.nodesInfo[index])
            res = (await GetDistance(dijkstraTemp.nodesInfo[index].zip, dijkstraTemp.nodesInfo[index + 1].zip)).data;
            defaultTemplate.start = dijkstraTemp.nodesInfo[index].city + ' - ' + dijkstraTemp.nodesInfo[index].state;
            defaultTemplate.end = dijkstraTemp.nodesInfo[index + 1].city + ' - ' + dijkstraTemp.nodesInfo[index + 1].state;
            defaultTemplate.distance = res;
            temporaryArray.push(defaultTemplate);
            defaultTemplate = {}
        }

        setResults(temporaryArray)

    }

    return (
        <div className="home-container">
            <div className="home-sidebar">
                <div className="sidebar-title text-center">
                    <h1>Conhecendo USA <img src={usaIcon} /></h1>
                </div>
                <div className="sidebar-header">
                    <div className="details-filter-row" style={{ display: "block" }}>
                        <select name="status" id="status" className="form-control p-2"
                            defaultValue="Selecione o ponto de partida" onChange={(e) => setSelectedCities(prevState => ({ ...prevState, start: e.target.value }))}>
                            <option value="start">Selecione o ponto de partida</option>
                            {cities && cities.map((citie, index) =>
                                <option value={citie.zipcode} key={index} >{citie.name} - {citie.state}</option>
                                
                            )}
                        </select>

                        <select name="status" id="status" className="form-control mt-2 p-2"
                            defaultValue="Selecione o ponto de partida" onChange={(e) => setSelectedCities(prevState => ({ ...prevState, end: e.target.value }))}>
                            <option value="end">Selecione o ponto de destino</option>
                            {cities && cities.map((citie, index) =>
                                <option value={citie.zipcode} key={index}>{citie.name} - {citie.state}</option>
                            )}
                        </select>
                        <div className="text-center mt-4">
                            <button onClick={() => handleSearchRoute()}>
                                Buscar rota
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-results">
                    {
                        temporaryArray.length > 1 &&
                        <div className="text-center header">
                            <p>Rota</p>
                        </div>
                    }
                    {
                        temporaryArray.length > 1 && temporaryArray.map((c, e) =>
                            <div key={e} className="routes">
                                <p id="start">De: <span>{c.start}</span> </p>
                                <p id="end">Para: <span>{c.end}</span> </p>
                                <p id="distance">Distance: <span>{c.distance}km</span></p>
                            </div>
                        )
                    }
                    {
                        temporaryArray.length > 1 &&
                        <div className="text-center footer">
                            <p>Distancia Final: <span>{dijkstra && dijkstra.totalDistance}km</span></p>
                        </div>
                    }
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
                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {
                            dijkstra && dijkstra.nodesInfo && dijkstra.nodesInfo.map((p, index) =>
                                <Marker
                                    key={index}
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[p.latitude, p.longitude]}
                                />
                            )
                        }
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