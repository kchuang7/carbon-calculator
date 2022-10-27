describe('input usage values and display emissions calculations', (): void => {
  it('loads app', (): void => {
    cy.visit('localhost')
    cy.get('[data-cy="total-emissions"]').should('have.text', '0')
    cy.get('[data-cy="total-emissions-label"]').should('have.text', 'Total Emissions (kg CO2e/year)')
  })

  it('toggles theme', (): void => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="theme-toggle-button"]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
  })

  it('inputs housing usage values and displays emissions calculations', (): void => {
    // electricity
    cy.get('[data-cy="electricity-input"]').type('750')
    cy.get('[data-cy="total-emissions"]').should('have.text', '2026.5')
    // natural gas
    cy.get('[data-cy="naturalGas-input"]').type('14')
    cy.get('[data-cy="total-emissions"]').should('have.text', '3135.3')
    // fuel oil
    cy.get('[data-cy="fuelOil-input"]').type('2')
    cy.get('[data-cy="total-emissions"]').should('have.text', '3413.7')
    // propane
    cy.get('[data-cy="lfg-input"]').type('5')
    cy.get('[data-cy="total-emissions"]').should('have.text', '3821.7')
    // waste
    cy.get('[data-cy="waste-input"]').type('4')
    cy.get('[data-cy="total-emissions"]').should('have.text', '5077.1')
    // water
    cy.get('[data-cy="water-input"]').type('12345')
    cy.get('[data-cy="total-emissions"]').should('have.text', '5273')
    // clear and repopulate input
    cy.get('[data-cy="electricity-input"]').clear()
    cy.get('[data-cy="total-emissions"]').should('have.text', '3246.5')
    cy.get('[data-cy="electricity-input"]').type('750')
  })

  it('inputs travel usage values and displays emissions calculations', (): void => {
    // switch to travel category
    cy.get('[data-cy="travel-tab"]').click()
    // vehicle
    cy.get('[data-cy="vehicle-input"]').type('5001')
    cy.get('[data-cy="total-emissions"]').should('have.text', '6948.4')
    // bus
    cy.get('[data-cy="bus-input"]').type('453')
    cy.get('[data-cy="total-emissions"]').should('have.text', '6972.4')
    // metro
    cy.get('[data-cy="metro-input"]').type('1234')
    cy.get('[data-cy="total-emissions"]').should('have.text', '7094.5')
    // taxi
    cy.get('[data-cy="taxi-input"]').type('61')
    cy.get('[data-cy="total-emissions"]').should('have.text', '7115')
    // commuter rail
    cy.get('[data-cy="rail-input"]').type('600')
    cy.get('[data-cy="total-emissions"]').should('have.text', '7203.8')
    // flying
    cy.get('[data-cy="flying-input"]').type('8634.51')
    cy.get('[data-cy="total-emissions"]').should('have.text', '8706.2')
  })

  it('toggles offset behaviors and observes decrease in emissions', (): void => {
    // switch to housing category
    cy.get('[data-cy="housing-tab"]').click()
    // toggle led lighting
    cy.get('[data-cy="led-lighting-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '8314.4')
    cy.get('[data-cy="led-lighting-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '8706.2')
    // toggle compost
    cy.get('[data-cy="compost-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '7923.5')
    cy.get('[data-cy="compost-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '8706.2')
    // combine checkboxes
    cy.get('[data-cy="led-lighting-checkbox"]').click()
    cy.get('[data-cy="compost-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '7531.7')
    cy.get('[data-cy="compost-checkbox"]').click()
    cy.get('[data-cy="led-lighting-checkbox"]').click()
    cy.get('[data-cy="total-emissions"]').should('have.text', '8706.2')
  })
})

export {}
