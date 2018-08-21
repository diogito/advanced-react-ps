import React from 'react';
import ArticleList from '../ArticleList';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  it('renderers correctly', () => {
    const wrapper = shallow(
      <ArticleList 
        {...testProps}
      />
    );
    expect(wrapper.find('ArticleContainer').length).toBe(Object.keys(testProps.articles).length);
    expect(wrapper).toMatchSnapshot();
  });
});
