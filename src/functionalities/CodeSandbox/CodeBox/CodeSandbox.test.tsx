import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Uncommented for realistic user interactions
import { waitFor } from '@testing-library/react';
// LOCAL
import { CodeSandbox } from '../CodeSandbox';
import { useCodeSandbox } from '../useCodeSandbox';
import { initialCodeState } from '../const';

jest.mock('../useCodeSandbox');

jest.mock('@uiw/react-codemirror', () => {
  interface MockEditorProps {
    value: string;
    onChange: (value: string) => void;
  }
  return {
    __esModule: true,
    default: ({ value, onChange }: MockEditorProps) => (
      <>
        <label htmlFor="textarea">mocking react-codemirror</label>
        <textarea
          id="textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
    ),
  };
});

const mockExecuteCode = jest.fn();
const mockData = {
  CodeSandbox: {
    result: 'Test Output',
    errorRunningCode: null,
    consoleLogs: ['log1', 'log2'],
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  (useCodeSandbox as jest.Mock).mockReturnValue({
    executeCode: mockExecuteCode,
    data: mockData,
  });
});

test('renders CodeSandbox without crashing', () => {
  render(<CodeSandbox />);
  expect(screen.getByText('RUN')).toBeInTheDocument();
});

test('executeCode is called on button click', () => {
  render(<CodeSandbox />);
  const runButton = screen.getByText('RUN');
  fireEvent.click(runButton);
  expect(mockExecuteCode).toHaveBeenCalledWith(initialCodeState);
});

test('executeCode is called with correct parameters on userEvent click', async () => {
  render(<CodeSandbox />);
  const runButton = screen.getByText('RUN');

  userEvent.click(runButton);

  await waitFor(() => {
    expect(mockExecuteCode).toHaveBeenCalledWith(initialCodeState);
    expect(screen.getByText('Test Output')).toBeInTheDocument();
  });
});
