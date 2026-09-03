import { MenuButton } from "@/src/features/open-menu/ul/MenuButton";

export function Header() {
  return (
    <header className="absolute z-10 top-0 left-0 w-full">
      <div className="flex justify-between items-center py-10 px-20 max-w-[1440px] mx-auto w-full">
        <h1>LOGO</h1>
        <MenuButton />
      </div>
    </header>
  );
}
