/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { select, boolean } from '@storybook/addon-knobs';
import on from '@carbon/web-components/es/globals/mixins/on.js';
import ifNonEmpty from '@carbon/web-components/es/globals/directives/if-non-empty.js';
import textNullable from '../../../../.storybook/knob-text-nullable';
import c4dLeftNav from '../left-nav';
import '../masthead-container';
import { L1_CTA_TYPES } from '../defs';
import styles from './masthead.stories.scss';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  mastheadL0Data,
  mastheadL1Data,
  mastheadL1EmptyMenuItemsData,
  mastheadLogoData,
} from './links';
import {
  UNAUTHENTICATED_STATUS,
  MASTHEAD_AUTH_METHOD,
} from '../../../internal/vendor/@carbon/ibmdotcom-services-store/types/profileAPI.js';
import {
  authenticatedProfileItems,
  unauthenticatedProfileItems,
} from './profile-items';
import { C4D_CUSTOM_PROFILE_LOGIN } from '../../../globals/internal/feature-flags';
import readme from './README.stories.mdx';
import SAPCommerceAPI from '@carbon/ibmdotcom-services/es/services/SAPCommerce/SAPCommerce.js';

const userStatuses = {
  authenticated: 'test.user@ibm.com',
  unauthenticated: UNAUTHENTICATED_STATUS,
};

const scopeParameters = [
  {
    name: 'All',
    appId: 'all',
    value: 'all',
  },
  {
    name: 'Analyst',
    appId: 'analyst',
    value: 'analyst',
  },
  {
    name: 'PartnerWorld',
    appId: 'pw',
    value: ['pw', 'pwp'],
  },
  {
    name: 'Developer',
    appId: 'dw',
    value: ['dw', 'dwaspera'],
  },
  {
    name: 'IBM Docs',
    appId: 'ibmdocs',
    label: 'Search Label',
    value: ['ibmdocs', 'dw'],
  },
];

const dataEndpoints = {
  cloud: '/common/carbon-for-ibm-dotcom/translations/cloud-masthead',
  v2: '/common/carbon-for-ibm-dotcom/translations/masthead-footer/v2',
  'v2.1': '/common/carbon-for-ibm-dotcom/translations/masthead-footer/v2.1',
};

async function customTypeaheadApiFunction(query, grouped = false) {
  return fetch(`https://www-api.ibm.com/search/typeahead/v1?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (!grouped) {
        return [data.response.map((result) => result[0])];
      }
      const resultHasCarbon = (result) =>
        result[0].toLowerCase().includes('carbon');
      return [
        // Results not including "carbon"
        data.response
          .filter((result) => !resultHasCarbon(result))
          .map((result) => result[0]),
        // Optional grouped category results including "carbon"
        {
          title: 'Carbon',
          items: data.response
            .filter((result) => resultHasCarbon(result))
            .map((result) => ({
              name: result[0],
              href: `https://www.example.com/${encodeURIComponent(result[0])}`,
            })),
        },
      ];
    });
}

const enumToArray = (en) =>
  Object.keys(en)
    .filter((value) => typeof value === 'string')
    .map((key) => en[key]);

const setActiveCartId = (activeCartId?: string) => {
  if (typeof activeCartId === 'string') {
    SAPCommerceAPI.setActiveCartId(activeCartId);
  } else {
    SAPCommerceAPI.removeActiveCartId();
  }
};

export const Default = (args) => {
  const {
    customProfileLogin,
    hasProfile,
    hasCart,
    mockActiveCartId,
    cartLabel,
    hasSearch,
    hasContact,
    initialSearchTerm,
    selectedMenuItem,
    searchPlaceholder,
    userStatus,
    authMethod,
    useMock,
  } = args?.MastheadComposite ?? {};
  setActiveCartId(mockActiveCartId);
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            selected-menu-item="${ifDefined(selectedMenuItem)}"
            user-status="${ifDefined(userStatus)}"
            initial-search-term="${ifDefined(initialSearchTerm)}"
            searchPlaceholder="${ifDefined(searchPlaceholder)}"
            has-profile="${hasProfile}"
            ?has-cart="${hasCart}"
            has-search="${hasSearch}"
            has-contact="${hasContact}"
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifDefined(authenticatedProfileItems)}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            custom-profile-login="${customProfileLogin}"
            auth-method="${MASTHEAD_AUTH_METHOD.DEFAULT}"
            cart-label="${ifNonEmpty(cartLabel)}"></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            selected-menu-item="${ifNonEmpty(selectedMenuItem)}"
            user-status="${ifNonEmpty(userStatus)}"
            initial-search-term="${ifDefined(initialSearchTerm)}"
            searchPlaceholder="${ifNonEmpty(searchPlaceholder)}"
            has-profile="${hasProfile}"
            ?has-cart="${hasCart}"
            has-search="${hasSearch}"
            has-contact="${hasContact}"
            custom-profile-login="${customProfileLogin}"
            auth-method="${authMethod}"
            cart-label="${ifNonEmpty(cartLabel)}"></c4d-masthead-container>
        `}
  `;
};

export const WithCustomTypeahead = (args) => {
  const { useMock, grouped } = args?.MastheadComposite ?? {};

  document.documentElement.addEventListener(
    'c4d-search-with-typeahead-input',
    async (e) => {
      const results = await customTypeaheadApiFunction(
        (e as CustomEvent).detail.value,
        grouped
      );
      document.dispatchEvent(
        new CustomEvent('c4d-custom-typeahead-api-results', { detail: results })
      );
    }
  );

  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            ?custom-typeahead-api=${true}></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            ?custom-typeahead-api=${true}></c4d-masthead-container>
        `}
  `;
};

export const WithNoNavData = (args) => {
  const { grouped } = args?.MastheadComposite ?? {};

  document.documentElement.addEventListener(
    'c4d-search-with-typeahead-input',
    async (e) => {
      const results = await customTypeaheadApiFunction(
        (e as CustomEvent).detail.value,
        grouped
      );
      document.dispatchEvent(
        new CustomEvent('c4d-custom-typeahead-api-results', { detail: results })
      );
    }
  );

  return html`
    <style>
      ${styles}
    </style>
    ${html`
      <c4d-masthead-container
        .l0Data="${[]}"
        .authenticatedProfileItems="${ifNonEmpty(authenticatedProfileItems)}"
        .unauthenticatedProfileItems="${ifNonEmpty(
          unauthenticatedProfileItems
        )}"
        ?custom-typeahead-api=${true}></c4d-masthead-container>
    `}
  `;
};

WithNoNavData.story = {
  name: 'With no nav data',
  parameters: {
    knobs: {},
  },
  propsSet: {
    default: {
      MastheadComposite: {
        grouped: 'false',
        hasProfile: 'true',
        hasCart: false,
        mockActiveCartId: '',
        cartLabel: '',
        hasSearch: 'true',
        searchPlaceHolder: 'Search all of IBM',
        selectedMenuItem: 'Services & Consulting',
        userStatus: userStatuses.unauthenticated,
      },
    },
  },
};

WithCustomTypeahead.story = {
  name: 'With custom typeahead',
  parameters: {
    knobs: {
      MastheadComposite: () => ({
        grouped: boolean('With grouped results for "carbon"', false),
      }),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          grouped: 'false',
          hasProfile: 'true',
          hasCart: false,
          mockActiveCartId: '',
          cartLabel: '',
          hasSearch: 'true',
          searchPlaceHolder: 'Search all of IBM',
          selectedMenuItem: 'Services & Consulting',
          userStatus: userStatuses.unauthenticated,
        },
      },
    },
  },
};

export const searchOpenOnload = (args) => {
  const { initialSearchTerm, searchPlaceholder, useMock } =
    args?.MastheadComposite ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            activate-search="true"
            initial-search-term="${ifDefined(initialSearchTerm)}"
            searchPlaceholder="${ifDefined(
              searchPlaceholder
            )}"></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            activate-search="true"
            initial-search-term="${ifDefined(initialSearchTerm)}"
            searchPlaceholder="${ifDefined(
              searchPlaceholder
            )}"></c4d-masthead-container>
        `}
  `;
};

searchOpenOnload.story = {
  name: 'Search open onload',
  parameters: {
    knobs: {
      MastheadComposite: () => ({
        searchPlaceholder: textNullable(
          'search placeholder (searchPlaceholder)',
          'Search all of IBM'
        ),
      }),
    },
  },
};

export const withPlatform = (args) => {
  const { platform, platformUrl, useMock } = args?.WithPlatform ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            platform="${ifNonEmpty(platform)}"
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            .platformUrl="${ifNonEmpty(platformUrl)}"></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            platform="${ifNonEmpty(platform)}"
            .platformUrl="${ifNonEmpty(platformUrl)}"></c4d-masthead-container>
        `}
  `;
};

withPlatform.story = {
  name: 'With platform',
  parameters: {
    knobs: {
      MastheadComposite: () => ({}),
      WithPlatform: () => ({
        platform: textNullable('platform name (platform)', 'Platform'),
        platformUrl: textNullable(
          'platform url (platformUrl)',
          'https://www.ibm.com'
        ),
        useMock: boolean('use mock nav data (use-mock)', false),
      }),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          platform: 'Platform',
          hasProfile: 'true',
          hasCart: false,
          mockActiveCartId: '',
          cartLabel: '',
          hasSearch: 'true',
          searchPlaceHolder: 'Search all of IBM',
          selectedMenuItem: 'Services & Consulting',
          userStatus: userStatuses.unauthenticated,
        },
      },
    },
  },
};

export const withL1 = (args) => {
  const {
    selectedMenuItem,
    selectedMenuItemL1,
    l1CtaType,
    useMock,
    useL1EmptyData,
  } = args?.MastheadComposite ?? {};

  let l1Data = { ...mastheadL1Data };
  if (l1Data?.actions?.cta) {
    l1CtaType
      ? (l1Data.actions.cta.ctaType = l1CtaType)
      : delete l1Data.actions.cta.ctaType;
  }

  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            .l1Data="${useL1EmptyData ? mastheadL1EmptyMenuItemsData : l1Data}"
            selected-menu-item="${ifNonEmpty(selectedMenuItem)}"
            selected-menu-item-l1="${ifNonEmpty(
              selectedMenuItemL1
            )}"></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            .l1Data="${useL1EmptyData ? mastheadL1EmptyMenuItemsData : l1Data}"
            selected-menu-item="${ifNonEmpty(selectedMenuItem)}"
            selected-menu-item-l1="${ifNonEmpty(
              selectedMenuItemL1
            )}"></c4d-masthead-container>
        `}
  `;
};

withL1.story = {
  name: 'With L1',
  parameters: {
    knobs: {
      MastheadComposite: () => ({
        selectedMenuItem: textNullable(
          'selected menu item in L0 (selected-menu-item)',
          'Consulting'
        ),
        selectedMenuItemL1: textNullable(
          'selected menu item in L1 (selected-menu-item-l1)',
          ''
        ),
        l1CtaType: select(
          'L1 CTA type',
          enumToArray(L1_CTA_TYPES),
          L1_CTA_TYPES.NONE
        ),
        useMock: boolean('use mock nav data (use-mock)', false),
        useL1EmptyData: boolean('Use empty data for L1 menu items', false),
      }),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          selectedMenuItem: 'Consulting',
          selectedMenuItemL1: '',
          l1CtaType: L1_CTA_TYPES.NONE,
          useMock: false,
        },
      },
    },
  },
};

export const withAlternateLogoAndTooltip = (args) => {
  const { mastheadLogo, useMock } = args?.MastheadComposite ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            .logoData="${mastheadLogo === 'alternateWithTooltip'
              ? mastheadLogoData
              : null}"></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            .logoData="${mastheadLogo === 'alternateWithTooltip'
              ? mastheadLogoData
              : null}"></c4d-masthead-container>
        `}
  `;
};

withAlternateLogoAndTooltip.story = {
  name: 'With alternate logo and tooltip',
  parameters: {
    knobs: {
      MastheadComposite: () => ({
        mastheadLogo: select(
          'masthead logo data (logoData)',
          {
            defaultWithNoTooltip: null,
            alternateWithTooltip: 'alternateWithTooltip',
          },
          'alternateWithTooltip'
        ),
      }),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          platform: null,
          hasProfile: 'true',
          hasCart: false,
          mockActiveCartId: '',
          cartLabel: '',
          hasSearch: 'true',
          searchPlaceholder: 'Search all of IBM',
          selectedMenuItem: 'Services & Consulting',
          userStatus: userStatuses.unauthenticated,
        },
      },
    },
  },
};

export const WithScopedSearch = (args) => {
  const { useMock } = args?.MastheadComposite ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <c4d-masthead-container
            .l0Data="${mastheadL0Data}"
            .authenticatedProfileItems="${ifNonEmpty(
              authenticatedProfileItems
            )}"
            .unauthenticatedProfileItems="${ifNonEmpty(
              unauthenticatedProfileItems
            )}"
            .scopeParameters=${scopeParameters}></c4d-masthead-container>
        `
      : html`
          <c4d-masthead-container
            data-endpoint="${dataEndpoints['v2.1']}"
            .scopeParameters=${scopeParameters}></c4d-masthead-container>
        `}
  `;
};

WithScopedSearch.story = {
  name: 'With scoped search',
  parameters: {
    knobs: {
      MastheadComposite: () => ({}),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          hasProfile: 'true',
          hasCart: false,
          mockActiveCartId: '',
          cartLabel: '',
          hasSearch: 'true',
          searchPlaceHolder: 'Search all of IBM',
          selectedMenuItem: 'Services & Consulting',
          userStatus: userStatuses.unauthenticated,
        },
      },
    },
  },
};

export default {
  title: 'Components/Masthead',
  decorators: [
    (story) => {
      if (!(window as any)._hPageShow) {
        (window as any)._hPageShow = on(window, 'pageshow', () => {
          const leftNav = document.querySelector('c4d-left-nav');
          if (leftNav) {
            (leftNav as c4dLeftNav).expanded = false;
          }
        });
      }
      return html`
        ${story()}
        <script>
          window.digitalData.page.pageInfo.ibm.contactModuleConfiguration = {
            routing: {
              focusArea: 'Cloud - Automation - All',
              languageCode: 'en',
              regionCode: 'US',
            },
            translation: {
              languageCode: 'en',
              regionCode: 'US',
            },
          };
        </script>
        <script
          src="//www.ibm.com/common/digitaladvisor/cm-app/latest/cm-app.min.js"
          defer></script>
      `;
    },
  ],
  parameters: {
    ...readme.parameters,
    knobs: {
      escapeHTML: false,
      MastheadComposite: () => ({
        platform: textNullable('platform name (platform)', ''),
        hasProfile: select(
          'show the profile functionality (has-profile)',
          ['true', 'false'],
          'true'
        ),
        hasCart: boolean('show the cart functionality (has-cart)', false),
        mockActiveCartId: textNullable('mock active cart id', ''),
        cartLabel: textNullable('cart label (cart-label)', ''),
        hasSearch: select(
          'show the search functionality (has-search)',
          ['true', 'false'],
          'true'
        ),
        hasContact: select(
          'Contact us button visibility (has-contact)',
          ['true', 'false'],
          'true'
        ),
        initialSearchTerm: textNullable(
          'initial search term (initial-search-term)',
          ''
        ),
        searchPlaceholder: textNullable(
          'search placeholder (searchPlaceholder)',
          'Search all of IBM'
        ),
        selectedMenuItem: textNullable(
          'selected menu item (selected-menu-item)',
          'Consulting'
        ),
        userStatus: select(
          'The user authenticated status (user-status)',
          userStatuses,
          userStatuses.unauthenticated
        ),
        customProfileLogin:
          C4D_CUSTOM_PROFILE_LOGIN &&
          textNullable(
            'custom profile login url (customProfileLogin)',
            'https://www.example.com/'
          ),
        useMock: boolean('use mock nav data (use-mock)', false),
      }),
    },
    propsSet: {
      default: {
        MastheadComposite: {
          platform: null,
          hasProfile: 'true',
          hasCart: false,
          mockActiveCartId: '',
          cartLabel: '',
          hasSearch: 'true',
          initialSearchTerm: '',
          searchPlaceholder: 'Search all of IBM',
          selectedMenuItem: 'Services & Consulting',
          userStatus: userStatuses.unauthenticated,
          customProfileLogin: 'https://www.example.com/',
          useMockData: false,
        },
      },
    },
  },
};
