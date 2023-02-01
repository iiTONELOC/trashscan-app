import type { IIconProps } from './types';

export default function MinusCircle(props: IIconProps): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={props.onClick || (() => { })}
            className={props.className}>

            <path strokeLinecap="round"
                strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

    );
}