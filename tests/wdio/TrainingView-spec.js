/* global Terra */
/* global browser */


Terra.viewports('tiny', 'small', 'large').forEach((viewport) => {
  describe('No Data available', () => {
    beforeEach(() => {
      browser.setViewportSize(viewport);
      browser.url('/#/tests/TrainingView-NoData');
    });
    Terra.should.matchScreenshot();
  });

  describe('Loading data failed', () => {
    beforeEach(() => {
      browser.setViewportSize(viewport);
      browser.url('/#/tests/TrainingView-LoadingError');
    });
    Terra.should.matchScreenshot();
  });
});
