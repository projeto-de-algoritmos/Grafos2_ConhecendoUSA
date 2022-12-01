import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import usaIcon from '../../assets/usa-icon3.png';
import './index.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-sidebar">
                <div className="sidebar-title text-center">
                    <h1>Conhecendo USA <img src={usaIcon}/></h1>
                </div>
                <div className="sidebar-header">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione o local de saída</option>
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

            </div>
        </div>
    )
}

export default Home;