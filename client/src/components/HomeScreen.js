import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({loading, error, data}) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    data.logos.sort(function compare(a, b) {
                        return new Date(b.lastUpdate) - new Date(a.lastUpdate);
                    });
                    return (
                        <div className="container row">
                            <div className="col s4 text-center">
                                <div className="card" style={{margin: "10%"}}>
                                    <h3 className="card-header">Recent Work</h3>
                                    <ul className="list-group list-group-flush">
                                        {data.logos.map((logo, index) => (
                                            <div key={index} className='home_logo_link list-group-item'
                                                 style={{cursor: "pointer"}}>
                                                <Link style={{fontSize: "large"}}
                                                      to={`/view/${logo._id}`}>{logo.text}</Link>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col s8 text-center">
                                <div id="home_banner_container">
                                    goLogoLo
                                </div>
                                <div>
                                    <Link className="btn btn-primary btn-lg" id="add_logo_button" to="/create">Add
                                        Logo</Link>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query>
        );
    }
}

export default HomeScreen;
