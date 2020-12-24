describe("NHIL End To End Test", () => {
  it("Verify Launch", () => {
    cy.visit(
      "https://wsibb2cppd.b2clogin.com/wsibb2cppd.onmicrosoft.com/b2c_1a_nihl_start_submission/oauth2/v2.0/authorize?client_id=2f2e2477-5e0c-4e8d-9548-5857f7c0bc4d&redirect_uri=https%3A%2F%2Fppd.hearing-loss-claim.wsib.ca%2Fauth-callback&response_type=code&scope=openid%20offline_access%20https%3A%2F%2Fwsibb2cppd.onmicrosoft.com%2Fnihlapi%2Fapiaccess&state=61c519411b144438ad741dfec62c1cba&code_challenge=TxHHkH4ZVAj8hoWEpmiL03eJzA8V3bZa5wAkx39YsF0&code_challenge_method=S256&ui_locales=en&response_mode=query"
    );
    cy.get("#btnNewClaim").click();
    cy.get("#gradual").click();
    cy.get("#email").type("test01@gmail.com");
    cy.get("#dob_day").select("27");
    cy.get("#dob_month").select("8");
    cy.get("#dob_year").select("1990");
    cy.get("#continue").click();
    //  cy.visit(
    //"https://ppd.hearing-loss-claim.wsib.ca/induced-hearing-loss-form"
    // );
    //  #dob_year

    /**
     * {"apiUrl":"https://ppd.hearing-loss-claim.wsib.ca",
     * "authorityUrlStart":"https://wsibb2cppd.b2clogin.com/wsibb2cppd.onmicrosoft.com/B2C_1A_NIHL_start_submission/v2.0",
     * "authorityUrlContinue":"https://wsibb2cppd.b2clogin.com/wsibb2cppd.onmicrosoft.com/B2C_1A_NIHL_continue_submission/v2.0",
     * "client_id":"2f2e2477-5e0c-4e8d-9548-5857f7c0bc4d",
     * "redirect_uri":"https://ppd.hearing-loss-claim.wsib.ca/auth-callback",
     * "redirect_resume_uri":"https://ppd.hearing-loss-claim.wsib.ca/auth-resume-callback",
     * "post_logout_uri":"https://ppd.hearing-loss-claim.wsib.ca/en/nihl/logout",
     * "scope":"openid offline_access https://wsibb2cppd.onmicrosoft.com/nihlapi/apiaccess",
     * "timeOut":"14"}
     *
     * https://ppd.hearing-loss-claim.wsib.ca/nihl/api/claim
     *
     * {"claimId":2072,"email":"test7@gmail.com","referenceNumber":"DPFUFOV6",
     * "creationDate":"2020-12-20T20:32:12.2","submitionDate":null,"status":"PENDING",
     * "emailWithConsent":"test7@gmail.com","consentGivenBy":null,
     * "dateOfBirth":"1993-06-17","communicationLanguage":"EN"}
     *
     * https://wsibb2cppd.b2clogin.com/wsibb2cppd.onmicrosoft.com/b2c_1a_nihl_start_submission/oauth2/v2.0/token
     *
     */
  });
});
