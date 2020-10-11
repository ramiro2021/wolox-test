import { pipe } from 'rxjs';
import { FilterPipe } from './filter.pipe';
import { TechsService } from '../../services/techs.service';

describe('FilterPipe', () => {
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
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    expect(pipe).toBeTruthy();
  });

  it('return 3 or more backend technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'backend';
    pipe.transform(techsArray, argument);

    expect(techsArray.length).toBeGreaterThanOrEqual(3);

  });

  it('return 3 or more frontend technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'front';
    pipe.transform(techsArray, argument);

    expect(techsArray.length).toBeGreaterThanOrEqual(3);

  });

  it('return 3 or more mobile technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'mobile';
    pipe.transform(techsArray, argument);

    expect(techsArray.length).toBeGreaterThanOrEqual(3);

  });

  it('return 2 React tech', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'rea';
    const res = pipe.transform(techsArray, argument);

    expect(res).toEqual(
      [
        { tech: 'React', type: 'Front-End' },
        { tech: 'React Native', type: 'Mobile' },
      ]
    );

  });


  it('return Angular tech', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'angular';
    const res = pipe.transform(techsArray, argument);

    expect(res).toEqual(
      [
        { tech: 'Angular', type: 'Front-End' },
      ]
    );

  });

  it('return exact 3 Frontend technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'front-end';
    const res = pipe.transform(techsArray, argument);

    expect(res).toEqual(
      [
        { tech: 'React', type: 'Front-End' },
        { tech: 'Vue', type: 'Front-End' },
        { tech: 'Angular', type: 'Front-End' },
      ]
    );

  });

  it('return exact 3 Backend technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'back-end';
    const res = pipe.transform(techsArray, argument);

    expect(res).toEqual(
      [
        { tech: 'Node', type: 'Back-End' },
        { tech: 'Ruby on Rails', type: 'Back-End' },
        { tech: 'Springboot', type: 'Back-End' },
      ]
    );

  });

  it('return exact 3 Mobile technologys', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = 'mobile';
    const res = pipe.transform(techsArray, argument);

    expect(res).toEqual(
      [
        { tech: 'iOS', type: 'Mobile' },
        { tech: 'Android', type: 'Mobile' },
        { tech: 'React Native', type: 'Mobile' },
      ]
    );

  });


  it('return all technologies for empty argument', () => {
    const service = new TechsService(null);
    const pipe = new FilterPipe(service);
    const argument = '';
    const res = pipe.transform(techsArray, argument);
    expect(techsArray.length).toBe(9);
    expect(res).toEqual(
      [
        { tech: 'Node', type: 'Back-End' },
        { tech: 'React', type: 'Front-End' },
        { tech: 'Vue', type: 'Front-End' },
        { tech: 'Ruby on Rails', type: 'Back-End' },
        { tech: 'iOS', type: 'Mobile' },
        { tech: 'Android', type: 'Mobile' },
        { tech: 'Angular', type: 'Front-End' },
        { tech: 'React Native', type: 'Mobile' },
        { tech: 'Springboot', type: 'Back-End' },
      ]
    );

  });


});
