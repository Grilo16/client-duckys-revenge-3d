export const FlyButtonSVG = ({isPressed, ...props}) =>{

  const released = ( <svg
    width="100%"
    viewBox="0 0 124 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#prefix__filter0_di_579_12)">
      <path
        d="M23.389 19.712c11.758-14.641 33.158-16.978 47.8-5.22l28.848 23.168c14.64 11.758 16.977 33.158 5.219 47.8l-11.897 14.813c-11.758 14.641-33.158 16.978-47.799 5.22L16.711 82.325c-14.64-11.758-16.977-33.159-5.22-47.8L23.39 19.713z"
        fill="#B0B0B0"
      />
      <path
        d="M20.389 13.711c11.758-14.64 33.158-16.977 47.8-5.22L97.036 31.66c14.64 11.758 16.977 33.158 5.219 47.8L90.359 94.272c-11.758 14.641-33.158 16.978-47.799 5.22L13.711 76.325c-14.64-11.758-16.977-33.159-5.22-47.8L20.39 13.713z"
        fill="#D9D9D9"
      />
    </g>
    <path
      d="M48.798 74.31v-9.568h5.603v1.028H49.93v3.233h4.051v1.027H49.93v4.28h-1.132zM57.27 64.742v9.567h-1.077v-9.567h1.077zM59.936 77c-.183 0-.346-.016-.488-.047a1.264 1.264 0 01-.297-.084l.274-.971c.261.068.492.093.693.074.201-.018.379-.11.534-.275.158-.162.303-.425.434-.79l.2-.56-2.591-7.213h1.168l1.934 5.718h.073l1.935-5.718h1.168l-2.975 8.222c-.134.37-.3.677-.497.92a1.87 1.87 0 01-.69.547c-.258.118-.55.177-.875.177z"
      fill="#979797"
    />
    <path d="M30 61.398l2.227-4.912h48.546L83 61.398H30z" fill="#ABABAB" />
    <path
      d="M83 49.34L80.773 48v8.486L83 61.398V49.34zM30 49.786L32.227 48v8.486L30 61.398V49.786z"
      fill="#ABABAB"
    />
    <path d="M32.227 48h48.546v8.486H32.227V48z" fill="#D5D5D5" />
    <path
      d="M82.75 49.481v10.76l-1.727-3.81v-7.989l1.727 1.04zm-2.227-1.231v7.986H32.477V48.25h48.046zm-48.546.271v7.91l-1.727 3.81V49.906l1.727-1.385zm50.635 12.627H30.388l2-4.412h48.224l2 4.412zM49.68 70.03v4.03h-.632v-9.068h5.103v.528H49.68v3.733h4.051v.527H49.68v.25zm9.82 6.679h0l-.004-.001a3.016 3.016 0 01-.038-.008l.143-.508c.191.034.372.045.54.03.269-.026.5-.15.692-.352.194-.2.353-.502.488-.878h0l.2-.561.03-.084-.03-.085-2.47-6.878h.632l1.877 5.548.058.17h.432l.057-.17 1.877-5.548h.633l-2.854 7.887h0c-.127.35-.28.63-.456.847l-.001.001a1.621 1.621 0 01-.597.476h-.001a1.834 1.834 0 01-.772.155 2.06 2.06 0 01-.435-.041zm-2.48-11.717v9.067h-.577v-9.067h.577z"
      stroke="#979797"
      strokeWidth={0.5}
    />
    <defs>
      <filter
        id="prefix__filter0_di_579_12"
        x={0}
        y={0}
        width={123.748}
        height={123.985}
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
          result="effect1_dropShadow_579_12"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_579_12"
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
        <feBlend in2="shape" result="effect2_innerShadow_579_12" />
      </filter>
    </defs>
  </svg>)

  const pressed = (
    <svg
      width="100%"
      viewBox="0 0 117 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_di_579_17)">
        <path
          d="M20.389 16.712c11.758-14.641 33.158-16.978 47.8-5.22L97.036 34.66c14.64 11.758 16.977 33.158 5.219 47.8L90.359 97.272c-11.758 14.641-33.158 16.978-47.799 5.22L13.711 79.325c-14.64-11.758-16.977-33.159-5.22-47.8L20.39 16.713z"
          fill="#B0B0B0"
        />
        <path
          d="M20.389 15.711c11.758-14.64 33.158-16.977 47.8-5.22L97.036 33.66c14.64 11.758 16.977 33.158 5.219 47.8L90.359 96.272c-11.758 14.641-33.158 16.978-47.799 5.22L13.711 78.325c-14.64-11.758-16.977-33.159-5.22-47.8L20.39 15.713z"
          fill="#D9D9D9"
        />
      </g>
      <path
        d="M48.798 75.402v-9.237h5.603v.992H49.93v3.121h4.051v.993H49.93v4.131h-1.132zM57.27 66.165v9.237h-1.077v-9.237h1.077zM59.936 78c-.183 0-.346-.015-.488-.045a1.298 1.298 0 01-.297-.081l.274-.938c.261.066.492.09.693.072a.834.834 0 00.534-.266c.158-.157.303-.41.434-.763l.2-.54-2.591-6.965h1.168l1.934 5.52h.073l1.935-5.52h1.168l-2.975 7.938c-.134.358-.3.654-.497.889a1.863 1.863 0 01-.69.528c-.258.114-.55.171-.875.171z"
        fill="#979797"
      />
      <path d="M30 62.936l2.227-4.743h48.546L83 62.936H30z" fill="#ABABAB" />
      <path
        d="M83 51.294L80.773 50v8.193L83 62.936V51.294zM30 51.725L32.227 50v8.193L30 62.936V51.725z"
        fill="#ABABAB"
      />
      <path d="M32.227 50h48.546v8.193H32.227V50z" fill="#D5D5D5" />
      <path
        d="M82.75 51.438v10.377l-1.727-3.678v-7.703l1.727 1.004zm-2.227-1.188v7.693H32.477V50.25h48.046zm-48.546.26v7.627l-1.727 3.678v-9.968l1.727-1.337zm50.63 12.176H30.393l1.992-4.243h48.228l1.992 4.243zM49.68 71.271v3.881h-.632v-8.737h5.103v.492H49.68v3.621h4.051v.493H49.68v.25zm9.819 6.44h0l-.005-.002-.033-.006.139-.475c.191.033.372.044.54.029.266-.024.498-.143.69-.34.195-.193.354-.486.49-.85h0l.2-.542.033-.087-.032-.087-2.467-6.627h.631l1.876 5.353.059.168h.428l.058-.168 1.876-5.353h.63l-2.848 7.6h0a2.745 2.745 0 01-.454.816l-.001.001c-.175.21-.374.361-.597.459h-.001c-.222.098-.48.15-.775.15-.17 0-.315-.014-.437-.04zM57.02 66.414v8.737h-.577v-8.737h.577z"
        stroke="#979797"
        strokeWidth={0.5}
      />
      <defs>
        <filter
          id="prefix__filter0_di_579_17"
          x={0}
          y={0}
          width={116.748}
          height={114.985}
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
            result="effect1_dropShadow_579_17"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_579_17"
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
          <feBlend in2="shape" result="effect2_innerShadow_579_17" />
        </filter>
      </defs>
    </svg>
  )
    return isPressed ? pressed : released
}