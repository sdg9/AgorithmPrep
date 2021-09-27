import { getArtisticPhotographCount } from '../02-DirectorOfPhotography';
describe('02-Photography', () => {
  it('should work as intended case 1', () => {
    expect(getArtisticPhotographCount(5, 'APABA', 1, 2)).toBe(1);
  });
  it('should work as intended case 2', () => {
    expect(getArtisticPhotographCount(5, 'APABA', 2, 3)).toBe(0);
  });
  it('should work as intended case 3', () => {
    expect(getArtisticPhotographCount(8, '.PBAAP.B', 1, 3)).toBe(3);
  });
});
