import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReview, updateReview, clearReview, deleteReview } from '../../actions/reviews';

export class EditReview extends PureComponent {

    state = {
        formdata: {
            _id:this.props.match.params.id,
            name: '',
            image: '',
            author: '',
            review: '',
            rating: ''
        }
      
    }

    onChange = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    
    editForm = (e) => {
        e.preventDefault();
        console.log(this.state.formdata);
        this.props.dispatch(updateReview(this.state.formdata))
    }

    deleteReview = () => {
        this.props.dispatch(deleteReview(this.props.match.params.id))
    }

    redirectUser = () => {
        this.props.history.push('/user/reviews')
    }

    componentWillMount(){
        this.props.dispatch(getReview(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let review = nextProps.reviews.review;
        this.setState({
            formdata:{
                _id:review._id,
                name:review.name,
                image:review.image,
                author: review.author,
                review: review.review,
                rating: review.rating
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearReview())
    }

    render() {
        let reviews = this.props.reviews;
        console.log(this.props)
        return (
            <div>
                <div className="container">
                    {
                        reviews.updateReview ?
                            <div>Review is updated successfully</div>
                        :null
                    }

                    {
                        reviews.reviewDeleted ?
                            <div>Review is deleted
                                {this.redirectUser()}
                            </div>
                            
                        :null
                    }
                    <h2 className="center">EDIT MOVIE REVIEW</h2>
                    <form onSubmit={this.editForm}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={(event) => this.onChange(event, 'name')} 
                                value={this.state.formdata.name} />
                        </div>
                        <div className="form-group">
                            <label>Image: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="image"
                                onChange={(event) => this.onChange(event, 'image')} 
                                value={this.state.formdata.image} />
                        </div>
                        <div className="form-group">
                            <label>Author: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="author"
                                value={this.state.formdata.author}
                                onChange={(event) => this.onChange(event, 'author')} />
                        </div>

                        <div className="form-group">
                            <label>Rating: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.formdata.rating}
                                onChange={(event) => this.onChange(event, 'rating')} />
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
                                
                            </textarea>
                        </div>

                        <button type="submit" className="btn btn-default">Edit review</button>
                        <button className="btn btn-danger" onClick={this.deleteReview}>Delete review</button>
                       
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

export default connect(mapStateToProps)(EditReview)