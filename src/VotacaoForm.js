import React, { useState } from "react";
import { minTamValidacao, campoRequeridoValidacao } from "./validacao";
import PropTypes from 'prop-types';


const validacao = {
  pergunta: value => minTamValidacao(5, value),
  primeiraOpcao: campoRequeridoValidacao,
  segundaOpcao: campoRequeridoValidacao
};

export default function VotacaoForm({vote, onUpdate, onCancel}) {
  const [votacao, setVotacao] = useState({
    pergunta: vote.pergunta? (vote.pergunta || ""):null,
    primeiraOpcao: vote.opcoes[0]?(vote.opcoes[0].opcao || ""):null,
    segundaOpcao: vote.opcoes[1]?(vote.opcoes[1].opcao  || ""):null,
    terceiraOpcao: vote.opcoes[2]?(vote.opcoes[2].opcao  || ""):null,
    quartaOpcao: vote.opcoes[3]?(vote.opcoes[3].opcao  || ""):null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function onChange(e) {
    const { name, value } = e.target;
    setVotacao({ ...votacao, [name]: value });
    setTouched({ ...touched, [name]: true });
  }

  function onBlur(e) {
    const { name, value } = e.target;


    const { [name]: removedError, ...rest } = errors;
    const error = validacao[name] ? validacao[name](value) : null;
    const nameError = touched[name] ? error : null;

    setErrors({ ...rest, [name]: nameError });
  }

  function onSubmit(e) {
    e.preventDefault();
    const v_local = votacao;
    // percorre a questão validando todos os itens
    const validation = Object.keys(v_local).reduce((acc, key) => {
      const error = validacao[key] && validacao[key](v_local[key]);
      return {
        errors: {
          ...acc.errors,
          ...(error && { [key]: error })
        },
        touched: {
          ...acc.touched,
          ...{ [key]: true }
        }
      };
    }, {});

    setTouched(validation.touched);
    setErrors(validation.errors);

    const errorValues = Object.values(validation.errors);
    const touchedValues = Object.values(validation.touched);
    const errorsIsEmpty = errorValues.length === 0;
    const touchedAll = touchedValues.length === Object.values(v_local).length;
    const allTrue = touchedValues.every(t => t === true);

    // se isso ocorrer, então pode atualizaros dados
    if (errorsIsEmpty && touchedAll && allTrue) {
      // transforma em aray novamente antes de enviar
      const opcoes = [
        {opcao: v_local.primeiraOpcao, quantidade: vote.opcoes[0]?(vote.opcoes[0].quantidade || 0):0},
        {opcao: v_local.segundaOpcao, quantidade: vote.opcoes[1]?(vote.opcoes[1].quantidade  || 0):0},
        {opcao: v_local.terceiraOpcao, quantidade:vote.opcoes[2]?(vote.opcoes[2].quantidade  || 0):0},
        {opcao: v_local.quartaOpcao,  quantidade:vote.opcoes[3]?(vote.opcoes[3].quantidade  || 0):0}
      ].filter(o => o.opcao? o.opcao.trim() !== "":null);

      onUpdate({
        pergunta: v_local.pergunta,
        opcoes
      });
    }
  }
  
  function onCancel(e) {
    onCancel();
  }

  const commonProps = {
    values: votacao,
    errors: errors,
    touched: touched,
    onChange: onChange,
    onBlur: onBlur
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Editar Votação</h2>
      <Input
        type="textarea"
        label="Pergunta"
        name="pergunta"
        placeholder="Digite aqui a sua pergunta"
        isRequired={true}
        {...commonProps}
      />
      <Input
        label="Opção 1"
        name="primeiraOpcao"
        placeholder="Digite a 1ª opção"
        isRequired={true}
        {...commonProps}
      />
      <Input
        label="Opção 2"
        name="segundaOpcao"
        placeholder="Digite a 2ª opção"
        isRequired={true}
        {...commonProps}
      />
      <Input
        label="Opção 3"
        name="terceiraOpcao"
        placeholder="Digite a 3ª opção"
        {...commonProps}
      />
      <Input
        label="Opção 4"
        name="quartaOpcao"
        placeholder="Digite a 4ª opção"
        {...commonProps}
      />
      <input type="submit" value="Atualizar" />
      <button onClick={onCancel}>Sair</button>
    </form>
  );
}

VotacaoForm.propTypes = {
  vote: PropTypes.any,
  onUpdate: PropTypes.func,
  onCancel: PropTypes.func
}




function Label({ label, isRequired }) {
  return (
    <label className="label">
      {label}
      {isRequired && <span style={{ color: 'red' }}>*</span>}
    </label>
  )
}

function Error({ touched, error }) {
  return (
    <div>
      <div className="error">{touched && error}</div>
    </div>
  )
}

export function Input({
  type, 
  label, 
  name, 
  placeholder,
  values,
  onChange,
  onBlur,
  isRequired,
  touched,
  errors
}) {
  const commonProps = {
    name,
    value: values[name],
    placeholder,
    onChange,
    onBlur,
    className: errors[name] ? 'input-error' : ''
  }
  return (
    <div className="form-item">
      <Label label={label} isRequired={isRequired} />
      <div>
        {
          {
            input: <input type="text" {...commonProps} />,
            textarea: <textarea rows="4" {...commonProps} />
          }[type || 'input']
        }
        <Error touched={touched[name]} error={errors[name]} />
      </div>
    </div>
  )
}
