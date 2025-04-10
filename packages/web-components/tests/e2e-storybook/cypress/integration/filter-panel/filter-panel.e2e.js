/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Sets the correct path.
 *
 * @type {string}
 * @private
 */
const _path = '/iframe.html?id=components-filter-panel--default';

/**
 * Defines the component selector.
 *
 * @type {string}
 * @private
 */
const _selector = '[data-autoid="c4d-filter-panel-composite"]';

/**
 * Defines viewport dimensions.
 */
const _viewportWidths = {
  mobile: [325, 720],
  desktop: [1280, 720],
};

/**
 * Common configuration for `check` command usages.
 */
const _checkOptions = { force: true };

/**
 * Common configuration for `screenshot` command usages.
 */
const _screenshotOptions = { capture: 'viewport' };

describe('c4d-filter-panel | (desktop)', () => {
  beforeEach(() => {
    cy.viewport(..._viewportWidths.desktop);
  });

  it('should check a11y', () => {
    cy.visit(_path);
    cy.injectAxe();
    cy.checkAxeA11y();
  });

  it.skip('checkboxes should maintain state when transitioning to mobile', () => {
    // Check box on desktop
    cy.visit(_path)
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('c4d-filter-panel-checkbox')
      .first()
      .shadow()
      .find('input[type="checkbox"]')
      .check(_checkOptions);
    cy.screenshot(_screenshotOptions);

    // Switch to mobile and open modal
    cy.viewport(..._viewportWidths['mobile'])
      .get(_selector)
      .find('.cds--filter-button')
      .click();
    // Verify box is checked
    cy.get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .find('c4d-filter-panel-checkbox')
      .first()
      .shadow()
      .find('input[type="checkbox"]')
      .should('be.checked');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('select lists should maintain state when transitioning to mobile', () => {
    // Check box on desktop
    cy.visit(_path)
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .eq(1)
      .click()
      .find('c4d-filter-panel-input-select')
      .first()
      .click();
    cy.screenshot(_screenshotOptions);

    // Switch to mobile and open modal
    cy.viewport(..._viewportWidths['mobile'])
      .get(_selector)
      .find('.cds--filter-button')
      .click();
    // Verify box is checked
    cy.get(_selector)
      .find('c4d-filter-group-item')
      .eq(1)
      .find('c4d-filter-panel-input-select')
      .first()
      .should('have.attr', 'selected');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should only add view all button when enough filters are present', () => {
    let filterCount;

    cy.visit(
      `${_path}&knob-Filter%20cutoff=1&knob-Max%20filters=1&knob-Number%20of%20selected%20items=0`
    )
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.length', 1)
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .then((checkboxes) => (filterCount = checkboxes.length));
    cy.visit(
      `${_path}&knob-Max%20filters=${filterCount}&knob-Number%20of%20selected%20items=0`
    )
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.length', 0);
  });

  it.skip('should support custom view all button text', () => {
    let customText = 'Foo button';

    cy.visit(`${_path}&knob-View%20all%20text=${customText}`)
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.text', customText);
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should re-hide excess elements when filter groups are closed and reopened', () => {
    cy.visit(_path)
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .shadow()
      .find('.cds--accordion__heading')
      .as('toggle')
      .click()
      .get('@filterGroupItem')
      .find('.c4d-filter-group-item__view-all')
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .last()
      .as('lastCheckbox')
      .get('@toggle')
      .click()
      .click()
      .get('@lastCheckbox')
      .should('not.be.visible');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should not re-hide elements when an element that would be hidden has been selected', () => {
    cy.visit(_path)
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .shadow()
      .find('.cds--accordion__heading')
      .as('toggle')
      .click()
      .get('@filterGroupItem')
      .find('.c4d-filter-group-item__view-all')
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .last()
      .as('lastCheckbox')
      .shadow()
      .find('input[type="checkbox')
      .check(_checkOptions)
      .get('@toggle')
      .click()
      .click()
      .get('@lastCheckbox')
      .should('be.visible');
    cy.screenshot(_screenshotOptions);
  });
});

describe('c4d-filter-panel | (mobile)', () => {
  beforeEach(() => {
    cy.viewport(..._viewportWidths.mobile);
  });

  it('should check a11y', () => {
    cy.visit(_path);
    cy.injectAxe();
    cy.checkAxeA11y();
  });

  it.skip('checkboxes should maintain state when transitioning to desktop', () => {
    // Check box on mobile
    cy.visit(_path)
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('c4d-filter-panel-checkbox')
      .first()
      .shadow()
      .find('input[type="checkbox"]')
      .check(_checkOptions);
    cy.screenshot(_screenshotOptions);

    // Switch to desktop and verify box is checked
    cy.viewport(..._viewportWidths['desktop'])
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .first()
      .find('c4d-filter-panel-checkbox')
      .first()
      .shadow()
      .find('input[type="checkbox"]')
      .should('be.checked');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('select lists should maintain state when transitioning to desktop', () => {
    // Check box on mobile
    cy.visit(_path)
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .eq(1)
      .click()
      .find('c4d-filter-panel-input-select')
      .first()
      .click();
    cy.screenshot(_screenshotOptions);

    // Switch to desktop and verify box is checked
    cy.viewport(..._viewportWidths['desktop'])
      .get(_selector)
      .shadow()
      .find('c4d-filter-group-item')
      .eq(1)
      .find('c4d-filter-panel-input-select')
      .first()
      .should('have.attr', 'selected');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should only add view all button when enough filters are present', () => {
    let filterCount;

    cy.visit(
      `${_path}&knob-Filter%20cutoff=1&knob-Max%20filters=1&knob-Number%20of%20selected%20items=0`
    )
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.length', 1)
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .then((checkboxes) => (filterCount = checkboxes.length));
    cy.visit(
      `${_path}&knob-Max%20filters=${filterCount}&knob-Number%20of%20selected%20items=0`
    )
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.length', 0);
  });

  it.skip('should support custom view all button text', () => {
    let customText = 'Foo button';

    cy.visit(`${_path}&knob-View%20all%20text=${customText}`)
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .click()
      .find('.c4d-filter-group-item__view-all')
      .should('have.text', customText);
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should re-hide excess elements when filter groups are closed and reopened', () => {
    cy.visit(_path)
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .shadow()
      .find('.cds--accordion__heading')
      .as('toggle')
      .click()
      .get('@filterGroupItem')
      .find('.c4d-filter-group-item__view-all')
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .last()
      .as('lastCheckbox')
      .get('@toggle')
      .click()
      .click()
      .get('@lastCheckbox')
      .should('not.be.visible');
    cy.screenshot(_screenshotOptions);
  });

  it.skip('should not re-hide elements when an element that would be hidden has been selected', () => {
    cy.visit(_path)
      .get(_selector)
      .find('.cds--filter-button')
      .click()
      .get(_selector)
      .find('c4d-filter-group-item')
      .first()
      .as('filterGroupItem')
      .shadow()
      .find('.cds--accordion__heading')
      .as('toggle')
      .click()
      .get('@filterGroupItem')
      .find('.c4d-filter-group-item__view-all')
      .click()
      .get('@filterGroupItem')
      .find('c4d-filter-panel-checkbox')
      .last()
      .as('lastCheckbox')
      .shadow()
      .find('input[type="checkbox"]')
      .check(_checkOptions)
      .get('@toggle')
      .click()
      .click()
      .get('@lastCheckbox')
      .should('be.visible');
    cy.screenshot(_screenshotOptions);
  });
});
