import type { ExpandableIconProps,IconProps } from "./icons.type";

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
            <path d="M31.6667 20.5833C31.6667 28.5 26.125 32.4583 19.5384 34.7542C19.1935 34.871 18.8188 34.8655 18.4775 34.7383C11.875 32.4583 6.33337 28.5 6.33337 20.5833V9.5C6.33337 9.08007 6.50019 8.67735 6.79712 8.38041C7.09405 8.08348 7.49678 7.91667 7.91671 7.91667C11.0834 7.91667 15.0417 6.01667 17.7967 3.61C18.1321 3.32341 18.5589 3.16595 19 3.16595C19.4412 3.16595 19.8679 3.32341 20.2034 3.61C22.9742 6.0325 26.9167 7.91667 30.0834 7.91667C30.5033 7.91667 30.906 8.08348 31.203 8.38041C31.4999 8.67735 31.6667 9.08007 31.6667 9.5V20.5833Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.25 19L17.4167 22.1667L23.75 15.8333" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

