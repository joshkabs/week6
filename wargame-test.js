var expect = chai.expect;

describe('startNewGame', () => {
    it('each time startNewgame is press it start a new session of shuffled deck', () => {
      const game = startNewGame();
      expect(game).to.exist;
      expect(game).to.be.an.instanceOf(Deck);
    });
  });