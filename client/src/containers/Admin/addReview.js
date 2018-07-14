import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addReview } from '../../actions/reviews';

export class AddReview extends Component {

    state = {
        formdata: {
            name: '',
            image: '', 
            author: '',
            review: '',
            rating: '',
        },

        errorsValidation: {
            nameerror: '',
            imageerror: '',
            authorerror: '',
            reviewerror: '',
            ratingerror: ''
        }
      
    }

    showNewReview = (review) => (
        review.post ?
            <div className="conf_link">
                Cool !! <Link to={`/reviews/${review.bookId}`}>
                    Click the link to see the post
                </Link>
            </div>
        :null
    )


    onChange = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    validate = () => {
        let isError = false;
        const errors = {};

        if(this.state.formdata.name.length < 5) {
            isError = true;
            errors.nameerror = 'Name needs to be atleast 5 char long'
        }

        if(this.state.formdata.image.length < 5) {
            isError = true;
            errors.imageerror = 'Image needs to be atleast 5 char long'
        }

        if(this.state.formdata.author.length < 5) {
            isError = true;
            errors.authorerror = 'Author needs to be atleast 5 char long'
        }


        if(this.state.formdata.review.length < 10) {
            isError = true;
            errors.reviewerror = 'review must be more than 10 characters'
        }

        if(isError){
            this.setState({
                ...this.state.errorsValidation,
                ...errors
            })
        }

        return isError;
    }
    
    addForm = (e) => {
        e.preventDefault();

        const err = this.validate();
        console.log(err);
        if(!err){
            this.props.dispatch(addReview({
                ...this.state.formdata,
                ownerId: this.props.user.login.id
            }))
    
            this.props.history.push('/user/reviews')
        }
       
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="center">ADD NEW MOVIE REVIEW</h2>
                    <form onSubmit={this.addForm}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={(event) => this.onChange(event, 'name')} 
                                value={this.state.formdata.name} />
                                <span style={{color: "red"}}>{this.state.nameerror}</span>
                        </div>
                        <div className="form-group">
                            <label>Image: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="image"
                
                                onChange={(event) => this.onChange(event, 'image')} 
                                value={this.state.formdata.image} />
                                <span style={{color: "red"}}>{this.state.imageerror}</span>
                        </div>
                        <div className="form-group">
                            <label>Author: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="author"
                          
                                value={this.state.formdata.author}
                                onChange={(event) => this.onChange(event, 'author')} />
                                <span style={{color: "red"}}>{this.state.authorerror}</span>
                        </div>

                        <div className="form-group">
                            <label>Rating: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.formdata.rating}
                                onChange={(event) => this.onChange(event, 'rating')} />
                                <span style={{color: "red"}}>{this.state.ratingerror}</span>
                        </div>

                        <div className="form-group">
                            <label>Review:</label>
                            <textarea 
                                className="form-control" 
                                rows="5" 
                                name="review"
                                value={this.state.formdata.review}
                                onChange={(event) => this.onChange(event, 'review')}
                                >
                                <span style={{color: "red"}}>{this.state.reviewerror}</span>
                            </textarea>
                        </div>

                        <button type="submit" className="btn btn-default">Add review</button>
                    </form>
                    <br />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        reviews:state.reviews
    }
}

export default connect(mapStateToProps)(AddReview)