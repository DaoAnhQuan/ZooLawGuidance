import React from "react";
import Card from "react-bootstrap/cjs/Card";
import Modal from "react-bootstrap/cjs/Modal";

import '../styles/species-card.css'
import Badge from "react-bootstrap/cjs/Badge";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

class SpeciesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: props.obj,
            show: false
        }
    }

    render() {
        return (
            <>
                <Card className='species-card' onClick={() => {
                    this.setState({show: true})
                }}>
                    <Card.Img variant="top" src={this.state.obj.image}/>
                    <Card.Body>
                        <b>{this.state.obj.vietnamese_name}</b>
                        <br/>
                        <small><i>{this.state.obj.scientific_name}</i></small>
                    </Card.Body>
                </Card>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                    aria-labelledby="species-details"
                    centered='true'
                    size='xl'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="species-details" style={{fontWeight: 'bold'}}>
                            {this.state.obj.vietnamese_name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <Row>
                                <Col md={6}>
                                    <b>Lớp: </b>
                                    <span>{this.state.obj.class}</span>
                                    <br/>
                                    <br/>
                                    <b>Bộ: </b>
                                    <span>{this.state.obj.order}</span>
                                    <br/>
                                    <br/>
                                    <p style={{textAlign: 'justify'}}><b>Mô tả: </b>{this.state.obj.description}</p>
                                    <br/>
                                    <br/>
                                    <b>Danh mục: </b>
                                    {
                                        this.state.obj.basis.map((item, i) => {
                                            return <Badge variant='secondary' key={Math.random()} style={{marginRight: '5px'}}>{item}</Badge>
                                        })
                                    }
                                    <br/>
                                    <br/>
                                    <b>Các bài viết liên quan</b>
                                    <br/>
                                    {
                                        this.state.obj.refs.map((item, idx) => {
                                            return (
                                                <>
                                                    <hr/>
                                                    <a href={item.url} key={Math.random()}>{item.title}</a>
                                                    <br/>
                                                </>
                                            )
                                        })
                                    }
                                    <br/>
                                </Col>
                                <Col md={6}>
                                    <img src={this.state.obj.image} alt="Species" className='modal-img'/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default SpeciesCard