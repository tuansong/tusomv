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

    getDateFormat = (date) => {
        let newDate = date.slice(8) + date.slice(4,7)+ date.slice(7, 8) + date.slice(0,4);
        return newDate;
    }

    render() {
        return (
            <div className="movie-card" onClick={this.props.openModal}>
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
                    <CardBody style={{height: '200px', overflowY: 'auto', paddingBottom: '0'}}>
                        <CardText>
                            <span className="desc">Story:</span> 
                            {this.props.overview.length > 200 ? this.props.overview.slice(0, 200) + '...' : this.props.overview} 
                            <a className="view-more"
                                onClick={this.props.openModal}
                                >View more
                            </a>    
                        </CardText>
                        <div className="date">{this.getDateFormat(this.props.date)}</div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MovieDetail;