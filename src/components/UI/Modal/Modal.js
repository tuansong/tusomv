import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../../hoc/Auxi';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closeModal} />
            <div className="Modal" style={{ background: `url("https://image.tmdb.org/t/p/original/${props.backdropPath}")` }}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.posterPath}`} alt="banner" />
                <div className="movie-info">
                    <h1>{props.title}</h1>
                    <p>{props.overview}</p>
                    <div className="detail-info container text-left">
                        <div className="row">
                            <div className="col-xs-6 m-2">
                                <h4 className="detail-title">Original release</h4>
                                <p>{props.date}</p>
                                <h4 className="detail-title">Box Office</h4>
                                <p>{props.popularity}</p>
                            </div>
                            <div className="col-xs-6 m-2">
                                <h4 className="detail-title">Vote count</h4>
                                <p>{props.voteCount}</p>
                                <h4 className="detail-title">Vote average</h4>
                                <p>{props.voteAver}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        modalMovie: state.modalMovie
    }
}

export default connect(mapStateToProps)(modal);