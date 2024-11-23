import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "@/components/NavBar/NavBar";
import '@testing-library/jest-dom';


jest.mock("./components/Logo/Logo", () => ({
  Logo: () => <div>Mocked Logo</div>,
}));

jest.mock("./components/BurgerMenu/BurgerMenu", () => ({
  BurgerMenu: ({ toggleMenu }: { toggleMenu: () => void }) => (
    <button onClick={toggleMenu}>Mocked BurgerMenu</button>
  ),
}));

jest.mock("./components/Menu/Menu", () => ({
  Menu: ({ isMenuOpen }: { isMenuOpen: boolean }) => (
    <div>{isMenuOpen ? "Menu is open" : "Menu is closed"}</div>
  ),
}));

describe("NavBar component", () => {
  it("renders Logo, BurgerMenu, and Menu components", () => {
    render(<NavBar />);
    
    // Проверяем, что подкомпоненты рендерятся
    expect(screen.getByText("Mocked Logo")).toBeInTheDocument();
    expect(screen.getByText("Mocked BurgerMenu")).toBeInTheDocument();
    expect(screen.getByText("Menu is closed")).toBeInTheDocument();
  });

  it("toggles menu state when BurgerMenu is clicked", () => {
    render(<NavBar />);
    
    // Находим кнопку бургер-меню
    const burgerButton = screen.getByText("Mocked BurgerMenu");
    
    // Проверяем начальное состояние
    expect(screen.getByText("Menu is closed")).toBeInTheDocument();
    
    // Кликаем по бургер-меню
    fireEvent.click(burgerButton);
    
    // Проверяем, что состояние изменилось
    expect(screen.getByText("Menu is open")).toBeInTheDocument();
    
    // Кликаем еще раз
    fireEvent.click(burgerButton);
    
    // Проверяем, что состояние снова изменилось
    expect(screen.getByText("Menu is closed")).toBeInTheDocument();
  });
});
