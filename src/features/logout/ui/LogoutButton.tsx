"use client";

export function LogoutButton() {
  const handleLogout = () => {
    // TODO: 인증 연동 후 로그아웃 처리
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="cursor-pointer text-left text-sidebar-muted-foreground transition-colors hover:text-sidebar-foreground"
    >
      로그아웃
    </button>
  );
}
