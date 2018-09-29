import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './MovieDetail.css';

class MovieDetail extends Component {

    state = {
        liked: false,
    }

    render() {
        return (
            <div className="movie-card">
                <Card className="shadow-sm rounded">
                    <div
                        className="movie-header"
                        style={{ background: `url(https://image.tmdb.org/t/p/w500_and_h282_face/${this.props.img})` }}
                    >
                        <div className="movie-rating">
                            <button>{this.props.rating}<i className="fas fa-star" style={{ color: 'yellow' }}></i></button>
                            <a onClick={() => this.setState({ liked: !this.state.liked })}>
                                {this.state.liked ? <i className="fas fa-heart" style={{color:'red', fontSize:'1.5em'}}></i> 
                                : <i className="far fa-heart" style={{fontSize:'1.5em'}}></i>}
                            </a>
                        </div>
                        <div className="movie-title">
                            <h3>{this.props.title}</h3>
                        </div>
                    </div>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>Description:</CardSubtitle>
                        <CardText>{this.props.overview}</CardText>
                        <Button onClick={this.props.openModal}>View more</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MovieDetail;