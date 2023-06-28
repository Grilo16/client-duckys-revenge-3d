export const MenuButton = ({pressed,...props}) => {
    const menuButton =  (
        <svg
        width={56}
        height={28}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_di_507_6)">
          <rect x={1} y={2} width={50} height={20} rx={7} fill="#282828" />
        </g>
        <g filter="url(#prefix__filter1_i_507_6)">
          <rect width={50} height={20} rx={7} fill="#232323" />
        </g>
        <g filter="url(#prefix__filter2_ii_507_6)" fill="#fff">
          <path d="M10.994 14H8.586l.744-9.376h3.752l.704 3.144.32 1.592.304-1.584.624-3.152h3.344L19.066 14h-2.488l-.408-5.512-.096-2.032-1.224 6.608h-2.088L11.29 6.456l-.048 2.032L10.994 14zM25.439 14h-5.672V4.624h5.552l-.16 1.888-2.744-.08V8.24h2.16v1.872l-2.16-.16v2.128l3.024-.08v2zM28.71 14h-2.545V5.376l-.392-.752h2.944l1.472 3.04 1.408 3.032-.392-3.56V4.624h2.552V14h-2.44l-1.904-3.704-1.176-2.32.472 3.072V14zM38.46 14.168c-.548 0-1.036-.053-1.463-.16-.421-.107-.768-.25-1.04-.432a2.413 2.413 0 01-.664-.672 2.793 2.793 0 01-.36-.856 4.393 4.393 0 01-.104-.992V4.624h2.848v6.072c0 .677.07 1.144.208 1.4.144.25.352.376.624.376.15 0 .28-.024.392-.072a.888.888 0 00.312-.264c.096-.128.168-.31.216-.544.053-.24.08-.53.08-.872V4.624h2.528v6.48c0 .357-.032.68-.096.968-.059.288-.17.568-.336.84-.16.267-.373.49-.64.672-.261.176-.605.317-1.032.424-.421.107-.912.16-1.472.16z" />
        </g>
        <defs>
          <filter
            id="prefix__filter0_di_507_6"
            x={0}
            y={2}
            width={56}
            height={26}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={3} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_507_6" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_507_6"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={15} />
            <feGaussianBlur stdDeviation={2.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0.4375 0 0 0 0 0.4375 0 0 0 0 0.4375 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect2_innerShadow_507_6" />
          </filter>
          <filter
            id="prefix__filter1_i_507_6"
            x={0}
            y={0}
            width={50}
            height={23}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={1}
              operator="dilate"
              in="SourceAlpha"
              result="effect1_innerShadow_507_6"
            />
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_507_6" />
          </filter>
          <filter
            id="prefix__filter2_ii_507_6"
            x={8.586}
            y={4.624}
            width={33.551}
            height={9.644}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={0.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" result="effect1_innerShadow_507_6" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={0.1} dy={0.1} />
            <feGaussianBlur stdDeviation={0.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend
              in2="effect1_innerShadow_507_6"
              result="effect2_innerShadow_507_6"
            />
          </filter>
        </defs>
      </svg>
    )


    const pressedMenuButton = (

        <svg
        width={54}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_di_507_12)">
          <rect x={1} y={2} width={50} height={20} rx={7} fill="#282828" />
        </g>
        <g filter="url(#prefix__filter1_i_507_12)">
          <rect x={1} y={2} width={50} height={20} rx={7} fill="#232323" />
        </g>
        <g filter="url(#prefix__filter2_ii_507_12)" fill="#fff">
          <path d="M11.408 16.376H9L9.744 7h3.752l.704 3.144.32 1.592.304-1.584L15.448 7h3.344l.688 9.376h-2.488l-.408-5.512-.096-2.032-1.224 6.608h-2.088l-1.472-6.608-.048 2.032-.248 5.512zM25.853 16.376H20.18V7h5.552l-.16 1.888-2.744-.08v1.808h2.16v1.872l-2.16-.16v2.128l3.024-.08v2zM29.123 16.376H26.58V7.752L26.187 7h2.944l1.472 3.04 1.408 3.032-.392-3.56V7h2.552v9.376h-2.44l-1.904-3.704-1.176-2.32.472 3.072v2.952zM38.875 16.544c-.55 0-1.037-.053-1.464-.16-.421-.107-.768-.25-1.04-.432a2.412 2.412 0 01-.664-.672 2.788 2.788 0 01-.36-.856 4.393 4.393 0 01-.104-.992V7h2.848v6.072c0 .677.07 1.144.208 1.4.144.25.352.376.624.376.15 0 .28-.024.392-.072a.888.888 0 00.312-.264c.096-.128.168-.31.216-.544.053-.24.08-.53.08-.872V7h2.528v6.48c0 .357-.032.68-.096.968-.059.288-.17.568-.336.84-.16.267-.373.49-.64.672-.261.176-.605.317-1.032.424-.421.107-.912.16-1.472.16z" />
        </g>
        <defs>
          <filter
            id="prefix__filter0_di_507_12"
            x={1}
            y={2}
            width={53}
            height={25}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={2}
              in="SourceAlpha"
              result="effect1_dropShadow_507_12"
            />
            <feOffset dx={2} dy={3} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_507_12"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_507_12"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={15} />
            <feGaussianBlur stdDeviation={2.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0.4375 0 0 0 0 0.4375 0 0 0 0 0.4375 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect2_innerShadow_507_12" />
          </filter>
          <filter
            id="prefix__filter1_i_507_12"
            x={1}
            y={2}
            width={50}
            height={23}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={1}
              operator="dilate"
              in="SourceAlpha"
              result="effect1_innerShadow_507_12"
            />
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0 0.516667 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_507_12" />
          </filter>
          <filter
            id="prefix__filter2_ii_507_12"
            x={9}
            y={7}
            width={33.551}
            height={9.644}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={0.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" result="effect1_innerShadow_507_12" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={0.1} dy={0.1} />
            <feGaussianBlur stdDeviation={0.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend
              in2="effect1_innerShadow_507_12"
              result="effect2_innerShadow_507_12"
            />
          </filter>
        </defs>
      </svg>
    )
    return pressed ? pressedMenuButton : menuButton
};