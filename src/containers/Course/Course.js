import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        this.parseQuery();
    }

    componentDidUpdate() {
        this.parseQuery();
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }

    parseQuery() {
        console.log(this.props.location.search)
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        for (let param of query.entries()) {
            const newTitle = param[1];
            if (this.state.title !== newTitle) {
                this.setState({title: newTitle});
            }
        }
    }
}

export default Course;