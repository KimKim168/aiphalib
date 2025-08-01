import { useAppearance } from '@/hooks/use-appearance';
import React from 'react';
import styled from 'styled-components';

const Switch = () => {
    const { appearance, updateAppearance } = useAppearance();
    const isDark = appearance === 'dark';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateAppearance(e.target.checked ? 'dark' : 'light');
    };

    return (
        <StyledWrapper>
            <label className="theme-switch">
                <input type="checkbox" className="theme-switch__checkbox" checked={isDark} onChange={handleChange} />
                <div className="theme-switch__container">
                    <div className="theme-switch__clouds" />
                    <div className="theme-switch__stars-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="theme-switch__circle-container">
                        <div className="theme-switch__sun-moon-container">
                            <div className="theme-switch__moon">
                                <div className="theme-switch__spot" />
                                <div className="theme-switch__spot" />
                                <div className="theme-switch__spot" />
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .theme-switch {
        --toggle-size: 10px;
        /* the size is adjusted using font-size,
       this is not transform scale,
       so you can choose any size */
        --container-width: 5.625em;
        --container-height: 2.5em;
        --container-radius: 6.25em;
        /* radius 0 - minecraft mode :) */
        --container-light-bg: #3d7eae;
        --container-night-bg: #1d1f2c;
        --circle-container-diameter: 3.375em;
        --sun-moon-diameter: 2.125em;
        --sun-bg: #ecca2f;
        --moon-bg: #c4c9d1;
        --spot-color: #959db1;
        --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
        --stars-color: #fff;
        --clouds-color: #f3fdff;
        --back-clouds-color: #aacadf;
        --transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
        --circle-transition: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
    }

    .theme-switch,
    .theme-switch *,
    .theme-switch *::before,
    .theme-switch *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: var(--toggle-size);
    }

    .theme-switch__container {
        width: var(--container-width);
        height: var(--container-height);
        background-color: var(--container-light-bg);
        border-radius: var(--container-radius);
        overflow: hidden;
        cursor: pointer;
        -webkit-box-shadow:
            0em -0.062em 0.062em rgba(0, 0, 0, 0.25),
            0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
        box-shadow:
            0em -0.062em 0.062em rgba(0, 0, 0, 0.25),
            0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        transition: var(--transition);
        position: relative;
    }

    .theme-switch__container::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset: 0;
        -webkit-box-shadow:
            0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset,
            0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
        box-shadow:
            0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset,
            0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
        border-radius: var(--container-radius);
    }

    .theme-switch__checkbox {
        display: none;
    }

    .theme-switch__circle-container {
        width: var(--circle-container-diameter);
        height: var(--circle-container-diameter);
        background-color: rgba(255, 255, 255, 0.1);
        position: absolute;
        left: var(--circle-container-offset);
        top: var(--circle-container-offset);
        border-radius: var(--container-radius);
        -webkit-box-shadow:
            inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
            inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
            0 0 0 0.625em rgba(255, 255, 255, 0.1),
            0 0 0 1.25em rgba(255, 255, 255, 0.1);
        box-shadow:
            inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
            inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
            0 0 0 0.625em rgba(255, 255, 255, 0.1),
            0 0 0 1.25em rgba(255, 255, 255, 0.1);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: var(--circle-transition);
        -o-transition: var(--circle-transition);
        transition: var(--circle-transition);
        pointer-events: none;
    }

    .theme-switch__sun-moon-container {
        pointer-events: auto;
        position: relative;
        z-index: 2;
        width: var(--sun-moon-diameter);
        height: var(--sun-moon-diameter);
        margin: auto;
        border-radius: var(--container-radius);
        background-color: var(--sun-bg);
        -webkit-box-shadow:
            0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
            0em -0.062em 0.062em 0em #a1872a inset;
        box-shadow:
            0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
            0em -0.062em 0.062em 0em #a1872a inset;
        -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
        filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
        overflow: hidden;
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        transition: var(--transition);
    }

    .theme-switch__moon {
        -webkit-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
        width: 100%;
        height: 100%;
        background-color: var(--moon-bg);
        border-radius: inherit;
        -webkit-box-shadow:
            0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
            0em -0.062em 0.062em 0em #969696 inset;
        box-shadow:
            0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
            0em -0.062em 0.062em 0em #969696 inset;
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        transition: var(--transition);
        position: relative;
    }

    .theme-switch__spot {
        position: absolute;
        top: 0.75em;
        left: 0.312em;
        width: 0.75em;
        height: 0.75em;
        border-radius: var(--container-radius);
        background-color: var(--spot-color);
        -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
        box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
    }

    .theme-switch__spot:nth-of-type(2) {
        width: 0.375em;
        height: 0.375em;
        top: 0.937em;
        left: 1.375em;
    }

    .theme-switch__spot:nth-last-of-type(3) {
        width: 0.25em;
        height: 0.25em;
        top: 0.312em;
        left: 0.812em;
    }

    .theme-switch__clouds {
        width: 1.25em;
        height: 1.25em;
        background-color: var(--clouds-color);
        border-radius: var(--container-radius);
        position: absolute;
        bottom: -0.625em;
        left: 0.312em;
        -webkit-box-shadow:
            0.937em 0.312em var(--clouds-color),
            -0.312em -0.312em var(--back-clouds-color),
            1.437em 0.375em var(--clouds-color),
            0.5em -0.125em var(--back-clouds-color),
            2.187em 0 var(--clouds-color),
            1.25em -0.062em var(--back-clouds-color),
            2.937em 0.312em var(--clouds-color),
            2em -0.312em var(--back-clouds-color),
            3.625em -0.062em var(--clouds-color),
            2.625em 0em var(--back-clouds-color),
            4.5em -0.312em var(--clouds-color),
            3.375em -0.437em var(--back-clouds-color),
            4.625em -1.75em 0 0.437em var(--clouds-color),
            4em -0.625em var(--back-clouds-color),
            4.125em -2.125em 0 0.437em var(--back-clouds-color);
        box-shadow:
            0.937em 0.312em var(--clouds-color),
            -0.312em -0.312em var(--back-clouds-color),
            1.437em 0.375em var(--clouds-color),
            0.5em -0.125em var(--back-clouds-color),
            2.187em 0 var(--clouds-color),
            1.25em -0.062em var(--back-clouds-color),
            2.937em 0.312em var(--clouds-color),
            2em -0.312em var(--back-clouds-color),
            3.625em -0.062em var(--clouds-color),
            2.625em 0em var(--back-clouds-color),
            4.5em -0.312em var(--clouds-color),
            3.375em -0.437em var(--back-clouds-color),
            4.625em -1.75em 0 0.437em var(--clouds-color),
            4em -0.625em var(--back-clouds-color),
            4.125em -2.125em 0 0.437em var(--back-clouds-color);
        -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
        -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
        transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    }

    .theme-switch__stars-container {
        position: absolute;
        color: var(--stars-color);
        top: -100%;
        left: 0.312em;
        width: 2.75em;
        height: auto;
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        transition: var(--transition);
    }

    /* actions */

    .theme-switch__checkbox:checked + .theme-switch__container {
        background-color: var(--container-night-bg);
    }

    .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
        left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
    }

    .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
        left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em);
    }

    .theme-switch__circle-container:hover {
        left: calc(var(--circle-container-offset) + 0.187em);
    }

    .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
    }

    .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
        bottom: -4.062em;
    }

    .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`;

export default Switch;
