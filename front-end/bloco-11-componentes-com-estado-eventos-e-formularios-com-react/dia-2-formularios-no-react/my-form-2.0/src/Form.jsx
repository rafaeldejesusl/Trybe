import React, { Component } from 'react'
import Cargo from './Cargo';
import Cidade from './Cidade';
import Cpf from './Cpf';
import Descricao from './Descricao';
import Email from './Email';
import Endereco from './Endereco';
import Estado from './Estado';
import Nome from './Nome'
import Resumo from './Resumo';
import Tipo from './Tipo';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      divArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.cityCheck = this.cityCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  handleName(event) {
    let { value } = event.target;
    value = value.toUpperCase();

    this.setState({
      nome: value,
    });
  }

  handleAddress(event) {
    let { value } = event.target;
    value = value.replace(/[^a-zA-Z0-9 ]/g, "");

    this.setState({
      endereco: value,
    });
  }

  cityCheck() {
    if (this.state.cidade.match(/^\d/)) this.setState({
      cidade: ""
    })
  }

  handleClick(e) {
    e.preventDefault();
    let array = Object.entries(this.state)
    array.pop();
    this.setState({
      divArray: array
    })
  }

  handleReset() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      divArray: []
    })
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <Nome value={ this.state.nome } handleName={ this.handleName } />
            <br />
            <Email value={ this.state.email } handleChange={ this.handleChange } />
            <br />
            <Cpf value={ this.state.cpf } handleChange={ this.handleChange } />
            <br />
            <Endereco value={ this.state.endereco } handleAddress={ this.handleAddress } />
            <br />
            <Cidade value={ this.state.cidade } handleChange={ this.handleChange } cityCheck={this.cityCheck} />
            <br />
            <Estado value={ this.state.estado } handleChange={ this.handleChange } />
            <br />
            <Tipo handleChange= {this.handleChange}/>
          </fieldset> 
          <fieldset>
            <legend>Dados do seu último emprego</legend>
            <Resumo value={ this.state.resumo } handleChange={ this.handleChange } />
            <br />
            <Cargo value={ this.state.cargo } handleChange={ this.handleChange } />
            <br />
            <Descricao value={ this.state.descricao } handleChange={ this.handleChange } />
          </fieldset>
          <button type='submit' onClick={this.handleClick}>Enviar</button>
          <button type='reset' onClick={this.handleReset}>Limpar</button>
        </form>
        <div>
          {this.state.divArray.map(element => <p key={element[0]}>{`${element[0]}: ${element[1]}`}</p>)}
        </div>
      </>
    )
  }
}

export default Form
