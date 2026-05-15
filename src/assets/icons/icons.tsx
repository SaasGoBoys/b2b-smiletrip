import type { ExpandableIconProps, IconProps } from "./icons.type";

export const ArrowDownIcon = ({
    color = "#FFFFFF",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7 10L17 10L12 15L7 10Z" fill={color} />
        </svg>

    );
};

export const ShieldCheckIcon = ({
    color = "#DCE2FF",
    width = 38,
    height = 38,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M31.6667 20.5833C31.6667 28.5 26.125 32.4583 19.5384 34.7542C19.1935 34.871 18.8188 34.8655 18.4775 34.7383C11.875 32.4583 6.33337 28.5 6.33337 20.5833V9.5C6.33337 9.08007 6.50019 8.67735 6.79712 8.38041C7.09405 8.08348 7.49678 7.91667 7.91671 7.91667C11.0834 7.91667 15.0417 6.01667 17.7967 3.61C18.1321 3.32341 18.5589 3.16595 19 3.16595C19.4412 3.16595 19.8679 3.32341 20.2034 3.61C22.9742 6.0325 26.9167 7.91667 30.0834 7.91667C30.5033 7.91667 30.906 8.08348 31.203 8.38041C31.4999 8.67735 31.6667 9.08007 31.6667 9.5V20.5833Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.25 19L17.4167 22.1667L23.75 15.8333" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const SearchIcon = ({
    color = "#A0A0A0",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M32.6667 35L22.1667 24.5C21.3333 25.1667 20.375 25.6944 19.2917 26.0833C18.2083 26.4722 17.0556 26.6667 15.8333 26.6667C12.8056 26.6667 10.2431 25.6181 8.14583 23.5208C6.04861 21.4236 5 18.8611 5 15.8333C5 12.8056 6.04861 10.2431 8.14583 8.14583C10.2431 6.04861 12.8056 5 15.8333 5C18.8611 5 21.4236 6.04861 23.5208 8.14583C25.6181 10.2431 26.6667 12.8056 26.6667 15.8333C26.6667 17.0556 26.4722 18.2083 26.0833 19.2917C25.6944 20.375 25.1667 21.3333 24.5 22.1667L35 32.6667L32.6667 35ZM15.8333 23.3333C17.9167 23.3333 19.6875 22.6042 21.1458 21.1458C22.6042 19.6875 23.3333 17.9167 23.3333 15.8333C23.3333 13.75 22.6042 11.9792 21.1458 10.5208C19.6875 9.0625 17.9167 8.33333 15.8333 8.33333C13.75 8.33333 11.9792 9.0625 10.5208 10.5208C9.0625 11.9792 8.33333 13.75 8.33333 15.8333C8.33333 17.9167 9.0625 19.6875 10.5208 21.1458C11.9792 22.6042 13.75 23.3333 15.8333 23.3333Z" fill={color} />
        </svg>
    );
};

export const VietnamFlagIcon = ({
    width = 28,
    height = 28,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_1116_67)">
                <path d="M20.0001 0C25.5223 0 30.5227 2.23937 34.1417 5.85844C37.7608 9.47742 40.0002 14.4779 40.0002 20.0001C40.0002 25.5223 37.7608 30.5227 34.1417 34.1417C30.5227 37.7608 25.5223 40.0002 20.0001 40.0002C14.4784 40.0002 9.47742 37.7608 5.85844 34.1417C2.23937 30.5227 0 25.5216 0 20.0001C0 14.4779 2.23937 9.47742 5.85844 5.85844C9.47742 2.23937 14.4779 0 20.0001 0Z" fill="#4558B6" />
                <path d="M19.9999 1.53094C25.0997 1.53094 29.7173 3.5986 33.0595 6.94055C36.4014 10.2827 38.4691 14.9002 38.4691 20.0001C38.4691 25.0999 36.4014 29.7175 33.0593 33.0595C29.7173 36.4016 25.0997 38.4693 19.9999 38.4693C14.9001 38.4693 10.2825 36.4016 6.94037 33.0597C3.59842 29.7175 1.53076 25.0999 1.53076 20.0001C1.53076 14.9002 3.59842 10.2827 6.94037 6.94055C10.2825 3.5986 14.9001 1.53094 19.9999 1.53094Z" fill="white" />
                <path d="M20.0001 3.09328C29.3374 3.09328 36.9069 10.6625 36.9069 20.0001C36.9069 29.3374 29.3374 36.9069 20.0001 36.9069C10.6625 36.9069 3.09326 29.3374 3.09326 20.0001C3.09326 10.6625 10.6625 3.09328 20.0001 3.09328Z" fill="#DA251D" />
                <path d="M19.7087 23.012L23.7126 25.9196L22.1839 21.2115L26.1894 18.3025H21.239L19.7087 13.5887L18.1783 18.3025H13.228L17.2336 21.2115L15.7049 25.9196L19.7087 23.012Z" fill="#FFFF00" />
            </g>
            <defs>
                <clipPath id="clip0_1116_67">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const JapanFlagIcon = ({ width = 28, height = 28, className = "" }: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="20" cy="20" r="20" fill="#4558B6" />
        <circle cx="20" cy="20" r="18.5" fill="white" />
        <g clipPath="url(#japan-clip)">
            <rect x="0" y="0" width="40" height="40" fill="white" />
            <circle cx="20" cy="20" r="7" fill="#BC002D" />
        </g>
        <defs>
            <clipPath id="japan-clip"><circle cx="20" cy="20" r="16.9" /></clipPath>
        </defs>
    </svg>
);

export const FranceFlagIcon = ({ width = 28, height = 28, className = "" }: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="20" cy="20" r="20" fill="#4558B6" />
        <circle cx="20" cy="20" r="18.5" fill="white" />
        <g clipPath="url(#france-clip)">
            <rect x="0" y="0" width="13.33" height="40" fill="#002395" />
            <rect x="13.33" y="0" width="13.34" height="40" fill="white" />
            <rect x="26.67" y="0" width="13.33" height="40" fill="#ED2939" />
        </g>
        <defs>
            <clipPath id="france-clip"><circle cx="20" cy="20" r="16.9" /></clipPath>
        </defs>
    </svg>
);

export const EnglishFlagIcon = ({ width = 28, height = 28, className = "" }: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="20" cy="20" r="20" fill="#4558B6" />
        <circle cx="20" cy="20" r="18.5" fill="white" />
        <g clipPath="url(#us-clip)">
            <rect x="0" y="0" width="40" height="40" fill="#B22234" />
            <rect x="0" y="5" width="40" height="3.5" fill="white" />
            <rect x="0" y="12" width="40" height="3.5" fill="white" />
            <rect x="0" y="19" width="40" height="3.5" fill="white" />
            <rect x="0" y="26" width="40" height="3.5" fill="white" />
            <rect x="0" y="33" width="40" height="3.5" fill="white" />
            <rect x="0" y="0" width="18" height="20" fill="#3C3B6E" />
            <circle cx="4" cy="4" r="1" fill="white" />
            <circle cx="9" cy="4" r="1" fill="white" />
            <circle cx="14" cy="4" r="1" fill="white" />
            <circle cx="6.5" cy="8" r="1" fill="white" />
            <circle cx="11.5" cy="8" r="1" fill="white" />
            <circle cx="4" cy="12" r="1" fill="white" />
            <circle cx="9" cy="12" r="1" fill="white" />
            <circle cx="14" cy="12" r="1" fill="white" />
            <circle cx="6.5" cy="16" r="1" fill="white" />
            <circle cx="11.5" cy="16" r="1" fill="white" />
        </g>
        <defs>
            <clipPath id="us-clip"><circle cx="20" cy="20" r="16.9" /></clipPath>
        </defs>
    </svg>
);

export const PlaneTakeoffIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.5 27.5H27.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.95 21.75L5 21.25L2.5 16.25L3.875 15.5625C4.22395 15.3866 4.60925 15.295 5 15.295C5.39075 15.295 5.77605 15.3866 6.125 15.5625L6.3375 15.6875C6.68645 15.8633 7.07175 15.9549 7.4625 15.9549C7.85325 15.9549 8.23855 15.8633 8.5875 15.6875L10 15L6.25 7.49997L7.375 6.93747C7.79084 6.7329 8.25536 6.64795 8.71669 6.69209C9.17802 6.73624 9.618 6.90775 9.9875 7.18747L15.0125 10.9375C15.3833 11.2196 15.8255 11.3925 16.2894 11.4367C16.7532 11.4809 17.2201 11.3946 17.6375 11.1875L22.875 8.61247C23.5443 8.27508 24.3153 8.19932 25.0375 8.39997L26.25 8.74997C26.5005 8.81954 26.7324 8.94406 26.9288 9.11448C27.1251 9.28489 27.281 9.49692 27.3852 9.73515C27.4893 9.97338 27.5391 10.2318 27.5309 10.4917C27.5226 10.7516 27.4566 11.0063 27.3375 11.2375L26.8625 12.1875C26.575 12.7625 26.1125 13.2375 25.525 13.5375L9.475 21.5C9.00306 21.7337 8.46934 21.8125 7.95 21.725V21.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const PlaneLandingIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.5 27.5H27.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.7125 13.4625L2.5 11.25L5 5.625L6.375 6.3125C7.0625 6.6625 7.5 7.3625 7.5 8.125C7.5 8.8875 7.9375 9.5875 8.625 9.9375L10 10.625L13.75 3.125L15.0625 3.7875C15.4273 3.96917 15.7421 4.23726 15.9795 4.56841C16.217 4.89956 16.3699 5.28374 16.425 5.6875L17.325 12.4375C17.3801 12.8413 17.533 13.2254 17.7705 13.5566C18.0079 13.8877 18.3227 14.1558 18.6875 14.3375L24.1875 17.0875C24.7125 17.3625 25.1625 17.775 25.45 18.2875L26.2 19.575C26.8125 20.675 26.125 22.05 24.875 22.2L23.4 22.3875C22.8125 22.4625 22.2125 22.3625 21.6875 22.0875L5.3625 13.9375C5.1216 13.8153 4.90208 13.6549 4.7125 13.4625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const ArrowExchangeIcon = ({
    color = "#4558B6",
    width = 40,
    height = 40,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M28.3333 16.6667H5L11.6667 10M11.6667 23.3333H35L28.3333 30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const CalendarIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10 2.5V7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 2.5V7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.75 12.5H26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 17.5H10.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 17.5H15.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 17.5H20.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 22.5H10.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 22.5H15.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 22.5H20.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const Search2Icon = ({
    color = "#FFFFFF",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M48.6249 43.75L39.5833 34.7083" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.9167 39.5833C32.1214 39.5833 39.5833 32.1214 39.5833 22.9167C39.5833 13.7119 32.1214 6.25 22.9167 6.25C13.7119 6.25 6.25 13.7119 6.25 22.9167C6.25 32.1214 13.7119 39.5833 22.9167 39.5833Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const UsersIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H7.5C6.17392 18.75 4.90215 19.2768 3.96447 20.2145C3.02678 21.1521 2.5 22.4239 2.5 23.75V26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 3.91C21.0722 4.18797 22.0217 4.81408 22.6996 5.69008C23.3775 6.56608 23.7452 7.64237 23.7452 8.75C23.7452 9.85764 23.3775 10.9339 22.6996 11.8099C22.0217 12.6859 21.0722 13.312 20 13.59" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.5 26.25V23.75C27.4992 22.6422 27.1304 21.566 26.4517 20.6904C25.773 19.8148 24.8227 19.1895 23.75 18.9125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const ChevronLeftLargeIcon = ({
    color = "#DBDBDB",
    width = 27,
    height = 49,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 27 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M25.1213 1.06067L2.12134 24.0607L25.1213 47.0607" stroke={color} strokeWidth="3" />
        </svg>
    );
};

export const ChevronRightLargeIcon = ({
    color = "#3A3A3A",
    width = 27,
    height = 49,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 27 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M1.06055 1.06067L24.0605 24.0607L1.06055 47.0607" stroke={color} strokeWidth="3" />
        </svg>
    );
};

export const LuggageIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 18V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 20H14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const TravelBagIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 20H3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 16V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V8C20 6.89543 19.1046 6 18 6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const BoltIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M15.4245 2.25C16.2655 2.25 16.8285 3.048 16.6365 3.813L16.5875 3.966L14.4895 9.35H16.9995C17.9845 9.35 18.5315 10.404 18.0995 11.204L17.9995 11.36L10.5295 21.407C9.98952 22.132 8.90852 21.631 9.00252 20.802L9.78752 13.892H6.99952C6.09252 13.892 5.51252 12.968 5.84452 12.157L5.84952 12.146L9.75552 3.018C9.85044 2.79088 10.0103 2.59684 10.2151 2.46021C10.4198 2.32359 10.6604 2.25046 10.9065 2.25H15.4245Z" fill={color} />
        </svg>
    );
};

export const MealAmenityIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_meal)">
                <path d="M12.0005 1.18138e-05C14.7778 -0.000782071 17.4695 0.961506 19.6168 2.72289C21.7642 4.48428 23.2343 6.93578 23.7767 9.65963C24.3191 12.3835 23.9002 15.2111 22.5914 17.6607C21.2826 20.1103 19.1648 22.0303 16.5991 23.0935C14.0333 24.1567 11.1782 24.2972 8.52041 23.4913C5.8626 22.6853 3.5665 20.9826 2.02338 18.6734C0.480261 16.3642 -0.214387 13.5914 0.0578076 10.8275C0.330002 8.06351 1.5522 5.47945 3.51612 3.51564C4.62876 2.39929 5.95117 1.51397 7.40725 0.910616C8.86334 0.307266 10.4244 -0.00220387 12.0005 1.18138e-05ZM10.2642 11.4102C10.8345 11.0195 11.1216 10.5098 11.0728 9.34376V6.34572C11.0728 5.92775 10.3071 5.87697 10.27 6.34572L10.2407 8.77736C10.2407 8.86801 10.2047 8.95494 10.1406 9.01904C10.0765 9.08314 9.98958 9.11915 9.89893 9.11915C9.80828 9.11915 9.72134 9.08314 9.65724 9.01904C9.59315 8.95494 9.55714 8.86801 9.55714 8.77736L9.58643 6.26173C9.58643 5.81251 8.8501 5.76759 8.84229 6.26173C8.84229 6.96095 8.81299 8.08009 8.81299 8.77736C8.81995 8.81984 8.81759 8.86332 8.80607 8.9048C8.79455 8.94628 8.77415 8.98475 8.74628 9.01756C8.71841 9.05037 8.68374 9.07672 8.64467 9.0948C8.60561 9.11287 8.56307 9.12223 8.52003 9.12223C8.47698 9.12223 8.43445 9.11287 8.39538 9.0948C8.35631 9.07672 8.32164 9.05037 8.29377 9.01756C8.2659 8.98475 8.2455 8.94628 8.23398 8.9048C8.22246 8.86332 8.2201 8.81984 8.22706 8.77736L8.25635 6.27931C8.25021 6.2081 8.22547 6.13975 8.18462 6.08111C8.14378 6.02246 8.08824 5.97556 8.02358 5.94511C7.95892 5.91466 7.8874 5.90172 7.81617 5.90758C7.74494 5.91344 7.67649 5.93791 7.61768 5.97853C7.34815 6.1504 7.40284 6.49611 7.39112 6.78907L7.29737 9.65822C7.31104 10.4922 7.52979 11.1699 8.18409 11.459C8.3096 11.5089 8.44081 11.543 8.57471 11.5606L8.35401 17.4317C8.35141 17.5289 8.36817 17.6257 8.4033 17.7164C8.43843 17.8072 8.49124 17.89 8.55866 17.9601C8.62607 18.0303 8.70676 18.0863 8.79602 18.125C8.88528 18.1637 8.98134 18.1843 9.07862 18.1856H9.16846C9.27772 18.1838 9.38555 18.1604 9.48573 18.1168C9.58591 18.0731 9.67647 18.0101 9.75218 17.9313C9.82788 17.8525 9.88725 17.7595 9.92685 17.6577C9.96645 17.5558 9.98551 17.4471 9.98292 17.3379L9.7876 11.5586C9.95527 11.5408 10.1178 11.4904 10.2661 11.4102H10.2642ZM13.7798 17.2207L13.77 12.0625C11.5649 10.7891 12.2681 5.88282 14.4732 5.91017C17.1528 5.94142 17.4712 11.4395 15.1665 12.043L15.3364 17.2461C15.3696 18.4434 13.7739 18.5547 13.7739 17.2207H13.7798ZM19.3931 4.60743C17.6816 2.89905 15.4307 1.8369 13.0239 1.60195C10.6172 1.36699 8.20336 1.97377 6.19378 3.31889C4.1842 4.66402 2.70316 6.66429 2.00296 8.97892C1.30277 11.2935 1.42674 13.7793 2.35377 16.0128C3.28079 18.2463 4.95352 20.0893 7.08697 21.2278C9.22042 22.3663 11.6826 22.7299 14.0541 22.2566C16.4255 21.7833 18.5595 20.5025 20.0925 18.6323C21.6256 16.7621 22.4627 14.4182 22.4614 12C22.4624 10.6264 22.1918 9.26611 21.6652 7.99742C21.1387 6.72873 20.3665 5.57665 19.3931 4.60743Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_meal">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const EntertainmentAmenityIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_entertainment)">
                <path d="M1.89453 19.6623C1.4318 19.3434 1.033 18.9233 0.722656 18.4278C0.254671 17.6969 0.00229725 16.8241 0 15.9288L0 4.38522C0.00184384 3.81027 0.106299 3.24136 0.307385 2.71107C0.508472 2.18078 0.802241 1.69953 1.17188 1.29485L1.20117 1.26248C1.93832 0.457164 2.93214 0.00381666 3.96875 0L17.0449 0C18.0647 0.00281945 19.0442 0.440372 19.7793 1.22147C20.1091 1.57264 20.3832 1.98265 20.5898 2.43431H20.3086H19.3496C19.2597 2.30479 19.1611 2.18288 19.0547 2.0696C18.6064 1.59514 18.0319 1.29251 17.416 1.20637L16.8105 2.43863H15.7227L16.3418 1.18047H12.2891L11.6719 2.43863H10.5859L11.2051 1.18047H7.04102L6.38477 2.50337C5.97727 2.57811 5.57885 2.7041 5.19727 2.87888L5.07812 2.93499L5.94727 1.16968H3.96875C3.20936 1.16911 2.48006 1.49764 1.9375 2.0847L1.91406 2.11492C1.64286 2.41218 1.42763 2.76585 1.2808 3.15552C1.13397 3.54518 1.05845 3.96313 1.05859 4.38522H3.27344C2.90491 4.83516 2.60063 5.34457 2.37109 5.89587H1.05859V15.9288C1.05697 16.584 1.2384 17.2239 1.57812 17.761C1.67228 17.9146 1.77814 18.0589 1.89453 18.1926V19.6731V19.6623ZM7.47852 4.2061H20.0742C21.1145 4.20951 22.1112 4.66762 22.8468 5.48036C23.5823 6.29311 23.9969 7.39445 24 8.54384V19.6644C23.9964 20.8134 23.5816 21.9142 22.8461 22.7265C22.1106 23.5388 21.1141 23.9966 20.0742 24H7.47852C6.43864 23.9972 5.4421 23.5395 4.7068 22.727C3.9715 21.9145 3.55727 20.8134 3.55469 19.6644V8.54384C3.55778 7.39482 3.97211 6.29381 4.70724 5.48112C5.44238 4.66844 6.43862 4.21008 7.47852 4.2061ZM12.4062 12.5471L16.1172 15.4065C16.2333 15.4851 16.3297 15.5946 16.3975 15.725C16.4654 15.8554 16.5024 16.0026 16.5053 16.153C16.5083 16.3034 16.4769 16.4522 16.4142 16.5857C16.3515 16.7193 16.2595 16.8332 16.1465 16.9172L12.457 19.7248C12.3372 19.83 12.1931 19.8959 12.0411 19.9149C11.889 19.9339 11.7352 19.9053 11.5972 19.8324C11.4591 19.7596 11.3424 19.6453 11.2603 19.5026C11.1782 19.36 11.134 19.1947 11.1328 19.0256V13.2808C11.1326 13.1166 11.1731 12.9555 11.2502 12.8151C11.3272 12.6747 11.4376 12.5603 11.5695 12.4846C11.7013 12.4089 11.8495 12.3746 11.9977 12.3857C12.146 12.3967 12.2887 12.4525 12.4102 12.5471H12.4062ZM16.9277 8.64527L18.2559 5.55921H14.1543L12.8262 8.64527H16.9277ZM19.3613 5.55921L18.0332 8.64527H22.377C22.5242 8.64519 22.6665 8.70424 22.7773 8.81144V8.54384C22.7748 7.75277 22.4891 6.99494 21.9827 6.43577C21.4762 5.8766 20.7902 5.56149 20.0742 5.55921H19.3613ZM11.7188 8.64527L13.0449 5.55921H8.83008L7.50195 8.64527H11.7188ZM6.38867 8.64527L7.7168 5.55921H7.47852C6.7626 5.56092 6.07644 5.87592 5.57021 6.43528C5.06398 6.99463 4.77889 7.75279 4.77734 8.54384V8.64527H6.38867ZM22.7695 9.83005C22.6587 9.93725 22.5164 9.9963 22.3691 9.99622H4.77734V19.6644C4.77631 20.4573 5.06025 21.2183 5.56676 21.7799C6.07327 22.3416 6.7609 22.6581 7.47852 22.6598H20.0742C20.7898 22.6564 21.4753 22.341 21.9815 21.782C22.4877 21.2231 22.7737 20.4659 22.7773 19.6752V9.83005H22.7695Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_entertainment">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ChevronDownBoxIcon = ({
    color = "#4558B6",
    width = 20,
    height = 20,
    className = "",
    open = false,
}: ExpandableIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}
        >
            <path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3332 8.33337L9.99984 11.6667L6.6665 8.33337" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const ChevronDownIcon = ({
    color = "#4558B6",
    width = 24,
    height = 24,
    className = "",
    open = false,
}: ExpandableIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}
        >
            <path d="M19.4976 7.98993L11.9999 15.2977L4.50226 7.98993C4.36834 7.85951 4.1888 7.78652 4.00187 7.78652C3.81493 7.78652 3.63539 7.85951 3.50147 7.98993C3.43627 8.05328 3.38444 8.12907 3.34904 8.2128C3.31365 8.29654 3.29541 8.38652 3.29541 8.47743C3.29541 8.56834 3.31365 8.65833 3.34904 8.74207C3.38444 8.8258 3.43627 8.90159 3.50147 8.96493L11.4773 16.7392C11.6172 16.8752 11.8047 16.9513 11.9999 16.9513C12.1951 16.9513 12.3826 16.8752 12.5226 16.7392L20.4983 8.96493C20.5639 8.90155 20.6161 8.82562 20.6517 8.74167C20.6873 8.65772 20.7056 8.56745 20.7056 8.47626C20.7056 8.38507 20.6873 8.29481 20.6517 8.21086C20.6161 8.1269 20.5639 8.05097 20.4983 7.98759C20.3644 7.85717 20.1849 7.78418 19.998 7.78418C19.811 7.78418 19.6315 7.85717 19.4976 7.98759V7.98993Z" fill={color} />
        </svg>
    );
};


export const LaborIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16 9C16 14.33 8 14.33 8 9H10C10 11.67 14 11.67 14 9M20 18V21H4V18C4 15.33 9.33 14 12 14C14.67 14 20 15.33 20 18ZM18.1 18C18.1 17.36 14.97 15.9 12 15.9C9.03 15.9 5.9 17.36 5.9 18V19.1H18.1M12.5 2C12.78 2 13 2.22 13 2.5V5.5H14V3C14.7077 3.32752 15.3006 3.86019 15.7019 4.52889C16.1031 5.19758 16.294 5.97142 16.25 6.75C16.25 6.75 16.95 6.89 17 8H7C7 6.89 7.75 6.75 7.75 6.75C7.70595 5.97142 7.89693 5.19758 8.29814 4.52889C8.69936 3.86019 9.29229 3.32752 10 3V5.5H11V2.5C11 2.22 11.22 2 11.5 2" fill={color} />
        </svg>
    );
};
export const StudyIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.5 8L12 3L21.5 8L12 13L2.5 8Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10V17.232C5.5 17.964 6.0275 18.5935 6.7355 18.7795C7.838 19.0695 9.528 19.6095 11.178 20.5145C11.6885 20.7945 12.311 20.7945 12.822 20.5145C14.472 19.6095 16.162 19.0695 17.2645 18.7795C17.9725 18.5935 18.5 17.965 18.5 17.232V10" stroke={color} strokeWidth="2" strokeLinejoin="round" />
            <path d="M21.5 8V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const GroupIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 5C11.0717 5 10.1815 5.36875 9.52513 6.02513C8.86875 6.6815 8.5 7.57174 8.5 8.5C8.5 9.42826 8.86875 10.3185 9.52513 10.9749C10.1815 11.6313 11.0717 12 12 12C12.9283 12 13.8185 11.6313 14.4749 10.9749C15.1313 10.3185 15.5 9.42826 15.5 8.5C15.5 7.57174 15.1313 6.6815 14.4749 6.02513C13.8185 5.36875 12.9283 5 12 5ZM12 7C12.3978 7 12.7794 7.15804 13.0607 7.43934C13.342 7.72064 13.5 8.10218 13.5 8.5C13.5 8.89782 13.342 9.27936 13.0607 9.56066C12.7794 9.84196 12.3978 10 12 10C11.6022 10 11.2206 9.84196 10.9393 9.56066C10.658 9.27936 10.5 8.89782 10.5 8.5C10.5 8.10218 10.658 7.72064 10.9393 7.43934C11.2206 7.15804 11.6022 7 12 7ZM5.5 8C4.83696 8 4.20107 8.26339 3.73223 8.73223C3.26339 9.20107 3 9.83696 3 10.5C3 11.44 3.53 12.25 4.29 12.68C4.65 12.88 5.06 13 5.5 13C5.94 13 6.35 12.88 6.71 12.68C7.08 12.47 7.39 12.17 7.62 11.81C6.89148 10.8606 6.49767 9.69672 6.5 8.5V8.22C6.2 8.08 5.86 8 5.5 8ZM18.5 8C18.14 8 17.8 8.08 17.5 8.22V8.5C17.5 9.7 17.11 10.86 16.38 11.81C16.5 12 16.63 12.15 16.78 12.3C17.241 12.7473 17.8576 12.9982 18.5 13C18.94 13 19.35 12.88 19.71 12.68C20.47 12.25 21 11.44 21 10.5C21 9.83696 20.7366 9.20107 20.2678 8.73223C19.7989 8.26339 19.163 8 18.5 8ZM12 14C9.66 14 5 15.17 5 17.5V19H19V17.5C19 15.17 14.34 14 12 14ZM4.71 14.55C2.78 14.78 0 15.76 0 17.5V19H3V17.07C3 16.06 3.69 15.22 4.71 14.55ZM19.29 14.55C20.31 15.22 21 16.06 21 17.07V19H24V17.5C24 15.76 21.22 14.78 19.29 14.55ZM12 16C13.53 16 15.24 16.5 16.23 17H7.77C8.76 16.5 10.47 16 12 16Z" fill={color} />
        </svg>
    );
};
export const AirplaneCharterIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.90657 19.4722C3.9082 18.8163 4.28092 18.175 4.88803 17.4572L1.37724 15.2371C1.15588 15.1411 1.16076 15.006 1.28934 14.8465L2.03317 14.2117C2.16826 14.1287 2.31149 14.0929 2.46612 14.1352L6.79886 14.8677L10.4089 10.9581L1.98109 5.25654C1.76787 5.13121 1.74996 4.98961 1.96969 4.82522L3.18553 3.85515L14.172 6.94276L17.4175 3.47266C18.5064 2.53026 19.5643 2.10871 20.3765 2.30891C20.8241 2.41959 20.982 2.55305 21.1203 2.97298C21.3889 3.79656 20.9722 4.90334 19.9875 6.04268L16.5174 9.28817L19.605 20.2747L18.635 21.4905C18.4706 21.7086 18.329 21.6907 18.2036 21.4791L12.5004 13.0529L8.59088 16.6613L9.32331 20.9941C9.36563 21.1471 9.33145 21.2903 9.24681 21.427L8.61204 22.1708C8.45416 22.2994 8.31744 22.3043 8.22141 22.0829L6.00132 18.5722C5.28029 19.1809 4.639 19.5536 3.97981 19.5536C3.91959 19.552 3.90657 19.5308 3.90657 19.4722Z" fill={color} />
        </svg>
    );
};
export const ChevronDownCircleIcon = ({
    color = "#54858C",
    width = 22,
    height = 22,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M11.0002 20.1667C16.0628 20.1667 20.1668 16.0627 20.1668 11C20.1668 5.93743 16.0628 1.83337 11.0002 1.83337C5.93755 1.83337 1.8335 5.93743 1.8335 11C1.8335 16.0627 5.93755 20.1667 11.0002 20.1667Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.6668 9.16663L11.0002 12.8333L7.3335 9.16663" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const PromotionStarIcon = ({
    width = 20,
    height = 20,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10.0002 0.765442C12.5501 0.765442 14.8589 1.79927 16.53 3.47025C18.2009 5.1413 19.2348 7.45009 19.2348 10C19.2348 12.5499 18.2009 14.8587 16.5299 16.5297C14.8589 18.2008 12.5501 19.2346 10.0002 19.2346C7.45027 19.2346 5.14148 18.2008 3.47043 16.5298C1.79945 14.8587 0.765625 12.5499 0.765625 10C0.765625 7.45009 1.79945 5.1413 3.47043 3.47025C5.14148 1.79927 7.45027 0.765442 10.0002 0.765442Z" fill="white" />
            <path d="M10.0003 1.54663C14.6689 1.54663 18.4537 5.33124 18.4537 10C18.4537 14.6687 14.6689 18.4535 10.0003 18.4535C5.33148 18.4535 1.54688 14.6687 1.54688 10C1.54688 5.33124 5.33148 1.54663 10.0003 1.54663Z" fill="#DA251D" />
            <path d="M9.85461 11.506L11.8565 12.9598L11.0922 10.6057L13.095 9.15123H10.6198L9.85461 6.79431L9.08941 9.15123H6.61426L8.61703 10.6057L7.8527 12.9598L9.85461 11.506Z" fill="#FFFF00" />
        </svg>
    );
};
export const TicketIcon = ({
    color = "#DA251D",
    width = 20,
    height = 20,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M1.6665 7.50002C2.32955 7.50002 2.96543 7.76341 3.43427 8.23225C3.90311 8.70109 4.1665 9.33698 4.1665 10C4.1665 10.6631 3.90311 11.2989 3.43427 11.7678C2.96543 12.2366 2.32955 12.5 1.6665 12.5V14.1667C1.6665 14.6087 1.8421 15.0326 2.15466 15.3452C2.46722 15.6578 2.89114 15.8334 3.33317 15.8334H16.6665C17.1085 15.8334 17.5325 15.6578 17.845 15.3452C18.1576 15.0326 18.3332 14.6087 18.3332 14.1667V12.5C17.6701 12.5 17.0342 12.2366 16.5654 11.7678C16.0966 11.2989 15.8332 10.6631 15.8332 10C15.8332 9.33698 16.0966 8.70109 16.5654 8.23225C17.0342 7.76341 17.6701 7.50002 18.3332 7.50002V5.83335C18.3332 5.39133 18.1576 4.9674 17.845 4.65484C17.5325 4.34228 17.1085 4.16669 16.6665 4.16669H3.33317C2.89114 4.16669 2.46722 4.34228 2.15466 4.65484C1.8421 4.9674 1.6665 5.39133 1.6665 5.83335V7.50002Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 7.5H7.50833" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 7.5L7.5 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 12.5H12.5083" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const WifiOffIcon = ({
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className}>
            <rect width="24" height="24" fill="url(#pattern0_483_494)" />
            <defs>
                <pattern id="pattern0_483_494" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_483_494" transform="scale(0.03125)" />
                </pattern>
                <image id="image0_483_494" width="32" height="32" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKkklEQVR4AbxXfVSUVRq/9/2aD74ENij7OluJ7VLuVudkm5WgGCAghKGZ0ceRBAREBAnDmnesLFyMmQEHRkYEbdkCz6k9p5RqN9G2xZXStNTUzNo9q9UuIMwMM/N+3LvPfRWO7dZa/+w987z33ufe9/n9nuc+93mBQ/+HRinFIJNYbAyCGfSkkk0uI1iWZQ5EYFJQUMBDz+YcG6fIsqFnOoSQYRxBmwDCGJOxUGj6WDh8M6hhiin06LIEmEEQATZT6AmIxqS3t1eHns0JG/fLsqFnOra3p6eHEWTvIVjnhnxBj8lkOmaRpON+nbRMEPtBAmDI8A56BqJVVFSYiisqflW6suqxsspqe8Xq2i3lldXdTIrLV3lKKyrtK6trH1uxatWvly9fLi5atIgR1MBVmpGbt81klpbv2NGNXvn9a0TiuRKE0OMI2vcRwCykAGx4XFpZM6Ns5WqXhvjDFHGDZoulUzKbnhUl8UnBJC6JjIleQhBZbrJYnkUc7lQ1MihFxRxda1vflLNkSTJ4uo3j+ML29nZt3/v78MDAgB5WNBTUCDsK9B0CAMrOk4OQ6cUV1b8oqXlqJ+XoASzyFSaLOSkqKkqklCBN13RFVUYURT13/vzIWQjteV4QCKhRhNXKwj5tdHR0VX1t3RG/qj/mafOQUydPCbAPZ2dlw0ZCMeJ2I2iTBBg4CElOTsaF5avrObPlI4s1YqHJYpU4gUeqTk4FxkOesKot1ag+M4TpHeNK8HYN09sRiEq0OyOmRD3OC7xbUZSjxSXFaMattyKv10tPnz7Nmc1mNC9tHs1JT8MRFsluEXE/pZQzCBRcSBhSUiMnnA2o70THRj9PMBFVVUF+39j+cDhUoPqst7U5Gktamxq7Wzdt+sjb2Him0+3+2ut0ftMCY+eLLx7caLN1bdrwQpnT4fh0xvRpyO1200OHDnGqqqO77rpbS0/PxGeHRxpFjO179uwRID+IkWi9kDDLVlTdhGn4fYRIqqKEEMLayPi4r8jrcszyOBw7t2yRgxAh6aKwMKOJBp6wa4dZ7oQp/V04rCx2bvGQz06e5HlRRJlZOWRu2nzunXf3Illen1qxbt2NqampGnuPESDl5TU/l0ziLkK1JJ1oiGj6ATWszOxwOrfCRp7dAAYG4MpF0SDTrUVFRYmVTz+d2NTbawZv0Cs9PduCQeVhr7ddP3r0KMcLmN5/fxp6IHOOeuTox3/ve7cPWSNj7xCwuOvhsrLr4R1qHIE5Ika2REdNEy1mZJbEt2MxndPhcHxRIMvSFVdcQZubm8OZFRXSsqqqjKKySueTKys/wNaIg2L0lIOIoMNfHfz40GdffXVMJbSwa3sXOXnqFK+qBOXmLUB5uRmM+wupM2+7GfPhP2oqh6hmSkqMnWJnCwaBUFh/fSwQ8gdU4v3WJC1obGwMQDilXllWkpOTcWldXUkixocFQdgdERO50hIRcbfJYpnOS8LUsbGxxKVLH55+03XXTW9o2Eg+OfIJx2FMoQ6gebPnYA6ZngJPnwOw0DVT4rLCCG/7xzeazx+44Q+gu3ANWxzyG6N6fML1VrG4x2ZTU6CswlVUlq2sueX0t0P7eI5rnRITk2SBTFYvtL8FxgO7faO+V0tLS5SkpOnU7e3Qz509ywlwY2bNukefm3Ifer2v7185RY/uQtAK5AJJBtvXRGpFKCYpsb1p2eugvkAABri3aXUQemS32/l+WdaKatfmSxK/P9Jq/o0WVlA4GPKPnR/dLHA45YbEhF9udTrne9wto7fdkiw5nQ46eOAAD+v0vtmzSUHBQmFg4ADd1//+zxJirx5cXFud3yv3KjLYZhi9TYsAC0oBTIwjgJ6CYEgc9sHRHi2vfISnZCdE0ioJItIV9W2ihO/oaHaVuxoaBtasWRNUKN1BdFq8yeEip099zkVHRtHFDy2m+bl5HNJRQ/eO7tcsooRiCG+6xjxlZ+lTNY9AAmsMg2EhKB4I2gQBuB4yhrDr5avWzIrihS6qhBEhBKuh0HPtzc6MNqfz856eHh7eQZTS7ZSiR9rcbRorMnBEaObMmTQ/KxOOH603i7huS6tzSdA/LkdJEhahDkRQqbO2tv4uhgFEMLPDZJIAmzAJhf06RRqC+k0p0cvcjpef9Xg8Yn9/Pw+JRSilXWEdLXU6XNqRI4cFVn4zM+fThxY/yAUJqjbx2AZEJRC+xbHRPuIfLvON+yjkOB4fDxgOMJwJmSQArAgosbe1db+uafeIIj/L09TkBr0Ad17fu3cvRJx2hTRa2NbWpp05c0awWCwoLy9PL8jNJm/t6tOKlxfH1dXVxQJR5dixY+w4OU+L062o6r0QmrtbWhwfMAywybBgiCaT0JjAw8gFz+bNA80bN+6HjYLNZtPhGtG162ydIUUvhJqgnThxQlAUlS5YsICmp6fxu/+0h3/zzbf4K6+6st4XVD8pX1UzB941zht6rt3t+stmp/OvYJ/9GAbrDeGM53cfFGoAz2o1gBMGzsIu8qgQarsGnrEyTB98cCGdMzcVf/vPkZbu7lc3SJL4ta7pkB/katj/Vkl5eTo7b2aa2WPCxv8p30cAwfmRlJQUBg4G6XYdocLGJhd4fpKFnaalpZGMtFSO6Mh+bUJcxSsdW+oFot0cHA+06roO+YPNFqu164kVK66FCLAvLJ0gc1kCwN4gBfUABRW9k515w8ZN2pdffikQyILZs2eT7JwsfnjMvx4+qTKQlViSxsfH+1tdjhVwO14ymUxIFMTESKt1BgO8ePXY8L/EAJvQAjiGMYWwo7XP2Do5gSvc2tGuHTv+qaCoYZqTk0UWL8zjz48M2+NjomxsP0u4c+fOsY8PexdPTYir1zS9we/3vXDvnXf2gT32N+Fk0rH5pTJJgBljCwBOwfMukUOFLS3N2uCBQSEuNg6+anNJesY8flwJ2RPj42WXy2Uqq6p67smy8g3goTARYgg5dTS+VOd2udYBOTg9ZhV9J/EMzcWHQYCBM2AIOw7rdLtZ5Apdm93ah4MfCryAobzeS/Lz8qE4ausjTBYWdv7T48fbrWZLfXR03Nr4q2/0gj0WAQMISAgpssySFV2uGQQmNkHYvbpOCpuaW7WPDh4UYuNi2VUjebm5PFi3R5gibGzve39+bwMnoMKx8bFwIBQMm82WwrLqZ55naymyzAMBjX1P0I9oHHjPM++DKk2VOPREV1eXfubMF0J0dDSdOyeVZM/P5gWEZdhkhB1B01RFi46JRJQwh9nxEsRRnYeln/xjEQDnEBjT45kpSCh1aGhIz5o/X89fkMvrSJGBoJ0Rhb+MFIbgbe1YFwyEdlx1VYLJajWZoHzvaH55w1q21i/LE+fOppcVRsB4YSgUeM8fVE5UVVWZbTYbypiXJkDCySZsMsDBEqsLFHpGmIYD4WVDQ8MvBpTg8yTgWwb6yTUY/+gflGgMzlF8bUzMcMgXzLJYLVun3XB937DP9wAkHANnJCfAmWEDaOrUqfrml11Pe37b9Awbw4JBDPqf9GPGEYTYIJGYOOW0mcdFwCr7Z9HRb4CSrbO6wEAvNcz+azJKNiuxkHRsncmle37UmAEYGy+SMJISgHkmoLvUc2PfJQ/K7j4T0P0gOKz9z9+/AQAA//9k/a9UAAAABklEQVQDAIpdfoubNI4CAAAAAElFTkSuQmCC" />
            </defs>
        </svg>
    );
};

export const PlugAmenityIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M17 19C16.7348 19 16.4804 18.8946 16.2929 18.7071C16.1054 18.5196 16 18.2652 16 18V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H20C20.5304 14 21.0391 14.2107 21.4142 14.5858C21.7893 14.9609 22 15.4696 22 16V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H17Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 21V19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 14V6.5C19 5.57174 18.6313 4.6815 17.9749 4.02513C17.3185 3.36875 16.4283 3 15.5 3C14.5717 3 13.6815 3.36875 13.0251 4.02513C12.3688 4.6815 12 5.57174 12 6.5V17.5C12 18.4283 11.6313 19.3185 10.9749 19.9749C10.3185 20.6313 9.42826 21 8.5 21C7.57174 21 6.6815 20.6313 6.02513 19.9749C5.36875 19.3185 5 18.4283 5 17.5V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21V19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 5V3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 10C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H7C7.26522 5 7.51957 5.10536 7.70711 5.29289C7.89464 5.48043 8 5.73478 8 6V8C8 8.53043 7.78929 9.03914 7.41421 9.41421C7.03914 9.78929 6.53043 10 6 10H4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 5V3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const AirplaneAmenityIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21.0001 3.25C21.2308 3.25011 21.4489 3.35637 21.5909 3.53809C21.7329 3.72002 21.7835 3.95774 21.7276 4.18164L18.1065 18.667C17.8005 19.8911 16.7003 20.7498 15.4386 20.75H3.00015C2.71091 20.75 2.44779 20.5834 2.32339 20.3223C2.19907 20.0611 2.23577 19.7519 2.41812 19.5273L14.5177 4.63574C15.2297 3.75948 16.2987 3.25005 17.4278 3.25H21.0001ZM8.2316 14.75L4.57535 19.25H15.4386C16.012 19.2498 16.5124 18.8591 16.6515 18.3027L17.5401 14.75H8.2316ZM17.4278 4.75C16.7505 4.75005 16.109 5.05539 15.6817 5.58105L9.45035 13.25H17.9151L20.0401 4.75H17.4278Z" fill={color} />
        </svg>
    );
};

export const SeatPitchAmenityIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M18.001 20.25C18.415 20.2502 18.751 20.5859 18.751 21C18.751 21.4141 18.415 21.7498 18.001 21.75H8.00101C7.58683 21.75 7.25101 21.4142 7.25101 21C7.25101 20.5858 7.58683 20.25 8.00101 20.25H18.001ZM5.76858 2.25C7.42458 2.25003 8.88452 3.33669 9.36038 4.92285L11.5049 12.0723C11.5367 12.1777 11.6341 12.2498 11.7441 12.25H17.4062C19.2375 12.25 21.2312 13.1994 22.2148 14.8389C23.2475 16.5601 22.0081 18.7496 20.001 18.75H8.21585C6.28931 18.75 4.6761 17.29 4.48441 15.373L3.36429 4.17383C3.26146 3.14381 4.07035 2.2501 5.1055 2.25H5.76858ZM5.1055 3.75C4.95784 3.7501 4.84207 3.87751 4.85648 4.02441L5.97659 15.2236C6.09161 16.3738 7.05994 17.25 8.21585 17.25H20.001C20.8422 17.2496 21.3616 16.3318 20.9287 15.6104C20.2563 14.4898 18.7937 13.75 17.4062 13.75H11.7441C10.9716 13.7498 10.2904 13.243 10.0684 12.5029L7.92386 5.35352C7.63834 4.40183 6.76217 3.75003 5.76858 3.75H5.1055ZM19.4697 3.46973C19.7626 3.17685 20.2374 3.17687 20.5303 3.46973L22.5303 5.46973C22.8232 5.76262 22.8232 6.23738 22.5303 6.53027L20.5303 8.53027C20.2374 8.82313 19.7626 8.82315 19.4697 8.53027C19.1769 8.23739 19.1769 7.76261 19.4697 7.46973L20.1895 6.75H13.8105L14.5303 7.46973C14.8232 7.76262 14.8232 8.23738 14.5303 8.53027C14.2374 8.82313 13.7626 8.82315 13.4697 8.53027L11.4697 6.53027C11.1769 6.23739 11.1769 5.76261 11.4697 5.46973L13.4697 3.46973C13.7626 3.17685 14.2374 3.17687 14.5303 3.46973C14.8232 3.76262 14.8232 4.23738 14.5303 4.53027L13.8105 5.25H20.1895L19.4697 4.53027C19.1769 4.23739 19.1769 3.76261 19.4697 3.46973Z" fill={color} />
        </svg>
    );
};

export const SeatLayoutAmenityIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M9.00101 20.25C9.41505 20.2502 9.75101 20.5859 9.75101 21C9.75101 21.4141 9.41505 21.7498 9.00101 21.75H8.00101C7.58683 21.75 7.25101 21.4142 7.25101 21C7.25101 20.5858 7.58683 20.25 8.00101 20.25H9.00101ZM18.001 20.25C18.415 20.2502 18.751 20.5859 18.751 21C18.751 21.4141 18.415 21.7498 18.001 21.75H12.001C11.5868 21.75 11.251 21.4142 11.251 21C11.251 20.5858 11.5868 20.25 12.001 20.25H18.001ZM4.76858 2.25C5.18277 2.25004 5.51858 2.58581 5.51858 3C5.51858 3.41419 5.18277 3.74996 4.76858 3.75H4.1055C3.95784 3.7501 3.84207 3.87751 3.85648 4.02441L4.97659 15.2236C5.03752 15.8329 5.2903 16.3626 5.61233 16.7305C5.94629 17.112 6.28648 17.25 6.50101 17.25C6.91505 17.2502 7.25101 17.5859 7.25101 18C7.25101 18.4141 6.91505 18.7498 6.50101 18.75C5.7156 18.75 4.99616 18.3045 4.48343 17.7188C3.95874 17.1193 3.57684 16.2974 3.48441 15.373L2.36429 4.17383C2.26146 3.14381 3.07035 2.2501 4.1055 2.25H4.76858ZM8.76858 2.25C10.4246 2.25003 11.8845 3.33669 12.3604 4.92285L14.5049 12.0723C14.5367 12.1777 14.6341 12.2498 14.7441 12.25H18.4062C20.2375 12.25 22.2312 13.1994 23.2148 14.8389C24.2475 16.5601 23.0081 18.7496 21.001 18.75H11.2158C9.28931 18.75 7.6761 17.29 7.48441 15.373L6.36429 4.17383C6.26146 3.14381 7.07034 2.2501 8.1055 2.25H8.76858ZM8.1055 3.75C7.95784 3.7501 7.84207 3.87751 7.85648 4.02441L8.97659 15.2236C9.09161 16.3738 10.0599 17.25 11.2158 17.25H21.001C21.8422 17.2496 22.3616 16.3318 21.9287 15.6104C21.2563 14.4898 19.7938 13.75 18.4062 13.75H14.7441C13.9716 13.7498 13.2904 13.243 13.0684 12.5029L10.9238 5.35352C10.6383 4.40183 9.76217 3.75003 8.76858 3.75H8.1055Z" fill={color} />
        </svg>
    );
};

export const AirplaneCancelIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#airplane-cancel-clip)">
                <path d="M12.2214 2.24272C12.6394 1.78347 13.3512 1.75026 13.8108 2.16801C14.27 2.58603 14.3033 3.29779 13.8855 3.75736L13.5866 4.08549H18.0779L18.1336 4.08696C21.0634 4.23292 23.3258 6.70603 23.221 9.63139C23.2654 10.866 22.8872 12.0195 22.216 12.9522V13.7315C21.542 13.0658 20.7118 12.558 19.7845 12.2696C19.8466 12.2207 19.9078 12.1706 19.966 12.1172V11.086C17.0288 11.3595 13.4562 11.2018 10.9499 10.9366C9.41173 10.7738 7.68719 10.7753 5.98703 10.897V11.2764C5.96057 12.696 4.93262 13.8961 3.53634 14.1431L3.53781 14.1446L3.52316 14.146L3.51584 14.149L3.51437 14.1475L3.04122 14.2383L2.99289 16.6085C4.41128 16.6142 5.6576 17.6184 5.93723 19.043C7.75229 18.9267 9.81737 18.8499 11.1858 18.9947C11.473 19.025 11.7777 19.0443 12.0954 19.062C12.2446 19.8968 12.5651 20.6718 13.0212 21.3486C12.2842 21.335 11.5839 21.3 10.9499 21.233C9.64011 21.0944 7.415 21.1871 5.44064 21.3282C5.35773 21.3341 5.27462 21.3411 5.19308 21.3471C5.0885 21.3794 4.97864 21.4028 4.8635 21.4029C4.80396 21.4028 4.74474 21.3957 4.68771 21.3867C4.0173 21.44 3.41525 21.4925 2.94455 21.5376C2.6244 21.5684 2.36448 21.5952 2.18576 21.6138C2.09675 21.6231 2.02719 21.6308 1.98068 21.6357L1.91477 21.6431H1.91183C1.59012 21.6786 1.26752 21.5727 1.02853 21.3545C0.790032 21.1362 0.656002 20.8253 0.662323 20.502L0.874726 10.2496C0.886168 9.71877 1.26722 9.26796 1.78878 9.16849C2.6894 8.99709 3.65094 8.86113 4.63644 8.75835C4.69893 8.7456 4.76402 8.7412 4.82981 8.7393C6.96003 8.52852 9.1955 8.4892 11.1858 8.69974C13.9863 8.99617 18.0506 9.13707 20.8874 8.71C20.573 7.40845 19.439 6.41214 18.0368 6.33549H13.5852L13.8855 6.66508C14.3033 7.12476 14.2703 7.83649 13.8108 8.25444C13.351 8.67193 12.6392 8.63784 12.2214 8.17827L10.2116 5.96782C9.8218 5.5389 9.82209 4.88371 10.2116 4.45464L12.2214 2.24272ZM2.93723 19.2788C3.14843 19.259 3.3812 19.2377 3.63009 19.2158C3.48627 18.987 3.2265 18.8481 2.94602 18.8598L2.93723 19.2788ZM11.5461 11.1695C12.893 11.1695 14.0654 11.9037 14.6941 12.9917C13.9874 13.4593 13.3863 14.0732 12.9319 14.7891C12.9223 14.0312 12.3063 13.4195 11.5461 13.4195C10.7803 13.4197 10.1592 14.0409 10.1589 14.8067C10.1591 15.5724 10.7803 16.1936 11.5461 16.1939C11.8557 16.1939 12.14 16.0899 12.3708 15.9185C12.131 16.5668 12.0002 17.2683 12.0002 18C12.0002 18.1374 12.0058 18.2736 12.0149 18.4088C11.8613 18.4286 11.7051 18.4439 11.5461 18.4439C9.53767 18.4436 7.9091 16.8152 7.90891 14.8067C7.90917 12.7983 9.53771 11.1697 11.5461 11.1695ZM3.10275 11.2237L3.0881 11.9385L3.11739 11.9341L3.13937 11.9312C3.47583 11.8741 3.72507 11.5871 3.73703 11.2471V11.1329C3.52379 11.1624 3.31155 11.1905 3.10275 11.2237Z" fill={color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.0002 12C21.3139 12 24.0002 14.6863 24.0002 18C24.0002 21.3138 21.3139 24 18.0002 24C14.6865 24 12.0002 21.3138 12.0002 18C12.0002 14.6863 14.6865 12 18.0002 12ZM15.3479 15.5459L16.967 18.2725L15.3059 21H16.6692L17.8127 19.0362L18.967 21H20.3195L18.6467 18.2725L20.2912 15.5459H18.9309L17.8127 17.5586L16.7121 15.5459H15.3479Z" fill={color} />
            </g>
            <defs>
                <clipPath id="airplane-cancel-clip">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ConditionCalendarCancelIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.99998 1.75C7.19889 1.75 7.38965 1.82902 7.53031 1.96967C7.67096 2.11032 7.74998 2.30109 7.74998 2.5V3.263C8.41198 3.25 9.14098 3.25 9.94298 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4696 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.2563 3.37233 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.94498C8.10698 22.75 6.65098 22.75 5.51198 22.597C4.33998 22.439 3.39098 22.107 2.64198 21.359C1.89398 20.61 1.56198 19.661 1.40398 18.489C1.25098 17.349 1.25098 15.894 1.25098 14.056V11.944C1.25098 10.106 1.25098 8.65 1.40398 7.511C1.56198 6.339 1.89398 5.39 2.64198 4.641C3.39098 3.893 4.33998 3.561 5.51198 3.403C5.74531 3.37233 5.99164 3.347 6.25098 3.327V2.5C6.25098 2.30126 6.32986 2.11065 6.47029 1.97002C6.61073 1.8294 6.80124 1.75026 6.99998 1.75ZM5.70998 4.89C4.70498 5.025 4.12498 5.279 3.70198 5.702C3.27898 6.125 3.02498 6.705 2.88998 7.71C2.86731 7.88 2.84798 8.05967 2.83198 8.249H21.168C21.152 8.05967 21.1326 7.87967 21.11 7.709C20.975 6.704 20.721 6.124 20.298 5.701C19.875 5.278 19.295 5.024 18.289 4.889C17.262 4.751 15.907 4.749 14 4.749H9.99998C8.09298 4.749 6.73898 4.752 5.70998 4.89ZM2.74998 12C2.74998 11.146 2.74998 10.403 2.76298 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H9.99998C8.09298 21.25 6.73898 21.248 5.70998 21.11C4.70498 20.975 4.12498 20.721 3.70198 20.298C3.27898 19.875 3.02498 19.295 2.88998 18.289C2.75198 17.262 2.74998 15.907 2.74998 14V12Z" fill={color} />
            <path d="M0.530273 22.5303L22.5303 0.530273" stroke={color} strokeWidth="1.5" />
        </svg>
    );
};


export const VietnamAirlinesLogoIcon = ({
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#vna-logo-clip)">
                <path d="M11.9999 0.918457C15.0598 0.918457 17.8304 2.15905 19.8357 4.16422C21.8408 6.16949 23.0815 8.94003 23.0815 11.9999C23.0815 15.0598 21.8408 17.8304 19.8356 19.8356C17.8304 21.8408 15.0598 23.0815 11.9999 23.0815C8.94003 23.0815 6.16949 21.8408 4.16422 19.8357C2.15905 17.8304 0.918457 15.0598 0.918457 11.9999C0.918457 8.94003 2.15905 6.16949 4.16422 4.16422C6.16949 2.15905 8.94003 0.918457 11.9999 0.918457Z" fill="white" />
                <path d="M12 1.85596C17.6024 1.85596 22.1442 6.39749 22.1442 12C22.1442 17.6024 17.6024 22.1442 12 22.1442C6.39749 22.1442 1.85596 17.6024 1.85596 12C1.85596 6.39749 6.39749 1.85596 12 1.85596Z" fill="#DA251D" />
                <path d="M11.8254 13.8073L14.2277 15.5519L13.3105 12.727L15.7139 10.9816H12.7436L11.8254 8.15332L10.9072 10.9816H7.93701L10.3403 12.727L9.42314 15.5519L11.8254 13.8073Z" fill="#FFFF00" />
            </g>
            <defs>
                <clipPath id="vna-logo-clip">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const VNLogoIcon = ({
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#vn-logo-clip)">
                <path d="M11.9999 0.918457C15.0598 0.918457 17.8304 2.15905 19.8357 4.16422C21.8408 6.16949 23.0815 8.94003 23.0815 11.9999C23.0815 15.0598 21.8408 17.8304 19.8356 19.8356C17.8304 21.8408 15.0598 23.0815 11.9999 23.0815C8.94003 23.0815 6.16949 21.8408 4.16422 19.8357C2.15905 17.8304 0.918457 15.0598 0.918457 11.9999C0.918457 8.94003 2.15905 6.16949 4.16422 4.16422C6.16949 2.15905 8.94003 0.918457 11.9999 0.918457Z" fill="white" />
                <path d="M12 1.85596C17.6024 1.85596 22.1442 6.39749 22.1442 12C22.1442 17.6024 17.6024 22.1442 12 22.1442C6.39749 22.1442 1.85596 17.6024 1.85596 12C1.85596 6.39749 6.39749 1.85596 12 1.85596Z" fill="#DA251D" />
                <path d="M11.8254 13.8073L14.2277 15.5519L13.3105 12.727L15.7139 10.9816H12.7436L11.8254 8.15332L10.9072 10.9816H7.93701L10.3403 12.727L9.42314 15.5519L11.8254 13.8073Z" fill="#FFFF00" />
            </g>
            <defs>
                <clipPath id="vn-logo-clip">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const CloseCircleIcon = ({
    color = "black",
    width = 34,
    height = 34,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M17 29.75C24.0416 29.75 29.75 24.0416 29.75 17C29.75 9.95837 24.0416 4.25 17 4.25C9.95837 4.25 4.25 9.95837 4.25 17C4.25 24.0416 9.95837 29.75 17 29.75Z" stroke={color} strokeWidth="2" />
            <path d="M12.75 21.25L21.25 12.75M21.25 21.25L12.75 12.75" stroke={color} strokeWidth="2" />
        </svg>
    );
};

export const ConditionPersonIcon = ({
    color = "#3A3A3A",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4ZM10 13C8.93913 13 7.92172 13.4214 7.17157 14.1716C6.42143 14.9217 6 15.9391 6 17V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V17C18 15.9391 17.5786 14.9217 16.8284 14.1716C16.0783 13.4214 15.0609 13 14 13H10Z" fill={color} />
        </svg>
    );
};



export const ConditionCalendarWhiteIcon = ({
    color = "white",
    width = 16,
    height = 16,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.00016 2.66699H12.0002C12.7074 2.66699 13.3857 2.94794 13.8858 3.44804C14.3859 3.94814 14.6668 4.62641 14.6668 5.33366V12.0003C14.6668 12.7076 14.3859 13.3858 13.8858 13.8859C13.3857 14.386 12.7074 14.667 12.0002 14.667H4.00016C3.29292 14.667 2.61464 14.386 2.11454 13.8859C1.61445 13.3858 1.3335 12.7076 1.3335 12.0003V5.33366C1.3335 4.62641 1.61445 3.94814 2.11454 3.44804C2.61464 2.94794 3.29292 2.66699 4.00016 2.66699ZM4.00016 4.00033C3.64654 4.00033 3.3074 4.1408 3.05735 4.39085C2.80731 4.6409 2.66683 4.98004 2.66683 5.33366V12.0003C2.66683 12.3539 2.80731 12.6931 3.05735 12.9431C13.3074 13.1932 3.64654 13.3337 4.00016 13.3337H12.0002C12.3538 13.3337 12.6929 13.1932 12.943 12.9431C13.193 12.6931 13.3335 12.3539 13.3335 12.0003V5.33366C13.3335 4.98004 13.193 4.6409 12.943 4.39085C12.6929 4.1408 12.3538 4.00033 12.0002 4.00033H4.00016Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M2 6.66683C2 6.49002 2.07024 6.32045 2.19526 6.19543C2.32029 6.0704 2.48986 6.00016 2.66667 6.00016H13.3333C13.5101 6.00016 13.6797 6.0704 13.8047 6.19543C13.9298 6.32045 14 6.49002 14 6.66683C14 6.84364 13.9298 7.01321 13.8047 7.13823C13.6797 7.26326 13.5101 7.3335 13.3333 7.3335H2.66667C2.48986 7.3335 2.32029 7.26326 2.19526 7.13823C2.07024 7.01321 2 6.84364 2 6.66683ZM5.33333 1.3335C5.51014 1.3335 5.67971 1.40373 5.80474 1.52876C5.92976 1.65378 6 1.82335 6 2.00016V4.66683C6 4.84364 5.92976 5.01321 5.80474 5.13823C5.67971 5.26326 5.51014 5.3335 5.33333 5.3335C5.15652 5.3335 4.98695 5.26326 4.86193 5.13823C4.7369 5.01321 4.66667 4.84364 4.66667 4.66683V2.00016C4.66667 1.82335 4.7369 1.65378 4.86193 1.52876C4.98695 1.40373 5.15652 1.3335 5.33333 1.3335ZM10.6667 1.3335C10.8435 1.3335 11.013 1.40373 11.1381 1.52876C11.2631 1.65378 11.3333 1.82335 11.3333 2.00016V4.66683C11.3333 4.84364 11.2631 5.01321 11.1381 5.13823C11.013 5.26326 10.8435 5.3335 10.6667 5.3335C10.4899 5.3335 10.3203 5.26326 10.1953 5.13823C10.0702 5.01321 10 4.84364 10 4.66683V2.00016C10 1.82335 10.0702 1.65378 10.1953 1.52876C10.3203 1.40373 10.4899 1.3335 10.6667 1.3335Z" fill={color} />
            <path d="M5.33333 8.66667C5.33333 8.84348 5.2631 9.01305 5.13807 9.13807C5.01305 9.2631 4.84348 9.33333 4.66667 9.33333C4.48986 9.33333 4.32029 9.2631 4.19526 9.13807C4.07024 9.01305 4 8.84348 4 8.66667C4 8.48986 4.07024 8.32029 4.19526 8.19526C4.32029 8.07024 4.48986 8 4.66667 8C4.84348 8 5.01305 8.07024 5.13807 8.19526C5.2631 8.32029 5.33333 8.48986 5.33333 8.66667ZM5.33333 11.3333C5.33333 11.5101 5.2631 11.6797 5.13807 11.8047C5.01305 11.9298 4.84348 12 4.66667 12C4.48986 12 4.32029 11.9298 4.19526 11.8047C4.07024 11.6797 4 11.5101 4 11.3333C4 11.1565 4.07024 10.987 4.19526 10.8619C4.32029 10.7369 4.48986 10.6667 4.66667 10.6667C4.84348 10.6667 5.01305 10.7369 5.13807 10.8619C5.2631 10.987 5.33333 11.1565 5.33333 11.3333ZM8.66667 8.66667C8.66667 8.84348 8.59643 9.01305 8.4714 9.13807C8.34638 9.2631 8.17681 9.33333 8 9.33333C7.82319 9.33333 7.65362 9.2631 7.5286 9.13807C7.40357 9.01305 7.33333 8.84348 7.33333 8.66667C7.33333 8.48986 7.40357 8.32029 7.5286 8.19526C7.65362 8.07024 7.82319 8 8 8C8.17681 8 8.34638 8.07024 8.4714 8.19526C8.59643 8.32029 8.66667 8.48986 8.66667 8.66667ZM8.66667 11.3333C8.66667 11.5101 8.59643 11.6797 8.4714 11.8047C8.34638 11.9298 8.17681 12 8 12C7.82319 12 7.65362 11.9298 7.5286 11.8047C7.40357 11.6797 7.33333 11.5101 7.33333 11.3333C7.33333 11.1565 7.40357 10.987 7.5286 10.8619C7.65362 10.7369 7.82319 10.6667 8 10.6667C8.17681 10.6667 8.34638 10.7369 8.4714 10.8619C8.59643 10.987 8.66667 11.1565 8.66667 11.3333ZM12 8.66667C12 8.84348 11.9298 9.01305 11.8047 9.13807C11.6797 9.2631 11.5101 9.33333 11.3333 9.33333C11.1565 9.33333 10.987 9.2631 10.8619 9.13807C10.7369 9.01305 10.6667 8.84348 10.6667 8.66667C10.6667 8.48986 10.7369 8.32029 10.8619 8.19526C10.987 8.07024 11.1565 8 11.3333 8C11.5101 8 11.6797 8.07024 11.8047 8.19526C11.9298 8.32029 12 8.48986 12 8.66667ZM12 11.3333C12 11.5101 11.9298 11.6797 11.8047 11.8047C11.6797 11.9298 11.5101 12 11.3333 12C11.1565 12 10.987 11.9298 10.8619 11.8047C10.7369 11.6797 10.6667 11.5101 10.6667 11.3333C10.6667 11.1565 10.7369 10.987 10.8619 10.8619C10.987 10.7369 11.1565 10.6667 11.3333 10.6667C11.5101 10.6667 11.6797 10.7369 11.8047 10.8619C11.9298 10.987 12 11.1565 12 11.3333Z" fill={color} />
        </svg>
    );
};

export const ConditionAirplaneWhiteIcon = ({
    color = "white",
    width = 16,
    height = 16,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M13.7065 2.60689C14.0998 3.00023 14.0998 3.63356 13.7065 4.02023L11.1131 6.61356L12.5265 12.7402L11.5865 13.6869L8.9998 8.73356L6.3998 11.3336L6.6398 12.9802L5.92647 13.6869L4.75313 11.5669L2.62646 10.3869L3.33313 9.66689L4.9998 9.91356L7.5798 7.33356L2.62646 4.72689L3.57313 3.78689L9.6998 5.20023L12.2931 2.60689C12.6665 2.22023 13.3331 2.22023 13.7065 2.60689Z" fill={color} />
        </svg>
    );
};

export const ChevronDownBoxBlueIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
    open = false,
}: ExpandableIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}
        >
            <path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12.5L15 17.5L10 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const RescheduleFeeIcon = ({
    color = "#3A3A3A",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12H6.01M18 12H18.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const RescheduleClockIcon = ({
    color = "#909090",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const ChevronDownCircleBlueIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
    open = false,
}: ExpandableIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}>
            <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12.5L15 17.5L10 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const FlightWarningRedIcon = ({
    color = "#DA251D",
    width = 24,
    height = 20,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_903_3765)">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8786 9.16279C11.9736 9.2347 13.048 9.25171 14.1275 9.31342C15.3646 9.38242 15.3566 9.5486 16.0991 10.4563L19.9593 14.3926C20.248 14.812 20.1519 15.2848 19.8932 15.6118L22.5318 15.5685C22.9096 15.5685 23.2532 15.6215 23.5175 15.7896C23.8007 15.9689 23.9802 16.2624 23.9985 16.7294C24.0004 16.7459 24.0004 16.7634 23.9985 16.7809L23.8743 17.8513C23.856 18.2041 23.7144 18.5097 23.4824 18.7269C23.2719 18.9242 22.9888 19.0467 22.6583 19.0627V19.4854H22.9063V20H21.486V19.4854H21.7344V19.0598L18.7227 19.0433V19.4854H18.9707V20H17.5504V19.4854H17.7988V19.0379L17.6924 19.0374C17.4252 19.051 17.1918 18.965 17.001 18.809C16.7783 18.6268 16.6171 18.3494 16.5308 18.0267C16.4479 17.7172 16.4333 17.3635 16.4989 17.0141C16.5889 16.5345 16.8304 16.0583 17.2532 15.709C17.2911 15.6749 17.3399 15.654 17.3938 15.6536L18.4494 15.6361L15.1925 12.723C14.4557 11.9155 14.5925 12.0248 13.4713 12.2133C12.1968 12.4286 10.7521 12.794 9.50707 12.4786C7.98317 12.0943 7.8252 11.0972 6.95754 9.92955C6.43135 9.3037 5.98778 8.6081 5.63848 7.86104C5.45942 7.38873 5.25129 6.99126 5.15192 6.61614C5.01035 6.18368 5.10504 5.69972 5.39707 5.35764C5.69473 4.9762 5.95395 4.70166 6.20238 4.53208C6.4302 4.28378 6.77895 4.1691 7.12067 4.26386L11.6061 5.51459C12.1044 5.65258 12.4007 6.1832 12.2675 6.69972C12.1344 7.21624 11.6225 7.52285 11.1243 7.38485L9.78973 7.01264C10.2154 7.66668 10.5777 8.38388 10.8786 9.16279ZM11.7388 19.3669H12.0439V18.639L8.33848 18.6263V19.3669H8.64363V20H6.8966V19.3669H7.20176V18.6225L6.1902 18.6191C5.91129 18.6331 5.6741 18.4898 5.48379 18.2396C5.46926 18.2206 5.4552 18.2012 5.4416 18.1813C5.35786 18.232 5.27113 18.2773 5.18192 18.3168L5.15145 18.3309C5.0366 18.3732 4.91004 18.311 4.86879 18.1919L0.762072 6.29787C0.615822 6.24296 0.503322 6.12294 0.41754 5.95385L0.415197 5.94947C0.0106654 5.10156 -0.0910533 4.4004 0.0786342 3.81731C0.251134 3.22401 0.695509 2.77066 1.38129 2.42518C1.43401 2.39881 1.49467 2.3952 1.54995 2.41515C1.60523 2.4351 1.65062 2.47698 1.67613 2.53159C2.00895 3.27309 2.4266 4.00827 2.77254 4.74831C2.84754 4.91109 2.88176 5.06755 2.8602 5.21575C2.85317 5.26483 2.84004 5.31148 2.82176 5.35618C2.85593 5.35471 2.88997 5.36155 2.92114 5.37615C2.95231 5.39074 2.97976 5.41269 3.00129 5.44024C3.2727 5.78767 3.58723 6.17396 3.9116 6.57289C4.99863 7.90914 6.20473 9.39262 6.85817 10.7493C6.96129 10.9631 7.15676 11.415 7.29363 11.827C7.38973 12.1152 7.45817 12.3921 7.45207 12.5758L7.45067 12.62C7.44785 12.7551 7.44035 13.1025 7.39957 13.5646L13.9072 12.569C13.978 12.5588 14.0493 12.552 14.1205 12.5501H14.1219C14.4336 12.5399 14.721 12.6108 14.9464 12.7741C15.1804 12.9436 15.3421 13.2055 15.3904 13.569C15.3974 13.6225 15.4021 13.6798 15.4039 13.741C15.4114 14.9334 15.313 16.2138 15.2802 17.4169C15.2657 17.7765 15.1232 18.088 14.8879 18.3081C14.66 18.5219 14.3474 18.6472 13.9818 18.6458L13.1807 18.6429V19.3669H13.4858V20H11.7388V19.3669ZM4.53692 0.00438148C3.5741 0.0636623 2.74535 0.787666 2.54848 1.79738C2.3127 3.00973 3.06926 4.19146 4.23879 4.43635C5.40879 4.68125 6.54879 3.89651 6.78504 2.68417C6.79863 2.61517 6.80895 2.54423 6.81598 2.47474C6.93082 1.32557 6.1841 0.273575 5.09145 0.0447119C4.91004 0.00681102 4.74598 -0.00825215 4.53692 0.00438148Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_903_3765">
                    <rect width="24" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const TransitRouteIcon = ({
    color = "#3A3A3A",
    width = 24,
    height = 21,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_552_3514)">
                <path d="M17.2699 13.4252C17.0523 14.1833 16.7413 14.9114 16.3442 15.5928H18.2758C18.3593 15.6436 18.4477 15.6861 18.5395 15.7197C18.7558 15.7999 18.9888 15.824 19.2169 15.7898C19.4451 15.7557 19.6608 15.6644 19.8442 15.5245L20.3754 15.1632C20.1402 15.6837 19.8626 16.184 19.5453 16.659C18.8394 17.7066 17.9374 18.6077 16.8891 19.3128C16.3591 19.6689 15.7967 19.9742 15.2094 20.2248C14.6079 20.4831 13.9816 20.6794 13.3403 20.8106C12.0332 21.0684 10.6883 21.0684 9.38128 20.8106C8.75111 20.6834 8.13537 20.493 7.54339 20.2423L7.51214 20.2306C6.92502 19.9797 6.36267 19.6744 5.83245 19.3187C5.30906 18.9672 4.82108 18.5656 4.37542 18.1197C4.1801 17.9244 3.99651 17.7291 3.81878 17.5143C4.10084 17.2719 4.39693 17.0463 4.70549 16.8387C4.85263 17.0092 5.00497 17.1732 5.16253 17.3308C5.55561 17.7257 5.98673 18.0809 6.44964 18.3911C6.92425 18.7075 7.42703 18.9794 7.95159 19.2035L7.97698 19.2152C8.4991 19.4356 9.04225 19.6024 9.59807 19.7131C9.73674 19.7405 9.87932 19.7659 10.0219 19.7854C8.83781 18.8043 7.78722 17.6725 6.8969 16.4188H5.3344C5.92034 16.0478 6.57268 15.6865 7.21917 15.3468C7.26799 15.4307 7.31878 15.5127 7.37151 15.5948H10.9379V13.5951L11.2114 13.4799C11.3407 13.7282 11.546 13.9286 11.7973 14.0521V15.5928H15.3461C16.1938 14.263 16.6508 12.9234 16.7133 11.576L17.2758 13.4252H17.2699ZM10.0297 10.2422C10.1625 9.81848 10.5317 9.4787 11.0668 9.13502L9.2387 6.9987C9.11565 6.89129 9.1469 6.80342 9.26213 6.72726L9.86956 6.46755C9.91848 6.45208 9.97017 6.44739 10.0211 6.4538C10.072 6.4602 10.1209 6.47755 10.1645 6.50465L12.8188 7.84229L15.9438 6.03599L11.6235 0.665891C11.5121 0.542867 11.5278 0.447181 11.7016 0.384693L12.6782 -0.00585938L19.1703 4.19063L21.5141 3.05217C22.4067 2.66161 23.1762 2.59912 23.6625 2.89009C23.7762 2.9368 23.8716 3.01922 23.9343 3.1249C23.997 3.23057 24.0236 3.35378 24.0102 3.47591C24.0199 4.06174 23.5297 4.69444 22.6645 5.2334L20.2289 6.18244L20.0336 13.9017L19.1625 14.4875C19.0121 14.5949 18.9242 14.5559 18.8852 14.3938L16.8696 7.81105L16.6196 9.37325L13.2289 12.3024C13.2262 12.355 13.2121 12.4064 13.1875 12.4529C13.1628 12.4995 13.1283 12.5401 13.0864 12.5719L12.5336 12.9273C12.4067 12.9781 12.3168 12.9546 12.2992 12.7925L11.5649 10.0782C10.9789 10.3282 10.4867 10.4414 10.061 10.3086C10.0219 10.2969 10.018 10.2793 10.0297 10.2422ZM9.2094 8.88897C6.62737 10.2559 3.17424 12.4762 1.90471 13.7709C-2.24763 18.0455 0.992604 21.3769 5.84417 19.9182C4.32464 19.6936 3.13518 19.387 2.47503 18.9535C-0.343334 17.1023 8.72503 13.1069 10.8461 12.2321L10.6801 11.617C10.3464 11.6472 10.0101 11.6121 9.68987 11.5135L9.57073 11.4608C9.41303 11.4024 9.26961 11.3111 9.15004 11.1929C9.03047 11.0747 8.93751 10.9323 8.87737 10.7753L8.85198 10.707C8.74722 10.4404 8.74236 10.145 8.83831 9.87511C8.93676 9.55624 9.09666 9.25971 9.30901 9.00223L9.21331 8.88897H9.2094ZM1.56292 12.3239C1.51795 11.9278 1.49578 11.5294 1.49651 11.1307C1.4959 10.4659 1.56132 9.80258 1.69182 9.15064C1.81748 8.52042 2.00727 7.9047 2.25823 7.31309L2.26995 7.2838C2.52237 6.69649 2.82835 6.13367 3.18401 5.60247C3.53443 5.07947 3.93545 4.59219 4.38128 4.14767C4.82694 3.70174 5.31492 3.30018 5.83831 2.94867C6.36853 2.59298 6.93088 2.28767 7.51799 2.03673C8.1196 1.7787 8.74586 1.58242 9.38714 1.4509C9.76591 1.37556 10.1487 1.3221 10.5336 1.29077C10.5774 1.35904 10.6256 1.42428 10.6782 1.48605L11.7953 2.87837V5.83095H13.7914L12.7778 6.41677L10.9379 5.49117V2.87251C9.90082 3.76145 8.95595 4.7526 8.1176 5.83095H8.37737C8.16932 6.00991 8.02136 6.24852 7.95354 6.51441C7.93855 6.56558 7.92745 6.6178 7.92034 6.67063V6.68821H7.51604C7.04675 7.40253 6.67004 8.17353 6.39495 8.9827C6.04143 9.19555 5.68596 9.41231 5.3344 9.63492C5.56323 8.59338 5.95896 7.59567 6.50628 6.6804H3.81682C3.62206 7.01578 3.44791 7.36271 3.29534 7.71927L3.28362 7.74465C3.06167 8.26882 2.89476 8.81462 2.78557 9.37325C2.69815 9.81243 2.6446 10.2577 2.62542 10.705H3.71135C2.96713 11.2071 2.24999 11.7481 1.56292 12.3258V12.3239ZM16.7016 11.5623H14.5903L14.7055 10.7031H16.4438L16.7035 11.5623H16.7016ZM15.8207 16.4169C14.9295 17.6704 13.8791 18.8027 12.6957 19.7854C12.8383 19.7639 12.9789 19.7385 13.1196 19.7112C13.6836 19.5974 14.2346 19.4266 14.7641 19.2015C15.2889 18.9779 15.7917 18.7059 16.266 18.3892C16.7289 18.0789 17.1601 17.7238 17.5532 17.3288C17.8439 17.0449 18.1135 16.7401 18.3598 16.4169H15.8207ZM11.7934 19.43C12.8987 18.544 13.8976 17.5329 14.7699 16.4169H11.7934V19.43ZM10.9379 16.4169H7.9594C8.8329 17.5325 9.83237 18.5436 10.9379 19.43V16.4169ZM7.06292 5.83095C7.94288 4.59725 8.96269 3.46952 10.102 2.47024C9.93401 2.49368 9.76799 2.52101 9.60393 2.55421C9.03872 2.66582 8.48685 2.83666 7.95745 3.06388C7.43289 3.28793 6.93011 3.55987 6.45549 3.87623C5.99259 4.18646 5.56147 4.54163 5.16839 4.93658C4.88737 5.21538 4.62631 5.51358 4.38714 5.82899L7.06292 5.83095Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_552_3514">
                    <rect width="24" height="21" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
export const TimelinePlaneIcon = ({
    color = "#D9D9D9",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_604_13655)">
                <path d="M6.42 23.28H8.82L14.2056 13.6788H20.4C20.4 13.6788 24 13.6788 24 12C24 10.32 20.4 10.32 20.4 10.32H14.2056L8.82 0.719971H6.42L9.4056 10.32H5.1012L2.4 7.91877H0L1.9212 11.9988L0 16.08H2.4L5.1012 13.6788H9.4056L6.42 23.28Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_604_13655">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const BestPriceReasonIcon = ({
    width = 55,
    height = 55,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M39.5545 19.2728V4.48241C39.5572 4.12313 39.4709 3.76877 39.3034 3.45094C39.1358 3.1331 38.8922 2.86168 38.5943 2.66086C38.2964 2.46005 37.9534 2.33609 37.5959 2.30005C37.2384 2.264 36.8776 2.31699 36.5455 2.45429C29.0151 5.5045 12.8337 5.50679 5.30095 2.45429C4.96858 2.32109 4.60864 2.27129 4.25259 2.30926C3.89654 2.34722 3.55519 2.47179 3.25838 2.67207C2.96156 2.87236 2.7183 3.14228 2.54985 3.45825C2.38139 3.77422 2.29286 4.12663 2.29199 4.4847V19.2705C2.29199 31.327 16.5393 41.1903 20.9232 41.1903C25.3072 41.1903 39.5545 31.3247 39.5545 19.2728Z" fill="#FFDDA1" />
            <path d="M39.5544 12.0999C30.6077 12.6957 20.6092 11.8134 14.786 9.4553C14.3769 9.28875 13.933 9.22542 13.4936 9.2709C13.0542 9.31638 12.6327 9.46926 12.2664 9.71608C11.9 9.96289 11.6 10.2961 11.3928 10.6862C11.1855 11.0763 11.0775 11.5115 11.0781 11.9532V30.2086C11.101 32.427 11.486 34.627 12.2171 36.7216C14.6517 38.9864 17.6658 40.5331 20.9254 41.1903C25.3071 41.1903 39.5567 31.327 39.5567 19.2705L39.5544 12.0999Z" fill="#FFBC44" />
            <path d="M52.7091 30.7883V15.9956C52.711 15.6367 52.6242 15.2829 52.4564 14.9657C52.2885 14.6485 52.0448 14.3777 51.747 14.1774C51.4492 13.9771 51.1065 13.8536 50.7494 13.8178C50.3923 13.7819 50.0318 13.835 49.7002 13.9721C42.1675 17.0269 25.986 17.0269 18.4556 13.9721C18.1235 13.8386 17.7637 13.7883 17.4077 13.8258C17.0517 13.8634 16.7103 13.9874 16.4133 14.1872C16.1162 14.3871 15.8727 14.6565 15.7038 14.9722C15.5349 15.2878 15.4458 15.64 15.4443 15.9979V30.7883C15.4443 42.8425 29.6939 52.7081 34.0756 52.7081C38.4641 52.7081 52.7091 42.8448 52.7091 30.7883Z" fill="#FFEF5E" />
            <path d="M34.0779 16.264C28.7769 16.415 23.4903 15.6402 18.4556 13.9746C18.1237 13.8405 17.7639 13.7899 17.4079 13.827C17.0518 13.8641 16.7103 13.988 16.4132 14.1876C16.1161 14.3873 15.8724 14.6567 15.7035 14.9723C15.5346 15.288 15.4456 15.6402 15.4443 15.9981V30.7886C15.4443 42.8427 29.6939 52.7084 34.0756 52.7084L34.0779 16.264Z" fill="#FFF9BF" />
            <path d="M52.7091 30.7883V15.9956C52.711 15.6367 52.6242 15.2829 52.4564 14.9657C52.2885 14.6485 52.0448 14.3777 51.747 14.1774C51.4492 13.9771 51.1065 13.8536 50.7494 13.8178C50.3923 13.7819 50.0318 13.835 49.7002 13.9721C42.1675 17.0269 25.986 17.0269 18.4556 13.9721C18.1235 13.8386 17.7637 13.7883 17.4077 13.8258C17.0517 13.8634 16.7103 13.9874 16.4133 14.1872C16.1162 14.3871 15.8727 14.6565 15.7038 14.9722C15.5349 15.2878 15.4458 15.64 15.4443 15.9979V30.7883C15.4443 42.8425 29.6939 52.7081 34.0756 52.7081C38.4641 52.7081 52.7091 42.8448 52.7091 30.7883Z" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.5545 11.6575V4.48461C39.5572 4.12533 39.4709 3.77097 39.3034 3.45314C39.1358 3.1353 38.8922 2.86387 38.5943 2.66306C38.2963 2.46224 37.9533 2.33829 37.5959 2.30224C37.2384 2.2662 36.8776 2.31919 36.5455 2.45649C29.0151 5.50669 12.8337 5.50899 5.30095 2.45649C4.96876 2.32335 4.60903 2.27354 4.25316 2.31139C3.89729 2.34924 3.55608 2.4736 3.25932 2.67363C2.96256 2.87365 2.71926 3.14326 2.55065 3.45893C2.38203 3.7746 2.29323 4.12673 2.29199 4.48461V19.2704C2.29199 26.2165 7.02658 32.4406 11.878 36.4648M40.6545 37.3632C40.6545 39.1075 39.9615 40.7804 38.7281 42.0139C37.4947 43.2473 35.8218 43.9402 34.0774 43.9402C32.3331 43.9402 30.6601 43.2473 29.4267 42.0139C28.1933 40.7804 27.5003 39.1075 27.5003 37.3632M38.4614 27.4998C38.4614 26.6276 38.8078 25.7912 39.4246 25.1745C40.0413 24.5577 40.8777 24.2113 41.7499 24.2113C42.6221 24.2113 43.4585 24.5577 44.0753 25.1745C44.692 25.7912 45.0384 26.6276 45.0384 27.4998" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.1162 27.5C23.1162 27.0681 23.2013 26.6405 23.3665 26.2415C23.5318 25.8425 23.774 25.48 24.0794 25.1746C24.3848 24.8692 24.7473 24.627 25.1463 24.4618C25.5453 24.2965 25.9729 24.2114 26.4048 24.2114C26.8366 24.2114 27.2642 24.2965 27.6632 24.4618C28.0622 24.627 28.4247 24.8692 28.7301 25.1746C29.0355 25.48 29.2777 25.8425 29.443 26.2415C29.6082 26.6405 29.6933 27.0681 29.6933 27.5" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const EasyBookingReasonIcon = ({
    width = 55,
    height = 55,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M28.5957 2.29175H6.67595C5.51325 2.29175 4.39818 2.75363 3.57602 3.57578C2.75387 4.39793 2.29199 5.51301 2.29199 6.67571V48.3245C2.29199 48.9002 2.40539 49.4702 2.6257 50.0021C2.84602 50.534 3.16894 51.0173 3.57602 51.4244C3.98311 51.8315 4.4664 52.1544 4.99828 52.3747C5.53017 52.595 6.10024 52.7084 6.67595 52.7084H28.5957C29.1717 52.7093 29.7422 52.5965 30.2745 52.3766C30.8068 52.1566 31.2904 51.8337 31.6977 51.4264C32.105 51.0191 32.4278 50.5355 32.6478 50.0032C32.8678 49.4709 32.9806 48.9004 32.9797 48.3245V6.67571C32.9791 5.5132 32.517 4.39847 31.695 3.57645C30.873 2.75443 29.7583 2.29236 28.5957 2.29175Z" fill="#66E1FF" />
            <path d="M32.9797 9.0705V6.67571C32.9791 5.5132 32.517 4.39847 31.695 3.57645C30.873 2.75443 29.7583 2.29236 28.5957 2.29175H6.67595C5.51325 2.29175 4.39818 2.75363 3.57602 3.57578C2.75387 4.39793 2.29199 5.51301 2.29199 6.67571V39.7582L32.9797 9.0705Z" fill="#C2F3FF" />
            <path d="M52.7086 17.6369V39.5566H41.7498C39.4742 39.4047 37.331 38.4322 35.7181 36.8198C34.1052 35.2073 33.1321 33.0643 32.9796 30.7887H26.4025C25.2398 30.7887 24.1247 30.3269 23.3026 29.5047C22.4804 28.6825 22.0186 27.5675 22.0186 26.4048C22.0186 25.2421 22.4804 24.127 23.3026 23.3048C24.1247 22.4827 25.2398 22.0208 26.4025 22.0208H32.9796V9.96436H35.9817C36.8823 9.97123 37.7623 10.2439 38.5025 10.7527L48.3246 17.6369H52.7086Z" fill="#FFDDA1" />
            <path d="M48.3222 17.6369L38.5024 10.7527C37.7595 10.2445 36.8817 9.96996 35.9816 9.96436H32.9795V15.4437H35.9816C36.8799 15.4506 37.7599 15.7256 38.5024 16.2344L48.3222 23.1162H52.7085V17.6369H48.3222Z" fill="#FFDDA1" />
            <path d="M2.29199 43.9404V48.3244C2.29199 48.9001 2.40539 49.4702 2.6257 50.0021C2.84602 50.5339 3.16894 51.0172 3.57602 51.4243C3.98311 51.8314 4.4664 52.1543 4.99828 52.3746C5.53017 52.595 6.10024 52.7083 6.67595 52.7083H28.5957C29.7584 52.7083 30.8735 52.2465 31.6957 51.4243C32.5178 50.6022 32.9797 49.4871 32.9797 48.3244V43.9404H2.29199Z" fill="white" />
            <path d="M32.9774 9.96436H35.9818C36.8801 9.96436 37.7578 10.2394 38.4935 10.7573L48.3247 17.6369H52.7064M52.7087 39.5544H41.7499C39.4746 39.4025 37.3317 38.4303 35.7189 36.8183C34.106 35.2063 33.1328 33.0639 32.9797 30.7887H26.4026C25.2399 30.7887 24.1248 30.3268 23.3027 29.5047C22.4805 28.6825 22.0187 27.5675 22.0187 26.4048C22.0187 25.2421 22.4805 24.127 23.3027 23.3048C24.1248 22.4827 25.2399 22.0208 26.4026 22.0208H38.4614M32.9797 43.9406H2.29199" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.6366 48.8723C17.4999 48.8598 17.3729 48.7966 17.2805 48.6953C17.188 48.594 17.1367 48.4618 17.1367 48.3246C17.1367 48.1874 17.188 48.0551 17.2805 47.9538C17.3729 47.8525 17.4999 47.7894 17.6366 47.7769" stroke="#3A3A3A" />
            <path d="M17.6348 48.8723C17.7714 48.8598 17.8984 48.7966 17.9909 48.6953C18.0833 48.594 18.1346 48.4618 18.1346 48.3246C18.1346 48.1874 18.0833 48.0551 17.9909 47.9538C17.8984 47.8525 17.7714 47.7894 17.6348 47.7769" stroke="#3A3A3A" />
            <path d="M32.9797 40.5878V48.3245C32.9791 49.487 32.517 50.6017 31.695 51.4237C30.873 52.2457 29.7583 52.7078 28.5957 52.7084H6.67595C6.10024 52.7084 5.53017 52.595 4.99828 52.3747C4.4664 52.1544 3.98311 51.8315 3.57602 51.4244C3.16894 51.0173 2.84602 50.534 2.6257 50.0021C2.40539 49.4702 2.29199 48.9002 2.29199 48.3245V6.67571C2.29199 5.51301 2.75387 4.39793 3.57602 3.57578C4.39818 2.75363 5.51325 2.29175 6.67595 2.29175H28.5957C29.7584 2.29175 30.8735 2.75363 31.6957 3.57578C32.5178 4.39793 32.9797 5.51301 32.9797 6.67571V22.0207M17.6347 8.86883V18.7322" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3457 13.2529L17.6388 8.8689L20.9228 13.2529M17.6342 37.3635V27.5001M17.6342 37.3635L20.9228 32.9795M17.6342 37.3635L14.348 32.9795" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const TrustReasonIcon = ({
    width = 55,
    height = 55,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M23.6634 52.7061C20.29 46.3811 11.3342 46.0786 7.53921 52.163C7.42916 52.3404 7.32521 52.5216 7.22754 52.7061H23.6634Z" fill="#66E1FF" />
            <path d="M43.3898 52.7084C43.3898 44.2728 34.2575 38.9997 26.9517 43.2186C25.2863 44.1801 23.9034 45.5631 22.942 47.2285C21.9805 48.8939 21.4744 50.7831 21.4746 52.7061" fill="#66E1FF" />
            <path d="M43.3898 52.7084C43.3898 44.2728 34.2575 38.9997 26.9517 43.2186C25.2863 44.1801 23.9034 45.5631 22.942 47.2285C21.9805 48.8939 21.4744 50.7831 21.4746 52.7061" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.0946 30.7841C40.0946 36.6875 33.7008 40.3793 28.5881 37.4254C27.4226 36.7519 26.4546 35.7838 25.7812 34.6181C25.1079 33.4525 24.7529 32.1303 24.7519 30.7841C24.7471 29.1193 25.2952 27.4999 26.3102 26.1802C28.5732 28.3674 31.5786 29.6197 34.7252 29.6864C36.4626 29.7091 38.1906 29.4275 39.831 28.8546C40.0052 29.4855 40.0931 30.1287 40.0946 30.7841ZM15.4454 44.9833C20.4665 44.9833 23.6038 39.5498 21.0944 35.2025C20.5214 34.2118 19.6981 33.3892 18.7071 32.8169C17.7161 32.2445 16.5921 31.9426 15.4477 31.9414C10.429 31.9414 7.28938 37.3773 9.80104 41.7223C10.374 42.7129 11.1973 43.5356 12.1883 44.1079C13.1793 44.6802 14.3033 44.9821 15.4477 44.9833" fill="#FFDDA1" />
            <path d="M15.4454 44.9833C20.4665 44.9833 23.6038 39.5498 21.0944 35.2025C20.5214 34.2118 19.6981 33.3892 18.7071 32.8169C17.7161 32.2445 16.5921 31.9426 15.4477 31.9414C10.429 31.9414 7.28938 37.3773 9.80104 41.7223C10.374 42.7129 11.1973 43.5356 12.1883 44.1079C13.1793 44.6802 14.3033 44.9821 15.4477 44.9833M40.0946 30.7841C40.0946 36.6875 33.7008 40.3793 28.5881 37.4254C27.4226 36.7519 26.4546 35.7838 25.7812 34.6181C25.1079 33.4525 24.7529 32.1303 24.7519 30.7841C24.7471 29.1193 25.2952 27.4999 26.3102 26.1802C28.5732 28.3674 31.5786 29.6197 34.7252 29.6864C36.4626 29.7091 38.1906 29.4275 39.831 28.8546C40.0052 29.4855 40.0931 30.1287 40.0946 30.7841Z" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.4316 48.5308V51.6131" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.8285 28.8545C38.1882 29.4282 36.4602 29.7105 34.7226 29.6886C31.576 29.6219 28.5706 28.3696 26.3076 26.1824C29.823 21.4684 37.122 22.3278 39.4457 27.727C39.6046 28.0936 39.733 28.4695 39.8307 28.8545" fill="#C77F67" />
            <path d="M39.8285 28.8545C38.1882 29.4282 36.4602 29.7105 34.7226 29.6886C31.576 29.6219 28.5706 28.3696 26.3076 26.1824C29.823 21.4684 37.122 22.3278 39.4457 27.727C39.6046 28.0936 39.733 28.4695 39.8307 28.8545" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.4455 47.7769C12.008 47.7769 8.84546 49.6744 7.22754 52.7085L15.4455 47.7769Z" fill="#66E1FF" />
            <path d="M15.4455 47.7769C12.008 47.7769 8.84546 49.6744 7.22754 52.7085M19.2863 48.6019C18.0802 48.0563 16.7715 47.775 15.4477 47.7769" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.6223 38.4611C19.0844 38.4611 20.535 38.1632 21.8779 37.5834C21.2363 32.638 15.4819 30.2409 11.5196 33.2705C10.8411 33.787 10.2724 34.4337 9.84668 35.1726C10.8558 36.2137 12.064 37.0414 13.3994 37.6063C14.7347 38.1712 16.1723 38.4619 17.6223 38.4611Z" fill="#C77F67" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M47.7744 52.7085V2.30103" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36.8034 13.2506V15.4414C36.8065 15.7301 36.7519 16.0164 36.6429 16.2838C36.534 16.5511 36.3727 16.794 36.1687 16.9982C35.9647 17.2024 35.722 17.3639 35.4548 17.4732C35.1876 17.5824 34.9013 17.6373 34.6126 17.6345H18.1768L23.6538 12.1552L18.1768 6.67578H32.4218V11.0574C32.4218 12.2697 33.4026 13.2506 34.6126 13.2506H36.8034Z" fill="#FF808C" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.6127 2.29175C34.0317 2.29175 33.4744 2.52257 33.0636 2.93343C32.6527 3.34429 32.4219 3.90154 32.4219 4.48258V11.0597C32.4219 12.2697 33.4027 13.2505 34.6127 13.2505H47.7623V2.29175H34.6127Z" fill="#FFBFC5" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const WhyChooseUsIcon = ({
    width = 55,
    height = 55,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_559_5026)">
                <mask id="mask0_559_5026" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="55" height="55">
                    <path d="M0 0H55V55H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_559_5026)">
                    <path d="M52.4174 15.0677C51.4481 20.8381 41.6856 30.6763 41.6856 36.5315C41.6856 30.6763 32.182 21.7823 30.956 15.0677C29.3449 8.30959 34.7579 1.93417 41.6856 2.42229C48.6179 1.925 54.0376 8.30729 52.4174 15.0677Z" fill="#FFEF5E" />
                    <path d="M41.6856 36.5315C41.6856 30.6763 32.182 21.7823 30.956 15.0677C29.3449 8.30962 34.7579 1.93421 41.6856 2.42233V36.5315Z" fill="#FFF7AE" />
                    <path d="M41.69 36.5774V39.5015M41.69 36.5774C41.69 30.7221 51.457 20.884 52.4195 15.1136C54.0375 8.35318 48.62 1.9686 41.6854 2.46818C34.7577 1.97548 29.3448 8.35548 30.9604 15.1113C31.0045 15.342 31.0557 15.5713 31.1139 15.7988M41.69 36.5774C41.3966 34.0429 40.4588 31.6252 38.9698 29.5534" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M46.6053 12.7189C46.6053 16.5024 42.5101 18.8674 39.233 16.9745C38.4854 16.5439 37.8646 15.9237 37.4333 15.1765C37.0019 14.4294 36.7753 13.5816 36.7764 12.7189C36.7764 8.93761 40.8716 6.57261 44.1487 8.46552C44.896 8.8959 45.5165 9.51571 45.9479 10.2625C46.3792 11.0092 46.606 11.8565 46.6053 12.7189Z" fill="white" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.0537 15.0677C23.0866 20.8381 13.3195 30.6762 13.3195 36.5315C13.3195 30.6762 3.81825 21.7823 2.59679 15.0677C0.985751 8.31416 6.39408 1.93645 13.3218 2.42229C20.2541 1.9227 25.6739 8.30728 24.0537 15.0677Z" fill="#FF808C" />
                    <path d="M13.3195 36.5315C13.3195 30.6763 3.81825 21.7823 2.59679 15.0677C0.985751 8.3142 6.39408 1.93645 13.3218 2.42233L13.3195 36.5315Z" fill="#FFBFC5" />
                    <path d="M13.3147 36.5774V39.5015M17.6781 26.8103C15.3428 30.4174 13.3101 33.8732 13.3101 36.5774C13.3101 30.7222 3.80659 21.8282 2.57826 15.1136C0.962634 8.35319 6.38243 1.9709 13.3147 2.46819C20.247 1.9709 25.6668 8.35319 24.0466 15.1136C23.9595 15.591 23.8346 16.0608 23.6731 16.5184" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.228 12.7189C18.228 16.5024 14.1328 18.8674 10.858 16.9745C10.1104 16.5439 9.4896 15.9237 9.05826 15.1765C8.62693 14.4294 8.40034 13.5816 8.40137 12.7189C8.40137 8.93761 12.4943 6.57261 15.7714 8.46552C16.5187 8.8959 17.1393 9.51571 17.5706 10.2625C18.0019 11.0092 18.2287 11.8565 18.228 12.7189Z" fill="white" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.3209 28.2151C38.3516 33.9878 28.5868 43.8259 28.5868 49.6811C28.5868 43.8259 19.0832 34.9319 17.8572 28.2151C16.2439 21.4592 21.6545 15.0815 28.5822 15.5719C35.5191 15.0678 40.9412 21.4546 39.3209 28.2151Z" fill="#78EB7B" />
                    <path d="M28.584 49.6811C28.584 43.8259 19.0805 34.932 17.8521 28.2151C16.2388 21.457 21.654 15.077 28.584 15.572V49.6811Z" fill="#BBF5BD" />
                    <path d="M28.5891 49.6811V52.6053M39.321 28.2151C38.3516 33.9878 28.5868 43.8259 28.5868 49.6811C28.5868 43.8259 19.0832 34.9319 17.8572 28.2151C16.2439 21.4592 21.6545 15.0815 28.5822 15.5719C35.5191 15.0678 40.9412 21.4546 39.321 28.2151Z" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.5041 25.8224C33.5041 29.6037 29.4066 31.971 26.1295 30.0781C25.3835 29.6457 24.7639 29.0251 24.3328 28.2784C23.9017 27.5316 23.6741 26.6847 23.6729 25.8224C23.6729 22.0389 27.7681 19.6739 31.0451 21.5668C31.7912 21.9992 32.4107 22.6197 32.8419 23.3665C33.273 24.1133 33.5028 24.9601 33.5041 25.8224Z" fill="white" stroke="#3A3A3A" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_559_5026">
                    <rect width="55" height="55" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const MastercardIcon = ({
    width = 40,
    height = 31,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="0.5" y="0.5" width="39" height="30" rx="4.5" stroke="#3A3A3A" />
            <g clipPath="url(#clip0_559_5204)">
                <path d="M10.4537 26.8858V25.3635C10.4537 24.7799 10.0934 24.3994 9.47598 24.3994C9.1673 24.3994 8.83285 24.5009 8.60129 24.8307C8.42129 24.5516 8.16406 24.3994 7.77816 24.3994C7.52082 24.3994 7.26371 24.4754 7.05781 24.7546V24.4501H6.51758V26.8858H7.05781V25.5411C7.05781 25.1098 7.28938 24.9068 7.64961 24.9068C8.00961 24.9068 8.18984 25.1352 8.18984 25.5411V26.8858H8.73008V25.5411C8.73008 25.1098 8.98719 24.9068 9.32164 24.9068C9.68188 24.9068 9.86188 25.1352 9.86188 25.5411V26.8858H10.4537ZM18.4542 24.4501H17.5796V23.7144H17.0394V24.4501H16.5506V24.9321H17.0393V26.0486C17.0393 26.6068 17.2708 26.9365 17.8883 26.9365C18.1198 26.9365 18.377 26.8605 18.5572 26.759L18.4027 26.3023C18.2484 26.4037 18.0684 26.4292 17.9397 26.4292C17.6825 26.4292 17.5796 26.2769 17.5796 26.0231V24.9321H18.4542V24.4501ZM23.0334 24.3993C22.7247 24.3993 22.5189 24.5516 22.3903 24.7546V24.4501H21.85V26.8858H22.3903V25.5157C22.3903 25.1098 22.5703 24.8815 22.9047 24.8815C23.0076 24.8815 23.1363 24.9069 23.2392 24.9322L23.3935 24.4248C23.2906 24.3994 23.1363 24.3994 23.0334 24.3994M16.1132 24.6532C15.8559 24.4755 15.4958 24.3995 15.1099 24.3995C14.4925 24.3995 14.081 24.7039 14.081 25.186C14.081 25.592 14.3896 25.8203 14.9299 25.8965L15.1871 25.9219C15.4701 25.9725 15.6245 26.0487 15.6245 26.1756C15.6245 26.3531 15.4187 26.48 15.0584 26.48C14.6982 26.48 14.4153 26.3531 14.2352 26.2263L13.978 26.6322C14.261 26.8352 14.6469 26.9367 15.0327 26.9367C15.753 26.9367 16.1647 26.6069 16.1647 26.1502C16.1647 25.7188 15.8302 25.4904 15.3157 25.4144L15.0584 25.389C14.8269 25.3635 14.6469 25.3129 14.6469 25.1607C14.6469 24.9831 14.8269 24.8816 15.1099 24.8816C15.4187 24.8816 15.7273 25.0084 15.8817 25.0845L16.1132 24.6532ZM30.4681 24.3995C30.1593 24.3995 29.9536 24.5517 29.8249 24.7547V24.4502H29.2846V26.8859H29.8249V25.5159C29.8249 25.11 30.005 24.8816 30.3393 24.8816C30.4423 24.8816 30.571 24.907 30.6739 24.9323L30.8282 24.4249C30.7254 24.3995 30.571 24.3995 30.4681 24.3995ZM23.5736 25.6681C23.5736 26.4038 24.0881 26.9367 24.8857 26.9367C25.2458 26.9367 25.503 26.8606 25.7602 26.6577L25.503 26.2263C25.2972 26.3785 25.0914 26.4546 24.8599 26.4546C24.4225 26.4546 24.1139 26.1502 24.1139 25.6681C24.1139 25.2114 24.4225 24.9069 24.8599 24.8816C25.0914 24.8816 25.2972 24.9576 25.503 25.11L25.7602 24.6786C25.503 24.4755 25.2458 24.3995 24.8857 24.3995C24.0881 24.3995 23.5736 24.9323 23.5736 25.6681ZM28.5644 25.6681V24.4502H28.0242V24.7547C27.8441 24.5264 27.5868 24.3995 27.2524 24.3995C26.5578 24.3995 26.0176 24.9323 26.0176 25.6681C26.0176 26.4038 26.5578 26.9367 27.2524 26.9367C27.6125 26.9367 27.8698 26.8099 28.0242 26.5815V26.8859H28.5644V25.6681ZM26.5835 25.6681C26.5835 25.2367 26.8665 24.8816 27.3295 24.8816C27.7668 24.8816 28.0756 25.2114 28.0756 25.6681C28.0756 26.0994 27.7668 26.4546 27.3295 26.4546C26.8665 26.4292 26.5835 26.0994 26.5835 25.6681ZM20.1264 24.3995C19.4061 24.3995 18.8915 24.9069 18.8915 25.6681C18.8915 26.4293 19.406 26.9367 20.1521 26.9367C20.5122 26.9367 20.8725 26.8352 21.1555 26.6069L20.8981 26.2263C20.6923 26.3785 20.4351 26.48 20.1779 26.48C19.8434 26.48 19.509 26.3278 19.4318 25.8963H21.2584V25.6935C21.2841 24.9069 20.8211 24.3995 20.1264 24.3995ZM20.1263 24.8561C20.4607 24.8561 20.6923 25.0592 20.7437 25.4398H19.4574C19.5089 25.11 19.7404 24.8561 20.1263 24.8561ZM33.5293 25.6681V23.4861H32.9891V24.7547C32.8089 24.5264 32.5517 24.3995 32.2173 24.3995C31.5227 24.3995 30.9825 24.9323 30.9825 25.6681C30.9825 26.4038 31.5227 26.9367 32.2173 26.9367C32.5775 26.9367 32.8347 26.8099 32.9891 26.5815V26.8859H33.5293V25.6681ZM31.5485 25.6681C31.5485 25.2367 31.8314 24.8816 32.2945 24.8816C32.7318 24.8816 33.0405 25.2114 33.0405 25.6681C33.0405 26.0994 32.7318 26.4546 32.2945 26.4546C31.8314 26.4292 31.5485 26.0994 31.5485 25.6681ZM13.4891 25.6681V24.4502H12.9488V24.7547C12.7687 24.5264 12.5115 24.3995 12.177 24.3995C11.4825 24.3995 10.9422 24.9323 10.9422 25.6681C10.9422 26.4038 11.4825 26.9367 12.177 26.9367C12.5373 26.9367 12.7945 26.8099 12.9488 26.5815V26.8859H13.4891V25.6681ZM11.4825 25.6681C11.4825 25.2367 11.7655 24.8816 12.2285 24.8816C12.6658 24.8816 12.9746 25.2114 12.9746 25.6681C12.9746 26.0994 12.6658 26.4546 12.2285 26.4546C11.7655 26.4292 11.4825 26.0994 11.4825 25.6681Z" fill="black" />
                <path d="M15.9336 5.95361H24.0371V20.3143H15.9336V5.95361Z" fill="#FF5F00" />
                <path d="M16.4479 13.134C16.4479 10.2162 17.8371 7.62822 19.9722 5.95361C18.4031 4.73577 16.4223 4 14.2613 4C9.14176 4 5 8.08487 5 13.134C5 18.1831 9.14176 22.268 14.2612 22.268C16.4221 22.268 18.403 21.5322 19.9722 20.3143C17.8371 18.6651 16.4479 16.0518 16.4479 13.134Z" fill="#EB001B" />
                <path d="M34.9703 13.134C34.9703 18.183 30.8285 22.268 25.7091 22.268C23.5481 22.268 21.5673 21.5322 19.998 20.3143C22.159 18.6398 23.5225 16.0518 23.5225 13.134C23.5225 10.2162 22.1332 7.62822 19.998 5.95361C21.5672 4.73577 23.5481 4 25.7091 4C30.8285 4 34.9703 8.1103 34.9703 13.134Z" fill="#F79E1B" />
            </g>
            <defs>
                <clipPath id="clip0_559_5204">
                    <rect width="30" height="23" fill="white" transform="translate(5 4)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const VisaIcon = ({
    width = 40,
    height = 31,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="0.5" y="0.5" width="39" height="30" rx="4.5" stroke="#3A3A3A" />
            <g clipPath="url(#clip0_559_5210)">
                <path d="M16.3903 9.16649L12.4625 18.2845H9.90008L7.96719 11.0075C7.85 10.5603 7.74816 10.3958 7.39156 10.2067C6.80867 9.8986 5.84609 9.61043 5 9.43117L5.05707 9.16649H9.18254C9.70754 9.16649 10.1803 9.50666 10.3005 10.0956L11.3218 15.3724L13.8432 9.16649H16.3903ZM19.8543 9.16649L17.8501 18.2845H15.4257L17.4302 9.16649H19.8543ZM26.4304 15.3075C26.4405 12.9015 23.0116 12.7679 23.034 11.6929C23.0422 11.3661 23.3621 11.0182 24.0624 10.9292C24.4093 10.8856 25.3677 10.8508 26.4532 11.3375L26.8779 9.40277C26.2946 9.19751 25.544 9 24.6104 9C22.2139 9 20.5282 10.2386 20.5147 12.0137C20.499 13.3267 21.7188 14.0585 22.6361 14.4958C23.581 14.9424 23.8979 15.2294 23.8936 15.6285C23.8868 16.2403 23.1389 16.5111 22.4436 16.5212C21.2244 16.54 20.5176 16.2005 19.9538 15.945L19.5138 17.9438C20.081 18.1967 21.1263 18.4164 22.209 18.4276C24.7566 18.4276 26.4229 17.2031 26.4304 15.3075ZM32.7586 18.2846H35L33.0418 9.16649H30.9738C30.5074 9.16649 30.1154 9.42991 29.9415 9.83485L26.304 18.2845H28.8496L29.3546 16.9225H32.4648L32.7586 18.2846ZM30.0527 15.0541L31.3291 11.63L32.0623 15.0541H30.0527ZM22.957 20.7944H21.9719V21.6865H23.0737V21.9547H21.64V19.4798H23.0172V19.748H21.9719V20.53H22.9569L22.957 20.7944ZM23.5827 19.3478H23.9145V21.9546H23.5827V19.3478ZM24.752 21.1248C24.7595 21.5619 25.0426 21.7417 25.3782 21.7417C25.6161 21.7417 25.7632 21.7013 25.8841 21.65L25.9443 21.8814C25.8274 21.9327 25.6237 21.9951 25.333 21.9951C24.7709 21.9951 24.4352 21.6317 24.4352 21.0955C24.4352 20.5595 24.7595 20.1408 25.2916 20.1408C25.8916 20.1408 26.0463 20.6477 26.0463 20.9744C26.0463 21.0404 26.0424 21.0881 26.0348 21.1249L24.752 21.1248ZM25.7254 20.8935C25.7293 20.6917 25.6387 20.3721 25.2651 20.3721C24.9255 20.3721 24.7821 20.6696 24.7556 20.8935H25.7254ZM27.8529 21.8922C27.7661 21.9327 27.5736 21.9952 27.3284 21.9952C26.7775 21.9952 26.4191 21.6317 26.4191 21.0882C26.4191 20.541 26.8038 20.1409 27.4 20.1409C27.5962 20.1409 27.7698 20.1884 27.8604 20.2363L27.7851 20.4823C27.7055 20.4419 27.5811 20.3977 27.4 20.3977C26.9811 20.3977 26.7549 20.7025 26.7549 21.0699C26.7549 21.481 27.0266 21.7344 27.3888 21.7344C27.5775 21.7344 27.7019 21.6904 27.7962 21.65L27.8529 21.8922ZM28.7843 19.7516V20.1775H29.2596V20.4234H28.7843V21.3818C28.7843 21.6024 28.8485 21.727 29.0333 21.727C29.1238 21.727 29.1767 21.7198 29.2258 21.7049L29.2409 21.9512C29.1767 21.9731 29.0749 21.9951 28.9466 21.9951C28.7918 21.9951 28.6672 21.9437 28.5881 21.8594C28.4975 21.7601 28.4598 21.6024 28.4598 21.393V20.4234H28.1766V20.1775H28.4598V19.847L28.7843 19.7516ZM29.7233 20.732C29.7233 20.5227 29.7193 20.3428 29.7082 20.1775H29.9988L30.014 20.5299H30.025C30.1082 20.2914 30.3118 20.1408 30.5343 20.1408C30.5684 20.1408 30.5949 20.1445 30.6252 20.1481V20.453C30.5912 20.4455 30.5573 20.4455 30.5117 20.4455C30.278 20.4455 30.1118 20.6144 30.0666 20.8569C30.0588 20.9067 30.055 20.9571 30.0553 21.0074V21.9548H29.7233V20.732ZM32.666 21.0513C32.666 21.7086 32.1942 21.9951 31.7566 21.9951C31.2659 21.9951 30.8812 21.6425 30.8812 21.0809C30.8812 20.4896 31.2849 20.1409 31.7868 20.1409C32.3112 20.1409 32.666 20.5114 32.666 21.0513ZM31.2207 21.0699C31.2207 21.4591 31.4471 21.753 31.7716 21.753C32.0887 21.753 32.3263 21.4627 32.3263 21.0625C32.3263 20.7615 32.1716 20.3831 31.7791 20.3831C31.3906 20.3831 31.2207 20.7358 31.2207 21.0699ZM33.1748 20.6586C33.1748 20.4715 33.1708 20.3245 33.1596 20.1777H33.4539L33.4728 20.4715H33.4803C33.5709 20.3061 33.7822 20.141 34.0841 20.141C34.3367 20.141 34.7293 20.2879 34.7293 20.8972V21.9548H34.3973V20.9304C34.3973 20.6441 34.2879 20.4052 33.9747 20.4052C33.7596 20.4052 33.5896 20.5559 33.5295 20.7357C33.5143 20.7762 33.5068 20.8311 33.5068 20.8863V21.9548H33.1748V20.6586Z" fill="#1A1F71" />
            </g>
            <defs>
                <clipPath id="clip0_559_5210">
                    <rect width="30" height="13" fill="white" transform="translate(5 9)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const FacebookBoxIcon = ({
    width = 25,
    height = 25,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="1" y="1" width="23" height="23" rx="6" stroke="#404040" strokeWidth="2" />
            <path d="M17 5H14.5455C13.4605 5 12.4199 5.42143 11.6527 6.17157C10.8856 6.92172 10.4545 7.93913 10.4545 9V11.4H8V14.6H10.4545V21H13.7273V14.6H16.1818L17 11.4H13.7273V9C13.7273 8.78783 13.8135 8.58434 13.9669 8.43431C14.1204 8.28429 14.3285 8.2 14.5455 8.2H17V5Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const TikTokBoxIcon = ({
    width = 25,
    height = 25,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="1" y="1" width="23" height="23" rx="6" stroke="#404040" strokeWidth="2" />
            <path d="M12.2652 5V10.1315C11.1942 9.92585 10.0879 10.0667 9.09705 10.5348C8.10619 11.0029 7.27892 11.7756 6.72789 12.7475C6.17685 13.7194 5.92884 14.8434 6.01763 15.9664C6.10642 17.0894 6.5277 18.1568 7.22408 19.0232C7.92047 19.8896 8.85812 20.5129 9.90934 20.8083C10.9606 21.1037 12.0743 21.0568 13.0988 20.6739C14.1233 20.291 15.0088 19.5908 15.6347 18.6687C16.2606 17.7465 16.5965 16.6473 16.5967 15.5205V12.5316C17.4282 12.8974 18.323 13.0841 19.2265 13.0804H20V8.60018H19.2265C17.7546 8.60018 16.5967 7.37052 16.5967 5.80004V5H12.2652ZM13.8122 6.60008H15.1178C15.4225 8.37617 16.7266 9.79704 18.453 10.1283V11.4227C17.6502 11.3011 16.9254 10.9891 16.254 10.5243L15.0497 9.69064V15.5205C15.0497 16.2965 14.8247 17.0546 14.4038 17.6969C13.983 18.3393 13.3856 18.8363 12.6889 19.124C11.9922 19.4116 11.2281 19.4765 10.4953 19.3104C9.76248 19.1443 9.09467 18.7548 8.57809 18.1921C8.06151 17.6294 7.71989 16.9195 7.59735 16.154C7.47481 15.3885 7.57698 14.6025 7.89066 13.8977C8.20434 13.1929 8.71513 12.6015 9.35705 12.1999C9.99897 11.7984 10.7425 11.6051 11.4917 11.6451V12.9284C10.9878 12.8882 10.4838 13.006 10.0456 13.2666C9.60739 13.5271 9.25529 13.9182 9.03525 14.3889C8.81521 14.8595 8.73745 15.3879 8.81211 15.9049C8.88678 16.422 9.11041 16.9038 9.45381 17.2874C9.79721 17.671 10.2444 17.9386 10.7371 18.0553C11.2298 18.1721 11.7451 18.1324 12.2157 17.9417C12.6862 17.7509 13.0903 17.4178 13.3751 16.9859C13.6599 16.554 13.8122 16.0433 13.8122 15.5205V6.60008ZM10.3315 15.5205C10.3315 15.2553 10.4334 15.0009 10.6147 14.8134C10.796 14.6258 11.0419 14.5205 11.2983 14.5205C11.5548 14.5205 11.8007 14.6258 11.982 14.8134C12.1633 15.0009 12.2652 15.2553 12.2652 15.5205C12.2652 15.7858 12.1633 16.0401 11.982 16.2277C11.8007 16.4152 11.5548 16.5206 11.2983 16.5206C11.0419 16.5206 10.796 16.4152 10.6147 16.2277C10.4334 16.0401 10.3315 15.7858 10.3315 15.5205Z" fill="#404040" />
        </svg>
    );
};

export const ThreadsBoxIcon = ({
    width = 25,
    height = 25,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="1" y="1" width="23" height="23" rx="6" stroke="#404040" strokeWidth="2" />
            <path d="M19 9.8C17.4301 3.4 8.01066 3.4 6.44075 9.8C4.87084 16.2 7.61818 21 12.7204 21C17.8226 21 20.5699 14.92 15.8602 13M15.8602 13C11.1505 11.08 8.79561 14.6 10.3655 16.2C11.9354 17.8 15.8602 17 15.8602 13ZM15.8602 13C15.8602 9 11.9354 8.2 10.3655 9.8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const InstagramBoxIcon = ({
    width = 25,
    height = 25,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="1" y="1" width="23" height="23" rx="6" stroke="#404040" strokeWidth="2" />
            <path d="M19.175 4.325C18.8783 4.325 18.5883 4.41297 18.3416 4.5778C18.095 4.74262 17.9027 4.97689 17.7892 5.25097C17.6756 5.52506 17.6459 5.82666 17.7038 6.11764C17.7617 6.40861 17.9046 6.67588 18.1143 6.88566C18.3241 7.09544 18.5914 7.2383 18.8824 7.29618C19.1733 7.35406 19.4749 7.32435 19.749 7.21082C20.0231 7.09729 20.2574 6.90503 20.4222 6.65836C20.587 6.41168 20.675 6.12167 20.675 5.825C20.675 5.42718 20.517 5.04564 20.2357 4.76434C19.9544 4.48304 19.5728 4.325 19.175 4.325ZM24.925 7.35C24.9005 6.3129 24.7062 5.28681 24.35 4.3125C24.0336 3.47819 23.5387 2.72308 22.9 2.1C22.281 1.45928 21.5245 0.967721 20.6875 0.6625C19.7158 0.295201 18.6886 0.0965125 17.65 0.0749999C16.325 -6.98492e-08 15.9 0 12.5 0C9.1 0 8.675 -6.98492e-08 7.35 0.0749999C6.31144 0.0965125 5.28418 0.295201 4.3125 0.6625C3.47747 0.971566 2.7217 1.4626 2.1 2.1C1.45928 2.71897 0.967721 3.47555 0.6625 4.3125C0.295201 5.28418 0.0965125 6.31144 0.0749999 7.35C-6.98492e-08 8.675 0 9.1 0 12.5C0 15.9 -6.98492e-08 16.325 0.0749999 17.65C0.0965125 18.6886 0.295201 19.7158 0.6625 20.6875C0.967721 21.5245 1.45928 22.281 2.1 22.9C2.7217 23.5374 3.47747 24.0284 4.3125 24.3375C5.28418 24.7048 6.31144 24.9035 7.35 24.925C8.675 25 9.1 25 12.5 25C15.9 25 16.325 25 17.65 24.925C18.6886 24.9035 19.7158 24.7048 20.6875 24.3375C21.5245 24.0323 22.281 23.5407 22.9 22.9C23.5403 22.2782 24.0354 21.5227 24.35 20.6875C24.7062 19.7132 24.9005 18.6871 24.925 17.65C24.925 16.325 25 15.9 25 12.5C25 9.1 25 8.675 24.925 7.35ZM22.675 17.5C22.6661 18.2935 22.5224 19.0797 22.25 19.825C22.0504 20.369 21.7298 20.8605 21.3125 21.2625C20.9068 21.6753 20.4164 21.9952 19.875 22.2C19.1297 22.4724 18.3435 22.6161 17.55 22.625C16.3 22.6875 15.8375 22.7 12.55 22.7C9.2625 22.7 8.8 22.7 7.55 22.625C6.72606 22.6412 5.90556 22.5143 5.125 22.25C4.60773 22.0342 4.13988 21.7152 3.75 21.3125C3.33511 20.9109 3.01855 20.419 2.825 19.875C2.51881 19.1192 2.3495 18.3151 2.325 17.5C2.325 16.25 2.25 15.7875 2.25 12.5C2.25 9.2125 2.25 8.75 2.325 7.5C2.32956 6.68872 2.47768 5.88465 2.7625 5.125C2.98256 4.59739 3.32033 4.12707 3.75 3.75C4.12865 3.31899 4.59829 2.97743 5.125 2.75C5.88675 2.47435 6.68993 2.33062 7.5 2.325C8.75 2.325 9.2125 2.25 12.5 2.25C15.7875 2.25 16.25 2.25 17.5 2.325C18.2935 2.33386 19.0797 2.47757 19.825 2.75C20.393 2.96082 20.9029 3.30356 21.3125 3.75C21.7209 4.13503 22.0408 4.60418 22.25 5.125C22.5281 5.8861 22.6719 6.6897 22.675 7.5C22.7375 8.75 22.75 9.2125 22.75 12.5C22.75 15.7875 22.7375 16.25 22.675 17.5ZM12.5 6.0875C11.2323 6.08997 9.9937 6.46816 8.94082 7.17427C7.88793 7.88039 7.06797 8.88275 6.58454 10.0547C6.10111 11.2266 5.9759 12.5156 6.22474 13.7587C6.47358 15.0017 7.0853 16.1432 7.98259 17.0387C8.8799 17.9343 10.0225 18.5438 11.2661 18.7902C12.5096 19.0366 13.7983 18.9089 14.9693 18.4232C16.1403 17.9375 17.1411 17.1155 17.8452 16.0613C18.5492 15.007 18.925 13.7677 18.925 12.5C18.9267 11.6564 18.7615 10.8208 18.439 10.0412C18.1166 9.26163 17.6432 8.55351 17.0461 7.95756C16.449 7.36161 15.7399 6.8896 14.9597 6.56866C14.1796 6.24773 13.3436 6.0842 12.5 6.0875ZM12.5 16.6625C11.6767 16.6625 10.872 16.4184 10.1874 15.961C9.50292 15.5036 8.9694 14.8535 8.65435 14.0929C8.3393 13.3323 8.25687 12.4954 8.41748 11.6879C8.57809 10.8805 8.97453 10.1388 9.55667 9.55667C10.1388 8.97453 10.8805 8.57809 11.6879 8.41748C12.4954 8.25687 13.3323 8.3393 14.0929 8.65435C14.8535 8.9694 15.5036 9.50292 15.961 10.1874C16.4184 10.872 16.6625 11.6767 16.6625 12.5C16.6625 13.0466 16.5548 13.5879 16.3456 14.0929C16.1365 14.5979 15.8299 15.0568 15.4433 15.4433C15.0568 15.8299 14.5979 16.1365 14.0929 16.3456C13.5879 16.5548 13.0466 16.6625 12.5 16.6625Z" fill="#404040" />
        </svg>
    );
};

export const MenuIcon = ({
    color = "#D7DEFF",
    width = 35,
    height = 35,
    className = "",
    onClick,
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <g clipPath="url(#clip0_261_5108)">
                <path d="M0 7H35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0 17H35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0 28H35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_261_5108">
                    <rect width="35" height="35" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const FilterSettingsIcon = ({
    color = "#54858C",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14H7M9 8H15M17 12H23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const CloseIcon = ({
    color = "#3A3A3A",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const MinusIcon = ({
    color = "currentColor",
    width = 8,
    height = 2,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7.27273 0V1.25H0V0H7.27273Z" fill={color} />
        </svg>
    );
};

export const PlusIcon = ({
    color = "currentColor",
    width = 8,
    height = 8,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7.27273 3.01136V4.26136H0V3.01136H7.27273Z" fill={color} />
            <path d="M3.01139 0H4.26139V7.27273H3.01139V0Z" fill={color} />
        </svg>
    );
};

export const TourIcon = ({
    color = "#3A3A3A",
    width = 30,
    height = 20,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_706)">
            <path d="M17.251 1.10581C17.6611 1.10581 18.0322 1.27217 18.3008 1.54128C18.5693 1.8104 18.7353 2.18226 18.7353 2.59327C18.7353 3.00428 18.5693 3.37615 18.3008 3.64526C18.0322 3.91437 17.6611 4.08073 17.251 4.08073C16.8408 4.08073 16.4697 3.91437 16.2012 3.64526C15.9326 3.37615 15.7666 3.00428 15.7666 2.59327C15.7666 2.18226 15.9326 1.8104 16.2012 1.54128C16.4673 1.27462 16.8408 1.10581 17.251 1.10581ZM23.7573 14.718C23.1445 14.126 22.5561 13.5706 22.3535 13.4532C21.875 13.1792 20.7715 12.4232 20.2856 12.433C19.9292 12.4428 19.5947 12.6434 19.2822 13.0544L17.6465 15.5254L17.3389 15.8434L17.0312 15.5254L15.3955 13.0544C15.083 12.6434 14.7485 12.4404 14.3921 12.433C13.9062 12.4232 12.8027 13.1792 12.3242 13.4532L11.1865 14.1015L3.31054 15.8287C2.80272 16.2055 -0.546886 19.8728 0.0781138 20.0024H13.9917H14.0015H16.9311H30.0024V16.9688L27.605 15.8361C26.8335 15.4716 26.0351 16.0758 25.6152 16.2789V11.77H29.5727C29.9683 11.7235 30.0586 11.2416 29.8779 11.0312L29.6362 10.7498L27.4414 8.16636H28.9038C29.2505 8.10031 29.4043 7.6208 29.1016 7.32232L26.5845 4.36697H27.2485C27.7124 4.36697 27.9394 3.96575 27.6733 3.58165L25.2173 0.70948C25.0757 0.545566 24.9341 0.322936 24.6973 0.315596C24.4238 0.308257 24.2529 0.58471 24.0967 0.773089L21.7847 3.52294C21.4868 3.92416 21.6016 4.35474 22.0654 4.34006H22.8052L20.271 7.32477C19.9927 7.67217 20.1636 8.16636 20.6201 8.10031H21.8799L21.9482 8.16881L19.5947 10.9358C19.331 11.3419 19.4556 11.8287 20.0732 11.7725H23.7573V14.718ZM8.2202 1.16208C8.61327 1.02752 9.02587 1.06667 9.37255 1.23547C9.71923 1.40428 10.0024 1.71009 10.1367 2.10398C10.271 2.49786 10.2344 2.91131 10.0635 3.25872C9.89501 3.60612 9.58983 3.88991 9.19676 4.02447C8.8037 4.15902 8.3911 4.12232 8.04442 3.95107C7.69774 3.78226 7.41454 3.47645 7.28026 3.08257C7.14599 2.68869 7.18261 2.27523 7.3535 1.92783C7.5244 1.58043 7.8247 1.29908 8.2202 1.16208ZM12.1191 5.39205C12.0605 5.17676 12.1899 4.95413 12.4048 4.89786C12.6196 4.83914 12.8418 4.96881 12.8979 5.1841L13.0273 5.66361L13.0444 5.65627L13.0493 5.65382C13.2031 5.60245 13.3813 5.63425 13.5376 5.72722C13.6499 5.79327 13.75 5.88869 13.8208 6.00856C13.894 6.12844 13.938 6.27034 13.938 6.42691C13.9355 6.65199 13.8379 6.90153 13.5889 7.15107C13.5791 7.16086 13.5669 7.17064 13.5522 7.17309L13.4424 7.21713L14.5947 11.5229C14.5215 11.5131 14.4458 11.5034 14.3725 11.5034C14.1943 11.4985 13.9941 11.545 13.7866 11.6183L12.688 7.5156L12.4048 7.62813L12.2998 7.66728C11.687 7.88502 11.2402 8.04404 10.4614 7.85076C10.4565 7.84832 10.4516 7.84832 10.4443 7.84587C9.89989 7.63547 9.61669 7.33945 9.34325 7.05076L9.30419 7.00917L8.95507 9.23058C9.26757 9.4263 9.57763 9.57309 9.87059 9.71009C10.7617 10.126 11.4941 10.4709 11.6528 11.8728C11.6821 12.1248 11.6675 12.3621 11.6553 12.619V12.6239C11.6528 12.6606 11.6504 12.6997 11.6479 12.7927L11.3086 12.9859C10.9228 13.0104 10.4883 13.0936 10.0293 13.2159C10.0366 13.03 10.0464 12.8465 10.0561 12.663L10.0635 12.5358C10.0708 12.389 10.0781 12.2544 10.0708 12.1272C10.0635 12.0073 10.0415 11.8948 9.99022 11.7847L9.97557 11.7554C9.91942 11.6355 9.86815 11.5205 9.79247 11.4862C9.63866 11.4153 9.3994 11.3272 9.12352 11.2367C8.80858 11.1315 8.45702 11.0263 8.14696 10.9407C7.91991 11.6966 7.60985 12.1957 7.28026 13.0642C7.16552 13.3627 7.05077 13.6563 6.93114 13.9376C6.81884 13.9865 6.71386 14.033 6.61132 14.0795C6.1035 14.307 5.75194 14.4832 5.21239 14.3682C5.15624 14.356 5.09765 14.3462 5.03905 14.3339C5.25634 13.7688 5.48583 13.1303 5.71044 12.4869C6.04735 11.5229 6.36962 10.9505 6.60643 10.1627C6.46483 9.98899 6.33055 9.79572 6.23778 9.58043C6.13524 9.34557 6.08641 9.08869 6.13768 8.81468L6.63329 6.12599L6.60643 6.12355C6.43309 6.11621 6.29149 6.10887 6.12792 6.18226C5.90087 6.28257 5.72509 6.48318 5.52489 6.70826C5.44432 6.79878 5.36132 6.89419 5.2661 6.9896L5.25878 6.9945C5.18798 7.06789 5.11474 7.14373 5.04393 7.21468L4.16747 8.10275C4.12841 8.1419 4.06981 8.1419 4.03075 8.10275L3.07616 7.09725C3.03954 7.0581 3.03954 6.99694 3.0786 6.96025L3.95263 6.07462C4.02831 5.99878 4.09423 5.93028 4.15526 5.86667L4.16503 5.85688C4.55809 5.4263 4.88036 5.0789 5.29052 4.84648C5.708 4.61162 6.20604 4.49174 6.95311 4.52599H6.95556C7.22167 4.52844 7.53661 4.5578 7.7954 4.58226C7.91503 4.59205 8.02489 4.60428 8.11522 4.60917C9.37255 4.69235 9.96337 5.35535 10.4199 5.87156C10.6225 6.09908 10.7959 6.29725 10.9863 6.38777C11.0742 6.42936 11.2158 6.37064 11.3745 6.30459C11.4697 6.263 11.5723 6.22141 11.6797 6.19205C11.7505 6.16514 11.7871 6.15046 11.8164 6.14067C11.8555 6.12599 11.8799 6.11621 11.897 6.10887L12.2705 5.95963L12.1191 5.39205ZM15.9228 0.557798C15.8765 0.479511 15.9033 0.376758 15.9839 0.330275C16.062 0.283792 16.1645 0.310703 16.2109 0.391437L16.4233 0.760856C16.4697 0.839144 16.4429 0.941896 16.3623 0.988379C16.2817 1.03486 16.1816 1.00795 16.1352 0.927217L15.9228 0.557798ZM17.1167 0.166361C17.1167 0.0733945 17.1899 0 17.2827 0C17.3755 0 17.4487 0.075841 17.4487 0.166361V0.594495C17.4487 0.687462 17.3755 0.760856 17.2827 0.760856C17.1899 0.760856 17.1167 0.685015 17.1167 0.594495V0.166361ZM18.3472 0.425688C18.3935 0.347401 18.4936 0.318043 18.5742 0.364526C18.6523 0.411009 18.6816 0.511315 18.6352 0.592049L18.4228 0.961468C18.3765 1.0422 18.2764 1.06911 18.1958 1.02263C18.1152 0.976147 18.0884 0.875841 18.1348 0.795107L18.3472 0.425688ZM19.2822 1.26728C19.3628 1.2208 19.4629 1.24771 19.5093 1.32844C19.5557 1.40673 19.5288 1.50948 19.4482 1.55596L19.0796 1.76881C19.0015 1.81529 18.8989 1.78838 18.8525 1.70765C18.8061 1.62936 18.833 1.52661 18.9136 1.48012L19.2822 1.26728ZM19.6728 2.46361C19.7656 2.46361 19.8389 2.537 19.8389 2.62997C19.8389 2.72294 19.7632 2.79633 19.6728 2.79633H19.2456C19.1528 2.79633 19.0796 2.72294 19.0796 2.62997C19.0796 2.537 19.1528 2.46361 19.2456 2.46361H19.6728ZM19.4141 3.69664C19.4922 3.74312 19.5215 3.84343 19.4751 3.92416C19.4287 4.00245 19.3286 4.0318 19.248 3.98532L18.8794 3.77248C18.8013 3.72599 18.772 3.62569 18.8183 3.54495C18.8647 3.46422 18.9648 3.43731 19.0454 3.48379L19.4141 3.69664ZM18.5766 4.63364C18.623 4.71193 18.5962 4.81468 18.5156 4.86116C18.4375 4.90765 18.3349 4.88073 18.2886 4.8L18.0762 4.43058C18.0298 4.35229 18.0566 4.24954 18.1372 4.20306C18.2153 4.15658 18.3179 4.18349 18.3642 4.26422L18.5766 4.63364ZM17.3828 5.02508C17.3828 5.11804 17.3071 5.19144 17.2168 5.19144C17.124 5.19144 17.0508 5.1156 17.0508 5.02508V4.59694C17.0508 4.50398 17.124 4.43058 17.2168 4.43058C17.3096 4.43058 17.3828 4.50398 17.3828 4.59694V5.02508ZM16.1523 4.76575C16.1059 4.84404 16.0058 4.87339 15.9253 4.82691C15.8472 4.78043 15.8179 4.68012 15.8642 4.59939L16.0766 4.22997C16.123 4.15168 16.2231 4.12232 16.3037 4.16881C16.3843 4.21529 16.4111 4.3156 16.3647 4.39633L16.1523 4.76575ZM15.2173 3.92416C15.1391 3.97064 15.0366 3.94373 14.9902 3.863C14.9438 3.78471 14.9707 3.68196 15.0513 3.63547L15.4199 3.42263C15.498 3.37615 15.6006 3.40306 15.647 3.48379C15.6933 3.56208 15.6665 3.66483 15.5859 3.71132L15.2173 3.92416ZM14.8266 2.72783C14.7339 2.72783 14.6606 2.65199 14.6606 2.56147C14.6606 2.4685 14.7363 2.39511 14.8266 2.39511H15.2539C15.3467 2.39511 15.4199 2.4685 15.4199 2.56147C15.4199 2.65443 15.3467 2.72783 15.2539 2.72783H14.8266ZM15.0854 1.4948C15.0073 1.44832 14.978 1.34801 15.0244 1.26728C15.0708 1.18899 15.1709 1.15963 15.2515 1.20612L15.6201 1.41896C15.7007 1.46544 15.7275 1.56575 15.6811 1.64648C15.6348 1.72477 15.5347 1.75413 15.4541 1.70765L15.0854 1.4948Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_706">
                <rect width="30" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const TrainIcon = ({
    color = "#3A3A3A",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_709)">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.5569 24.7437H8.62407L7.10484 26.438H23.0212L21.5569 24.7437ZM5.67611 28.0298L3.90798 30H0L6.34845 22.8076H5.22034C3.68172 22.8076 2.42108 21.8555 2.42108 20.6934V2.11426C2.42431 0.952148 3.68172 0 5.22034 0H25.0092C26.5478 0 27.8084 0.952148 27.8084 2.11426V20.6934C27.8084 21.8555 26.5478 22.8076 25.0092 22.8076H23.9101L29.9968 29.8975H26.0047L24.3918 28.0298H5.67611ZM20.3545 16.5186H23.7421C24.1105 16.5186 24.4112 16.7456 24.4112 17.0239V19.5801C24.4112 19.8584 24.1105 20.0854 23.7421 20.0854H20.3545C19.986 20.0854 19.6854 19.8584 19.6854 19.5801V17.0215C19.6854 16.7456 19.986 16.5186 20.3545 16.5186ZM6.13512 16.5186H9.52268C9.89118 16.5186 10.1918 16.7456 10.1918 17.0239V19.5801C10.1918 19.8584 9.89118 20.0854 9.52268 20.0854H6.13512C5.76662 20.0854 5.46601 19.8584 5.46601 19.5801V17.0215C5.46601 16.7456 5.76662 16.5186 6.13512 16.5186ZM8.11335 4.07715H21.9513C23.4382 4.07715 24.6536 4.99512 24.6536 6.12061V9.33594C24.6536 10.459 23.4382 11.377 21.9513 11.377H8.11335C6.62644 11.377 5.41106 10.459 5.41106 9.33594V6.12061C5.41106 4.99756 6.62644 4.07715 8.11335 4.07715ZM12.3898 0.927734H17.6263C17.8882 0.927734 18.1015 1.08887 18.1015 1.28662V2.84424C18.1015 3.04199 17.8882 3.20312 17.6263 3.20312H12.3898C12.128 3.20312 11.9147 3.04199 11.9147 2.84424V1.28662C11.9114 1.08887 12.1248 0.927734 12.3898 0.927734Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_709">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const HotelIcon = ({
    color = "#3A3A3A",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_712)">
            <path d="M6.71371 23.5059V24.165C6.71371 24.2261 6.76964 24.2773 6.83622 24.2773H8.89214C8.95872 24.2773 9.01465 24.2261 9.01465 24.165V22.2632C9.01465 22.2021 8.95872 22.1509 8.89214 22.1509H6.83622C6.76964 22.1509 6.71371 22.2021 6.71371 22.2632V23.5059ZM3.36884 26.7285V7.37061H2.26897C2.14115 7.37061 2.03728 7.27539 2.03728 7.1582V0.544434C2.03728 0.395508 2.10386 0.258789 2.21305 0.161133C2.31957 0.0610352 2.46871 0 2.63116 0C5.64048 0 10.3622 0.00488281 15.0732 0.00976562C18.9055 0.0146484 22.7137 0.0170898 27.3688 0.0170898C27.5313 0.0170898 27.6804 0.078125 27.7869 0.175781C27.8935 0.275879 27.9601 0.410156 27.9601 0.559082V7.15576C27.9601 7.27295 27.8562 7.36816 27.7284 7.36816H26.6312V26.7285H30.0027V30H0V26.7285H3.36884ZM4.08522 26.7285H25.9121L25.9148 7.39258L4.08522 7.38037V26.7285ZM21.028 10.6079H23.0839C23.1505 10.6079 23.2064 10.6592 23.2064 10.7202V12.6221C23.2064 12.6831 23.1505 12.7344 23.0839 12.7344H21.028C20.9614 12.7344 20.9055 12.6831 20.9055 12.6221V10.7202C20.9055 10.6567 20.9614 10.6079 21.028 10.6079ZM17.4354 10.6079H19.4913C19.5579 10.6079 19.6138 10.6592 19.6138 10.7202V12.6221C19.6138 12.6831 19.5579 12.7344 19.4913 12.7344H17.4354C17.3688 12.7344 17.3129 12.6831 17.3129 12.6221V10.7202C17.3129 10.6567 17.3688 10.6079 17.4354 10.6079ZM21.028 22.1509H23.0839C23.1505 22.1509 23.2064 22.2021 23.2064 22.2632V24.165C23.2064 24.2261 23.1505 24.2773 23.0839 24.2773H21.028C20.9614 24.2773 20.9055 24.2261 20.9055 24.165V22.2632C20.9055 22.2021 20.9614 22.1509 21.028 22.1509ZM17.4354 22.1509H19.4913C19.5579 22.1509 19.6138 22.2021 19.6138 22.2632V24.165C19.6138 24.2261 19.5579 24.2773 19.4913 24.2773H17.4354C17.3688 24.2773 17.3129 24.2261 17.3129 24.165V22.2632C17.3129 22.2021 17.3688 22.1509 17.4354 22.1509ZM21.028 18.3032H23.0839C23.1505 18.3032 23.2064 18.3545 23.2064 18.4155V20.3174C23.2064 20.3784 23.1505 20.4297 23.0839 20.4297H21.028C20.9614 20.4297 20.9055 20.3784 20.9055 20.3174V18.4155C20.9055 18.3545 20.9614 18.3032 21.028 18.3032ZM17.4354 18.3032H19.4913C19.5579 18.3032 19.6138 18.3545 19.6138 18.4155V20.3174C19.6138 20.3784 19.5579 20.4297 19.4913 20.4297H17.4354C17.3688 20.4297 17.3129 20.3784 17.3129 20.3174V18.4155C17.3129 18.3545 17.3688 18.3032 17.4354 18.3032ZM21.028 14.4556H23.0839C23.1505 14.4556 23.2064 14.5068 23.2064 14.5679V16.4697C23.2064 16.5308 23.1505 16.582 23.0839 16.582H21.028C20.9614 16.582 20.9055 16.5308 20.9055 16.4697V14.5679C20.9055 14.5068 20.9614 14.4556 21.028 14.4556ZM17.4354 14.4556H19.4913C19.5579 14.4556 19.6138 14.5068 19.6138 14.5679V16.4697C19.6138 16.5308 19.5579 16.582 19.4913 16.582H17.4354C17.3688 16.582 17.3129 16.5308 17.3129 16.4697V14.5679C17.3129 14.5068 17.3688 14.4556 17.4354 14.4556ZM10.5113 10.6079H12.5672C12.6338 10.6079 12.6897 10.6592 12.6897 10.7202V12.6221C12.6897 12.6831 12.6338 12.7344 12.5672 12.7344H10.5113C10.4447 12.7344 10.3888 12.6831 10.3888 12.6221V10.7202C10.3888 10.6567 10.4447 10.6079 10.5113 10.6079ZM6.91878 10.6079H8.9747C9.04128 10.6079 9.0972 10.6592 9.0972 10.7202V12.6221C9.0972 12.6831 9.04128 12.7344 8.9747 12.7344H6.91878C6.8522 12.7344 6.79627 12.6831 6.79627 12.6221V10.7202C6.79627 10.6567 6.84953 10.6079 6.91878 10.6079ZM10.4288 22.1509H12.4847C12.5513 22.1509 12.6072 22.2021 12.6072 22.2632V24.165C12.6072 24.2261 12.5513 24.2773 12.4847 24.2773H10.4288C10.3622 24.2773 10.3063 24.2261 10.3063 24.165V22.2632C10.3063 22.2021 10.3622 22.1509 10.4288 22.1509ZM10.4288 18.3032H12.4847C12.5513 18.3032 12.6072 18.3545 12.6072 18.4155V20.3174C12.6072 20.3784 12.5513 20.4297 12.4847 20.4297H10.4288C10.3622 20.4297 10.3063 20.3784 10.3063 20.3174V18.4155C10.3063 18.3545 10.3622 18.3032 10.4288 18.3032ZM6.83356 18.3032H8.88948C8.95606 18.3032 9.01198 18.3545 9.01198 18.4155V20.3174C9.01198 20.3784 8.95606 20.4297 8.88948 20.4297H6.83356C6.76698 20.4297 6.71105 20.3784 6.71105 20.3174V18.4155C6.71372 18.3545 6.76698 18.3032 6.83356 18.3032ZM10.4288 14.4556H12.4847C12.5513 14.4556 12.6072 14.5068 12.6072 14.5679V16.4697C12.6072 16.5308 12.5513 16.582 12.4847 16.582H10.4288C10.3622 16.582 10.3063 16.5308 10.3063 16.4697V14.5679C10.3063 14.5068 10.3622 14.4556 10.4288 14.4556ZM6.83356 14.4556H8.88948C8.95606 14.4556 9.01198 14.5068 9.01198 14.5679V16.4697C9.01198 16.5308 8.95606 16.582 8.88948 16.582H6.83356C6.76698 16.582 6.71105 16.5308 6.71105 16.4697V14.5679C6.71372 14.5068 6.76698 14.4556 6.83356 14.4556ZM5.30226 1.92627H6.45273V3.1543H7.71238V1.92627H8.86818V5.44434H7.71238V4.01855H6.45273V5.44434H5.30226V1.92627ZM9.58455 3.68652C9.58455 3.11279 9.75499 2.66602 10.0932 2.34619C10.4314 2.02637 10.9055 1.86523 11.51 1.86523C12.1305 1.86523 12.6099 2.02148 12.9454 2.33643C13.281 2.65137 13.4487 3.09082 13.4487 3.65723C13.4487 4.06738 13.3768 4.4043 13.2304 4.66797C13.0839 4.93164 12.8708 5.13672 12.5939 5.2832C12.3169 5.42969 11.9707 5.50293 11.5579 5.50293C11.1372 5.50293 10.7909 5.43945 10.514 5.3125C10.2397 5.18555 10.016 4.98535 9.84288 4.71191C9.67244 4.44092 9.58455 4.09912 9.58455 3.68652ZM10.7377 3.68896C10.7377 4.04297 10.8069 4.29932 10.9481 4.45312C11.0892 4.60693 11.2783 4.68506 11.5206 4.68506C11.7683 4.68506 11.9601 4.60938 12.0959 4.45801C12.2317 4.30664 12.3009 4.0332 12.3009 3.64014C12.3009 3.30811 12.229 3.06641 12.0879 2.91504C11.9467 2.76123 11.755 2.68555 11.51 2.68555C11.2783 2.68555 11.0892 2.76367 10.9481 2.91748C10.8069 3.07373 10.7377 3.33252 10.7377 3.68896ZM13.771 1.92627H17.2756V2.79541H16.0985V5.44434H14.9481V2.79541H13.771V1.92627ZM17.8881 1.92627H20.972V2.67822H19.0466V3.23975H20.8336V3.95752H19.0466V4.65088H21.0306V5.44678H17.8881V1.92627ZM21.7443 1.92627H22.8948V4.58008H24.6977V5.44434H21.7443V1.92627ZM2.75366 0.778809V6.71143H27.2437V0.795898C27.2437 0.761719 27.2304 0.732422 27.2064 0.710449C27.1824 0.688477 27.1505 0.67627 27.1132 0.67627C24.1971 0.67627 19.7603 0.671387 15.0732 0.666504C11.2117 0.661621 7.58988 0.65918 2.88682 0.65918C2.84953 0.65918 2.81758 0.673828 2.79361 0.695801C2.76964 0.715332 2.75366 0.744629 2.75366 0.778809ZM16.0506 8.54492H24.466C24.6099 8.54492 24.7377 8.60596 24.8282 8.70605C24.9081 8.79395 24.9587 8.91357 24.9587 9.04297V25.5957C24.9587 25.7251 24.9081 25.8447 24.8282 25.9326C24.8229 25.9375 24.8176 25.9448 24.8123 25.9497C24.7244 26.0376 24.6019 26.0938 24.4687 26.0938H16.0533C15.9095 26.0938 15.7843 26.0327 15.6937 25.9326C15.6112 25.8447 15.5606 25.7251 15.5606 25.5957V9.04297C15.5606 8.91357 15.6112 8.79395 15.6911 8.70605C15.779 8.60596 15.9068 8.54492 16.0506 8.54492ZM24.2104 9.20166H16.3063C16.3063 9.20166 16.3036 9.2041 16.2983 9.20898C16.285 9.22363 16.277 9.24805 16.277 9.2749V25.3589C16.277 25.3857 16.285 25.4102 16.2983 25.4248C16.3036 25.4297 16.3063 25.4321 16.3063 25.4321H24.2104C24.2104 25.4321 24.2104 25.4321 24.213 25.4321L24.474 25.4248C24.4874 25.4102 24.2397 25.3857 24.2397 25.3589V9.2749C24.2397 9.24805 24.4874 9.22363 24.474 9.20898C24.4687 9.2041 24.2104 9.20166 24.2104 9.20166ZM5.49401 8.52783H13.9068C14.0506 8.52783 14.1784 8.58887 14.269 8.68652C14.3489 8.77441 14.3995 8.89404 14.3995 9.02344V25.5933C14.3995 25.7227 14.3489 25.8423 14.269 25.9302C14.1784 26.0278 14.0506 26.0889 13.9068 26.0889H5.49401C5.35286 26.0889 5.22503 26.0278 5.13449 25.9277C5.05193 25.8398 5.00133 25.7202 5.00133 25.5908V9.02344C5.00133 8.89404 5.05193 8.77441 5.13449 8.68652C5.22503 8.58887 5.35286 8.52783 5.49401 8.52783ZM13.6538 9.18457H5.74967C5.74967 9.18457 5.74434 9.18701 5.74168 9.19189C5.72836 9.20654 5.72037 9.22852 5.72037 9.25781V25.3589C5.72037 25.3857 5.72836 25.4102 5.74168 25.4248C5.747 25.4297 5.74967 25.4321 5.74967 25.4321H13.6511C13.6511 25.4321 13.6538 25.4297 13.6591 25.4248C13.6724 25.4102 13.6804 25.3857 13.6804 25.3589V9.25781C13.6804 9.23096 13.6724 9.20654 13.6591 9.19189C13.6565 9.18701 13.6538 9.18457 13.6538 9.18457Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_712">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const CarIcon = ({
    color = "#3A3A3A",
    width = 41,
    height = 15,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_715)">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.30566 8.26744C4.51122 8.26744 3.05637 9.77468 3.05637 11.6337C3.05637 13.4928 4.51122 15 6.30566 15C8.10009 15 9.55495 13.4928 9.55495 11.6337C9.55495 9.77468 8.10009 8.26744 6.30566 8.26744ZM33.2521 10.0265V11.2371H32.0836C32.2234 10.6439 32.6762 10.1713 33.2521 10.0265ZM32.0803 12.0269H33.2521V13.2375C32.6762 13.0961 32.2234 12.6236 32.0803 12.0269ZM34.0145 13.241V12.0304H35.1831C35.0432 12.6236 34.5871 13.0927 34.0145 13.241ZM35.1831 11.2405H34.0145V10.0299C34.5871 10.1713 35.0432 10.6438 35.1831 11.2405ZM5.9228 10.0265V11.2371H4.75425C4.89408 10.6439 5.34685 10.1713 5.9228 10.0265ZM4.75425 12.0269H5.9228V13.2375C5.34685 13.0961 4.89408 12.6236 4.75425 12.0269ZM6.68518 13.241V12.0304H7.85373C7.71391 12.6236 7.26114 13.0927 6.68518 13.241ZM7.85706 11.2405H6.68851V10.0299C7.26114 10.1713 7.71391 10.6438 7.85706 11.2405ZM24.4997 4.41138C25.0124 4.29066 25.5217 4.29066 26.0344 4.31481C22.0228 2.13155 20.4481 0.71398 15.7506 1.00025L16.3964 5.4392L24.1301 5.74272C24.0602 5.53233 24.0203 5.41851 24.007 5.20812C23.9703 4.60798 23.977 4.53555 24.4997 4.41138ZM14.5687 1.07958L15.4077 5.38057L7.37432 5.04256C6.54869 5.00807 6.40553 4.63212 6.90491 3.91127C7.1313 3.58361 7.38432 3.25939 7.67395 2.93863C9.75137 0.64155 11.8188 1.11752 14.5687 1.07958ZM40.7561 9.40908H40.5098C40.3566 8.70547 40.0537 8.07084 39.6076 7.50175C38.6288 6.23939 38.1827 6.39805 36.7278 6.12557L28.5846 4.53555C26.7768 3.20421 24.5962 2.01773 21.9362 1.0175C19.4693 0.0862496 17.7281 -0.00342622 15.0881 2.28529e-05C13.5766 0.00347192 12.0452 0.0965968 10.4904 0.289745C9.70143 0.341481 8.92906 0.451851 8.17001 0.610508C7.26114 0.800207 6.36891 1.06234 5.49334 1.37275L2.23073 3.32493C1.26859 3.90092 1.06218 4.57349 0.939003 5.67374L0.479572 9.73674H0.00349808V11.9821C0.0700836 12.7374 0.356396 12.8513 0.962307 12.8513H1.75132C1.44504 5.74962 11.0897 4.53555 10.88 13.4135H29.337C28.0952 7.29135 34.0545 5.16673 36.9808 8.66753C37.8697 9.73329 38.1793 11.1888 38.0994 12.9099H40.2334C40.4032 12.8271 40.5364 12.7133 40.6363 12.5719C40.9858 12.0787 40.9093 10.5921 40.8826 9.73329C40.8793 9.50221 40.9492 9.40908 40.7561 9.40908ZM33.6317 8.26744C31.8372 8.26744 30.3824 9.77468 30.3824 11.6337C30.3824 13.4928 31.8372 15 33.6317 15C35.4261 15 36.8809 13.4928 36.8809 11.6337C36.8809 9.77468 35.4261 8.26744 33.6317 8.26744Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_715">
                <rect width="40.9091" height="15" fill="white" transform="matrix(-1 0 0 1 40.9091 0)" />
            </clipPath>
        </defs>
    </svg>
);

export const MapPinIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M22.5 10C22.5 14.5162 17.6638 19.2863 15.7588 20.9938C15.5408 21.1602 15.2742 21.2504 15 21.2504C14.7258 21.2504 14.4592 21.1602 14.2412 20.9938C12.3375 19.2863 7.5 14.5162 7.5 10C7.5 8.01088 8.29018 6.10322 9.6967 4.6967C11.1032 3.29018 13.0109 2.5 15 2.5C16.9891 2.5 18.8968 3.29018 20.3033 4.6967C21.7098 6.10322 22.5 8.01088 22.5 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12.5C16.3807 12.5 17.5 11.3807 17.5 10C17.5 8.61929 16.3807 7.5 15 7.5C13.6193 7.5 12.5 8.61929 12.5 10C12.5 11.3807 13.6193 12.5 15 12.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.8925 17.5H6.255C5.99291 17.5001 5.73749 17.5826 5.52484 17.7358C5.31219 17.889 5.15308 18.1052 5.07 18.3537L2.565 25.8538C2.5022 26.0416 2.48496 26.2418 2.51469 26.4376C2.54443 26.6335 2.62029 26.8195 2.73603 26.9803C2.85176 27.141 3.00405 27.272 3.18035 27.3624C3.35665 27.4527 3.55189 27.4999 3.75 27.5H26.25C26.448 27.4998 26.6431 27.4527 26.8192 27.3624C26.9954 27.2721 27.1476 27.1412 27.2633 26.9806C27.379 26.82 27.4549 26.6342 27.4848 26.4385C27.5146 26.2428 27.4976 26.0428 27.435 25.855L24.935 18.355C24.8521 18.106 24.6929 17.8894 24.4799 17.7359C24.267 17.5825 24.0112 17.4999 23.7488 17.5H19.1088" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BuildingIcon = ({
    color = "#4558B6",
    width = 30,
    height = 26,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_1186)">
            <path d="M8.68411 25.2447H6.36233V21.6411C6.36233 21.5763 6.33661 21.5141 6.29083 21.4682C6.24504 21.4224 6.18294 21.3966 6.11819 21.3966H3.19583C3.12966 21.3965 3.06596 21.4218 3.01783 21.4673C2.9697 21.5127 2.94079 21.5749 2.93704 21.6411V25.2447H2.52444V26.0001H27.4756V25.2447H27.063V21.6411C27.0593 21.5749 27.0304 21.5127 26.9822 21.4673C26.9341 21.4218 26.8704 21.3965 26.8042 21.3966H23.8941C23.861 21.395 23.8279 21.4001 23.7969 21.4116C23.7658 21.4231 23.7375 21.4409 23.7135 21.4638C23.6895 21.4866 23.6704 21.5141 23.6574 21.5446C23.6444 21.5751 23.6377 21.6079 23.6377 21.6411V25.2447H18.1739V20.1498C18.1742 20.1037 18.1653 20.058 18.1477 20.0154C18.1301 19.9728 18.1041 19.9342 18.0713 19.9018C18.0386 19.8695 17.9996 19.844 17.9569 19.827C17.9141 19.8099 17.8683 19.8017 17.8223 19.8026H12.146C12.0547 19.8026 11.9672 19.839 11.9026 19.9036C11.8381 19.9683 11.8018 20.0559 11.8018 20.1474V25.2422H7.93216V8.03602H0.732451V25.2447H2.53665V26.0001H0.344267C0.25297 26.0001 0.165411 25.9638 0.100854 25.8991C0.036297 25.8345 2.91831e-05 25.7468 2.91831e-05 25.6554V7.82333C-0.000696987 7.75682 0.012136 7.69086 0.0377429 7.62948C0.0633499 7.56811 0.101192 7.51261 0.148955 7.46639C0.195038 7.4193 0.250154 7.38204 0.31099 7.35683C0.371826 7.33162 0.437124 7.31899 0.502959 7.31971H7.93216V0.550171C7.94554 0.409526 8.00774 0.27803 8.10794 0.178568C8.16489 0.120695 8.233 0.0750294 8.30812 0.0443484C8.38325 0.0136674 8.46383 -0.00138724 8.54495 0.000100423H21.4429C21.5219 -0.000475063 21.6001 0.0148054 21.6731 0.0450388C21.7461 0.0752722 21.8122 0.119845 21.8677 0.176123L21.8946 0.20546C21.993 0.314844 22.0478 0.456707 22.0484 0.603956V7.31482H29.4947C29.5605 7.3141 29.6258 7.32673 29.6866 7.35194C29.7475 7.37715 29.8026 7.41442 29.8487 7.4615C29.8964 7.50773 29.9343 7.56322 29.9599 7.62459C29.9855 7.68597 29.9983 7.75193 29.9976 7.81844V25.6652C29.9976 25.7566 29.9613 25.8443 29.8968 25.9089C29.8322 25.9736 29.7446 26.0099 29.6534 26.0099H27.4732V25.2545H29.2774V8.03602H22.0459V25.2447H21.2915V0.753086H8.68411V25.2447ZM4.01126 9.53466H2.15091C2.13626 9.53466 2.12161 9.55421 2.12161 9.57866V10.7864C2.12161 10.8108 2.13626 10.8328 2.15091 10.8328H4.01126C4.02591 10.8328 4.04056 10.8133 4.04056 10.7864V9.56644C4.04056 9.54199 4.02591 9.52243 4.01126 9.52243V9.53466ZM4.01126 17.9128H2.15091C2.13626 17.9128 2.12161 17.9348 2.12161 17.9568V19.1646C2.12161 19.1866 2.13626 19.211 2.15091 19.211H4.01126C4.02591 19.211 4.04056 19.189 4.04056 19.1646V17.9446C4.04056 17.9226 4.02591 17.9006 4.01126 17.9006V17.9128ZM7.15091 17.9128H5.29056C5.27347 17.9128 5.26126 17.9348 5.26126 17.9568V19.1646C5.26126 19.1866 5.27347 19.211 5.29056 19.211H7.15091C7.16556 19.211 7.17776 19.189 7.17776 19.1646V17.9446C7.17776 17.9226 7.17776 17.9006 7.15091 17.9006V17.9128ZM4.01126 15.1063H2.15091C2.13626 15.1063 2.12161 15.1283 2.12161 15.1527V16.3604C2.12161 16.3849 2.13626 16.4069 2.15091 16.4069H4.01126C4.02591 16.4069 4.04056 16.3873 4.04056 16.3604V15.1576C4.04056 15.1307 4.02591 15.1111 4.01126 15.1111V15.1063ZM4.01126 12.3143H2.15091C2.13626 12.3143 2.12161 12.3339 2.12161 12.3608V13.5685C2.12161 13.5905 2.13626 13.615 2.15091 13.615H4.01126C4.02591 13.615 4.04056 13.593 4.04056 13.5685V12.3608C4.04056 12.3339 4.02591 12.3143 4.01126 12.3143ZM7.15091 9.53466H5.29056C5.27347 9.53466 5.26126 9.55421 5.26126 9.57866V10.7864C5.26126 10.8108 5.27347 10.8328 5.29056 10.8328H7.15091C7.16556 10.8328 7.17776 10.8133 7.17776 10.7864V9.56644C7.17776 9.54199 7.17776 9.52243 7.15091 9.52243V9.53466ZM7.15091 15.1185H5.29056C5.27347 15.1185 5.26126 15.1405 5.26126 15.1649V16.3726C5.26126 16.3971 5.27347 16.4191 5.29056 16.4191H7.15091C7.16556 16.4191 7.17776 16.3995 7.17776 16.3726V15.1576C7.17776 15.1307 7.17776 15.1111 7.15091 15.1111V15.1185ZM7.15091 12.3266H5.29056C5.27347 12.3266 5.26126 12.3461 5.26126 12.373V13.5685C5.26126 13.5905 5.27347 13.615 5.29056 13.615H7.15091C7.16556 13.615 7.17776 13.593 7.17776 13.5685V12.3608C7.17776 12.3339 7.17776 12.3143 7.15091 12.3143V12.3266ZM25.9888 9.53466H27.8492C27.8638 9.53466 27.8784 9.55421 27.8784 9.57866V10.7864C27.8784 10.8108 27.8638 10.8328 27.8492 10.8328H25.9888C25.9741 10.8328 25.9595 10.8133 25.9595 10.7864V9.56644C25.9595 9.54199 25.9741 9.52243 25.9888 9.52243V9.53466ZM25.9888 17.9128H27.8492C27.8638 17.9128 27.8784 17.9348 27.8784 17.9568V19.1646C27.8784 19.1866 27.8638 19.211 27.8492 19.211H25.9888C25.9741 19.211 25.9595 19.189 25.9595 19.1646V17.9446C25.9595 17.9226 25.9741 17.9006 25.9888 17.9006V17.9128ZM22.8491 17.9128H24.7095C24.7266 17.9128 24.7388 17.9348 24.7388 17.9568V19.1646C24.7388 19.1866 24.7388 19.211 24.7095 19.211H22.8491C22.8345 19.211 22.8223 19.189 22.8223 19.1646V17.9446C22.8223 17.9226 22.8223 17.9006 22.8491 17.9006V17.9128ZM25.9888 15.1185H27.8492C27.8638 15.1185 27.8784 15.1405 27.8784 15.1649V16.3726C27.8784 16.3971 27.8638 16.4191 27.8492 16.4191H25.9888C25.9741 16.4191 25.9595 16.3995 25.9595 16.3726V15.1576C25.9595 15.1307 25.9741 15.1111 25.9888 15.1111V15.1185ZM25.9888 12.3266H27.8492C27.8638 12.3266 27.8784 12.3461 27.8784 12.373V13.5685C27.8784 13.5905 27.8638 13.615 27.8492 13.615H25.9888C25.9741 13.615 25.9595 13.593 25.9595 13.5685V12.3608C25.9595 12.3339 25.9741 12.3143 25.9888 12.3143V12.3266ZM22.8491 9.53466H24.7095C24.7266 9.53466 24.7388 9.55421 24.7388 9.57866V10.7864C24.7388 10.8108 24.7388 10.8328 24.7095 10.8328H22.8491C22.8345 10.8328 22.8223 10.8133 22.8223 10.7864V9.56644C22.8223 9.54199 22.8223 9.52243 22.8491 9.52243V9.53466ZM22.8491 15.1185H24.7095C24.7266 15.1185 24.7388 15.1405 24.7388 15.1649V16.3726C24.7388 16.3971 24.7388 16.4191 24.7095 16.4191H22.8491C22.8345 16.4191 22.8223 16.3995 22.8223 16.3726V15.1576C22.8223 15.1307 22.8223 15.1111 22.8491 15.1111V15.1185ZM22.8491 12.3266H24.7095C24.7266 12.3266 24.7388 12.3461 24.7388 12.373V13.5685C24.7388 13.5905 24.7388 13.615 24.7095 13.615H22.8491C22.8345 13.615 22.8223 13.593 22.8223 13.5685V12.3608C22.8223 12.3339 22.8223 12.3143 22.8491 12.3143V12.3266ZM10.4981 2.65022H12.522C12.5371 2.6502 12.5517 2.65605 12.5626 2.66653C12.5735 2.67701 12.58 2.69131 12.5806 2.70645V4.7356C12.58 4.75073 12.5735 4.76503 12.5626 4.77551C12.5517 4.78599 12.5371 4.79184 12.522 4.79183H10.4981C10.4832 4.79183 10.4689 4.7859 10.4584 4.77536C10.4478 4.76481 10.4419 4.75051 10.4419 4.7356V2.70645C10.4419 2.69153 10.4478 2.67723 10.4584 2.66669C10.4689 2.65614 10.4832 2.65022 10.4981 2.65022ZM17.4585 2.65022H19.4825C19.4976 2.6502 19.5121 2.65605 19.523 2.66653C19.534 2.67701 19.5404 2.69131 19.541 2.70645V4.7356C19.5404 4.75073 19.534 4.76503 19.523 4.77551C19.5121 4.78599 19.4976 4.79184 19.4825 4.79183H17.4561C17.441 4.79184 17.4264 4.78599 17.4155 4.77551C17.4046 4.76503 17.3981 4.75073 17.3975 4.7356V2.70645C17.3981 2.69131 17.4046 2.67701 17.4155 2.66653C17.4264 2.65605 17.441 2.6502 17.4561 2.65022H17.4585ZM13.9771 2.65022H16.0034C16.0183 2.65022 16.0326 2.65614 16.0432 2.66669C16.0537 2.67723 16.0596 2.69153 16.0596 2.70645V4.7356C16.0596 4.75051 16.0537 4.76481 16.0432 4.77536C16.0326 4.7859 16.0183 4.79183 16.0034 4.79183H13.9771C13.9624 4.79122 13.9484 4.78511 13.938 4.77469C13.9276 4.76427 13.9215 4.75032 13.9209 4.7356V2.70645C13.9215 2.69173 13.9276 2.67777 13.938 2.66735C13.9484 2.65694 13.9624 2.65082 13.9771 2.65022ZM10.4981 7.041H12.522C12.5375 7.041 12.5524 7.04718 12.5634 7.05819C12.5744 7.06919 12.5806 7.08412 12.5806 7.09968V9.12638C12.5806 9.13409 12.5791 9.14172 12.5761 9.14884C12.5732 9.15595 12.5689 9.16242 12.5634 9.16787C12.558 9.17332 12.5515 9.17764 12.5444 9.18059C12.5373 9.18354 12.5297 9.18506 12.522 9.18506H10.4981C10.4905 9.18506 10.483 9.18353 10.476 9.18055C10.469 9.17758 10.4627 9.17322 10.4575 9.16773C10.4522 9.16225 10.4482 9.15576 10.4455 9.14865C10.4428 9.14155 10.4416 9.13397 10.4419 9.12638V7.0899C10.4437 7.07629 10.4504 7.06381 10.4608 7.0548C10.4711 7.04579 10.4844 7.04089 10.4981 7.041ZM17.4585 7.041H19.4825C19.4947 7.04292 19.506 7.0487 19.5148 7.05748C19.5236 7.06627 19.5294 7.07762 19.5313 7.0899V9.1166C19.5313 9.13216 19.5251 9.14709 19.5141 9.15809C19.5031 9.1691 19.4882 9.17528 19.4727 9.17528H17.4561C17.4405 9.17528 17.4256 9.1691 17.4147 9.15809C17.4037 9.14709 17.3975 9.13216 17.3975 9.1166V7.0899C17.3975 7.07434 17.4037 7.05941 17.4147 7.04841C17.4256 7.03741 17.4405 7.03122 17.4561 7.03122L17.4585 7.041ZM13.9771 7.041H16.0034C16.011 7.041 16.0185 7.04253 16.0255 7.0455C16.0325 7.04848 16.0388 7.05284 16.044 7.05833C16.0493 7.06381 16.0534 7.0703 16.056 7.07741C16.0587 7.08451 16.0599 7.09209 16.0596 7.09968V9.12638C16.0599 9.13397 16.0587 9.14155 16.056 9.14865C16.0534 9.15576 16.0493 9.16225 16.044 9.16773C16.0388 9.17322 16.0325 9.17758 16.0255 9.18055C16.0185 9.18353 16.011 9.18506 16.0034 9.18506H13.9771C13.962 9.18443 13.9477 9.17797 13.9372 9.16703C13.9268 9.15609 13.9209 9.14153 13.9209 9.12638V7.0899C13.9209 7.07475 13.9268 7.06019 13.9372 7.04925C13.9477 7.03831 13.962 7.03186 13.9771 7.03122V7.041ZM10.4981 15.825H12.522C12.5375 15.825 12.5524 15.8312 12.5634 15.8422C12.5744 15.8532 12.5806 15.8681 12.5806 15.8837V17.9104C12.5806 17.926 12.5744 17.9409 12.5634 17.9519C12.5524 17.9629 12.5375 17.9691 12.522 17.9691H10.4981C10.4905 17.9691 10.483 17.9675 10.476 17.9646C10.469 17.9616 10.4627 17.9572 10.4575 17.9517C10.4522 17.9463 10.4482 17.9398 10.4455 17.9327C10.4428 17.9256 10.4416 17.918 10.4419 17.9104V15.891C10.4416 15.8834 10.4428 15.8759 10.4455 15.8688C10.4482 15.8617 10.4522 15.8552 10.4575 15.8497C10.4627 15.8442 10.469 15.8398 10.476 15.8369C10.483 15.8339 10.4905 15.8323 10.4981 15.8324V15.825ZM17.4585 15.825H19.4825C19.4976 15.8274 19.5112 15.8357 19.5203 15.848C19.5295 15.8604 19.5334 15.8758 19.5313 15.891V17.9177C19.5313 17.9333 19.5251 17.9482 19.5141 17.9592C19.5031 17.9702 19.4882 17.9764 19.4727 17.9764H17.4561C17.4405 17.9764 17.4256 17.9702 17.4147 17.9592C17.4037 17.9482 17.3975 17.9333 17.3975 17.9177V15.891C17.3975 15.8755 17.4037 15.8605 17.4147 15.8495C17.4256 15.8385 17.4405 15.8324 17.4561 15.8324L17.4585 15.825ZM13.9771 15.825H16.0034C16.011 15.825 16.0185 15.8265 16.0255 15.8295C16.0325 15.8325 16.0388 15.8369 16.044 15.8423C16.0493 15.8478 16.0534 15.8543 16.056 15.8614C16.0587 15.8685 16.0599 15.8761 16.0596 15.8837V17.9104C16.0599 17.918 16.0587 17.9256 16.056 17.9327C16.0534 17.9398 16.0493 17.9463 16.044 17.9517C16.0388 17.9572 16.0325 17.9616 16.0255 17.9646C16.0185 17.9675 16.011 17.9691 16.0034 17.9691H13.9771C13.962 17.9684 13.9477 17.962 13.9372 17.951C13.9268 17.9401 13.9209 17.9255 13.9209 17.9104V15.891C13.9209 15.8759 13.9268 15.8613 13.9372 15.8504C13.9477 15.8394 13.962 15.833 13.9771 15.8324V15.825ZM10.4981 11.4342H12.522C12.5371 11.4342 12.5517 11.4401 12.5626 11.4505C12.5735 11.461 12.58 11.4753 12.5806 11.4905V13.5196C12.5806 13.5272 12.5791 13.5347 12.5761 13.5417C12.5731 13.5487 12.5688 13.555 12.5633 13.5603C12.5578 13.5655 12.5513 13.5696 12.5442 13.5723C12.5371 13.575 12.5296 13.5762 12.522 13.5758H10.4981C10.4832 13.5758 10.4689 13.5699 10.4584 13.5594C10.4478 13.5488 10.4419 13.5345 10.4419 13.5196V11.4905C10.4419 11.4756 10.4478 11.4612 10.4584 11.4507C10.4689 11.4402 10.4832 11.4342 10.4981 11.4342ZM17.4585 11.4342H19.4825C19.4958 11.4365 19.508 11.4433 19.5169 11.4536C19.5258 11.4638 19.5309 11.4769 19.5313 11.4905V13.5196C19.5313 13.5272 19.5298 13.5347 19.5268 13.5417C19.5238 13.5487 19.5195 13.555 19.514 13.5603C19.5085 13.5655 19.502 13.5696 19.4949 13.5723C19.4878 13.575 19.4803 13.5762 19.4727 13.5758H17.4561C17.4485 13.5762 17.4409 13.575 17.4338 13.5723C17.4267 13.5696 17.4203 13.5655 17.4148 13.5603C17.4093 13.555 17.405 13.5487 17.402 13.5417C17.399 13.5347 17.3975 13.5272 17.3975 13.5196V11.4905C17.3981 11.4753 17.4046 11.461 17.4155 11.4505C17.4264 11.4401 17.441 11.4342 17.4561 11.4342H17.4585ZM13.9771 11.4342H16.0034C16.0183 11.4342 16.0326 11.4402 16.0432 11.4507C16.0537 11.4612 16.0596 11.4756 16.0596 11.4905V13.5196C16.0596 13.5345 16.0537 13.5488 16.0432 13.5594C16.0326 13.5699 16.0183 13.5758 16.0034 13.5758H13.9771C13.9693 13.5765 13.9615 13.5756 13.9541 13.5731C13.9467 13.5705 13.9399 13.5665 13.9342 13.5612C13.9284 13.5559 13.9239 13.5495 13.9207 13.5423C13.9176 13.5352 13.916 13.5274 13.916 13.5196V11.4905C13.9166 11.4757 13.9228 11.4618 13.9332 11.4514C13.9436 11.441 13.9575 11.4348 13.9722 11.4342H13.9771Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_1186">
                <rect width="30" height="26" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const TourGroupIcon = ({
    color = "#4558B6",
    width = 24,
    height = 17,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_969)">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.95703 11.5016C6.92773 13.4995 9.77539 13.5688 10.7051 11.5132C10.4512 11.2608 10.2637 11.0354 10.0762 10.7657C10.0449 10.7214 10.0156 10.677 9.98438 10.6327C9.53516 10.9834 9.03906 11.1606 8.32813 11.1587C7.57422 11.1568 7.00781 10.8736 6.47852 10.363C6.41016 10.548 6.32422 10.7695 6.23242 10.9776C6.14453 11.178 6.04883 11.3668 5.95703 11.5016ZM20.2578 11.7848C22.3887 12.6614 23.7363 13.7942 23.9727 16.2583C24.0391 16.9538 24.0332 16.923 23.3574 16.9365C15.9355 17.0809 8.30469 16.9365 0.884766 16.9365C-0.730469 16.8151 0.265625 14.0601 0.751953 13.4263C0.986328 13.1219 1.27539 12.8964 1.59766 12.7211C2.55664 12.1933 4.6582 12.0179 5.61133 11.309C5.68945 11.1953 5.77539 11.0258 5.85742 10.8408C5.97656 10.5711 6.08594 10.2763 6.15625 10.076C5.86524 9.73688 5.61524 9.35542 5.375 8.97974L4.58594 7.74096C4.29688 7.31519 4.14648 6.92795 4.13867 6.61007C4.13477 6.4598 4.16016 6.32494 4.2168 6.20549C4.27539 6.08026 4.36523 5.97623 4.48828 5.89531C4.54492 5.85678 4.60938 5.82596 4.67969 5.79898C4.62891 5.12661 4.60938 4.28085 4.64258 3.57188C4.66016 3.40427 4.69141 3.23473 4.74023 3.06712C4.94141 2.35621 5.44727 1.78402 6.07422 1.39101C6.41992 1.1733 6.79688 1.00955 7.19336 0.899732C7.44336 0.830376 6.98047 0.0385578 7.23828 0.0135125C8.49219 -0.113641 10.5195 1.01533 11.3945 1.94971C11.834 2.41786 12.1074 3.03822 12.168 3.85893L12.1172 5.87605C12.3359 5.94155 12.4766 6.07834 12.5332 6.29989C12.5977 6.54456 12.5273 6.89135 12.3164 7.36335C12.3125 7.37106 12.3086 7.38069 12.3027 7.3884L11.4023 8.85066C11.0723 9.38817 10.7363 9.92568 10.2988 10.3515C10.3379 10.4073 10.377 10.4632 10.416 10.521C10.5938 10.7772 10.7734 11.0373 11.0039 11.2666C11.0137 11.2762 11.0234 11.2878 11.0293 11.2993C11.7246 11.8214 12.7734 12.0545 13.6641 12.3493C14.0703 12.1393 14.5 11.9428 14.9785 11.7482C15.0781 11.6577 15.1992 11.5498 15.3281 11.438C15.666 11.1413 16.0527 10.8042 16.1055 10.6944C15.9883 10.5788 15.8809 10.4574 15.7754 10.336L15.3281 9.8255L14.9941 9.83321L14.3574 9.85055C13.8125 9.23212 13.8457 7.90087 13.8984 7.13217C14.1523 5.58899 14.7578 4.47736 15.7441 3.83389C16.6387 3.25014 18.3652 3.14996 19.2695 3.73563C21.1621 4.96478 21.748 7.86426 20.8242 9.81972H20.1641L20.1211 9.86981L20.0625 9.93724L19.7754 10.2782C19.6074 10.4767 19.4395 10.6751 19.2402 10.8485C19.3594 11.0026 19.6934 11.2916 19.9902 11.5479C20.084 11.6326 20.1758 11.7116 20.2578 11.7848ZM4.73633 6.25751C4.68359 6.29218 4.64648 6.33457 4.62305 6.38659C4.5957 6.44438 4.58398 6.51374 4.58594 6.59466C4.59375 6.83162 4.71875 7.1418 4.96289 7.49821L4.9668 7.50399L5.75586 8.74277C6.07227 9.23983 6.4043 9.74459 6.81641 10.1183C7.21289 10.4767 7.69531 10.7175 8.33008 10.7194C9.01953 10.7214 9.52344 10.469 9.93164 10.0914C10.3574 9.69835 10.6934 9.16084 11.0234 8.62333L11.9121 7.1784C12.0781 6.80465 12.1387 6.55612 12.0996 6.4097C12.0488 6.2132 11.4629 6.28833 11.2676 6.26136L11.5723 4.93203C9.3125 5.28266 7.62109 3.62775 5.23242 4.60066L5.4043 6.16888C5.16602 6.17659 4.96289 6.10723 4.73633 6.25751ZM16.3574 10.9314C16.2148 11.1259 15.8652 11.4323 15.5527 11.7058L15.4492 11.7964C15.5391 13.4571 19.2656 13.9541 19.6719 11.7424C19.3906 11.4997 19.0957 11.2396 18.9629 11.072L18.9492 11.0816C18.2363 11.5613 17.2969 11.569 16.5801 11.0951C16.502 11.045 16.4277 10.9891 16.3574 10.9314ZM15.5 9.59624C14.9727 7.81224 15.1719 6.17466 16.5938 4.77213C16.8457 5.57358 17.4082 6.23631 18.3691 6.72566C18.8281 7.06088 19.2715 7.46739 19.7012 7.93362C19.7773 7.62537 19.4863 7.24969 19.1348 6.86245C19.4609 7.02043 19.7598 7.24391 19.9727 7.6716C20.2188 8.16673 20.2148 8.5848 20.1348 9.12423C20.1094 9.28992 20.0254 9.4479 19.9785 9.59817C19.9629 9.60587 19.9512 9.61551 19.9414 9.62899C19.6172 10.022 19.2109 10.5634 18.8027 10.8389C18.2012 11.2011 17.334 11.2165 16.7266 10.8524C16.4512 10.6713 16.2324 10.4266 16.0215 10.1858L15.5449 9.63285C15.5312 9.61551 15.5156 9.60395 15.5 9.59624Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_969">
                <rect width="24" height="17" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const TourCustomIcon = ({
    color = "#4558B6",
    width = 22,
    height = 22,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_536_972)">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.21 7.00945C16.6092 6.872 17.0299 7.09008 17.3075 7.43094H20.6125C20.6245 7.43094 20.6363 7.43336 20.6474 7.43805C20.6585 7.44275 20.6686 7.44963 20.677 7.45831C20.6855 7.46699 20.6922 7.47729 20.6968 7.48863C20.7014 7.49997 20.7038 7.51213 20.7038 7.5244V8.41503C20.7038 8.4273 20.7014 8.43946 20.6968 8.45079C20.6922 8.46213 20.6855 8.47244 20.677 8.48111C20.6686 8.48979 20.6585 8.49668 20.6474 8.50137C20.6363 8.50607 20.6245 8.50849 20.6125 8.50849H20.0342V11.4754H19.3664V8.50849H17.5653C17.472 8.74397 17.3275 8.95457 17.1427 9.12423V11.4754H16.4714V9.60437C16.0099 9.84764 15.5311 10.0547 15.0391 10.2238C14.5117 10.4248 13.9737 10.5955 13.4277 10.7351C12.9356 10.8465 12.4247 10.8383 11.9362 10.711C11.4477 10.5837 10.9952 10.3409 10.6151 10.002C10.3953 9.81001 10.1867 9.60503 9.99023 9.38812L9.92936 9.32215L9.39225 12.575C9.80485 12.8588 10.2355 13.1141 10.6813 13.3391C12.0742 14.0044 13.2201 14.5541 13.4653 16.7935C13.5101 17.1857 13.4904 19.4837 13.4653 20.6126H15.3971C15.359 20.5811 15.3284 20.5412 15.3076 20.4958C15.2868 20.4504 15.2764 20.4007 15.2772 20.3506V20.0042C15.0529 20.0013 14.8387 19.9082 14.6809 19.745C14.5231 19.5817 14.4344 19.3615 14.4339 19.1319V12.5346C14.4349 12.3036 14.525 12.0823 14.6846 11.9189C14.8442 11.7555 15.0604 11.6633 15.2861 11.6623H15.4813C15.4795 11.6763 15.4795 11.6905 15.4813 11.7045L15.6943 12.5365C15.7463 12.7681 15.8568 12.9817 16.0148 13.1559C16.0884 13.2301 16.1762 13.2881 16.2725 13.3262C16.3689 13.3644 16.4719 13.3819 16.5752 13.3776H17.4292V13.8449C17.4292 13.9201 17.7729 13.9787 17.8446 13.9787H18.9779C18.9949 13.979 19.0119 13.9757 19.0277 13.9692C19.0436 13.9627 19.058 13.953 19.0702 13.9407C19.0823 13.9284 19.092 13.9138 19.0986 13.8977C19.1052 13.8816 19.1086 13.8642 19.1086 13.8468V13.3776H20.0037C20.1091 13.3785 20.2136 13.3575 20.3108 13.3159C20.408 13.2743 20.496 13.213 20.5695 13.1357C20.728 12.9623 20.8348 12.7461 20.8774 12.5127L21.0565 11.6917C21.0582 11.6771 21.0582 11.6623 21.0565 11.6477H21.1478C21.3735 11.6486 21.5897 11.7409 21.7494 11.9042C21.909 12.0676 21.9991 12.2889 22 12.52V19.1264C21.9995 19.356 21.9108 19.5762 21.7531 19.7395C21.5953 19.9027 21.3811 19.9958 21.1567 19.9987V20.3414C21.1575 20.3915 21.1471 20.4412 21.1263 20.4866C21.1056 20.532 21.0749 20.572 21.0368 20.6034H22V21.9925H0V20.6034H3.55029C3.80273 19.9089 4.06234 19.1685 4.31657 18.4245C4.84115 16.887 5.34424 15.3092 5.71305 14.0557C5.48106 13.7749 5.2877 13.4629 5.13835 13.1284C4.96722 12.7483 4.9123 12.3242 4.98079 11.9116L5.75602 7.9129C5.47852 7.89824 5.15804 7.81394 4.89665 7.93123C4.38997 8.15847 3.64339 9.12606 3.20117 9.58054L2.60856 10.1945C2.15202 10.6673 1.84766 11.1914 1.14941 11.1346C0.282878 11.0649 -0.336589 10.079 0.273926 9.32215L1.63997 7.90741C2.29704 7.22386 2.92188 6.41936 3.73291 5.95022C4.3846 5.57271 5.09359 5.31432 6.26628 5.36563C6.69596 5.36563 7.15072 5.41511 7.5804 5.45726L8.08171 5.50124C10.0511 5.63135 10.9678 6.69241 11.6839 7.51707C12.0008 7.88358 12.2729 8.19512 12.5684 8.33989C12.708 8.4077 12.9264 8.3124 13.1753 8.20611L14.9961 7.5134L16.21 7.01494V7.00945ZM10.9481 20.6108C10.9731 19.339 11 17.5449 10.9803 17.1985C10.9642 16.9511 10.8013 16.2969 10.547 16.1778C10.2061 16.0267 9.85774 15.8939 9.50326 15.7801C9.01091 15.6134 8.60807 15.4448 8.12109 15.3073C7.76302 16.5132 7.2832 17.9682 6.76579 19.3555L6.27702 20.6108H10.9481ZM20.4137 20.6108H16.022C16.0604 20.5796 16.0913 20.5397 16.1121 20.4942C16.1329 20.4487 16.1431 20.3989 16.1419 20.3487V20.0024H20.2938V20.3414C20.2926 20.3916 20.3028 20.4414 20.3236 20.4869C20.3444 20.5323 20.3753 20.5723 20.4137 20.6034V20.6108ZM15.9181 18.3695C15.8763 18.3695 15.8363 18.3526 15.8067 18.3223C15.7772 18.2921 15.7606 18.2511 15.7606 18.2083C15.7606 18.1655 15.7772 18.1245 15.8067 18.0942C15.8363 18.064 15.8763 18.047 15.9181 18.047H20.5409C20.5826 18.047 20.6227 18.064 20.6523 18.0942C20.6818 18.1245 20.6984 18.1655 20.6984 18.2083C20.6984 18.2511 20.6818 18.2921 20.6523 18.3223C20.6227 18.3526 20.5826 18.3695 20.5409 18.3695H15.9181ZM15.9181 16.81C15.8763 16.81 15.8363 16.793 15.8067 16.7628C15.7772 16.7326 15.7606 16.6915 15.7606 16.6488C15.7606 16.606 15.7772 16.565 15.8067 16.5347C15.8363 16.5045 15.8763 16.4875 15.9181 16.4875H20.5409C20.5826 16.4875 20.6227 16.5045 20.6523 16.5347C20.6818 16.565 20.6984 16.606 20.6984 16.6488C20.6984 16.6915 20.6818 16.7326 20.6523 16.7628C20.6227 16.793 20.5826 16.81 20.5409 16.81H15.9181ZM15.9181 15.2505C15.8763 15.2505 15.8363 15.2335 15.8067 15.2033C15.7772 15.173 15.7606 15.132 15.7606 15.0892C15.7606 15.0465 15.7772 15.0055 15.8067 14.9752C15.8363 14.945 15.8763 14.928 15.9181 14.928H20.5409C20.5826 14.928 20.6227 14.945 20.6523 14.9752C20.6818 15.0055 20.6984 15.0465 20.6984 15.0892C20.6984 15.132 20.6818 15.173 20.6523 15.2033C20.6227 15.2335 20.5826 15.2505 20.5409 15.2505H15.9181ZM20.7038 11.8144H15.8447L16.0059 12.443C16.044 12.6194 16.1267 12.7824 16.2458 12.9158C16.2878 12.9614 16.3387 12.9976 16.395 13.0222C16.4514 13.0468 16.5121 13.0593 16.5734 13.0588H20.0055C20.0697 13.0591 20.1332 13.0461 20.1923 13.0206C20.2513 12.9951 20.3048 12.9576 20.3493 12.9103C20.4638 12.7812 20.5407 12.6219 20.5713 12.4503L20.7038 11.8144ZM8.02441 0.129981C8.54059 -0.0508035 9.10203 -0.042786 9.61308 0.152667C10.1241 0.34812 10.5531 0.718913 10.827 1.20186C11.1009 1.68481 11.2027 2.25002 11.1151 2.80118C11.0274 3.35235 10.7558 3.85535 10.3464 4.22448C9.93707 4.59361 9.41532 4.80602 8.8701 4.82552C8.32488 4.84501 7.78992 4.67039 7.35639 4.3314C6.92286 3.99241 6.61759 3.51003 6.49259 2.96647C6.36759 2.42291 6.43061 1.8518 6.6709 1.35047C6.80689 1.06584 6.99646 0.811498 7.22874 0.602053C7.46101 0.392607 7.73141 0.23218 8.02441 0.129981Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_536_972">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const TourUsersIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H7.5C6.17392 18.75 4.90215 19.2768 3.96447 20.2145C3.02678 21.1521 2.5 22.4239 2.5 23.75V26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 3.90991C21.0722 4.18787 22.0217 4.81399 22.6996 5.68999C23.3775 6.56599 23.7452 7.64227 23.7452 8.74991C23.7452 9.85755 23.3775 10.9338 22.6996 11.8098C22.0217 12.6858 21.0722 13.3119 20 13.5899" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.5 26.2501V23.7501C27.4992 22.6423 27.1304 21.5661 26.4517 20.6905C25.773 19.8149 24.8227 19.1896 23.75 18.9126" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TourCalendarIcon = ({
    color = "#4558B6",
    width = 30,
    height = 30,
    className = "",
}: IconProps) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M10 2.5V7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 2.5V7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.75 12.5H26.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 17.5H10.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 17.5H15.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17.5H20.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22.5H10.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22.5H15.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 22.5H20.0125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TourMountainIcon = ({
    color = "#4558B6",
    width = 30,
    height = 19,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_mountain)">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.0703 6.81525L22.0899 6.87307L22.1436 7.02243L22.1631 7.08024L22.2168 7.22719L22.2364 7.28501L22.2827 7.41991L22.3023 7.47532L22.3462 7.603L22.3658 7.65841L22.4073 7.77886L22.4268 7.83427L22.461 7.9499L22.4781 8.00531L22.5147 8.1113L22.5342 8.16671L22.5684 8.26307L22.5879 8.31848L22.6197 8.41002L22.6392 8.46302L22.6685 8.54734L22.6856 8.60034L22.7051 8.67261L22.7222 8.7232L22.7491 8.79788L22.7661 8.84847L22.7906 8.91833L22.8077 8.96651L22.8296 9.02914L22.8467 9.07732L22.8687 9.13755L22.8858 9.18332L22.9053 9.23873L22.92 9.28209L22.937 9.33268L22.9517 9.37604L22.9688 9.42422L22.9834 9.46518L23.0005 9.50854V9.54949L23.0152 9.58804L23.0298 9.62658V9.66272V9.70126V9.73499L23.042 9.77112V9.80003V9.83617V9.86267V9.89639V9.92048V9.9518V9.97589V10.0048V10.0265V10.0554V10.0747V10.1012V10.118V10.1421V10.159V10.1831V10.1975V10.2192V10.2337V10.2553V10.2746V10.2963V10.3228V10.383V10.4264V10.5468V10.5998V10.6191V10.689V10.7733V10.8046V10.8359V10.8721V10.9106V10.9515V10.9949V11.0816V11.1346V11.1925C23.0591 12.397 24.5948 13.8424 24.3116 14.6711C24.0284 15.4998 25.4541 17.056 25.9131 18.2148H24.0796C24.0801 18.0501 24.0289 17.8894 23.9331 17.7546L19.5142 10.7829L20.2466 9.61454L21.1377 8.73283L22.0386 6.78152L22.0581 6.81525H22.0703ZM22.5074 6.50448L29.8999 18.1618C29.9655 18.2515 30.0006 18.3595 30 18.4701C30 18.6113 29.9432 18.7467 29.842 18.8466C29.7408 18.9464 29.6036 19.0025 29.4605 19.0025H0.800816C0.655807 19.0032 0.513343 18.9649 0.388631 18.8919C0.263919 18.8189 0.16164 18.7138 0.0927107 18.588C0.0237816 18.4621 -0.00921012 18.3201 -0.00274319 18.1771C0.00372375 18.0342 0.0494066 17.8957 0.129429 17.7763L11.5381 0.400008C11.6026 0.285392 11.6959 0.189136 11.8091 0.120561C11.9898 0.00951168 12.2078 -0.026224 12.4151 0.0212046C12.6225 0.0686332 12.8023 0.195347 12.9151 0.373509L19.1553 10.2168L21.5967 6.51894C21.6398 6.44139 21.703 6.37654 21.7798 6.33103C21.9003 6.25916 22.0445 6.23681 22.1815 6.2688C22.3184 6.30078 22.4372 6.38455 22.5122 6.50208L22.5074 6.50448ZM12.8028 18.2075H0.952183L3.49857 14.8855L7.40482 8.14021L9.63627 5.58905L10.7715 3.11257L12.2364 0.790271L12.2657 0.838451C12.4805 1.47925 12.5733 1.82856 12.7539 2.34409C12.8614 2.6404 13.3155 3.28602 13.4058 3.53174C14.7022 7.08747 14.0454 5.78178 14.0625 7.35728C14.0821 9.16646 16.3745 11.3201 15.9522 12.5439C15.481 13.8978 17.9981 16.4514 18.4693 18.2075H12.8028Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_mountain">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const TourBeachIcon = ({
    color = "#4558B6",
    width = 30,
    height = 19,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_beach)">
                <path d="M6.02539 12.146V18.1839H6.89453L8.03955 17.0197H7.43164V16.3077H9.31152L7.19238 14.1308L7.76367 13.656L9.04785 14.9717V14.9197H12.1899C12.3267 14.9197 12.4487 14.9875 12.5171 15.0892L13.4448 16.3054H15.1904C15.3052 16.3054 15.4102 16.3529 15.481 16.4275L17.3926 18.1817H20.6152C22.1484 14.0675 23.1738 9.33385 21.8506 5.62879C19.4775 6.62796 18.9087 9.14848 18.623 12.2138C17.6978 10.0889 17.1191 8.14932 18.4253 5.95657C17.1777 6.0809 16.0059 6.76585 14.7607 7.82153C15.791 5.78025 17.4585 4.22725 20.4346 4.57763C18.7769 3.54908 16.8091 3.72088 14.9097 4.1323C16.8896 2.20405 19.0332 1.3925 21.6089 3.58299C21.6943 2.26056 21.0986 1.10767 20.3149 0C21.9849 0.612612 23.2324 1.28626 22.8418 4.08257C25.6909 1.85366 28.8818 2.79857 30 6.70256C27.9126 4.99131 25.686 4.12326 23.3105 4.80369C27.4634 6.24366 28.5742 8.45901 26.8262 11.4791C25.5786 8.56752 24.2773 6.73195 22.8174 5.87971C23.7378 8.02725 24.5068 11.6306 23.02 18.1817H26.8628V18.9977H0V18.1817H5.2002V12.146H0.349121C0.185547 12.146 0.0488281 12.0239 0.0488281 11.8679C0.0488281 11.8589 0.0488281 11.8499 0.0512695 11.8408C0.0634766 10.4596 0.686035 9.20952 1.68701 8.30529C2.67334 7.41463 4.02832 6.85628 5.52246 6.83593C5.55176 6.82689 5.5835 6.82237 5.61523 6.82237C5.64697 6.82237 5.67871 6.82689 5.70801 6.83593C7.19482 6.8608 8.54004 7.41916 9.52148 8.30529C10.5273 9.2163 11.1523 10.4754 11.1572 11.8679C11.1572 12.0217 11.0254 12.1437 10.8594 12.1437V12.146H6.02539ZM8.80859 1.49197C8.75488 1.40833 8.78662 1.29982 8.87939 1.25009C8.96973 1.20036 9.08691 1.22974 9.14062 1.31565L9.38477 1.70898C9.43848 1.79262 9.40674 1.90339 9.31396 1.95086C9.22363 2.00059 9.10645 1.97121 9.05273 1.88757L8.80859 1.49197ZM10.3345 2.07519C10.8057 2.07519 11.2354 2.25152 11.543 2.53861C11.8506 2.82344 12.0435 3.2213 12.0435 3.65758C12.0435 4.09387 11.853 4.48947 11.543 4.77656C11.2354 5.06365 10.8057 5.23998 10.3345 5.23998C9.86328 5.23998 9.43604 5.06365 9.12598 4.77656C8.81836 4.49173 8.62549 4.09387 8.62549 3.65758C8.62549 3.2213 8.81592 2.8257 9.12598 2.53861C9.43604 2.25378 9.86328 2.07519 10.3345 2.07519ZM10.1831 1.07603C10.1831 0.978822 10.2686 0.897442 10.376 0.897442C10.481 0.897442 10.5688 0.976562 10.5688 1.07603V1.5304C10.5688 1.6276 10.4834 1.70898 10.376 1.70898C10.271 1.70898 10.1831 1.62986 10.1831 1.5304V1.07603ZM11.5991 1.35181C11.6528 1.26817 11.7676 1.23879 11.8604 1.28852C11.9507 1.33825 11.9824 1.4445 11.9312 1.5304L11.687 1.92374C11.6333 2.00738 11.5186 2.03676 11.4258 1.98929C11.3354 1.93956 11.3037 1.83331 11.3574 1.74741L11.5991 1.35181ZM12.6733 2.247C12.7637 2.19726 12.8833 2.22665 12.9346 2.31255C12.9858 2.39619 12.9565 2.5047 12.8638 2.55443L12.4414 2.78049C12.3511 2.83022 12.2339 2.80083 12.1802 2.71493C12.1265 2.63129 12.1582 2.52278 12.251 2.47305L12.6733 2.247ZM13.1226 3.51743C13.2275 3.51743 13.3154 3.59655 13.3154 3.69601C13.3154 3.79548 13.23 3.8746 13.1226 3.8746H12.6318C12.5269 3.8746 12.439 3.79548 12.439 3.69601C12.439 3.59655 12.5244 3.51743 12.6318 3.51743H13.1226ZM12.8247 4.82855C12.915 4.87829 12.9468 4.98453 12.8955 5.07043C12.8418 5.15407 12.7271 5.18346 12.6343 5.13599L12.2095 4.90993C12.1191 4.8602 12.0874 4.75396 12.1411 4.66805C12.1948 4.58441 12.3096 4.55503 12.4023 4.60476L12.8247 4.82855ZM11.8604 5.8232C11.9141 5.90684 11.8823 6.01761 11.7896 6.06508C11.6992 6.11481 11.5796 6.08543 11.5283 5.99952L11.2842 5.60619C11.2305 5.52255 11.2622 5.41404 11.355 5.36431C11.4453 5.31457 11.5625 5.34396 11.6162 5.42986L11.8604 5.8232ZM10.4858 6.23914C10.4858 6.33635 10.4004 6.41773 10.293 6.41773C10.188 6.41773 10.1025 6.33861 10.1025 6.23914V5.78477C10.1025 5.68757 10.188 5.60619 10.293 5.60619C10.3979 5.60619 10.4858 5.68531 10.4858 5.78477V6.23914ZM9.06982 5.96335C9.01611 6.047 8.90137 6.07638 8.80859 6.02665C8.71826 5.97692 8.68652 5.87067 8.73779 5.78477L8.98193 5.39143C9.03564 5.30779 9.15039 5.27841 9.24316 5.32588C9.3335 5.37561 9.36523 5.48186 9.31152 5.56776L9.06982 5.96335ZM7.99561 5.07043C7.90527 5.12017 7.78564 5.09078 7.73438 5.00488C7.68066 4.92124 7.7124 4.81273 7.80273 4.763L8.22754 4.53694C8.31787 4.48721 8.43506 4.5166 8.48877 4.6025C8.54248 4.68614 8.51074 4.79465 8.41797 4.84438L7.99561 5.07043ZM7.54639 3.79774C7.44141 3.79774 7.35352 3.71862 7.35352 3.61916C7.35352 3.52195 7.43896 3.44057 7.54639 3.44057H8.03711C8.14209 3.44057 8.22998 3.51969 8.22998 3.61916C8.22998 3.71636 8.14453 3.79774 8.03711 3.79774H7.54639ZM7.84424 2.48888C7.75391 2.43914 7.72217 2.3329 7.77344 2.247C7.82715 2.16335 7.94189 2.13397 8.03467 2.18144L8.45947 2.4075C8.5498 2.45723 8.58154 2.56347 8.52783 2.64938C8.47412 2.73302 8.35938 2.7624 8.2666 2.71267L7.84424 2.48888ZM7.93213 18.1839H16.2988L15.0293 17.0197H9.07715L7.93213 18.1839ZM10.3442 16.3054H12.5L11.9873 15.6318H9.6875L10.3442 16.3054ZM9.10645 8.70089C8.70117 8.33468 8.22266 8.02951 7.69775 7.80797C7.90039 8.07924 8.07129 8.38893 8.21045 8.73028C8.53516 9.52374 8.69385 10.5003 8.7085 11.5921H10.5493C10.4712 10.4641 9.93408 9.4514 9.10645 8.70089ZM6.47949 7.45985C6.29395 7.43046 6.10596 7.41011 5.91309 7.39881V11.5944H8.11279C8.09814 10.5704 7.95166 9.66163 7.65137 8.92921C7.3877 8.27365 6.99951 7.76728 6.47949 7.45985ZM5.31494 7.39655C5.12695 7.40785 4.93896 7.42594 4.7583 7.45306C4.23096 7.76276 3.84033 8.27365 3.57422 8.93599C3.27881 9.66615 3.13232 10.5726 3.11768 11.5921H5.31738V7.39655H5.31494ZM3.54492 7.79441C3.00537 8.0182 2.51709 8.3279 2.10449 8.70315C1.27686 9.45366 0.739746 10.4664 0.65918 11.5921H2.52197C2.53662 10.5071 2.69531 9.53278 3.01514 8.74158C3.15674 8.38893 3.33252 8.0702 3.54492 7.79441Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_beach">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};


export const ArrowDownSquareIcon = ({
    color = "#909090",
    width = 16,
    height = 16,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6666 6.66675L7.99998 9.33341L5.33331 6.66675" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const WorldIcon = ({
    color = "#3A3A3A",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const XCircleIcon = ({
    color = "#3A3A3A",
    width = 50,
    height = 50,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M19.1087 30.8917L25.0024 25M25.0024 25L30.8941 19.1083M25.0024 25L19.1087 19.1083M25.0024 25L30.8941 30.8917M25.0003 45.8333C36.5066 45.8333 45.8337 36.5062 45.8337 25C45.8337 13.4937 36.5066 4.16666 25.0003 4.16666C13.4941 4.16666 4.16699 13.4937 4.16699 25C4.16699 36.5062 13.4941 45.8333 25.0003 45.8333Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const FlightSolidIcon = ({
    color = "#54858C",
    width = 22,
    height = 22,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_575_9480)">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.97697 18.9331C2.97876 18.2116 3.38875 17.5062 4.05656 16.7166L0.194743 14.2746C-0.0487469 14.1689 -0.0433758 14.0203 0.098063 13.8449L0.91626 13.1466C1.06486 13.0553 1.22241 13.0159 1.3925 13.0625L6.15845 13.8682L10.1295 9.5677L0.858968 3.29605C0.62443 3.15819 0.604736 3.00243 0.846435 2.8216L2.18384 1.75454L14.2688 5.15087L17.8388 1.33381C19.0365 0.297188 20.2003 -0.166516 21.0937 0.0536985C21.586 0.175443 21.7597 0.322253 21.9119 0.784167C22.2073 1.69009 21.7489 2.90754 20.6658 4.16079L16.8487 7.73078L20.245 19.8157L19.178 21.1531C18.9972 21.3931 18.8414 21.3734 18.7035 21.1406L12.4301 11.8719L8.12964 15.8411L8.9353 20.6071C8.98185 20.7754 8.94425 20.9329 8.85116 21.0833L8.15291 21.9015C7.97925 22.043 7.82886 22.0483 7.72323 21.8048L5.28117 17.943C4.48804 18.6126 3.78263 19.0226 3.05754 19.0226C2.99129 19.0208 2.97697 18.9975 2.97697 18.9331Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_575_9480">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const TicketVoucherIcon = ({
    color = "#54858C",
    width = 30,
    height = 18,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_575_9542)">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.51875 6.49543e-06L28.4812 0.000642763C28.8984 -0.00126604 29.2787 0.184524 29.5541 0.482933C29.8289 0.781343 30 1.19428 30 1.6473V16.3514C30 16.8051 29.8289 17.2174 29.5541 17.5158C29.2787 17.8142 28.8984 18 28.4818 18L1.51875 17.9987C1.10391 18.0006 0.723633 17.8149 0.448242 17.5158L0.445312 17.5126C0.17168 17.2142 0 16.8025 0 16.3514V13.0206C0 12.7909 0.159375 12.6013 0.364453 12.5746C1.08105 12.4066 1.70918 11.9752 2.15625 11.3803C2.60156 10.7866 2.86934 10.0276 2.86934 9.19979C2.86934 8.37201 2.60156 7.61231 2.15625 7.01931C1.70215 6.41485 1.06172 5.97901 0.331055 5.8174C0.238047 5.79673 0.154469 5.74181 0.0944629 5.66193C0.0344571 5.58204 0.00170827 5.4821 0.00175781 5.37901L0 1.64857C0 1.19492 0.171094 0.781979 0.445898 0.48357C0.721289 0.184524 1.10156 -0.00126604 1.51875 6.49543e-06ZM23.5682 16.9839C23.5682 17.0265 23.5717 17.066 23.5793 17.1035L7.05703 17.1022V0.895871H23.5793C23.5717 0.93341 23.5682 0.972859 23.5682 1.01549V2.01379C23.5682 2.67106 24.4875 2.67106 24.4875 2.01379V1.01549C24.4875 0.972859 24.484 0.932774 24.4764 0.895871H28.4812C28.6705 0.897143 28.8439 0.982403 28.9693 1.11793C29.0941 1.25409 29.1727 1.44242 29.1727 1.6473V16.3514C29.1727 16.557 29.0941 16.7446 28.9693 16.8802C28.8434 17.017 28.6705 17.1016 28.4818 17.1035H24.4764C24.484 17.066 24.4875 17.0265 24.4875 16.9839V15.9862C24.4875 15.329 23.5682 15.329 23.5682 15.9862V16.9839ZM23.5682 13.9903C23.5682 14.6475 24.4875 14.6475 24.4875 13.9903V12.9919C24.4875 12.3347 23.5682 12.3347 23.5682 12.9919V13.9903ZM23.5682 10.996C23.5682 11.6532 24.4875 11.6532 24.4875 10.996V9.99767C24.4875 9.34041 23.5682 9.34041 23.5682 9.99767V10.996ZM23.5682 8.0017C23.5682 8.65897 24.4875 8.65897 24.4875 8.0017V7.00404C24.4875 6.34677 23.5682 6.34677 23.5682 7.00404V8.0017ZM23.5682 5.00743C23.5682 5.66469 24.4875 5.66469 24.4875 5.00743V4.00976C24.4875 3.3525 23.5682 3.3525 23.5682 4.00976V5.00743ZM11.7527 12.4887C11.7527 12.1712 11.9191 11.8613 12.1893 11.5139L10.6254 10.4399C10.527 10.3934 10.5287 10.3273 10.5861 10.2509L10.9178 9.94486C10.9787 9.90414 11.042 9.88696 11.1105 9.90732L13.0406 10.2617L14.6484 8.37074L10.8943 5.61252C10.8 5.55144 10.7918 5.48272 10.8891 5.40382L11.4305 4.93426L16.3254 6.42821L17.7715 4.7491C18.2566 4.29354 18.7283 4.0893 19.0898 4.18601C19.2891 4.23945 19.36 4.30372 19.4209 4.50732C19.5398 4.90563 19.3553 5.44073 18.9164 5.99173L17.3701 7.56268L18.7459 12.8774L18.3135 13.466C18.2402 13.5716 18.177 13.5627 18.1213 13.4596L15.5807 9.38368L13.8393 11.1296L14.1662 13.2248C14.1844 13.2993 14.1691 13.3686 14.1316 13.4342L13.8492 13.7943C13.7789 13.8566 13.718 13.8585 13.6752 13.7523L12.6861 12.0535C12.365 12.348 12.0791 12.5287 11.7855 12.5281C11.758 12.5275 11.7527 12.5173 11.7527 12.4887Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_575_9542">
                    <rect width="30" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ChevronLeftCircleIcon = ({
    color = "#3A3A3A",
    width = 50,
    height = 50,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.0003 5.72913C19.8894 5.72913 14.9878 7.75944 11.3738 11.3734C7.75981 14.9874 5.72949 19.889 5.72949 25C5.72949 30.1109 7.75981 35.0125 11.3738 38.6265C14.9878 42.2405 19.8894 44.2708 25.0003 44.2708C30.1113 44.2708 35.0129 42.2405 38.6269 38.6265C42.2408 35.0125 44.2712 30.1109 44.2712 25C44.2712 19.889 42.2408 14.9874 38.6269 11.3734C35.0129 7.75944 30.1113 5.72913 25.0003 5.72913ZM2.60449 25C2.60449 12.6312 12.6316 2.60413 25.0003 2.60413C37.3691 2.60413 47.3962 12.6312 47.3962 25C47.3962 37.3687 37.3691 47.3958 25.0003 47.3958C12.6316 47.3958 2.60449 37.3687 2.60449 25ZM24.0212 17.6458C24.3138 17.9388 24.4781 18.3359 24.4781 18.75C24.4781 19.164 24.3138 19.5612 24.0212 19.8541L20.4378 23.4375H33.3337C33.7481 23.4375 34.1455 23.6021 34.4385 23.8951C34.7315 24.1881 34.8962 24.5856 34.8962 25C34.8962 25.4144 34.7315 25.8118 34.4385 26.1048C34.1455 26.3978 33.7481 26.5625 33.3337 26.5625H20.4378L24.0212 30.1458C24.1747 30.2888 24.2978 30.4613 24.3832 30.653C24.4686 30.8447 24.5145 31.0516 24.5182 31.2614C24.5219 31.4712 24.4833 31.6796 24.4047 31.8741C24.3262 32.0687 24.2092 32.2454 24.0608 32.3938C23.9124 32.5422 23.7357 32.6591 23.5412 32.7377C23.3466 32.8163 23.1382 32.8549 22.9284 32.8512C22.7186 32.8475 22.5117 32.8016 22.32 32.7162C22.1284 32.6308 21.9559 32.5076 21.8128 32.3541L15.5628 26.1041C15.2702 25.8112 15.1059 25.414 15.1059 25C15.1059 24.5859 15.2702 24.1888 15.5628 23.8958L21.8128 17.6458C22.1058 17.3532 22.5029 17.1888 22.917 17.1888C23.3311 17.1888 23.7282 17.3532 24.0212 17.6458Z" fill={color} />
        </svg>
    );
};

export const LoyaltyCardIcon = ({
    color = "#4558B6",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16 10H18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 14H18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.16992 14.9999C6.37606 14.414 6.75902 13.9064 7.26594 13.5474C7.77286 13.1883 8.37873 12.9955 8.99992 12.9955C9.62111 12.9955 10.227 13.1883 10.7339 13.5474C11.2408 13.9064 11.6238 14.414 11.8299 14.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13C10.1046 13 11 12.1046 11 11C11 9.89543 10.1046 9 9 9C7.89543 9 7 9.89543 7 11C7 12.1046 7.89543 13 9 13Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const FlexibilityIcon = ({
    color = "#4558B6",
    width = 24,
    height = 24,
    className = "",
}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 9H11C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V10.375C10 10.5914 10.0702 10.8019 10.2 10.975C10.3298 11.1481 10.5123 11.2744 10.72 11.335L13.28 12.082C13.4877 12.1426 13.6702 12.2689 13.8 12.442C13.9298 12.6151 14 12.8256 14 13.042V14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15H12M12 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V10.5M12 9V7.5M12 15H11C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14V13.5M12 15V16.5M1 3H13C15.1217 3 17.1566 3.84285 18.6569 5.34315C20.1571 6.84344 21 8.87827 21 11M1 3C1.41 3 1.99 2.753 2.41 2.497C2.96882 2.15094 3.46235 1.7092 3.868 1.192C4.186 0.792 4.5 0.318 4.5 0M1 3C1.41 3 1.99 3.247 2.41 3.503C2.96882 3.84906 3.46235 4.29081 3.868 4.808C4.186 5.208 4.5 5.682 4.5 6M23 21H11C8.87827 21 6.84344 20.1571 5.34315 18.6569C3.84285 17.1566 3 15.1217 3 13M23 21C22.59 21 22.01 21.247 21.59 21.503C21.0312 21.8491 20.5376 22.2908 20.132 22.808C19.814 23.208 19.5 23.682 19.5 24M23 21C22.59 21 22.01 20.753 21.59 20.497C21.0312 20.1509 20.5376 19.7092 20.132 19.192C19.814 18.792 19.5 18.318 19.5 18M18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const InfoCircleIcon = (props: IconProps) => (
  <svg width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
