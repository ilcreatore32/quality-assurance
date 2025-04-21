Feature: Login

  As a user,
  I want to log in to the system after clicking "Ingresar al sistema",
  So that I can access the main functionalities of the application.

  Scenario: Navigate to Login Page

    Given the user is on the homepage "https://iniciativas.netcomplusve.com/"
    When the user clicks the "Ingresar al sistema" button
    Then the user should be navigated to the login page

  Scenario: Successful Login

    Given the user is on the login page
    When the user fills in the "Usuario" field with "valid_user"
    And the user fills in the "Contraseña" field with "valid_password"
    And if no error is present on the login form
    And the user clicks the "Ingresar" button
    Then a welcome modal should appear after a brief loading period

  Scenario: Close Welcome Modal

    Given a welcome modal is displayed
    When the user clicks the "Continuar" button on the welcome modal
    Then the welcome modal should be closed

  Scenario: Verify Main Menu Visibility

    Given the welcome modal is closed
    Then the user should be navigated to the main menu view
    And the main menu view should contain a least one of these buttons:
    [
      'Prospectos',
      'Iniciativas',
      'Opotunidades',
      'Verticalizaciones',
      'Guardados',
      'Salir',
    ]

  Scenario: Exit the Application

    Given the user is on the main menu view
    When the user clicks the "Salir" button
    Then the user should be redirected to the homepage "https://iniciativas.netcomplusve.com/"