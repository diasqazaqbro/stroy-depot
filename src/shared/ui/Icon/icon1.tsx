interface IICON {
  className?: string;
}

export default function Position({ className }: IICON) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.67784 13C4.67784 13 8.99996 7.24908 8.99996 4.86204C8.99996 2.475 7.06488 0.539917 4.67784 0.539917C2.29079 0.539917 0.355713 2.475 0.355713 4.86204C0.355713 7.24908 4.67784 13 4.67784 13ZM4.67788 6.08269C5.61132 6.08269 6.36801 5.32599 6.36801 4.39256C6.36801 3.45913 5.61132 2.70243 4.67788 2.70243C3.74445 2.70243 2.98775 3.45913 2.98775 4.39256C2.98775 5.32599 3.74445 6.08269 4.67788 6.08269Z" fill="#1A18CB"/>
    </svg>
  )
}