import {render} from '@testing-library/react';
import {Task} from 'components/Task/Task';

describe('Task', () => {
  it('Should be render task isDone: true', () => {
    const view = render(<Task id={'1'} title={'Task'} isDone={true} />);
    expect(view).toMatchSnapshot();
  });

  it('Should be render task isDone: false', () => {
    const view = render(<Task id={'1'} title={'Task'} isDone={false} />);
    expect(view).toMatchSnapshot();
  });
});
