const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Procura um filme do DB', () => {
  describe('quando não existe o "id" procurado', async () => {
    const id = '2';

    before(() => {
      const execute = undefined;

      sinon.stub(MoviesModel, 'find').resolves(execute);
    });

    after(() => {
      MoviesModel.find.restore();
    });

    it('retorna um boolean', async () => {
      const response = await MoviesService.find(id);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.find(id);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando existe o filme procurado', async => {
    const id = '1';


    before(() => {
      const execute = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      sinon.stub(MoviesModel, 'find').resolves(execute);
    });

    after(() => {
      MoviesModel.find.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.find(id);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id", "title", "directedBy" e "releaseYear" do filme', async () => {
      const response = await MoviesService.find(id);

      expect(response).to.have.a.property('id');
      expect(response).to.have.a.property('title');
      expect(response).to.have.a.property('directedBy');
      expect(response).to.have.a.property('releaseYear');
    });

  })

})