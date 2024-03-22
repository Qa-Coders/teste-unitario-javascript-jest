import multiplos from './multiplos';

describe('Multiplos', () => {
    
    it('Validar numeros inteiro', () => {
        expect(multiplos.processInterger(2)).toBe(2);
    });
    
    it('Validar numeros inteiro', () => {
        expect(multiplos.processInterger(3)).toBe('MultiplosTres');
    });

    it('Validar numeros inteiro', () => {
        expect(multiplos.processInterger(5)).toBe('MultiplosCinco');
    });
    
    it('Validar numeros inteiro', () => {
        expect(multiplos.processInterger(15)).toBe('MultiplosTresMultiplosCinco');
    });
});