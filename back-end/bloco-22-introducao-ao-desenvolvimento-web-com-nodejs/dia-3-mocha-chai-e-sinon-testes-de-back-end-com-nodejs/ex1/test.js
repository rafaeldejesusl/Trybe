const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const { numberCheck, fileCreator } = require('./index');

describe('exercicio 1', () => {
  describe('Verifica se o número', () => {
    describe('tem como retorno', () => {
      it('uma string', () => {
        const resposta = numberCheck(7);
  
        expect(resposta).to.be.a('string');
      })
      it('e é positivo', () => {
        const resposta = numberCheck(7);
    
        expect(resposta).to.be.equal('positivo');
      });
    });
  
    describe('tem como retorno', () => {
      it('uma string', () => {
        const resposta = numberCheck(7);
  
        expect(resposta).to.be.a('string');
      })
      it('e é negativo', () => {
        const resposta = numberCheck(-3);
    
        expect(resposta).to.be.equal('negativo');
      });
    });
  
    describe('tem como retorno', () => {
      it('uma string', () => {
        const resposta = numberCheck(7);
  
        expect(resposta).to.be.a('string');
      })
      it('e é neutro', () => {
        const resposta = numberCheck(0);
    
        expect(resposta).to.be.equal('neutro');
      });
    });
  });
  
  describe('Verifica o retorno', () => {
    it('quando parâmetro não é um número', () => {
      const resposta = numberCheck('batatinha');
  
      expect(resposta).to.be.equal('o valor deve ser um número');
    });
  });
});

describe('exercicio 2', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Verifica se a função retorna', () => {
    it('uma string', () => {
      const resposta = fileCreator('ex1.txt', 'batatinha');

      expect(resposta).to.be.a('string');
    });

    it('igual a ok', () => {
      const resposta = fileCreator('ex1.txt', 'batatinha');

      expect(resposta).to.be.equal('ok');
    });
  });
});