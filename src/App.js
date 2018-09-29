import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../src/hoc/Auxi';
import NavBar from '../src/components/Header/NavBar';
import MovieControl from './components/MovieControl/MovieControl';
import MovieList from './components/MovieList/MovieList';
import Modal from './components/UI/Modal/Modal';

class App extends Component {

  
  state = {
    currentPage: 1,
    openModal: false
  }

  componentDidMount = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c456245eb29eb37a5640f9326dba9c80')
      .then(response => response.json())
      .then(data => {
        this.props.getMoviesList(data);
      })
      .catch(error => console.log(error));
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({
          currentPage: this.state.currentPage + 1
        })
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=c456245eb29eb37a5640f9326dba9c80&language=en-US&page=${this.state.currentPage}`)
          .then(response => response.json())
          .then(data => {
            let currentMovies = this.props.movies
            if (this.props.movies) {
              let updatedMovies = currentMovies.concat(data.results);
              this.props.getMoreMovies(updatedMovies);
            }
          })
      }
    })
  }

  openModalHandler = () => {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  closeModalHandler = () => {
    this.setState({
      openModal: false
    })
  }

  render() {
    return (
      <Aux>
        <NavBar />
        <MovieControl
          sortRatingHandler={this.props.sortRatingHandler}
          sortViewingHandler={this.props.sortViewingHandler}
          sortDateHandler={this.props.sortDateHandler}
          searchMovie={(e) => this.props.searchMovieHandler(e)}
        />
        <MovieList
          movies={this.props.movies}
          openModal={(i) => {
            this.setState({ openModal: true });
            this.props.openModalHandler(i)
          }
          } />
        {this.state.openModal ?
          <Modal show
            closeModal={this.closeModalHandler}
            title={this.props.modalMovie.original_title}
            backdropPath={this.props.modalMovie.backdrop_path}
            posterPath={this.props.modalMovie.poster_path}
            overview={this.props.modalMovie.overview}
            date={this.props.modalMovie.release_date}
            popularity={this.props.modalMovie.popularity}
            voteCount={this.props.modalMovie.vote_count}
            voteAver={this.props.modalMovie.vote_average}
          />
          : null}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    modalMovie: state.modalMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesList: (data) => dispatch({ type: 'GET_MOVIES', data: data.results }),
    getMoreMovies: (data) => dispatch({ type: 'LOAD_MORE', data: data }),
    openModalHandler: (i) => dispatch({ type: 'LOAD_MODAL', data: i }),
    sortRatingHandler: () => dispatch({ type: 'SORT_RATING' }),
    sortViewingHandler: () => dispatch({ type: 'SORT_VIEW' }),
    sortDateHandler: () => dispatch({ type: 'SORT_DATE' }),
    searchMovieHandler: (e) => dispatch({ type: 'SEARCH_MOVIE', data: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
