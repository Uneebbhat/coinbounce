import React from "react";

const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 animate-spin text-white"
        viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.591C100 78.205 77.614 100.591 50 100.591S0 78.205 0 50.591 22.386 0.591 50 0.591 100 22.976 100 50.591ZM9.081 50.591C9.081 73.19 27.401 91.509 50 91.509s40.919-18.319 40.919-40.918S72.599 9.672 50 9.672 9.081 27.992 9.081 50.591Z"
          fill="currentColor"
        />
        <path
          d="M93.968 39.041c2.425-.637 3.895-3.129 3.041-5.486-1.715-4.731-4.137-9.185-7.191-13.206-3.971-5.229-8.934-9.624-14.604-12.935C69.542 4.102 63.275 1.94 56.77 1.051c-5.003-.684-10.072-.605-15.035.227-2.473.415-3.922 2.919-3.285 5.345.637 2.425 3.119 3.848 5.6 3.484 3.8-.558 7.668-.579 11.489-.057 5.324.727 10.452 2.496 15.092 5.206 4.641 2.709 8.702 6.306 11.952 10.585 2.333 3.071 4.215 6.45 5.597 10.035.902 2.34 3.361 3.802 5.786 3.165Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
