
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FishTable from '../src/FishTable';
import FishTableRow from '../src/FishTableRow';

Enzyme.configure({adapter: new Adapter()});


var fishData = [
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? THey\'re terrifying.'
  },
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
];

describe('FishTable',()=>{
  it('should render no `FishTableRow` when given zero fish ', () => {
    const fishTable = shallow(<FishTable fishes={[]} />)
    expect(fishTable.html()).toEqual('<table><tbody></tbody></table>')
  });
  
  it('should render one `FishTableRow` when given one fish ', () => {
    const fishTable = shallow(<FishTable fishes={[{
      name: 'Goldfish',
      image: 'http://tinyurl.com/n4vgcl5',
      description: 'Everyone\'s first pet'
    }]} />)
    expect(fishTable.html()).toEqual('<table><tbody><tr><td class="fish-name">Goldfish</td><td><img src="http://tinyurl.com/n4vgcl5"/></td></tr></tbody></table>')
  });
  
  it('should render three `FishTableRow` when given three fish ', () => {
    const fishTable = shallow(<FishTable fishes={fishData} />)
    expect(fishTable.html()).toEqual('<table><tbody><tr><td class="fish-name">Pufferfish</td><td><img src="http://tinyurl.com/kxd7cuu"/></td></tr><tr><td class="fish-name">Tuna</td><td><img src="http://tinyurl.com/zgs7z2s"/></td></tr><tr><td class="fish-name">Goldfish</td><td><img src="http://tinyurl.com/n4vgcl5"/></td></tr></tbody></table>')
  });
})
describe('FishTableRow',()=>{
  it('should render a dynamic name', () => {
    const fishTableRow = shallow(<FishTableRow fish={{
      name: 'codestates',
      description:'goot bootcamp',
      image:'https://codestates.com/images/logo_sub_b_simple.png'
    }} />)
    expect(fishTableRow.html().includes('codestates')).toBe(true);
  })

  it('should render a dynamic image', () => {
    const fishTableRow = shallow(<FishTableRow fish={{
      name: 'codestates',
      description:'goot bootcamp',
      image:'https://codestates.com/images/logo_sub_b_simple.png'
    }} />)
    expect(fishTableRow.html().includes('https://codestates.com/images/logo_sub_b_simple.png')).toBe(true);
  })

  it('should render a dynamic description', () => {
    const fishTableRow = shallow(<FishTableRow fish={{
      name: 'codestates',
      description:'goot bootcamp',
      image:'https://codestates.com/images/logo_sub_b_simple.png'
    }} />)
    fishTableRow.setState({showDescription: true})
    expect(fishTableRow.html().includes('goot bootcamp')).toBe(true);
  })
})

