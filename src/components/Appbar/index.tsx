import style from "./style.module.scss";

const Appbar = () => {
  return (
    <nav className={style.appbar}>
      <div className={style.appbar__energy}>
        <div className={style.appbar__energy_content}>
          <img src="/icons/energy.svg" alt="energy" />
          <h3>
            996 <span>/ 1000</span>
          </h3>
        </div>
        <div className={style.appbar_energy_progress}>
          <div className={style.status}></div>
          <div className={style.lines}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className={style.appbar__balance}>
        <h4>Баланс</h4>
        <img src="/icons/coin.svg" width="23" alt="coin icon" />
        <span>236</span>

        <svg
          width="155"
          height="67"
          viewBox="0 0 180 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_9_5)">
            <path
              d="M1.51956 19.1934C-1.61249 9.85897 5.64723 0.5 15.4931 0.5H164.887C175.352 0.5 182.697 10.9888 178.635 20.6323C173.299 33.2995 167.638 44.1126 158.169 58.0847C155.582 61.9032 151.297 64.2254 146.689 64.438C105.916 66.3189 79.1156 66.9241 30.3995 64.5264C25.1918 64.2701 20.4666 61.3066 18.0414 56.6909C10.3401 42.0338 5.54475 31.1898 1.51956 19.1934Z"
              fill="black"
             
            />
            <path
              d="M1.99359 19.0344C-1.02099 10.05 5.96085 1 15.4931 1H164.887C175.015 1 182.09 11.1433 178.174 20.4382C172.85 33.0758 167.205 43.8598 157.755 57.8042C155.259 61.4875 151.122 63.7329 146.666 63.9385C105.904 65.819 79.1203 66.4237 30.4241 64.027C25.3897 63.7792 20.8254 60.9144 18.484 56.4583C10.7913 41.8176 6.00801 30.9986 1.99359 19.0344Z"
              stroke="#707070"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_9_5"
              x="-7.6177"
              y="-7.9"
              width="195.789"
              height="82.3971"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_9_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_9_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </nav>
  );
};

export default Appbar;
