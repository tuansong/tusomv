import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './MovieControl.css';

class MovieControl extends React.Component {

    state = {
        dropdownOpen: false,
        searchOpen: false,
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    toggleSearch = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    render() {
        return (
            <div className="Control">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Sort movies
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Options</DropdownItem>
                        <DropdownItem onClick={this.props.sortRatingHandler}>Top rating</DropdownItem>
                        <DropdownItem onClick={this.props.sortViewingHandler}>Most viewed</DropdownItem>
                        <DropdownItem onClick={this.props.sortDateHandler}>Release date</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <a className="Search-btn" onClick={this.toggleSearch}><i className="fas fa-search" style={{ fontSize: '2em' }}></i></a>
                {this.state.searchOpen ? 
                    <input 
                        type="text" placeholder="Search by name" 
                        onChange={this.props.searchMovie}/> : null}
            </div>
        )
    }

}

// const mapDispatchToProps = dispatch => {
//     return {
//         sortRatingHandler: () => dispatch({ type: 'SORT_RATING' }),
//         sortViewingHandler: () => dispatch({ type: 'SORT_VIEW' }),
//         sortDateHandler: () => dispatch({ type: 'SORT_DATE' })
//     }
// }

export default MovieControl