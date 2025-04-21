Feature: Website Access

  As a user,
  I want to access the website,
  So that I can explore its content.

  Scenario: Successful website access

    Given the user opens the browser
    When the user navigates to the homepage "https://iniciativas.netcomplusve.com/"
    Then the user should see the page title as "Bienvenido Asesor de Venta de NetcomPlus"
    And the user should see the "Ingresar al sistema" button
    And the user should see the "Borrador" button