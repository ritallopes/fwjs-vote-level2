import React, { useState } from "react";
import { minTamValidacao, campoRequeridoValidacao } from "./validacao";

const validacao = {
  pergunta: value => minTamValidacao(5, value),
  primeiraOpcao: campoRequeridoValidacao,
  segundaOpcao: campoRequeridoValidacao
};

export default function VotacaoForm(props) {
  const [votacao, setVotacao] = useState({
    pergunta: props.votacao.pergunta || "",
    primeiraOpcao: props.votacao.opcoes[0] || "",
    segundaOpcao: props.votacao.opcoes[1] || "",
    terceiraOpcao: props.votacao.opcoes[2] || "",
    quartaOpcao: props.votacao.opcoes[3] || ""
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
    const v = votacao;
    // percorre a questão validando todos os itens
    const validation = Object.keys(v).reduce((acc, key) => {
      const error = validacao[key] && validacao[key](v[key]);
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
    const touchedAll = touchedValues.length === Object.values(v).length;
    const allTrue = touchedValues.every(t => t === true);

    // se isso ocorrer, então pode atualizaros dados
    if (errorsIsEmpty && touchedAll && allTrue) {
      // transforma em aray novamente antes de enviar
      const opcoes = [
        v.primeiraOpcao,
        v.segundaOpcao,
        v.terceiraOpcao,
        v.quartaOpcao
      ].filter(o => o.trim() !== "");

      props.onUpdate({
        pergunta: v.pergunta,
        opcoes
      });
    }
  }
  
  function onCancel(e) {
    props.onCancel();
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
      <h2>Edita questão</h2>
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
      <button onClick={onCancel}>Cancelar</button>
    </form>
  );
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
  type, // input (detfault) ou textarea
  label, // label (opcional)
  name, // identificador
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
