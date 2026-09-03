interface MenuButtonProps {
  onClick: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      MENU
    </button>
  );
}
