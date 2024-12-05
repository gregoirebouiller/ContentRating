
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes +1,
                totalRatings: prevState.totalRatings +1 
            }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes +1,
                totalRatings: prevState.totalRatings +1 
            }));
        }
    };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>
            Slime mold or slime mould is an informal name given to a polyphyletic assemblage of unrelated eukaryotic organisms in the Stramenopiles, Rhizaria, Discoba, Amoebozoa and Holomycota clades.
            Most are microscopic; those in the Myxogastria form larger plasmodial slime molds visible to the naked eye. The slime mold life cycle includes a free-living single-celled stage and the formation of spores.
            Spores are often produced in macroscopic multicellular or multinucleate fruiting bodies that may be formed through aggregation or fusion; aggregation is driven by chemical signals called acrasins.
            Slime molds contribute to the decomposition of dead vegetation; some are parasitic.
        </p>
        <div className='rating-buttons'></div>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
        </button>
        <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
        </button>
        <p>
            Total Ratings: ({this.state.totalRatings})
        </p>
     </div>
     </>
    );
  }
}

export default ContentRating;
