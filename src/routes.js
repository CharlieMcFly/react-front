import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import LoginPage from './components/login/LoginPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import DevisPage from './components/devis/DevisPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="login" component={LoginPage} />
        <Route path="devis" component={DevisPage} />

    </Route>
);