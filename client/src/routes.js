import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import ReviewView from './components/Review/review';

//Auth
import Auth from './hoc/auth';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Logout from './components/User/logout';

//Profile
import UserProfile from './components/User/userProfile';
import UserReviews from './components/User/userReviews';

//Operation
import AddReview from './containers/Admin/addReview';
import EditReview from './containers/Admin/editReview';

import Critics from './components/Critics/Critics'
import Access from './components/Acess/Acess';

const Routes = () => {
    return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Auth(Home, null)}/>
                    <Route path="/reviews/:id" exact component={Auth(ReviewView)} />
                    <Route path="/login" exact component={Auth(Login, false)} />
                    <Route path="/logout" exact component={Auth(Logout, true)}/>
                    <Route path="/user" exact component={Auth(UserProfile, true)} />
                    <Route path="/user/register" exact component={Auth(Register, true, "admin")} />
                    <Route path="/user/reviews" exact component={Auth(UserReviews, true)} />
                    <Route path="/user/add" exact component={Auth(AddReview, true)} />
                    <Route path="/user/edit-review/:id" exact component={Auth(EditReview, true)} />
                    <Route path="/critics" exact component={Auth(Critics, null)} />
                    <Route pat="/access-denied" exact component={Access} />
                </Switch>
            </ Layout>
    );
};

export default Routes;