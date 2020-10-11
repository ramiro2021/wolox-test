import { OrderbyPipe } from './orderby.pipe';

describe('OrderbyPipe', () => {

  let techsArray = [
    { tech: 'Node', type: 'Back-End' },
    { tech: 'React', type: 'Front-End' },
    { tech: 'Vue', type: 'Front-End' },
    { tech: 'Ruby on Rails', type: 'Back-End' },
    { tech: 'iOS', type: 'Mobile' },
    { tech: 'Android', type: 'Mobile' },
    { tech: 'Angular', type: 'Front-End' },
    { tech: 'React Native', type: 'Mobile' },
    { tech: 'Springboot', type: 'Back-End' },
  ];

  it('create an instance', () => {
    const pipe = new OrderbyPipe();
    expect(pipe).toBeTruthy();
  });


  it('return Ascendent 9 technologys', () => {

    const pipe = new OrderbyPipe();
    const argument = 'asc';
    const res = pipe.transform(techsArray, argument);

    expect(techsArray.length).toBe(9);
    expect(res).toEqual([
      { tech: 'Vue', type: 'Front-End' },
      { tech: 'Springboot', type: 'Back-End' },
      { tech: 'Ruby on Rails', type: 'Back-End' },
      { tech: 'React Native', type: 'Mobile' },
      { tech: 'React', type: 'Front-End' },
      { tech: 'Node', type: 'Back-End' },
      { tech: 'iOS', type: 'Mobile' },
      { tech: 'Angular', type: 'Front-End' },
      { tech: 'Android', type: 'Mobile' },
    ]);
  });

  it('return Descendent 9 technologys', () => {

    const pipe = new OrderbyPipe();
    const argument = 'desc';
    const res = pipe.transform(techsArray, argument);

    expect(techsArray.length).toBe(9);
    expect(res).toEqual([
      { tech: 'Android', type: 'Mobile' },
      { tech: 'Angular', type: 'Front-End' },
      { tech: 'iOS', type: 'Mobile' },
      { tech: 'Node', type: 'Back-End' },
      { tech: 'React', type: 'Front-End' },
      { tech: 'React Native', type: 'Mobile' },
      { tech: 'Ruby on Rails', type: 'Back-End' },
      { tech: 'Springboot', type: 'Back-End' },
      { tech: 'Vue', type: 'Front-End' },
    ]);
  });


});
