interface IICON {
  className?: string;
}

export const Position: React.FC<IICON> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67784 13C4.67784 13 8.99996 7.24908 8.99996 4.86204C8.99996 2.475 7.06488 0.539917 4.67784 0.539917C2.29079 0.539917 0.355713 2.475 0.355713 4.86204C0.355713 7.24908 4.67784 13 4.67784 13ZM4.67788 6.08269C5.61132 6.08269 6.36801 5.32599 6.36801 4.39256C6.36801 3.45913 5.61132 2.70243 4.67788 2.70243C3.74445 2.70243 2.98775 3.45913 2.98775 4.39256C2.98775 5.32599 3.74445 6.08269 4.67788 6.08269Z" fill="#1A18CB"/>
    </svg>
  )
}

export const Arrow: React.FC<IICON> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8332 7.01786L19.1511 0.199286C19.1063 0.14006 19.0466 0.0911573 18.9769 0.056536C18.9072 0.0219147 18.8294 0.00254698 18.7499 0C18.4356 0 18.182 0.304286 18.182 0.681429C18.182 0.87 18.2451 1.04036 18.3487 1.16357L23.0606 6.81857H0.567854C0.25357 6.81857 0 7.12286 0 7.5C0 7.87714 0.25357 8.18143 0.567854 8.18143H23.0606L18.3487 13.8364C18.2374 13.977 18.179 14.146 18.182 14.3186C18.182 14.6957 18.4356 15 18.7499 15C18.907 15 19.0487 14.925 19.1511 14.8007L24.8332 7.98214C24.9449 7.84172 25.0033 7.67266 24.9999 7.5C25.0031 7.32736 24.9447 7.15835 24.8332 7.01786Z" fill="#D71920"/>
    </svg>
  )
}