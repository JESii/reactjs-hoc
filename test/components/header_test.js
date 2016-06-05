import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header',() => {
  let component;
  let nav;
  let menu;
  beforeEach( () => {
    component = renderComponent(Header);
  });

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
