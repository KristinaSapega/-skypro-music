import { render, screen, fireEvent } from "@testing-library/react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import "@testing-library/jest-dom";

describe("ProgressBar component", () => {
  it("renders with correct max and value attributes", () => {
    render(<ProgressBar max={100} value={50} step={1} onChange={() => {}} />);
    const progressBar = screen.getByRole("slider");
    expect(progressBar).toHaveAttribute("max", "100");
    expect(progressBar).toHaveAttribute("value", "50");
  });

  it("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<ProgressBar max={100} value={50} step={1} onChange={handleChange} />);
    const progressBar = screen.getByRole("slider");
    fireEvent.change(progressBar, { target: { value: "70" } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); 
  });
});