export interface DropdownType {
    label: string;
    href?: string;
    dropdown?: DropdownType[];
}

export interface NavigationType {
    label: string;
    href?: string;
    dropdown?: DropdownType[];
}
