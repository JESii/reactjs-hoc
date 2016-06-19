import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

describe('Header',() => {
  let component;
  let nav;
  let menu;
  beforeEach( () => {
    component = renderComponent(Header);
  });

  describe('has basic definition', () => {
    it('has a component', () => {
      expect(component).to.exist;
    });
    it('has a title', () => {
      expect(component.find('h1')).to.exist;
    });
    it('has the expected elements', () => {
      expect(component).to.contain('My Higher-Order Component');
    });
    it('renders a nav item', () => {
      nav = component.find('nav');
      expect(nav).to.exist;
    });
    it('renders a nav-bar manu', () => {
      menu = component.find('.navbar.navbar-light');
      expect(menu).to.exist;
    });
  });
  describe('has link components', () => {
    let homeLink;
    let resourceLink;
    let loginLink;
    beforeEach(() => {
      homeLink = component.find('.home-link');
      resourceLink = component.find('.resource-link');
      loginLink = component.find('.login-link');
    });
    it('home link', () => {
      homeLink = component.find('.home-link');
      expect(homeLink).to.exist;
      expect(homeLink).to.contain('Home');
    });
    it('goes to home page', () => {
      // Require App to work?
      homeLink = component.find('#homeLink');
      console.log('homeLink -',homeLink);
      homeLink.simulate('click');
      renderComponent('Link');
      console.log('URL: ', document.URL);
      expect(document.URL).to.contain('/home');;
    });
    it('resources link', () => {
      expect(resourceLink).to.exist;
      expect(resourceLink).to.contain('Resources');
    });
    it('goes to resources page', () => {
      // Require App to work?
      resourceLink.simulate('click');
      expect(document.URL).to.contain('/resources');
    });
    it('SignIn link', () => {
      expect(loginLink).to.exist;
      expect(loginLink).to.contain('Sign in');
    });
    xit('toggles authentication', () => {
      loginLink.simulate('click');
      resourceLink.simulate('click');
      expect(document.URL).to.contain('/resources');
      loginLink.simulate('click');
      resourceLink.simulate('click');
      expect(documentURL).to.contain('/home');
    });
  });
});
