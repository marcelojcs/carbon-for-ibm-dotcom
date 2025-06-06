/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../../card/index';
import '../../image/image';
import '../index';
import '../../cta/card-cta-footer';
import '../../cta/video-cta-container';
import '../../carousel/carousel';
import '../../video-player/video-player-container';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { boolean, select, text } from '@storybook/addon-knobs';
import ArrowRight20 from '@carbon/web-components/es/icons/arrow--right/20.js';

import imgXlg16x9 from '../../../../.storybook/storybook-images/assets/1312/fpo--16x9--1312x738--005.jpg';
import imgMd16x9 from '../../../../.storybook/storybook-images/assets/960/fpo--16x9--960x540--005.jpg';
import imgSm4x3 from '../../../../.storybook/storybook-images/assets/480/fpo--4x3--480x360--005.jpg';

import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';
import { BUTTON_POSITION } from '../../video-player/defs';
import { enumValsToArray } from '../../../globals/internal/enum-helpers';

export const Default = (args) => {
  const { video, eyebrow, heading, defaultSrc, alt, href } =
    args?.['c4d-card-in-card'] ?? {};
  if (video) {
    const card = document.querySelector('c4d-card') as any;
    const videoCopy = card?.videoTitle;

    return html`
      <c4d-video-cta-container>
        <c4d-card-in-card href="0_ibuqxqbe" cta-type="video">
          <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow>
          <c4d-card-heading>${videoCopy ?? heading}</c4d-card-heading>
          <c4d-card-footer></c4d-card-footer>
        </c4d-card-in-card>
      </c4d-video-cta-container>
    `;
  }
  return html`
    <c4d-card-in-card href=${ifDefined(href || undefined)} cta-type="local">
      <c4d-card-in-card-image
        slot="image"
        alt="${ifDefined(alt)}"
        default-src="${ifDefined(defaultSrc)}">
        <c4d-image-item media="(min-width: 1312px)" srcset="${imgXlg16x9}">
        </c4d-image-item>
        <c4d-image-item media="(min-width: 672px)" srcset="${imgMd16x9}">
        </c4d-image-item>
        <c4d-image-item media="(min-width: 320px)" srcset="${imgSm4x3}">
        </c4d-image-item>
      </c4d-card-in-card-image>
      <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow>
      <c4d-card-heading>${heading}</c4d-card-heading>
      <c4d-card-footer></c4d-card-footer>
    </c4d-card-in-card>
  `;
};

Default.story = {
  parameters: {
    knobs: {
      'c4d-card-in-card': () => {
        const video = boolean('video', false);
        const alt = video
          ? undefined
          : textNullable('Image alt text (alt):', 'Image alt text');
        const defaultSrc = video
          ? undefined
          : textNullable('Image src (defaultSrc):', imgSm4x3);
        const heading = video
          ? undefined
          : textNullable(
              'Card Heading (heading):',
              'Standard Bank Group prepares to embrace Africa’s AI opportunity'
            );
        const href = video
          ? undefined
          : textNullable('Card Href (href):', 'https://example.com');
        return {
          video,
          alt,
          defaultSrc,
          heading,
          href,
          eyebrow: textNullable('Card Eyebrow (eyebrow):', 'Label'),
        };
      },
    },
  },
};

export const WithCarouselVideo = (args) => {
  const { videoId, thumbnail, buttonPosition } =
    args?.['WithCarouselVideo'] ?? {};

  return html`
    <c4d-carousel page-size="1">
      <c4d-card-in-card href="https://ibm.com">
        <c4d-card-eyebrow>Experience // Case Study</c4d-card-eyebrow>
        <c4d-card-heading
          >Putting innovation in the driver's seat</c4d-card-heading
        >
        <c4d-card-cta-footer
          >Link ${ArrowRight20({ slot: 'icon' })}</c4d-card-cta-footer
        >
        <c4d-video-player-container
          slot="image"
          aspect-ratio="16x9"
          playing-mode="inline"
          video-id="${videoId}"
          hide-caption
          thumbnail="${thumbnail}"
          intersection-mode
          button-position="${buttonPosition}"></c4d-video-player-container>
      </c4d-card-in-card>

      <c4d-card-in-card href="https://ibm.com">
        <c4d-card-eyebrow>Experience // Case Study</c4d-card-eyebrow>
        <c4d-card-heading
          >Putting innovation in the driver's seat</c4d-card-heading
        >
        <c4d-card-cta-footer
          >Link ${ArrowRight20({ slot: 'icon' })}</c4d-card-cta-footer
        >
        <c4d-video-player-container
          slot="image"
          aspect-ratio="16x9"
          playing-mode="inline"
          video-id="${videoId}"
          hide-caption
          thumbnail="${thumbnail}"
          intersection-mode
          button-position="${buttonPosition}"></c4d-video-player-container>
      </c4d-card-in-card>
    </c4d-carousel>
  `;
};

WithCarouselVideo.story = {
  name: 'With carousel video',
  parameters: {
    knobs: {
      WithCarouselVideo: () => {
        return {
          video: null,
          videoId: text('Video id (videoId):', '0_ibuqxqbe'),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          buttonPosition: select(
            'Button position (buttonPosition)',
            enumValsToArray(BUTTON_POSITION),
            BUTTON_POSITION.BOTTOM_LEFT
          ),
        };
      },
    },
  },
};

export default {
  title: 'Components/Card in card',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-12 cds--no-gutter">${story()}</div>
        </div>
      </div>
    `,
  ],
  parameters: {
    percy: {
      skip: true,
    },
    ...readme.parameters,
    hasStoryPadding: true,
    propsSet: {
      default: {
        'c4d-card-in-card': {
          video: false,
          alt: 'Image alt text',
          defaultSrc: imgSm4x3,
          heading:
            'Standard Bank Group prepares to embrace Africa’s AI opportunity',
          href: 'https://example.com',
          eyebrow: 'Label',
        },
      },
    },
  },
};
