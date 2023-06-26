export const ActionButton = ({pressed, ...props}) => {
    const pressedButton =  (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 74 73"
        fill="none"
        style={{gridColumn: "1", gridRow:"1/span 3"}}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_di_339_63)">
          <path
            d="M12.767 11.33c7.136-8.895 20.124-10.314 29.01-3.17l17.508 14.075c8.886 7.144 10.304 20.146 3.168 29.041l-7.22 9c-7.136 8.896-20.124 10.316-29.01 3.172L8.715 49.372C-.171 42.228-1.59 29.226 5.547 20.332l7.22-9.001z"
            fill="#B0B0B0"
          />
          <path
            d="M12.767 10.723C19.903 1.828 32.891.408 41.777 7.552l17.508 14.076c8.886 7.144 10.304 20.146 3.168 29.04l-7.22 9.001c-7.136 8.896-20.124 10.315-29.01 3.172L8.715 48.765C-.171 41.62-1.59 28.619 5.547 19.724l7.22-9z"
            fill="#D9D9D9"
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_di_339_63"
            x={0}
            y={0}
            width={74}
            height={73}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={3} dy={1} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_339_63"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_339_63"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={1} dy={8} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect2_innerShadow_339_63" />
          </filter>
        </defs>
      </svg>
    )

    const UnpressedButton = (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 74 73"
        fill="none"
        style={{gridColumn: "1", gridRow:"1/span 3"}}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_di_376_47)">
          <path
            d="M14.023 11.86c6.84-8.497 19.287-9.854 27.803-3.029l16.78 13.448c8.516 6.825 9.875 19.246 3.036 27.744l-6.92 8.599c-6.84 8.498-19.287 9.854-27.803 3.03l-16.78-13.448C1.623 41.379.264 28.957 7.103 20.459l6.92-8.598z"
            fill="#B0B0B0"
          />
          <path
            d="M12.278 8.378c6.84-8.498 19.287-9.854 27.803-3.03l16.78 13.448c8.516 6.825 9.876 19.246 3.036 27.745l-6.92 8.598c-6.84 8.498-19.287 9.855-27.803 3.03L8.394 44.72c-8.516-6.824-9.875-19.246-3.036-27.744l6.92-8.599z"
            fill="#D9D9D9"
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_di_376_47"
            x={0}
            y={0}
            width={77}
            height={77}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={5} dy={5} />
            <feGaussianBlur stdDeviation={3} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_376_47"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_376_47"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={1} dy={8} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect2_innerShadow_376_47" />
          </filter>
        </defs>
      </svg>
    );

      return pressed ? pressedButton : UnpressedButton
      }
      
  