export const GameDisplaySVG = (props) => {
  return (
    <svg
      viewBox="0 0 558 386"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_356_46)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M557 9a9 9 0 00-9-9H9a9 9 0 00-9 9v365a9 9 0 009 9h539a9 9 0 009-9V9zm-10.339 9.042a9 9 0 00-9-9H19.339a9 9 0 00-9 9v346.916a9 9 0 009 9H537.66a9 9 0 009-9V18.042z"
          fill="#FBFCBF"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_356_46"
          x={0}
          y={0}
          width={558}
          height={386}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_356_46"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_356_46"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
