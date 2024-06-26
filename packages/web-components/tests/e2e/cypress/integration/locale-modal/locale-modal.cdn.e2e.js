/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('cds-locale-modal (cdn)', () => {
  it('should load the default cds-locale-modal example', () => {
    cy.visit('/locale-modal/cdn.html');

    cy.get('[data-autoid="cds--button-expressive"]').click();

    // Take a snapshot for visual diffing
    cy.percySnapshot('cds-locale-modal | cdn | default');
  });
});
