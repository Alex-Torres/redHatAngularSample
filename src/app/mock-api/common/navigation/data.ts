/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

    {
        id: 'introduction',
        title: 'Introduction',
        subtitle: 'OrgChart Information',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'introduction.home',
                title: 'Home',
                type: 'basic',
                icon: 'heroicons_outline:home',
                link: '/home',
                exactMatch: true
            }
        ]
    },
    {
        id: 'help-center',
        title: 'Help Center',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/help-center',
        children: [
            {
                id: 'help-center.home',
                title: 'Home',
                type: 'basic',
                link: '/help-center/home',
                exactMatch: true
            },
            {
                id: 'help-center.faqs',
                title: 'FAQs',
                type: 'basic',
                link: '/help-center/faqs'
            },
            {
                id: 'help-center.guides',
                title: 'Guides',
                type: 'basic',
                link: '/help-center/guides'
            },
            {
                id: 'help-center.support',
                title: 'Support',
                type: 'basic',
                link: '/help-center/support'
            }
        ]
    },

    {
        id: 'profile',
        title: 'Profile',
        subtitle: 'View & manage profile preferences.',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'profile.view',
                title: 'View',
                type: 'basic',
                icon: 'heroicons_outline:user-circle',
                link: '/profile',
                exactMatch: true
            },
            {
                id: 'profile.setting',
                title: 'Setting',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/profile/settings',
                exactMatch: true
            },

        ]
    },
    {
        id: 'assets',
        title: 'Assets',
        subtitle: 'Organizational assets.',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'assets.people',
                title: 'People',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/people',
                exactMatch: true
            },
            {
                id: 'assets.offices',
                title: 'Offices',
                type: 'basic',
                icon: 'heroicons_outline:office-building',
                link: '/offices',
                exactMatch: true
            },

        ]
    },

    {
        id: 'developer',
        title: 'Developer Docs',
        subtitle: 'OrgChart & API Documentation',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'developer.api',
                title: 'OpenApi-Docs',
                type: 'collapsable',
                icon: 'heroicons_outline:code',
                children: [
                    {
                        id: 'developer.api.v1',
                        title: 'Anonymous',
                        type: 'basic',
                        link: '/swagger/v1',
                        exactMatch: true,
                        badge: {
                            title: 'v1.0',
                            classes: 'px-2 bg-yellow-300 text-black rounded-full'
                        }
                    },
                    {
                        id: 'developer.api.v2',
                        title: 'Azure AD',
                        type: 'basic',
                        link: '/swagger/v2', badge: {
                            title: 'v2.0',
                            classes: 'px-2 bg-yellow-300 text-black rounded-full'
                        }
                    },
                    {
                        id: 'developer.api.v3',
                        title: 'Azure AD',
                        type: 'basic',
                        link: '/swagger/v3', badge: {
                            title: 'v3.0',
                            classes: 'px-2 bg-yellow-300 text-black rounded-full'
                        }
                    },
                    {
                        id: 'developer.api.v2.windows',
                        title: 'Windows',
                        type: 'basic',
                        link: '/swagger/v2-windows',
                        badge: {
                            title: 'v2.0',
                            classes: 'px-2 bg-yellow-300 text-black rounded-full'
                        }
                    }
                ]

            },
            {
                id   : 'developer.changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'heroicons_outline:speakerphone',
                link : '/dev/changelog',
                badge: {
                    title  : '13.5.0',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full'
                }
            },
            {
                id   : 'developer.guides',
                title: 'Guides',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/dev/guides'
            }
        ]
    },




];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },
    {
        id: 'bland',
        title: 'Bland',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/bland'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
