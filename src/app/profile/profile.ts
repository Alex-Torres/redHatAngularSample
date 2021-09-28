export interface Profile {
    pin?: string;
    alias?: string;
    defaultWorkStartHour?: number;
    includeContactLinks?: boolean;
    prefersLastCommaFirst?: boolean;
    prefersDarkMode?: boolean | string;
    isASocialDistancer?: boolean;
    isEmployee?: boolean;
    makeSchedulePublic?: boolean;
    hideMostDetails?: boolean;
    hideBadges?: boolean;
    subjectiveGenderPronoun?: string;
    objectiveGenderPronoun?: string;
    possessiveGenderPronoun?: string;
    reflexiveGenderPronoun?: string;
    expand: boolean;
}