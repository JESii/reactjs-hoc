import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import Header from '../../src/components/header';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
  describe('header', () => {
    let header;
    beforeEach(() => {
      header = renderComponent(Header);
    });
    it('Home', () => {
      expect(header).to.exist;
      expect(header).to.contain('Home');
    });
  });
});
