Feature: Create and Download Draft

  As a user,
  I want to access the draft form, fill it out, save, and download the resulting file,
  So that I can create and store drafts of my work.

  Scenario: Access the draft form

    Given the user is on the homepage "https://iniciativas.netcomplusve.com/"
    When the user clicks the "Borrador" button
    Then the user should see the draft form

  Scenario: Fill out the draft form

    Given the user is on the draft form
    When the user fill out the draft form
    And if any error message is visible on the form
    Then the user can click the "Guardar" button

  Scenario: Download the draft file

    Given the form is filled and the "Guardar" button is clickable
    When the user clicks the "Guardar" button
    Then a file should be downloaded with the form value